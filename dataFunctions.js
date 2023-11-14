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
  return Number (totalPeliculas);
};

export function filterMoviesByGenre(data, selectedGenre) {
  return data.filter(movie => movie.genre === selectedGenre);
}

export function sortedMovies(data, genero, ord) {
  // Filtra las películas por género
  const peliculasFiltradas = data.filter((movie) => movie.genre === genero);

  if (ord === 'asc') {
    // Ordena las películas filtradas en orden ascendente
    return peliculasFiltradas.sort((a, b) => a.name.localeCompare(b.name));
  } else if (ord === 'desc') {
    // Ordena las películas filtradas en orden descendente
    return peliculasFiltradas.sort((a, b) => b.name.localeCompare(a.name));
  }

  // Si no hay orden especificado, devuelve las películas filtradas sin ordenar
  return peliculasFiltradas;
}


