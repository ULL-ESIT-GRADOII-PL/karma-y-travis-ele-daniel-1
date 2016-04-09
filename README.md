# Conversor de temperaturas
[![Build Status](https://travis-ci.org/EleDiaz/karma-y-travis-ele-daniel-1.svg?branch=master)](https://travis-ci.org/EleDiaz/karma-y-travis-ele-daniel-1)
[![Coverage Status](https://coveralls.io/repos/github/EleDiaz/karma-y-travis-ele-daniel-1/badge.svg)](https://coveralls.io/github/EleDiaz/karma-y-travis-ele-daniel-1)



Este conversor de temperatura usa **webpack** para minificar los js y organizar los módulos
javascript instalados con node, es decir se usan require en source code webpack los procesa
con sus dependencias y genera el correspondiente archivo en **vendor**, los **.map** que se
generan son para permitir que al debuggear el codigo el navegador puede reconstruir el archivo
a partir del minificado y preprocesado con webpack.

Además se hace uso de **gulp-gh-pages** para generar automáticamente las gh-pages, esto
significa que la página principal está en master y no en gh-pages. No esperes un readme en esa rama.

Debido a que el desarrollo de blanket se ha visto detenido en favor de **instanbul**, se ha optado
por remplazarlo, además de la incompatibilidad(poco soporte blanket+webpack) existente. Además
Se han separado los test del coverage. El cual puede se accesible desde el icono de **coveralls**.

En el [gulpfile](./gulpfile.js) se definen las tareas de compresión y minificacion de los archivos js.

# TODO
- [ ] Terminar de editar el readme
  - [x] Explicar el Coverage
  - [x] Uso de webpack
- [ ] Solucionar el travis, **funciona en local pero en travis fallan las pruebas**
- [x] Usar karma
- [x] Arreglado los errores al cambiar a un gestionador de módulos
- [ ] Errores de sintaxis rompen el **gulp watch**
- [ ] Eliminar los archivos basura de la rama gh-pages (.map)
- [ ] Puede ser buena idea organizar vendor en js, css **No importante**
- [x] Ahora es posible correr las pruebas mocha desde terminal.
- [x] Arreglar las pruebas html de mocha

# Links

**Repositorio GitHuB**

* [Repositorio](https://github.com/EleDiaz/karma-y-travis-ele-daniel-1)

**Pruebas del repo**
[Tests Page](http://elediaz.github.io/karma-y-travis-ele-daniel-1/test/index.html)

**Página de la práctica**

* [Web](http://elediaz.github.io/karma-y-travis-ele-daniel-1/)

**Páginas de los autores**

* [Web Daniel](http://alu0100783230.github.io/)
* [Web Eleazar](http://elediaz.github.io/)

**Página de la práctica**

* [Página de la asignatura](https://campusvirtual.ull.es/1516/mod/page/view.php?id=177984)

# ¿Cómo contribuir?

Instala *terminator*, [fish](https://fishshell.com/), un [Tiling window manager](https://en.wikipedia.org/wiki/Tiling_window_manager)....
Con lo básico ya se puede empezar a contribuir.

```bash
npm install
npm i -g gulp
npm i -g karma-cli
```

El desarrollo es automatizado, por lo cual debes de tener presente lo siguiente
- Para construir usa **gulp**
```bash
gulp  # por defecto lo contruye todo
gulp watch # Permite quedarse en background esperando a que guardes un archivo
# para reconstruir esa determinada parte
gulp generate-pages # genera las gh-pages, ojo no lo hace directamente sobre
# el repo, sino en un subdirectorio *.publish* en el hay otro git copia del actual
# pero con la rama gh-pages por defecto y actualizada
```

En caso de cualquier duda acudir a la sección de **issues** y poner la
correspondiente duda.
