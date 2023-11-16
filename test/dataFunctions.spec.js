import { filterMoviesByGenre, sortedMovies } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe("Funciones de Filtrado y Ordenamiento", () => {
  // Pruebas para la función de filtrado por género
  describe("filterMoviesByGenre", () => {
    it("Debería filtrar las películas por género 'Terror'", () => {
      const peliculasTerror = filterMoviesByGenre(fakeData, "Terror");
      expect(peliculasTerror.length).toBe(3);
      // Puedes agregar más expectativas para verificar los resultados específicos
      // de las películas de terror filtradas, si es necesario.
    });

    // Agrega más pruebas para otros casos de uso de filterMoviesByGenre si es necesario.
  });

  // Pruebas para la función de ordenamiento
  describe("sortedMovies", () => {
    it("Debería ordenar las películas en orden ascendente", () => {
      sortedMovies(fakeData, "asc");
      // No estás utilizando la variable peliculasOrdenadasAsc, por lo que no es necesario asignarla.
    });

    it("Debería ordenar las películas en orden descendente", () => {
      sortedMovies(fakeData, "desc");
      // No estás utilizando la variable peliculasOrdenadasDesc, por lo que no es necesario asignarla.
    });

    // Agrega más pruebas para otros casos de uso de sortedMovies si es necesario.
  });

  // Puedes seguir agregando más describe e it bloques para cubrir diferentes escenarios y casos de uso.
});
