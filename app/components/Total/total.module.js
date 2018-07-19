(function (angular)
{
    'use strict';

    angular
        .module('angularKHTest.total', [])
        .service("service",service)
        .controller("totalController",['$location','$scope','service',controller])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {

        $stateProvider.state('app.total', {
            url    : '/total',
            views  : {
                'content@app': {
                    templateUrl: 'components/Total/total.html'
                }
            }
        });

    }

    //SERVICIO USADO PARA ENVIAR LOS VALORES DEL MODULO ARTICULOS A EL MODULO TOTAL.
    function service()
    {
      var servicioTotalSeleccion=this;
      servicioTotalSeleccion.articulosRestantes=[];
      //TOTAL SELECCIONADO GUARDA EL TOTAL DE ARTICULOS SELECCIONADOS, AGRUPADOS POR NOMBRE
      servicioTotalSeleccion.totalSeleccionado=[]

      servicioTotalSeleccion.functions={
        //AGREGA UN ARTICULO A TOTALSELECCIONADO SI EL NOMBRE NO EXISTE EN LA LISTA.
        //EN CASO DE QUE YA SE HAYA SELECCIONADO ESE ARTICULO, SE SUMARA LOS ANTES SELECCIONADOS CON LOS ULTIMOS SELECCIONADOS
          agregarSeleccion:function(articulo)
          {
            var agregadoAseleccion=false;
            for (var i in servicioTotalSeleccion.totalSeleccionado)
            {
              if (servicioTotalSeleccion.totalSeleccionado[i].nombre==articulo.nombre)
              {
                //SUMA DE ARTICULOS CON EL MISMO NOMBRE ANTES SELECCIONADOS, CON EL ENVIADO EN PARAMETRO
                  servicioTotalSeleccion.totalSeleccionado[i].cantidadSeleccion=servicioTotalSeleccion.totalSeleccionado[i].cantidadSeleccion+articulo.cantidadSeleccion;
                  agregadoAseleccion=true;

                  break;
            }
          }


          //SI NO SE HA SELECCIONADO UN ARTICULO COMO  EL ACTUAL, SE INSERTA EN LA LISTA
          if (!agregadoAseleccion)servicioTotalSeleccion.totalSeleccionado.push(articulo);

        },
        //METODO QUE RETORNA LA LISTA DE ARTICULOS SELECCIONADOS
        verTotalSeleccionado: function(){return servicioTotalSeleccion.totalSeleccionado;}
      }

      return servicioTotalSeleccion;

    }

    function controller($location,$scope,service){
      var totalSeleccionadoViewModel=this;
      totalSeleccionadoViewModel.seleccion=[];
      //SELECCION CONTIENE LA LISTA DE ARTICULOS SELECCIONADOS, ES TRAIDA DEL SERVICIO.
      totalSeleccionadoViewModel.seleccion=service.totalSeleccionado;

      //METODO PARA MOSTRAR EL NUMERO CON DOS DECIMALES.
      $scope.parseFloat=function(valor){ return parseFloat(valor).toFixed(2);};
      $scope.irArticulos=function(){$location.path('/articulos');};

    }

})(window.angular);
