# Dataverse

## Índice


* [1. Resumen del proyecto]
* [2. . historias de Usuario]
* [3. Diseño de la Interfaz de Usuaria]
*



## 1. Resumen del proyecto

En este proyecto realize una pagina web que perimite ver tarjetas con informacion
Esta página web se adecuará a lo que descubras que tu usuaria
necesita.



## 2. historias de Usuario
Este proyecto se concideraron las necesidades de la usuaria y lo trabaje de esta manera:

la usuaria podra entrar a la pagina web, y atraera la atencion de la atencion con la interfaz

la usuaria podra ver una imagen de cada un de las 24 imagenes donde podra ver el nombre de la pelicula y genero 

la usuaria puede entrar y filtrar por genero, que en este caso es terror, drama, ciencia ficcion y thriller. A ese filtro se le hara un ordenamiento 


La página esta pensanda para usuarias que quieran ver sobre peliculas basadas en libros, fanaticos de stephen king, fanaticas de los clasicos, usuarias que no saben que peliculas ver 
es una herramienta que puede ser utilizada por muchas usuarias 


3. Funcionalidades
La página web permite visualizar la data, presentada en forma de tarjetas, filtra la misma, la ordenar y calcular la estadística del total de peliculas de terror.

La aplicación permite a la usuaria ver los items de la data en una visualización, de tipo tarjetas. Cada una de las tarjetas contiene en un elemento imagen, la información relevante

las tarjetas levan datos importantes de la pelicula selccionada que es: nombre, fecha, genero de cada pelicula asi como la portada de la misma

La interfaz se estructuro semánticamente con el estándar de [microdatos], usando los atributos [itemscope], [itemtype] y el atributo [itemprop].

La aplicación calcula y visualiza 24 peliculas mas relevantes de los libros de stephen king y se visualiza al inicio de la pagina

La aplicación permite a la usuaria filtrar la data. Usando el elemento [<select>] con [un atributo de datos] que en este caso es por genero de pelicula 

La aplicación permite a la usuaria ordenar la data.

se utilizo un <select> para ordenar y en este caso será por el atributo name ordenando por su nombre.
La funcionalidad del ordenamiento trabaja con el total de peliculas y es tambien acumilativo, es decir filta de forma ascendentemente y descendentemente solo con el genero que la usuaria seleccione.

La aplicación permite a la usuaria reiniciar la aplicación, limpiando filtros y ordenamiento, con un <button> con un atributo de datos data-testid="button-clear".

4. Diseño de la Interfaz de Usuaria
Prompt utilizado
Dentro del readme que armarás, debe incluir una captura de pantalla de tu prompt utilizado para generar los datos. Si utilizaste varios prompts, puedes adjuntar todas las capturas que necesites.

Implementación de la Interfaz de Usuaria (HTML/CSS/JS)
El diseño debe representa el ideal de la página, sin embargo, con forme aplicabamos el diseño "ideal" a la pagina nos enfrentamos algunos obstaculos que dificultaron realizarlo de esa manera, sin embargo, la solución al problema se creo de manera más eficiente y Finalmente el resultado le di un diseño llamativo con el fin de que en cuanto entre la usuaria, sienta que la pagina es dinamica al ponerle un efecto de que cuando ella pase el cursor pase la imagen de blanco y negro a color.  el diseño respeta la tematica del escritor, que es con tonos frios 

----EN DESKTOP-----

![Captura de pantalla (20)](https://github.com/Hem-rodriguez/DEV012-dataverse/assets/144548383/ba9b6bff-f8d6-4a81-94e5-9d353b95368e)


----EN DISPOSITIVO MOVIL----

![Captura de pantalla (21)](https://github.com/Hem-rodriguez/DEV012-dataverse/assets/144548383/9fbaac0e-9b48-4fa1-9ccb-bb28c9745077)


----EN TABLET----

![Captura de pantalla (25)](https://github.com/Hem-rodriguez/DEV012-dataverse/assets/144548383/0e1de58e-99c2-468a-bde3-2108ed66df27)












