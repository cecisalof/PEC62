# Respuestas a la PEC7 - Ejercicio 1 - Teoría

a) **¿Qué es y cómo funciona el elemento <RouterLink> en Angular?**

   - El <RouterLink> es una directiva en Angular que se utiliza para crear enlaces que permiten la navegación dentro de una aplicación Angular basada en rutas. Funciona de manera similar a los enlaces HTML tradicionales (<a>), pero en lugar de recargar la página, cambia la vista actual utilizando el enrutador de Angular.
   
   - <RouterLink> Se declara en un template HTML de un componente de Angular. Se vincula a una ruta específica definida en la configuración de rutas de la aplicación. Al hacer clic en un elemento con la directiva routerLink, Angular intercepta el evento de clic y utiliza su enrutador interno para cambiar la vista sin recargar la página completa.

   - En el archivo de plantilla de tu componente principal (por lo general, app.component.html), colocas <router-outlet></router-outlet> en el lugar donde deseas que se muestren los componentes asociados con las rutas:

   <!-- app.component.html -->
    ``` <a [routerLink]="['/ruta']">Enlace a la ruta</a>```

    En este ejemplo, al hacer clic en el enlace, la aplicación navegará a la ruta /ruta definida en la configuración de enrutamiento de Angular

b) **Explica la diferencia entre routerLink y routerLinkActive. ¿Qué otras directivas se pueden utilizar con el router en Angular**

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

c) **Describe el servicio ActivatedRouteSnapshot. ¿Cómo se utiliza y en qué casos es útil?**

El servicio ActivatedRouteSnapshot es una representación inmutable de la información relacionada con la ruta activada en un momento específico. Contiene información sobre la ruta, como parámetros, datos, y el estado de la ruta.

- Uso:
Se utiliza generalmente en las guardas de rutas (Route Guards) y en componentes para acceder a los datos estáticos y parámetros de ruta cuando se activa la ruta.

- Casos de utilidad:
Acceso a parámetros de ruta: Obtener parámetros de ruta en guardas o componentes para lógica condicional.
Datos estáticos: Acceder a datos estáticos configurados en la definición de rutas.
Lógica de protección: Usado en guardas como CanActivate para decidir si se permite la activación de la ruta.

 ```
 import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // lógica para verificar si se puede activar la ruta
    return true; // o false basado en la lógica
  }
}
 ```

d)**¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular.**
- Route Guards:
Las Route Guards son interfaces que permiten a Angular decidir si una ruta puede ser activada o desactivada, si se puede cargar o descargar, y si se puede dejar una ruta antes de navegar a otra. Son utilizadas para implementar lógica de seguridad y permisos en la navegación de la aplicación.

- Uso:
Las guardas se definen como servicios que implementan interfaces específicas de Angular y se configuran en las rutas para aplicar lógica antes de activar, desactivar, cargar o descargar una ruta.

Tipos de Guardas:
CanActivate: Decide si una ruta puede ser activada.

```
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    // lógica para permitir o denegar la activación de la ruta
    return true; // o false
  }
}
```
CanActivateChild: Decide si una ruta hija puede ser activada.

```
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  canActivateChild(): boolean {
    // lógica para permitir o denegar la activación de la ruta hija
    return true; // o false
  }
}
```
CanDeactivate: Decide si se puede desactivar una ruta.

```
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
```
CanLoad: Decide si se puede cargar un módulo.

```
import { CanLoad } from '@angular/router';
import { Route, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    // lógica para permitir o denegar la carga del módulo
    return true; // o false
  }
}
```
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

f) **Compara las diferencias entre CanDeactivate y CanActivate guards en Angular. Proporciona ejemplos de cuándo se utilizaría cada uno.**

Diferencias entre CanDeactivate y CanActivate:
- CanActivate:
Se utiliza para determinar si una ruta puede ser activada.
Se ejecuta antes de que se navegue a una ruta.
Ejemplo: Verificar si el usuario está autenticado antes de permitir el acceso a una ruta protegida.
```
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    // lógica de autenticación
    return true; // o false
  }
}
```

- CanDeactivate:
Se utiliza para determinar si se puede desactivar una ruta.
Se ejecuta antes de salir de una ruta actual.
Ejemplo: Preguntar al usuario si desea guardar los cambios antes de salir de un formulario no guardado.

```
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable
}
```

g) **¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?**

En el contexto de `'Node.js'`, los middlewares son funciones que se ejecutan durante el procesamiento de una solicitud HTTP. Estas funciones tienen acceso al objeto de solicitud (req), al objeto de respuesta (res), y generalmente a la siguiente función middleware en la cadena (next). Los middlewares son una parte fundamental en la construcción de aplicaciones web y servidores en Node.js porque permiten ejecutar lógica personalizada antes o después de que se maneje una solicitud.

*Utilidades de los Middlewares en Node.js:*
- Manipulación de la Solicitud/Respuesta: Los middlewares pueden realizar operaciones en la solicitud entrante o en la respuesta saliente. Esto incluye la modificación de encabezados, cuerpo de la solicitud o respuesta, y más.

- Autenticación y Autorización: Los middlewares son comúnmente utilizados para implementar mecanismos de autenticación y autorización. Pueden verificar si un usuario está autenticado antes de permitir el acceso a ciertas rutas.

- Logging: Los middlewares pueden registrar información sobre las solicitudes y respuestas, como registros de acceso, para fines de seguimiento y depuración.

- Manejo de Errores: Los middlewares pueden manejar errores, realizar un seguimiento de excepciones y proporcionar respuestas adecuadas al cliente.
