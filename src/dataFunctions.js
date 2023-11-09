// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};
export const calcularEstadistica = (data, genero) => {
  const peliculasDeGenero = data.filter((movie) => movie.genre === genero);
  return peliculasDeGenero.length;
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
