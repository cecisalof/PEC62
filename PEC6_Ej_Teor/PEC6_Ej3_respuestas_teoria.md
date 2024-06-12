# Respuestas a la PEC6 - Ejercicio 3 - Teoría

a) **¿Qué son los interceptores?**

   - Los interceptores son una característica proporcionada por Angular que nos permite interceptar y modificar las peticiones HTTP salientes o las respuestas entrantes antes de que lleguen al servidor o después de que regresen del servidor. Esto nos permite realizar tareas comunes, como agregar encabezados HTTP, manejar errores o realizar tareas de logging, de manera centralizada y reutilizable.

b) **Analiza la siguiente cadena de operadores de RxJS:**

```typescript
this.wines$ = this.searchSubject
  .startWith(this.searchTerm)
  .merge(this.reloadProductsList)
  .debounceTime(300)
  .distinctUntilChanged()
  .switchMap((query) => this.wineService.getWine(this.searchTerm));
```

- `startWith(this.searchTerm)`: Emite el valor inicial `this.searchTerm` cuando se suscribe al Observable `this.searchSubject`.

- `merge(this.reloadProductsList)`: Fusiona dos observables, `this.searchSubject` y `this.reloadProductsList`, y emite los valores de ambos observables.

- `debounceTime(300)`: Espera 300 milisegundos después de que se detiene la emisión de valores desde `this.searchSubject` antes de emitir el último valor. Esto evita realizar múltiples peticiones HTTP cuando el usuario está escribiendo en un campo de búsqueda, esperando a que el usuario termine de escribir.

- `distinctUntilChanged()`: Asegura que solo se emitan valores diferentes consecutivos. Evita realizar la misma petición HTTP si el término de búsqueda no ha cambiado.

- `switchMap((query) => this.wineService.getWine(this.searchTerm))`: Realiza una solicitud HTTP utilizando el servicio `wineService.getWine()` cada vez que se emita un nuevo término de búsqueda (`query`). Utiliza `switchMap` para cancelar las solicitudes pendientes anteriores si se emite un nuevo término de búsqueda antes de que se complete la solicitud actual.

Este código es útil para implementar una búsqueda en tiempo real en una aplicación web. Permite a los usuarios buscar vinos a medida que escriben en un campo de búsqueda, pero evita realizar demasiadas solicitudes HTTP al servidor mientras el usuario sigue escribiendo.
