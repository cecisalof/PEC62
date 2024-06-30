# Respuestas a la PEC7 - Ejercicio 1 - Teoría

a) **¿Qué es y cómo funciona el elemento <RouterOutlet>?**

   - En el contexto de desarrollo web con Angular, <RouterOutlet> es un componente clave que se utiliza para cargar y mostrar componentes asociados con rutas específicas. Angular utiliza un enfoque basado en componentes para la construcción de aplicaciones de una sola página (SPA), donde diferentes componentes se cargan dinámicamente según la ruta actual.
   
   - <router-outlet> funciona como un punto de entrada dinámico para los componentes de la aplicación, permitiendo que Angular maneje la navegación y la carga de componentes basados en las rutas definidas en la configuración del enrutador. Este enfoque facilita la construcción de aplicaciones web que pueden cambiar su contenido de manera fluida según la interacción del usuario.

   - En el archivo de plantilla de tu componente principal (por lo general, app.component.html), colocas <router-outlet></router-outlet> en el lugar donde deseas que se muestren los componentes asociados con las rutas:

   <!-- app.component.html -->
    ``` <header>
    <!-- ... contenido del encabezado ... -->
        </header>
        <main>
        <router-outlet></router-outlet>
        </main>
        <footer>
        <!-- ... contenido del pie de página ... -->
        </footer>```

b) **¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?**

   - En Angular, las directivas routerLink y routerLinkActive se utilizan en conjunto con el enrutador para facilitar la navegación y el control de la apariencia de los elementos en función de la ruta actual. 

     - `'routerLink'`: La directiva routerLink en Angular se utiliza para crear enlaces de navegación en una aplicación que utiliza el enrutador Angular. Permite vincular dinámicamente una ruta a un elemento HTML, como un enlace (<a>) o un botón (<button>), para facilitar la navegación del usuario entre diferentes vistas de la aplicación. `routerLink` acepta como valor la ruta a la que se debe dirigir la navegación.
     
     <!-- Ejemplo con routerLink en un enlace -->
        ```<a routerLink="/home">Ir a la página de inicio</a>```
   
   - `'routerLinkActive'` en Angular se utiliza para aplicar clases CSS o establecer propiedades CSS en un elemento HTML cuando la ruta asociada está activa. Esta directiva es especialmente útil para resaltar visualmente los enlaces de navegación que corresponden a la ruta actual. 
   Puedes utilizar routerLinkActive con varios elementos en la misma página y aplicar diferentes estilos a cada uno según la ruta activa. 
   La directiva routerLinkActive también es flexible y se puede configurar con opciones adicionales. Aquí hay un ejemplo con routerLinkActiveOptions:

   <!-- Ejemplo con routerLinkActive y routerLinkActiveOptions -->
    ```
    <a routerLink="/home" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Ir a la página de inicio</a>```

En resumen `'routerLinkActive'` gestionar el aspecto visual de los enlaces de navegación en función de la ruta actual, mejorando así la experiencia del usuario en aplicaciones de una sola página.

Existen otras directivas relacionadas con el enrutador en Angular que proporcionan funcionalidades específicas como por ejemplo `'routerLinkWithHref'`, que funciona similar a `'routerLink'`:

  - `'routerLinkWithHref'` se utiliza para vincular una ruta a un elemento HTML y también agrega la propiedad href al elemento, lo que permite que el navegador maneje la navegación si JavaScript no está disponible:
    ```
    <a routerLinkWithHref="/home">Ir a la página de inicio</a>```

Otra directiva relacionada con el router es `'routerLinkActiveOptions`':

- Esta directiva se utiliza junto con `'routerLinkActive'` para proporcionar opciones adicionales para controlar la activación de la clase CSS. 
- Permite configurar opciones como `exact` para indicar que la coincidencia debe ser exacta.

```<a routerLink="/home" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>```

c) **¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos**

`'Router'` y `'ActivatedRoute'` son dos servicios clave proporcionados por Angular que están relacionados con la navegación y el enrutamiento en una aplicación. Aquí hay una descripción de cada uno y algunas de sus funcionalidades más importantes:

 - `'Router'`: El servicio Router se utiliza para realizar operaciones de navegación y gestionar el estado del enrutador en una aplicación Angular. Algunas de las funcionalidades más importantes del servicio Router incluyen:

* `'navigate'`: Método utilizado para navegar a una ruta específica programáticamente. Puede aceptar una variedad de argumentos, incluidos objetos de configuración y matrices de segmentos de ruta.

<!-- ``` navigateToHome() {
  this.router.navigate(['/home']);
} ``` -->

