# `angular-know-how-test` — Prueba básica para medir conocimiento en AngularJS

Este proyecto es una estructura simple para el desarrollo de una WebApp [AngularJS][angularjs]. No hace demasiado.

## 1. Prepara el entorno

### Prerequisitos

Necesitas clonar este repositorio [aquí][git].  O puedes descargarlo como .zip

Tambien se usan algunas herramientas de Node.js para el funcionamiento de `angular-know-how-test`. Debes revisar que se encuentre instalado Node.js 
y su manejador de paquetes `npm`. Puedes decargarlo de [aquí][node].

### Clona `angular-know-how-test`

Clona el repositorio `angular-know-how-test` usando git:

```
git clone https://github.com/Satafur/angular-know-how-test.git
cd angular-know-how-test
```

### Instala Dependencias

Hay dos tipos de dependencias: herramientas y framework angular.

* Instala las herramientas via `npm`, el [Manejador de Paquetes de Node][npm].
* Descargar el codigo de angular via `bower`, un [Manejador de Paquetes del Lado Cliente][bower].

Pon en marcha `npm` y posteriormente `bower`: Despues de esto quedarán dos carpetas en la carpeta del proyecto.

* `node_modules` - contiene los paquetes npm.
* `app/bower_components` - contiene los archivos para el manejo de angular y otras librerías.

### Corre la aplicación

Se ha preconfigurado una tarea en npm para iniciar el proyecto.

```
npm start
```

Ahora puede direccionar a [`localhost:8000/index.html`][local-app-url].


## Directorio de aplicación

```
app/                    --> Todos los recursos para la app
  app.css               --> Default stylesheet
  components/           --> Todos los modulos para la app
  components/welcome    --> Vista principal de bienvenida
  app.js                --> modulo principal de la app
  app.route.js          --> configuracion de las rutas, aquí esta la ruta principal
  articulos.data.json   --> json con array de articulos a usar en la prueba
  index.html            --> template principal de la app
```


## 2. Instalar Framework CSS

Instale alguno de los framworks CSS para desarrollo de aplicaciones web.  Puedes hacerlo
con la ayuda de `bower`.


###### NOTA: aplica alguna clase o etiqueta al modulo welcome para verificar la instalación.


## 3. Consumir datos
Modifique el modulo `welcome` como considere necesario para extraer los datos almacenados
en el archivo `app/articulos.data.json` 


## 4. Visualizar datos
Modifique el nombre del modulo `welcome` por `articulos`.

En el modulo `articulos` cree una vista que muestre ordenadamente los datos extraidos del archivo `app/articulos.data.json`.

Mostrar cada una de sus propiedades.

Se quiere que el precio aparezca con dos decimales.

Los articulos con `stock = 0` se deben visualizar pero estará deshabilitado.


## 5. Interactuar con los datos
Se requiere seleccionar alguna cantidad de un artículo que se encuentre disponible, es decir, con `stock != 0`.

Dicha cantidad debe restarse al `stock` del artículo seleccionado.

## 6. Resultado
Crear un modulo llamdo `total` en otro directorio dentro de `app/components`.

Aplique lo necesario para que el modulo despliegue dentro de la aplicación. Verifique.

Cree una nueva vista dentro del modulo `total` para visualizar la cantidad total seleccionada
entre todos los articulos.

Por último, cree un boton que redirija  a la vista que muestra el resultado ubicada dentro del módulo `total`.



[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://github.com/Satafur/angular-know-how-test
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[local-app-url]: `localhost:8000/index.html`
"# test-angular" 
