# Respuestas a la PEC6 - Ejercicio 2 - Teoría

a. **¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule?**

   - La diferencia principal radica en el alcance y la forma en que se proporciona el servicio.
   
   - Con el decorador `@Injectable()`, el servicio se proporciona en un nivel más granular, lo que significa que puede estar disponible en un componente específico o en un módulo.
   
   - Por otro lado, al usar el decorador `@NgModule()`, el servicio se proporciona a nivel de módulo y estará disponible en todos los componentes y servicios que pertenezcan a ese módulo.

   - Puedes consultar más detalles en [Angular Documentation - Providers](https://angular.io/guide/providers).

b. **¿Qué otras opciones admite el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?**

   - Además de `@Injectable({ providedIn: 'root' })`, el decorador `@Injectable()` admite otras opciones para la propiedad `providedIn`:

     - `'any'`: Indica que el servicio puede ser proporcionado en cualquier nivel (a nivel de módulo o de raíz), permitiendo así una mayor flexibilidad en la configuración de la inyección de dependencias.
     - `'platform'`: Indica que el servicio se proporcionará a nivel de plataforma. Esto significa que será único para cada aplicación Angular que se ejecute en una página web, lo que lo convierte en una opción ideal para servicios que deben ser compartidos a través de múltiples aplicaciones en la misma página.

   - Estas configuraciones permiten adaptar la forma en que los servicios se proporcionan en la aplicación según los requisitos específicos de la misma.

   - Puedes obtener más información en [Improved Dependency Injection with the new ProvidedIn Scopes: 'any' and 'platform'](https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb).

