# React-GiphyApp

Busca y muestra en targetas varios gifs sobre la busqueda usando una API de GIPHY, realizado con React 17 con Testing.

`npm start` para ejecutar la app en modo de desarrollo (http://localhost:3000).

## App State

El estado global de la app es el contenido ingresado en la barra de búsqueda, una vez se lanza la búsqueda. Se trata de un array donde se agregarán los valores de cada mueva búsqueda.

## Custom Hooks

useFetchGifs: maneja el estado de la resolución de promesa de getGifs.

## Componentes

GifExpertApp: componente de más alto nivel.  
AddCategory : encargado de la búsqueda.  
GifGrid     : maneja el contenedor de gifs, usa useFetchGifs y pasa lo obtenido.  
GifGridItem : renderiza la targeta con la información pasada.

## Helpers

getGifs: Hace la petición fetch al endpoint, prepara y devuleve un objeto con la información relevante para la app.


## Testing

Las pruebas estan realizadas con las librerías **Enzyme** y **Jest**.
Hay archivos de pruebas para cada archivo js de la aplicación.

Para probar el custom hook es necesario usar la librería de desarrollo react-hooks-testing-library.

`npm test` para ejecutar las pruebas escritas en el proyecto.

