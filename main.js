
import { renderItems } from './view.js';
import data from './data/dataset.js';
import { sortedMovies } from './dataFunctions.js';
import { calcularEstadistica } from './dataFunctions.js';
import { filterMoviesByGenre } from './dataFunctions.js';


const root = document.querySelector('#root'); 
// se esta obteniendo el elemento que tiene id "root"
//y almacena en la variable root.
root.appendChild(renderItems(data)); 
//el elemento que se va a agregar es el resultado de llamar a la funcion 
//renderltems(data)


const selectFiltros = document.querySelector('#filtros');
// Selector para filtros
const selectOrdenamiento = document.querySelector('#ordenamiento');
const buttonBorrar = document.querySelector('[data-testid="button-clear"]');
//selector de borrar

//evento de cambio para selecctor de fitros
selectFiltros.addEventListener('change', (evento) => {
  
  console.log
  root.innerHTML = '';//limpiar el contenido del contenedor prin
  const selectedGenre = selectFiltros.value;// Obtiene el género seleccionado del selector de filtros
  const filteredMovies = filterMoviesByGenre(data, selectedGenre); 
  // obtiene un nuevo arreglo de películas filtradas según el género seleccionado por el usuario. 
  //El resultado, filteredMovies, contendrá únicamente las películas que coincidan con el género seleccionado.
  //toma dos parametros data y selectedgenre

  root.appendChild(renderItems(filteredMovies));
  // actualiza el contenido en la parte del DOM con el id root con las nuevas tarjetas de películas
  // generadas a partir del arreglo filtrado (filteredMovies).
});

 // Evento de cambio para el selector de ordenamiento
selectOrdenamiento.addEventListener('change', () => {
  root.innerHTML = ''; 
  // Limpiar el contenido del contenedor principal
  const selectedGenre = selectFiltros.value;
  // primero filtramos las películas según el género seleccionado (selectedGenre) utilizando  función filterMoviesByGenre
  
  const dataSort = sortedMovies(data, selectedGenre, selectOrdenamiento.value);
  // Utiliza la función sortedMovies para ordenar las películas filtradas
  root.appendChild(renderItems(dataSort));
  // Renderizar y agregar las películas ordenadas al contenedor principal
});

buttonBorrar.addEventListener('click', () => {
  // Evento de clic para el botón de borrado
  root.innerHTML = '';
  // Limpiar el contenido del contenedor principal
  root.appendChild(renderItems(data));
  // Renderizar y agregar todas las películas al contenedor principal
});

// El código para calcular la estadística de películas de terror ya se encuentra en dataFunctions.js 
const generoTerror = 'Terror';
const totalPeliculasDeTerror = calcularEstadistica(data, generoTerror);
// Calcular estadísticas para el género 'Terror'
const estadisticaElement = document.getElementById('peliculasDeTerror');
// está obteniendo el elemento del DOM con el identificador 'peliculasDeTerror' y 
//asignándolo a la variable estadisticaElement.
estadisticaElement.textContent = totalPeliculasDeTerror.toString();
//  está actualizando el contenido del elemento de estadística en el DOM 
//con el valor total de películas de terror, que se ha convertido a una cadena de texto.