* `'events'`: Propiedad que expone un Observable que emite eventos de navegación, como cambios de ruta.

<!-- ```constructor(private router: Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      // Se ejecuta después de que la navegación se ha completado
      console.log('Navegación completada:', event);
    }
  });
}``` -->

* `'config'`: Propiedad que permite acceder y modificar la configuración de las rutas en tiempo de ejecución.

<!-- ```constructor(private router: Router) {
  const routeConfig = this.router.config;
  // Modificar la configuración de las rutas según sea necesario
}``` -->

 - `'ActivatedRoute'`: proporciona información sobre la ruta activa y se utiliza para acceder a los parámetros de ruta y otros datos asociados con la ruta actual. Algunas de las funcionalidades más importantes del servicio ActivatedRoute incluyen:

* `'params'`: Propiedad que expone un Observable que emite los parámetros de ruta cuando cambian.
* `'snapshot'`: Propiedad que proporciona una instantánea de la información de la ruta en un momento específico. Útil para acceder a datos estáticos de la ruta.
* `'parent'`: Propiedad que proporciona una referencia al ActivatedRoute de la ruta padre.

En resumen, `'Router'` y `'ActivatedRoute'` son esenciales para trabajar con la navegación y el enrutamiento en aplicaciones Angular, proporcionando un conjunto robusto de herramientas para gestionar la navegación, acceder a datos de ruta y responder a eventos relacionados con la navegación. 

e) **¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy?***

La carga perezosa (lazy loading) en Angular es una técnica que permite cargar módulos de manera diferida, es decir, cargarlos solo cuando son necesarios. Esto ayuda a mejorar el rendimiento de la aplicación al reducir el tiempo de carga inicial, ya que no se cargan todos los módulos al inicio, sino solo aquellos que son necesarios para la ruta actual.

Para configurar la carga perezosa en Angular, puedes seguir estos pasos:

- Divide la aplicación en módulos: Divide tu aplicación en módulos que representen áreas o características específicas de la aplicación. Cada uno de estos módulos puede tener sus propias rutas y componentes.
- Configura las rutas con loadChildren: Utiliza la propiedad `'loadChildren'` en las rutas de tu aplicación en lugar de component para especificar la ubicación del módulo que se cargará perezosamente. `'loadChildren'` toma una cadena que representa la ruta del módulo relativa al punto de entrada de tu aplicación y al módulo de Angular que contiene la referencia al módulo a cargar

```
const routes: Routes = [
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  // ... otras rutas
];
```

En este ejemplo, cuando la ruta '/lazy' se activa, Angular cargará dinámicamente el módulo LazyModule.

- Configura tu servidor para admitir carga perezosa: Si estás utilizando Angular CLI, generalmente no es necesario hacer ninguna configuración adicional, ya que Angular CLI se encarga de todo. Sin embargo, si estás configurando manualmente la carga perezosa, asegúrate de que tu servidor esté configurado para manejar la carga perezosa correctamente, redirigiendo las solicitudes de módulos a las ubicaciones correctas.

En conclusión, la carga perezosa en Angular es una técnica poderosa para mejorar la eficiencia de la aplicación, especialmente en aplicaciones grandes con muchas funcionalidades. Al cargar solo los módulos necesarios, puedes reducir el tiempo de carga inicial y mejorar la experiencia del usuario. Además, Angular CLI facilita la configuración de la carga perezosa, ya que realiza gran parte del trabajo por ti.

f. **¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?**

En el contexto de `'Node.js'`, los middlewares son funciones que se ejecutan durante el procesamiento de una solicitud HTTP. Estas funciones tienen acceso al objeto de solicitud (req), al objeto de respuesta (res), y generalmente a la siguiente función middleware en la cadena (next). Los middlewares son una parte fundamental en la construcción de aplicaciones web y servidores en Node.js porque permiten ejecutar lógica personalizada antes o después de que se maneje una solicitud.

*Utilidades de los Middlewares en Node.js:*
- Manipulación de la Solicitud/Respuesta: Los middlewares pueden realizar operaciones en la solicitud entrante o en la respuesta saliente. Esto incluye la modificación de encabezados, cuerpo de la solicitud o respuesta, y más.

- Autenticación y Autorización: Los middlewares son comúnmente utilizados para implementar mecanismos de autenticación y autorización. Pueden verificar si un usuario está autenticado antes de permitir el acceso a ciertas rutas.

- Logging: Los middlewares pueden registrar información sobre las solicitudes y respuestas, como registros de acceso, para fines de seguimiento y depuración.

- Manejo de Errores: Los middlewares pueden manejar errores, realizar un seguimiento de excepciones y proporcionar respuestas adecuadas al cliente.
