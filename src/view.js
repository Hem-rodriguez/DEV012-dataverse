export const renderItems = (data) => {

  let listadeTarjetas = "";

  data.forEach((content) => {
    // Hacer algo con content
    listadeTarjetas += `
      <li class='estilo-tarjetas' itemtype='peliculas'>
        <dl itemscope itemtype='peliculas'>
          <img class="estilo-imagen" src="${content.imageUrl}">
          <dt>Nombre:</dt><dd itemprop="name">${content.name}</dd>
          <dt>genre:</dt><dd itemprop="genre">${content.genre}</dd>
        </dl>
      </li>
    `;
  });
  
  const lista = document.createElement("ul");
  lista.innerHTML = listadeTarjetas;
  return lista
}