#### Login UOC: csanchezlosada
#### Nombre y apellidos del alumno: Cecilia Sánchez Losada
#### Breve descripción de lo realizado en esta PEC, dificultades, mejoras realizadas, si hay que tener algo en cuenta a la hora de corregir/ejecutar la practica o cualquier aspecto que queráis destacar:


En el proyecto ecommerce PEC5_Ej_Prac, se ha puesto en práctica la teoría del framework de Angular. 

Se ha creado un componente ```navbar``` con un menú que navega entre componentes específicos (```article-list```, ```article-new-template```, ```article-new-reactive```), usando de la directiva ```*ngIf``` para mostrar y ocultar componentes.

Se ha creado un componente ```article-new-template```, que muestra un formulario para agregar artículos con campos como nombre, precio, URL de la imagen, y estado de venta. En este componenet se implementaron validaciones para asegurarse de que los campos sean obligatorios (excepto el checkbox), validación de precios numéricos y validación de URL con expresión regular, mostrado de mensajes de error para validaciones incorrectas.

Además se ha creado un componente ```article-new-reactive``` similar al de los formularios dirigidos por template, pero utilizando formularios reactivos. Con este componente se realizó un implementación de validaciones similares a las del ejercicio 3, con adicional validación customizada para nombres específicos de artículos (```NameArticleValidator```).

Este trabajo práctico proporciona una comprensión profunda del uso y manejo de formularios en Angular, aplicando tanto conocimientos teóricos como habilidades prácticas en el desarrollo de componentes y validaciones en aplicaciones Angular.