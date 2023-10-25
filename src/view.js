export const renderItems = (data) => {
  
  //console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
 let listadeTarjetas = ""
 for (let  i = 0; i < data.length; i++) {
  const content = data [i];
 
   listadeTarjetas += `
  <li class="estilo-tarjetas">
  <dl itemscope itemtype="X-men">
    <img class="estilo-imagen" src=${content.imageUrl}">
    <dt>Nombre:</dt><dd itemprop="name">${content.name}</dd>
    <dt>Descripción:</dt><dd itemprop="description">${content.shortDescription}</dd>
    <dt>Alineación:</dt><dd itemprop="alignment">${content.facts.alignment}</dd>
    <dt>Género:</dt><dd itemprop="gender">${content.facts.gender}</dd>
    <dt>Poderes:</dt><dd itemprop="powers">${content.facts.powers}</dd>
  </dl>
  <li/>`;
  
  }
  return  `<ul>${listadeTarjetas}<ul/>`;
  


};
