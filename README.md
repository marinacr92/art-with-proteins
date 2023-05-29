# Art with Proteins

Primer proyecto en solitario tras finalizar el **Bootcamp de Programación Web de Adalab**. Se trata de una aplicación web con la que crear cuadros de proteínas a partir de la secuencia de aminoácidos.

## Información de la página

La web abre con el logo, que se va desvaneciendo para dar paso a la página principal. En ella podemos encontrar 3 zonas diferenciadas, el **_Header_**, con el logo de la web en la esquina superior derecha, una zona de **previsualización** de la proteína y un **_Sidebar_** a la izquierda con 3 botones:

- **Menú hamburguesa**. Al hacer clic sobre él se despliega el formulario que consta de 3 secciones:
  - Información sobre la proteína, con un _input_ de tipo texto para introducir el nombre de la proteína y con un _textarea_ para la secuencia de la misma.
  - Forma en la que se desea que se representen los aminoácidos. Podrá elegirse a través de unos _input_ de tipo radio
  - Distribución. ¿Prefieres que los aminoácidos estén pegados, con algo de separación o distribuidos en columnas? Puedes seleccionar la opción con los _input_ de tipo radio
- **Impresora**. Una vez se está content@ con el resultado es posible imprimir directamente el archivo o guardarlo en un documento PDF. En esta nueva ventana que se abre aparecerán las opciones de impresión propias de cada navegador.
- **Información de uso de la página**. Pequeña descripción de las funcionalidades de la web y leyenda con los colores que corresponden a cada aminoácido.

Además de la versión _Web_ y _Tablet_ se ha añadido una versión _Mobile_.

## Especificaciones técnicas

### Estructura

El proyecto se ha realizado en **React JS** y se encuentra dividido en `components`:

- `App`
  - `Splash`
  - `Sidebar`
    - `InfoProt`
    - `StructureOptions`
    - `GapsOptions`
  - `Header`
  - main
    - `InfoUse` / `Preview`

### Herramientas

Para la creación de la página web se ha utilizado:

**HTML** y **CSS** para la maquetación  
**SASS** como preprocesador de CSS  
**React JS** como lenguaje de programación  
**NPM** como gestor de paquetes y dependencias (WSK)  
**Gulp**, herramienta de automatización de tareas (WSK)

### Scripts disponibles

#### `npm start`

Ejecuta la aplicación en el **modo de desarrollo**.
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.
La página se volverá a cargar cuando realice cambios.
También puede ver los errores en la consola.

#### `npm run githubpages`

Prepara la aplicación para **producción** y la despliega en [GitHub Pages](https://pages.github.com/).
Borra las carpetas `build/` y `docs/` y vuelve a generar los ficheros finales.
Una vez terminado, sube la carpeta `docs/` al repositorio de **_git_**

**¡Muchas gracias!**
