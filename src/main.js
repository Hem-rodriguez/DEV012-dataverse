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
import { sortedMovies} from './dataFunctions.js'

const root =
document.querySelector('#root');
root.appendChild(renderItems(data));

const selectFiltros = document.querySelector('#filtros');
const selectOrdenamiento = document.querySelector('#ordenamiento');
const buttonBorrar = document.querySelector('[data-testid="button-clear"]');

// Agregar evento para filtrar por género
selectFiltros.addEventListener('change', () => { 
  // Cuando cambia la selección, esta función se ejecuta
  root.innerHTML= ''
  const selectedGenre = selectFiltros.value;
  // Cuando el usuario selecciona una opción de género en la lista desplegable
  // este código recoge el valor de esa opción y lo almacena en la variable selectedGenre
  const filteredMovies = data.filter(movie => movie.genre === selectedGenre);
  //Se está filtrando el arreglo de películas data para obtener únicamente las películas que coinciden 
  //con el género seleccionado por el usuario, almacenado en la variable selectedGenre.
  root.appendChild (renderItems(filteredMovies));
  //aqui el contenido de un elemento de mi página web con una nueva lista de películas que ha sido
  // filtrada y formateada en HTML utilizando la función renderItems.
  
});

// Agregar evento para ordenar
selectOrdenamiento.addEventListener('change', () => {
  root.innerHTML= ''
  // change se dispara cuando el usuario selecciona una opción diferente en un elemento select
  const orderType = selectOrdenamiento.value; 
  //El valor seleccionado se almacena en la variable
  // const sortedMovies = [...data];
   //se crea una copia de data, y luego se ordena o filtra
   //esta copia en función del tipo de ordenamiento (ascendente o descendente) o el género
   // seleccionado por el usuario.El resultado de la operación se muestra en la página web sin alterar los datos originales
   const dataSort = sortedMovies(data, orderType)

    //a.name y b.name son las propiedades "name" de esos dos objetos.

  root.appendChild (renderItems(dataSort));
});

// Agregar evento para borrar

buttonBorrar.addEventListener('click', () => {
  root.innerHTML= ''

  root.appendChild (renderItems(data));
  buttonBorrar.selectedIndex = 0; 
});
import { calcularEstadistica } from './dataFunctions.js';

// Supongamos que deseas calcular el número de películas de terror
const genero = 'Terror';
const numberOfHorrorMovies = calcularEstadistica(data, genero);

console.log(`Número de películas de Terror: ${numberOfHorrorMovies}`);
const statisticElement = document.querySelector('#estadistica');
statisticElement.textContent = `Número de películas de Terror: ${numberOfHorrorMovies}`;




