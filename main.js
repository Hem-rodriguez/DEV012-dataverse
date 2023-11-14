/*import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const root =
document.querySelector('#root');
root.appendChild(renderItems(data));



const selectFiltros = document.querySelector('#filtros');

selectFiltros.addEventListener('change', () => {
    const selectedGenre = selectFiltros.value; // Obtén el valor seleccionado del género
    alert(`Filtrando películas por género: ${selectedGenre}`);
});


const selectOrdenamiento = document.querySelector('#ordenamiento');

selectOrdenamiento.addEventListener('change', () => {
    const selectValue = selectOrdenamiento.value; // Obtén el valor seleccionado del elemento select
    alert(`Filtrando películas por ordenamiento: ${selectValue}`);
});

const buttonBorrar = document.querySelector('[data-testid="button-clear"]');

buttonBorrar.addEventListener('click', () => {
    // Aquí dentro puedes mostrar una alerta o un mensaje
    alert('Borrando películas...');
});

selectFiltros.addEventListener('change', () => {
    const selectedGenre = selectFiltros.value;
  
    // Filtrar las películas que coinciden con el género seleccionado
    const peliculasFiltradas = data.filter(pelicula => pelicula.genre === selectedGenre);
  
    // Luego, renderiza las películas filtradas en tu página
    const root = document.querySelector('#root');
    root.innerHTML = renderItems(peliculasFiltradas);
  });*/
  
  
  
/*import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const selectFiltros = document.querySelector('#filtros');
const selectOrdenamiento = document.querySelector('#ordenamiento');
const buttonBorrar = document.querySelector('[data-testid="button-clear"]');
const root = document.querySelector('#root');

// Define una función para actualizar la lista de películas en #root
const updateMovieList = (movies) => {
  root.innerHTML = '';
  const movieList = renderItems(movies);
  root.appendChild(movieList);
};

// Lógica para filtrar películas por género
selectFiltros.addEventListener('change', () => {
  const selectedGenre = selectFiltros.value;
  const peliculasFiltradas = data.filter((pelicula) => pelicula.genre === selectedGenre);
  updateMovieList(peliculasFiltradas);
});

// Lógica para ordenar películas
selectOrdenamiento.addEventListener('change', () => {
  const selectValue = selectOrdenamiento.value;
  const moviesCopy = [...data];
  if (selectValue === 'asc') {
    moviesCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectValue === 'desc') {
    moviesCopy.sort((a, b) => b.name.localeCompare(a.name));
  }
  updateMovieList(moviesCopy);
});

// Lógica para borrar películas (aquí puedes mostrar una alerta)
buttonBorrar.addEventListener('click', () => {
  alert('Borrando películas...');
  // Puedes realizar la lógica de borrado de películas aquí si es necesario
});

// Carga inicial de la lista de películas
updateMovieList(data);*/

  


import { renderItems } from './view.js';
import data from './data/dataset.js';
import { sortedMovies } from './dataFunctions.js';
import { calcularEstadistica } from './dataFunctions.js';
import { filterMoviesByGenre } from './dataFunctions.js';


const root = document.querySelector('#root');
root.appendChild(renderItems(data));


const selectFiltros = document.querySelector('#filtros');
const selectOrdenamiento = document.querySelector('#ordenamiento');
const buttonBorrar = document.querySelector('[data-testid="button-clear"]');

// Función para restablecer valores predeterminados
const resetSelects = () => {
  selectFiltros.selectedIndex = 0; // Primer elemento en la lista de géneros
  selectOrdenamiento.selectedIndex = 0; // Primer elemento en la lista de ordenamiento
};

selectFiltros.addEventListener('change', (evento) => {
  console.log
  root.innerHTML = '';
  const selectedGenre = selectFiltros.value;
  const filteredMovies = filterMoviesByGenre(data, selectedGenre); // Usa la función de filtrado
  root.appendChild(renderItems(filteredMovies));
});

selectOrdenamiento.addEventListener('change', () => {
  root.innerHTML = '';
  const selectedGenre = selectFiltros.value;
  // Utiliza la función sortedMovies para ordenar las películas filtradas
  const dataSort = sortedMovies(data, selectedGenre, selectOrdenamiento.value);
  root.appendChild(renderItems(dataSort));
});

buttonBorrar.addEventListener('click', () => {
  root.innerHTML = '';
  root.appendChild(renderItems(data));
});

// El código para calcular la estadística de películas de terror ya se encuentra en dataFunctions.js
 
const generoTerror = 'Terror';
const totalPeliculasDeTerror = calcularEstadistica(data, generoTerror);

const estadisticaElement = document.getElementById('peliculasDeTerror');
estadisticaElement.textContent = totalPeliculasDeTerror.toString();








