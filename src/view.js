export const renderItems = (data) => {
  
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
 
  return  ` ;
  <dl itemscope itemtype="https://schema.org/Superhero">
    <img src="URL_DE_LA_IMAGEN_GENERADA" alt="Nombre del personaje" itemprop="image" />
    <dt>Nombre:</dt><dd itemprop="name">Nombre del personaje</dd>
    <dt>Descripción:</dt><dd itemprop="description">Descripción del personaje.</dd>
    <dt>Alineación:</dt><dd itemprop="alignment">Alineación del personaje (Héroe, Villano, Neutral, etc.).</dd>
    <dt>Género:</dt><dd itemprop="gender">Género del personaje (Masculino, Femenino, etc.).</dd>
    <dt>Poderes:</dt><dd itemprop="powers">Poderes y habilidades del personaje.</dd>
  </dl>
  `
}; 




