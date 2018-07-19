/**
 * Created by Esleider Tafur on 7/07/17.
 */

(function (angular)
{
    'use strict';

    angular
        .module('angularKHTest.articulos', ['angularKHTest.total'])
        .controller("dataController",['service','$scope','$http','$location',controller])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {

        $stateProvider.state('app.articulos', {
            url    : '/articulos',
            views  : {
                'content@app': {
                    templateUrl: 'components/Articulos/articulos.html'
                }
            }
        });

    }

    function controller(service,$scope,$http,$location)
    {
      var dataViewModel=this;
      dataViewModel.articulos=[];


        //FUNCIONES DEL MODULO ARTICULO
        dataViewModel.functions={

          //DETERMINA SI EL VALOR PRESELECCIONADO ES CORRECTO PARA MOSTRAR EL BOTON DE GUARDAR O NO
          inputChange:function(cambios,stock,value){
                if (stock-value<0 || value==0 || value==null) return false;
                else return true;
            },

          //LEE DEL ARCHIVO JSON LOS ARTICULOS
          getArticulos: function(){
            $http.get('../articulos.data.json')
              .success(function(data){
                dataViewModel.articulos=data;
              });
          },


          //BUSCA Y RESTA AL STOCK LA CANTIDAD DE ARTICULOS SELECCIONADOS
          seleccionar: function(nombre,cantidad){
            for (var i in dataViewModel.articulos) {
              if (dataViewModel.articulos[i].nombre==nombre) {
                dataViewModel.articulos[i].stock=dataViewModel.articulos[i].stock-cantidad;
                var articuloSeleccionado={'nombre':dataViewModel.articulos[i].nombre,
                                          'precio':dataViewModel.articulos[i].precio,
                                          'cantidadSeleccion':cantidad};
                service.functions.agregarSeleccion(articuloSeleccionado);
                
                service.articulosRestantes=dataViewModel.articulos;
                break;
              }
            }
          }


        }

        if (service.totalSeleccionado.length==0) {
          dataViewModel.functions.getArticulos();
        }else{
          dataViewModel.articulos=service.articulosRestantes;
        }



        //FUNCION QUE MUESTRA EL VALOR CON DOS DECIMALES.
        $scope.parseFloat=function(valor){ return parseFloat(valor).toFixed(2);};
        $scope.irTotal=function(){$location.path('/total');}
    }

})(window.angular);
