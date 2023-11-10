// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {

  return [];
};
// dataFunctions.js

// Función para calcular la estadística de películas de terror
export const calcularEstadistica = (data, genero) => {
  const totalPeliculas = data
    .map((pelicula) => (pelicula.genre === genero ? 1 : 0))
    .reduce((total, count) => total + count, 0);
  return totalPeliculas;
};

export function filterMoviesByGenre(data, selectedGenre) {
  return data.filter(movie => movie.genre === selectedGenre);
}

export function sortedMovies(data, ord){
  if (ord === 'asc') {
   return data.sort((a, b) => a.name.localeCompare(b.name)); 
  } else if (ord === 'desc') {
    return data.sort((a, b) => b.name.localeCompare(a.name));
    //compara cadenas de texto 
    //y devuelve un valor negativo si a.name es menor que b.name, un valor positivo 
    //si es mayor y 0 si son iguales.Esto es lo que determina el orden en el que se deben colocar los elementos en el array.
  }
  return data
}
