# Cocktail (Proyecto en Angular)

[challenge](http://omacdamiac.com/dist/cocktail/#/home) prpoyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

# Construido con

- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
- [Angular-Material](https://material.angular.io/components/categories)
- [thecocktaildb.com](https://www.thecocktaildb.com/api.php?ref=apilist.fun)

# Comenzando

Contar con una conexión a internet.

- git clone `https://github.com/omacdamiac/cocktail_challenge.git`.
- npm install | `instalación de dependencias`
- ng serve -o | `Ejecutar proyecto en el navegador`, `http://localhost:4200/`.

## Dockerfile

- `docker build -t cocktail .`
- `docker run -it -p 8000:80 --name cocktaildocker cocktail`

## Archivo Google Lighthouse
thecocktailBD_2020-05-29_04-46-14.html
# Mejoras
- Implementar Loading en el inicio.
- Cambio de `table` en moviles.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Test Unitarios

`ng test` ejecutar test con [Karma](https://karma-runner.github.io).
copera en la ayuda de test en ngx-filter
