(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{588:function(e,a,s){"use strict";s.r(a);var t=s(42),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"tipos-de-datos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tipos-de-datos"}},[e._v("#")]),e._v(" Tipos de datos")]),e._v(" "),s("p",[e._v("Tradicionalmente, comandos shell de Unix se han comunidado entre ellos usando cadenas de texto. Un comando generaría de salida texto a través de la salida estándar (comúnmente abreviada 'stdout') y el otro leer texto a través de la entrada estándar (o 'stdin').")]),e._v(" "),s("p",[e._v("Podemos pensar de este tipo de comunicación como basada en cadenas.")]),e._v(" "),s("p",[e._v("Nu adopta este enfoque para sus comandos y lo hacer crecer para incluir otro tipos de datos. Actualmente, Nu incluye soporte para dos tipos de datos: simple y estructurada.")]),e._v(" "),s("h2",{attrs:{id:"datos-simples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datos-simples"}},[e._v("#")]),e._v(" Datos simples")]),e._v(" "),s("p",[e._v("Al igual que muchos lenguajes de programación, Nu modela los datos usando un conjunto de tipos de datos simples y estructurados. Tipos de dato simple incluye enteros, decimales, cadenas, booleanos, fechas, y rutas. También incluye un tipo especial para tamaños de archivos.")]),e._v(" "),s("h3",{attrs:{id:"enteros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enteros"}},[e._v("#")]),e._v(" Enteros")]),e._v(" "),s("p",[e._v("Enteros (o redondos). Ejemplos incluye 1, 5, y 100.")]),e._v(" "),s("h3",{attrs:{id:"decimales"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decimales"}},[e._v("#")]),e._v(" Decimales")]),e._v(" "),s("p",[e._v("Números decimales son números con algún component fraccional. Ejemplos incluye 1.5, 2.0, y 15.333.")]),e._v(" "),s("h3",{attrs:{id:"cadenas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cadenas"}},[e._v("#")]),e._v(" Cadenas")]),e._v(" "),s("p",[e._v('Las cadenas son la manera fundamental de representar texto. Se indican con doble comillas. Ejemplos incluye "Pedro", "minombre.txt", and "Lynchburg, VA".')]),e._v(" "),s("p",[e._v("Cadenas en Nu son compatibles con Unicode de manera predeterminada, por lo que puedes pasar texto UTF-8 con facilidad.")]),e._v(" "),s("h3",{attrs:{id:"booleanos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#booleanos"}},[e._v("#")]),e._v(" Booleanos")]),e._v(" "),s("p",[e._v("Booleanos son el estado de verdadero o falso. En vez de escribir el valor directamente, comúnmente es el resultado de una comparación.")]),e._v(" "),s("h3",{attrs:{id:"fechas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fechas"}},[e._v("#")]),e._v(" Fechas")]),e._v(" "),s("p",[e._v("Fechas y horas se mantienen juntas en el valor tipo de dato Date. Valores Date usados por el sistema reconocen la zona horaria y de manera predeterminada usa la zona horaria UTC.")]),e._v(" "),s("h3",{attrs:{id:"rutas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rutas"}},[e._v("#")]),e._v(" Rutas")]),e._v(" "),s("p",[e._v("Las rutas son una forma independiente de la plataforma para representar rutas de archivos en el sistema operativo dado. Ejemplos incluyen: /usr/bin y C:\\Users\\archivo.txt.")]),e._v(" "),s("h3",{attrs:{id:"bytes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bytes"}},[e._v("#")]),e._v(" Bytes")]),e._v(" "),s("p",[e._v("Tamaños de archivos se mantienen dentro de un tipo especial de entero llamado bytes. Ejemplos incluye 100, 15kb, y 100mb.")]),e._v(" "),s("h2",{attrs:{id:"datos-estructurados"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datos-estructurados"}},[e._v("#")]),e._v(" Datos estructurados")]),e._v(" "),s("p",[e._v("Los datos estructurados se construyen a partir de los datos simples. Por ejemplo, en lugar de un solo entero, datos estructurados nos ofrece una manera de representar múltiples enteros en el mismo valor. Esta es una lista actual de los tipos de dato estructurados soportadas: objetos, datos binarios, listas, y bloques.")]),e._v(" "),s("h3",{attrs:{id:"objetos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objetos"}},[e._v("#")]),e._v(" Objetos")]),e._v(" "),s("p",[e._v("El tipo de dato object representa lo que observarías en una fila de datos de una tabla. Tiene diferentes elementos de datos y cada elemento de dato se le asigna un nombre de columna.")]),e._v(" "),s("h3",{attrs:{id:"datos-binarios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#datos-binarios"}},[e._v("#")]),e._v(" Datos binarios")]),e._v(" "),s("p",[e._v("Datos binarios como los datos de un archivo de imagen, es un grupo de bytes sin formato.")]),e._v(" "),s("h3",{attrs:{id:"listas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listas"}},[e._v("#")]),e._v(" Listas")]),e._v(" "),s("p",[e._v("Las listas pueden tener más de un valor. Esto les permite ser un buen contenedor de filas de datos de una tabla.")]),e._v(" "),s("h3",{attrs:{id:"bloques"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bloques"}},[e._v("#")]),e._v(" Bloques")]),e._v(" "),s("p",[e._v("Bloques representan bloques de código en Nu. Por ejemplo, en el comando "),s("code",[e._v("where { $it.size > 10kb }")]),e._v(" el bloque es la porción contenida en las llaves, "),s("code",[e._v("{ $it.size > 10kb }")]),e._v(". Los bloques son una manera útil de representar código que puede ser ejecutado para cada fila de datos.")])])}),[],!1,null,null,null);a.default=o.exports}}]);