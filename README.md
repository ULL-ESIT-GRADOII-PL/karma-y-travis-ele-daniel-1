# Conversor de temperaturas

[![Build Status](https://travis-ci.org/EleDiaz/karma-y-travis-ele-daniel-1.svg?branch=master)](https://travis-ci.org/EleDiaz/karma-y-travis-ele-daniel-1)

Este conversor de temperatura usa webpack para minificar los js y organizar los modulos
javascript instalados con node.

Además se hace uso de gulp-gh-pages para generar automáticamente las gh-pages, esto
significa que la página principal está en master y no en gh-pages. No esperes un readme
en esa rama.

# TODO
- [ ] Terminar de editar el readme
- [ ] Solucionar el travis
- [ ] Usar karma
- [x] Arreglado los errores al cambiar a un gestionador de mádulos
- [ ] Errores de sintaxis rompen el *gulp watch*
- [ ] Eliminar los archivos basura de la rama gh-pages (.map)
- [ ] Puede ser buena idea organizar vendor en js, css *No importante*
- [ ] Ver si ahora es posible correr las pruebas mocha desde terminal.

En el [gulpfile](./gulpfile.js) se definen las tareas de compresion y minificacion de los archivos js.

En la siguiente página se encuentran las pruebas. [Tests Page](http://ull-esit-gradoii-pl.github.io/mocha-y-chai-ele-daniel-1/test/index.html)

# Links

**Repositorio GitHuB**

* [Repositorio](https://github.com/ULL-ESIT-GRADOII-PL/mocha-y-chai-ele-daniel-1)

**Página de la práctica**

* [Web](http://ull-esit-gradoii-pl.github.io/mocha-y-chai-ele-daniel-1/)

**Páginas de los autores**

* [Web Daniel](http://alu0100783230.github.io/)
* [Web Eleazar](http://elediaz.github.io/)


**Página de la práctica**

* [Página de la asignatura](https://campusvirtual.ull.es/1516/mod/page/view.php?id=177984)

# Cómo contribuir?

Instala *terminator*, [fish](https://fishshell.com/). Con lo básico ya se puede
empezar a contribuir.

> node install
> node i -g gulp

El desarrollo es automatizado, por lo cual debes de tener presente lo siguiente
- Para construir usa *gulp*
```bash
gulp  # por defecto lo contruye todo
gulp watch # Permite se queda en background esperando a que guardes un archivo
# para reconstruir ese determinada parte
gulp generate-pages # genera las gh-pages, ojo no lo hace directamente sobre
# el repo, sino en un subdirectorio *.publish* en el hay otro git copia del actual
# pero con la rama gh-pages por defecto y actualizada
```

En caso de cualquier duda acudir a la sección de *issues*, poner la
correspondiente duda.
