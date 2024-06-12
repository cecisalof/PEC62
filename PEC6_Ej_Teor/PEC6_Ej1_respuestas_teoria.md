# Respuestas a la PEC6 - Ejercicio 1 - Teoría

a) **¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)**
   
   - Los componentes son unidades modulares de la interfaz de usuario que encapsulan la lógica y la presentación de una parte específica de la aplicación. Se utilizan para construir la interfaz de usuario y manejar interacciones con el usuario.
   
   - Los servicios son clases en Angular que se utilizan para organizar y compartir la lógica de la aplicación que no está relacionada directamente con una vista específica. Se utilizan para compartir datos, lógica de negocios, realizar peticiones HTTP, etc. Los servicios son una excelente opción cuando necesitas compartir funcionalidades entre diferentes componentes.

b) **¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?**
   
   - La inyección de dependencias es un patrón de diseño en el que los objetos no crean las dependencias que necesitan para funcionar, sino que se les pasan desde el exterior. En Angular, la inyección de dependencias se utiliza para proporcionar las dependencias que un componente o servicio necesita para funcionar correctamente.
   
   - El decorador `@Injectable()` en Angular se utiliza para que una clase sea susceptible de inyección de dependencias. Cuando un servicio tiene este decorador, Angular lo puede instanciar y proporcionar automáticamente donde sea necesario en la aplicación.

c) **Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:**
   
   - **Observable**: Representa una secuencia de eventos que puede ser observada a través del tiempo.
   - **Subscription**: Representa la ejecución de un Observable. Es la conexión entre el Observable y el observador.
   - **Operators**: Funciones que permiten operar sobre los datos emitidos por un Observable.
   - **Subject**: Es una clase que actúa como Observable y a la vez como Observer. Permite enviar y recibir eventos a múltiples observadores.
   - **Schedulers**: Controlan cuándo y cómo se ejecutan las operaciones en un Observable.

d) **¿Cuál es la diferencia entre promesas y observables?**
   
   - Las promesas son valores que pueden estar disponibles ahora, en el futuro o nunca. Resuelven una sola vez con un valor único o con un error.
   
   - Los observables representan flujos de datos que pueden ser emitidos durante un período de tiempo. Pueden emitir múltiples valores de forma asíncrona y pueden ser cancelados. Los observables permiten operaciones más avanzadas como el mapeo, filtrado, combinación, entre otros.

e) **¿Cuál es la función de la tubería (pipe) async?**
   
   - La tubería `async` en Angular se utiliza para manejar observables asincrónicos directamente en las plantillas de los componentes. Se encarga de suscribirse y desuscribirse automáticamente del observable, evitando fugas de memoria y asegurando una gestión limpia de la suscripción.
s
