# Proyecto Comunitarias

Juego realizado en Phaser.

## Dependencias

En tu máquina de desarrollo necesitas tener instalado: 

- node.js 6.0+
- yarn 1.0+

## Desarrollo

Primero clona el repositorio e instalas los paquetes de JavaScript con Yarn.

``` bash
yarn install --frozen-lockfile
```

Despues puedes levantar el webpack dev server para ver tus cambios en tiempo real en tu browser.

``` bash
yarn start
```

## Colaboración

Antes de enviar un pull request, asegurate de que tu código esta debidamente formateado y que webpack logra generar el build.

Para formatear el código:


``` bash
yarn format
```


Para revisar que el build se genera correÑ

``` bash
yarn webpack
```

Si el exit code es 0 todo esta bien.

