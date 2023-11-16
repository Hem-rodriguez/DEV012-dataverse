export const renderItems = (data) => {

  let listadeTarjetas = "";

  data.forEach((content) => { //innicio con forEach
    // inicio con la variale lista de tarjetas para la cadena para costruir la cadena en html
    //utilize "`" para concatenar texto al valor que ya tiene "lista de tarjetas"
    //el fracmento esta dentro de un bucle data.forEach((content) => {...}) 
    listadeTarjetas += ` 
      <li class='estilo-tarjetas' itemtype='peliculas' itemscope> 
        <dl itemscope itemtype='peliculas'>
          <img class="estilo-imagen" src="${content.imageUrl}">
          <dt>Nombre:</dt><dd itemprop="name">${content.name}</dd>
          <dt>genre:</dt><dd itemprop="genre">${content.genre}</dd>
        </dl>
      </li>
    `;
  });
  
  const lista = document.createElement("ul");  // crea un elemento de lista desordenada (<ul>), 
  //le asigna contenido generado previamente en forma de tarjetas de 
  //películas y devuelve este elemento de lista  para ser insertado en el documento HTML.
  lista.innerHTML = listadeTarjetas;
  return lista
}