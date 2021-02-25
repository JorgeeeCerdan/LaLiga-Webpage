# La Liga Webpage

![la liga logo](pictures/laliga-v-1200x1200.png "La Liga Logo")

## Descripción del proyecto

La Liga Webpage es un portal digital destinado a la consulta de datos relacionados con los partidos de la liga Española de Futbol Profesional de primera división (Liga Santander).

---	

## Descripcion funcional

Caracteristicas principales de La Liga Webpage.

- Noticias en relación a la Liga Santander

- Clasificación de la competicion: Posicion de los equipos, partidos jugados, partidos ganados, partidos perdidos, partidos empatados, puntos, goles a favor, goles en contra, diferencia de goles y ultimos cinco partidos ganados.

-  Promoción de los equipos para Champions League, Uefa Leage y puestos de descenso.

- Busqueda de los partidos jugados, ganados, perdidos, empatados o aplazados de un equipo, ademas de mostrar el dia en el que se jugo y el resultado del mismo.

- Top 5 equipos con mayor media de goles a favor.

- Top 5 equipos con menos goles encajados en contra como visitante.

---	

## Descripción técnica

### Matches.js

#### Extracción de datos

1. Uso de la funcion dataMatches() para la recogida de datos en tiempo real con .fetch(). Uso del metodo "GET" y asignacion de la API KEY al header.
2. .then() para la comprobación del estado del servidor y recogida de la data. LLamada a la funcion filtroBuscar(data).
3. .catch() en caso de que existiera un error.

#### Filtrado de datos

1. Recogida de los diversos puntos de interacción y resolucion de problemas que pueda tener el usuario por medio de alertas.
2. Filtrado de datos obtenidos por medio del array method .filter(). 
3. Llamada a la funcion crearTablaPartidos(filtrarEquipos)

#### Creación de tabla con los datos filtrados

1. Creación de los elementos de html de forma dinamica. 
2. Asignación de los datos filtrados a diversas variables para posteriormente su creación en bucle con .forEach()
3. Conexion con sus "padres" .appendChild para la creación del html.

---	

## Casos de uso

![Casos de uso](docs/casosDeUso.jpg "Casos de uso")

---	

## Diagrama de actividades

1. El usuario comienza la visualización de la Webpage por la home leyendo alguno de los articulos destacados del momento. 

2. Consulta la página de clasificación esperando que su equipo preferido este en los puestos más altos de la tabla.

3. A continuación, usa la página de partidos para consultar el estado de los partidos que jugo su equipo.

4. Para acabar, el usuario termina viendo las estadisticas de la liga. El top 5 equipos con mayor media de goles de la liga y el top 5 de equipos menos goleados en contra como visitante.

5. Guarda la pagina de clasificacion en favoritos y cerrara la Webpage de La Liga.

---	

## Tecnologias

HTML, CSS3, Boostrap 5 (Framework), Vanilla Javascript, Json, Git, Github.

![Tecnologias](docs/tecnologiasLaLigaWebpage.jpg "Tecnologias")

---	

## Versiones

- v.1.0 Clasificación, partidos, estadisticas.(23/02/2021)
- v.1.1 Destacar los puestos de Champions League, Europa League, media tabla, puestos de descenso. (23/02/2021)

---	

## TODO

- (En proceso) Añadir ligas extranjeras.
- Buscar por texto escrito en el input field de resultados aunque no este todo el nombre del equipo completo.
- Conectar con una API de articulos de futbol para la index.html
- Iconos de la libreria de Bootsrap 5 para los ultimos 5 partidos.
- Poner más titulos antes de las tablas.
- ¿Dar opción a ordenar por jornadas?
- Más leyendas