CÓMO UTILIZAR

Crear clase:

-  Para crear una clase debemos presionar sobre el icono de la clase que se encuentra en la parte derecha.
-  Una vez presionemos este botón se abrirá un cuadro de diálogo que nos pedirá el nombre de la clase.
-  Ingresado el nombre, la clase aparecerá en el lienzo con el nombre que ingresamos y los cuatro puntos azules donde podemos crear las relaciones con otras clases.

Cambiar nombre clase:

-  Para cambiar el nombre de la clase, debemos presionar dos veces sobre el nombre de la clase o el recuadro donde se encuentra el nombre. Esto desplegará un cuadro de diálogo donde podremos ingresar el nuevo nombre.
-  Una vez ingresado el nuevo nombre, la clase se actualizará.

Añadir atributos:

-  Para añadir atributos debemos presionar dos veces sobre el sector donde se encuentran los atributos de una clase.
-  Una vez presionemos dos veces, se habilitará un menú en la parte derecha inferior donde debemos ingresar el nombre del atributo, su tipo y su acceso, todos son obligatorios.
-  Una vez añadimos los datos, presionamos crear.

Añadir métodos:

-  Para añadir métodos debemos presionar dos veces sobre el sector donde se encuentran los métodos de una clase.
-  Una vez presionemos dos veces, se habilitará un menú en la parte derecha inferior donde debemos ingresar el nombre del método, su retorno, su acceso y sus parámetros, todos son obligatorios, excepto los parámetros.
-  Una vez añadimos los datos, presionamos crear.

Crear relaciones:

-  El procedimiento es igual para cualquiera de los dos tipos de relación
-  Presionamos el icono del tipo de relación que queremos crear.
-  Una vez presionado el icono, debemos presionar sobre la clase que queremos crear la relación.
-  Luego debemos presionar sobre la clase que queremos unir.

Mover las clases:

-  Para mover las clases debemos presionar sin soltar sobre la clase que queremos desplazar.
-  Sin soltar el botón presionado, podemos desplazar la clase hacia donde queramos.

Persistencia:

-  Para guardar presionamos en el botón guardar que se encuentra en la parte derecha inferior.
-  Para obtener el último diagrama realizado presionamos sobre el botón cargar.

LÓGICA DE LAS CLASES
Si bien para canvas no existe la posibilidad de crear grupos se pueden crear clases y array de clases los cuales utilizamos bajo el siguiente concepto:
Primero se tiene un array general que contiene clases, cada una de las cuales contiene como atributos diferentes clases: 
Grupo de nombre: el cual contiene el nombre, posicion del rectangulo el cual contiene al nombre visualmente y las dimensiones del mismo
Grupo de Atributos: este contiene un array de string que contiene los atributos de la clase a la que pertenece ademas de la posicion y dimensiones del rectangulo el cual contiene al nombre visualmente y las dimensiones del mismo
Grupo de Metodos: este al igual que los demas contiene un array de string con los metodos ingresados, asi como la posicion y dimensiones del rectangulo el cual contiene al nombre visualmente y las dimensiones del mismo
Para las uniones se tiene un array de que contiene una clase de origen, una de destino y un atributo tipo boolean que indica el tipo de flecha que al que pertenece.
FUNCIONAMIENTO   

 Para característica de arrastrar se opto más por la modificación directa de la posición de cada elemento teniendo así un repintado de pantalla cada que una clase se moviera.
El guardado de clases se realiza mediante la siguiente lógica:
Clase llamada clase la cual contiene las demas clases que son los elementos
Clase llamada GrupoNombre el cual contiene el nombre de la clase, su posicion en “x“ y “y” y su ancho y alto, 
Clase llamada GrupoAtributos el cual contiene un array de los atributos como tal, su posicion y dimensiones.
Clase lllamada GrupoMetodos el cual contiene un array de los metodos, su posicion y dimensiones
Cada uno de estos objetos esta guardado en un array de clases, el cual al detectar un movimiento de cualquiera de las clases en el diagrama repinta la misma con la modificacion ya hecha.
- En cuanto a las uniones, se guardan en un array de objetos que contiene el origen, el destino y el tipo de unión a la cual pertenece
- Se tiene la opción de guardar el diagrama actual, el mismo se logra mediante el local storage, el cual solamente guarda el ultimo diagrama, este se guarda en formato json, bajo el nombre de clases y otro con el nombre de uniones. 
Para cargar este archivo se crean nuevamente los objetos y se reemplazan los arrays actuales con el de carga.

PROBLEMAS RESUELTOS 
    CANVAS
    - Dibujado de flechas: En este punto se opto por guardar en un array la clase origen, clase destino y el tipo de union
      que se necesite, para dibujar la flecha se opto por dibujar una linea desde el medio de cada clase, las cabezas de las flechas se realizaron implementando un rotate para rotar el eje y poder dibujarlas bien y un restore que vuelve a la version original de context para asi no afectar a los demas objetos

PROBLEMAS SIN RESOLVER

Las flechas sólo se unen a los puntos medios sin tomar en cuenta el contorno de la clase, esto se podria solucionar haciendo un calculo de dimensiones,
