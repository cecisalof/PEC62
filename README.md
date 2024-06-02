#### Login UOC: csanchezlosada
#### Nombre y apellidos del alumno: Cecilia Sánchez Losada
#### Breve descripción de lo realizado en esta PEC, dificultades, mejoras realizadas, si hay que tener algo en cuenta a la hora de corregir/ejecutar la practica o cualquier aspecto que queráis destacar:


En el proyecto ecommerce PEC4_Ej_Prac, se ha puesto en práctica la teoría del framework de Angular. 

Se ha creado un componente ```article-item``` que muestra la información de un artículo, incluyendo nombre, precio, imagen, disponibilidad en venta y cantidad comprada. Se han definido los modelos necesarios, como la interfaz Article, con sus respectivos atributos. Además, se ha implementado la funcionalidad de resaltar el componente en un color diferente si el artículo está en venta, utilizando una condición lógica para aplicar la clase de CSS adecuada. Se han añadido botones para incrementar y decrementar la cantidad de unidades del artículo seleccionado, con la cantidad visible en tiempo real, y se ha desactivado el botón de decremento cuando la cantidad es cero. Además, se ha añadido un estilo ```:hover``` en los botenes para hacerlos más intuitivos.

Además se ha implementado la directiva ```ngClass``` para cambiar dinámicamente el estilo CSS del precio de un artículo, dependiendo de si el artículo se encuentra disponible para la venta o no. Esta funcionalidad mejora la experiencia del usuario al resaltar visualmente los precios de los artículos que están a la venta, proporcionando una interfaz más atractiva para los usuarios.

Se ha creado un componente llamado ```article-list``` que muestra una lista de artículos, donde dos están disponibles para la venta y uno no. Este componente utiliza la directiva ```ngFor``` para generar un ```article-item``` para cada artículo. Se han utilizado templates y estilos en línea en este componente.

Además, el componente ```article-item``` ha sido modificado para recibir un objeto Article como input y emitir hacia el componente padre un objeto ```ArticleQuantityChange``` que contiene el artículo y la cantidad seleccionada. La lógica de incrementar y decrementar la cantidad de artículos se ha trasladado de article-item a article-list, y se ha optimizado el componente ```article-item``` mediante la modificación de su estrategia de ChangeDetection.

Se han trabajado los estilos de este proyecto en un archivo Figma [https://www.figma.com/design/OYtiaF6s0Xh9sN9Ui6oYE2/PEC4?node-id=0%3A1&t=mYETFJvv9cbAdL3s-1]
