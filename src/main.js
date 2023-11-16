
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








