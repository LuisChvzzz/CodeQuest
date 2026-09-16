// Letreros con Datos Curiosos de Java distribuidos en el mapa
// Cada letrero corresponde pedagógicamente a uno de los 20 Jefes y su banco de 20 preguntas
const SIGNS_DATA = [
  {
    id: 1,
    bossLevel: 1,
    title: "Dato Curioso #1: Estructura Básica y el Método main()",
    category: "Sintaxis Java",
    icon: "📜",
    text: "Dato Curioso: Todo programa ejecutable en Java requiere un punto de entrada exacto: 'public static void main(String[] args)'. Los bloques de código se delimitan con llaves { }, cada sentencia termina con punto y coma (;) y el nombre del archivo debe coincidir exactamente con el de la clase pública.",
    position: { x: 11, y: 8 }
  },
  {
    id: 2,
    bossLevel: 2,
    title: "Dato Curioso #2: Variables e Inicialización",
    category: "Tipos Primitivos",
    icon: "🛡️",
    text: "Dato Curioso: Las variables son espacios de memoria donde guardamos datos, y se inicializan de la siguiente manera: 'tipo nombre = valor;' por ejemplo: 'int nivel = 10; double vida = 99.5; boolean activo = true;'. Java tiene 8 tipos primitivos y 'String' es una clase de referencia.",
    position: { x: 19, y: 8 }
  },
  {
    id: 3,
    bossLevel: 3,
    title: "Dato Curioso #3: Operadores y el Módulo %",
    category: "Operadores",
    icon: "⚙️",
    text: "Dato Curioso: Los operadores matemáticos son +, -, *, / y %. El operador módulo '%' calcula el residuo de una división entera (por ejemplo 19 % 4 es 3). Los operadores lógicos '&&' (AND) y '||' (OR) evalúan con cortocircuito para acelerar la ejecución.",
    position: { x: 11, y: 22 }
  },
  {
    id: 4,
    bossLevel: 4,
    title: "Dato Curioso #4: Salida por Consola y Concatenación",
    category: "Entrada y Salida",
    icon: "💬",
    text: "Dato Curioso: Para mostrar mensajes en pantalla usamos 'System.out.println()', que añade un salto de línea automático, mientras que 'System.out.print()' mantiene el cursor en la misma línea. El operador '+' sirve para concatenar texto: '\"Nivel: \" + 5' produce '\"Nivel: 5\"'.",
    position: { x: 19, y: 22 }
  },
  {
    id: 5,
    bossLevel: 5,
    title: "Dato Curioso #5: Estructuras If, Else If y Else",
    category: "Control de Flujo",
    icon: "🔱",
    text: "Dato Curioso: Las condiciones en Java se evalúan con 'if (condición) { ... } else { ... }'. La condición siempre debe ser una expresión de tipo boolean (true o false). Para comparar igualdad entre primitivos se usa '==' y para desigualdad '!='.",
    position: { x: 15, y: 18 }
  },
  {
    id: 6,
    bossLevel: 6,
    title: "Dato Curioso #6: Sentencia Switch y el Break",
    category: "Estructuras de Control",
    icon: "🔮",
    text: "Dato Curioso: 'switch' permite evaluar una variable contra múltiples casos ('case'). Es fundamental colocar 'break;' al final de cada caso; de lo contrario ocurrirá un 'fall-through' ejecutando los siguientes casos sin verificar. 'default:' atrapa los valores no contemplados.",
    position: { x: 44, y: 8 }
  },
  {
    id: 7,
    bossLevel: 7,
    title: "Dato Curioso #7: Bucles While y Do-While",
    category: "Bucles",
    icon: "🌀",
    text: "Dato Curioso: El bucle 'while (condición)' verifica la condición antes de entrar al cuerpo; si es falsa desde el inicio, nunca se ejecuta. En cambio, 'do { ... } while (condición);' garantiza que el bloque de código se ejecutará al menos una vez antes de comprobar la condición.",
    position: { x: 52, y: 8 }
  },
  {
    id: 8,
    bossLevel: 8,
    title: "Dato Curioso #8: El Bucle For y For-Each",
    category: "Iteraciones",
    icon: "🐉",
    text: "Dato Curioso: La estructura tradicional 'for (inicialización; condición; incremento)' como 'for (int i = 0; i < 10; i++)' es ideal cuando conocemos el número exacto de repeticiones. Java también ofrece el 'for-each' ('for (Tipo elemento : coleccion)') para recorrer arreglos sin manejar índices.",
    position: { x: 44, y: 22 }
  },
  {
    id: 9,
    bossLevel: 9,
    title: "Dato Curioso #9: Arreglos e Índices en Cero",
    category: "Estructuras de Datos",
    icon: "👁️",
    text: "Dato Curioso: Los arreglos (arrays) en Java son de tamaño fijo y sus índices comienzan siempre en 0. Se declaran como 'int[] numeros = new int[5];'. El primer elemento está en 'numeros[0]' y el último en 'numeros[numeros.length - 1]'. ¡Acceder fuera de rango lanza un ArrayIndexOutOfBoundsException!",
    position: { x: 52, y: 22 }
  },
  {
    id: 10,
    bossLevel: 10,
    title: "Dato Curioso #10: La Inmutabilidad de String",
    category: "Clase String",
    icon: "🧜‍♀️",
    text: "Dato Curioso: Los objetos String en Java son inmutables: una vez creados, su contenido nunca cambia en memoria; cualquier método como '.toUpperCase()' o '.replace()' crea un nuevo objeto String. Para comparar el contenido de texto SIEMPRE se debe usar 'str1.equals(str2)' y nunca '=='.",
    position: { x: 48, y: 18 }
  },
  {
    id: 11,
    bossLevel: 11,
    title: "Dato Curioso #11: Métodos y Parámetros por Valor",
    category: "Funciones",
    icon: "🗡️",
    text: "Dato Curioso: En Java TODOS los argumentos se pasan estrictamente por valor (pass-by-value). Un método modulariza tareas y se declara con su modificador, tipo de retorno, nombre y lista de parámetros: 'public int sumar(int a, int b) { return a + b; }'.",
    position: { x: 11, y: 41 }
  },
  {
    id: 12,
    bossLevel: 12,
    title: "Dato Curioso #12: Sentencia Return y Métodos Void",
    category: "Retorno",
    icon: "🦅",
    text: "Dato Curioso: La palabra clave 'return' finaliza inmediatamente la ejecución del método y devuelve un valor a quien lo invocó. Si el método se declara con 'void', no retorna nada y 'return;' solo se utiliza de manera opcional para salir anticipadamente de la función.",
    position: { x: 19, y: 41 }
  },
  {
    id: 13,
    bossLevel: 13,
    title: "Dato Curioso #13: Ámbito (Scope) y Palabra Clave 'this'",
    category: "Alcance",
    icon: "🌌",
    text: "Dato Curioso: Las variables declaradas dentro de un bloque { } solo existen dentro de esas llaves (ámbito local). Para diferenciar un atributo de clase de un parámetro con el mismo nombre, usamos 'this.atributo = parametro;', donde 'this' hace referencia a la instancia actual.",
    position: { x: 11, y: 55 }
  },
  {
    id: 14,
    bossLevel: 14,
    title: "Dato Curioso #14: Constructores y el Operador New",
    category: "POO - Objetos",
    icon: "💀",
    text: "Dato Curioso: El operador 'new' reserva memoria en el Heap e invoca al constructor para crear una nueva instancia: 'Heroe h = new Heroe(\"Arturo\");'. Los constructores tienen el mismo nombre exacto que la clase y no tienen tipo de retorno (ni siquiera void).",
    position: { x: 19, y: 55 }
  },
  {
    id: 15,
    bossLevel: 15,
    title: "Dato Curioso #15: Encapsulamiento, Getters y Setters",
    category: "POO - Seguridad",
    icon: "🔒",
    text: "Dato Curioso: El encapsulamiento protege los datos del objeto marcando sus atributos como 'private' y ofreciendo métodos públicos 'getAtributo()' y 'setAtributo(valor)' para leerlos y modificarlos de forma controlada y con validaciones.",
    position: { x: 15, y: 45 }
  },
  {
    id: 16,
    bossLevel: 16,
    title: "Dato Curioso #16: Herencia con 'extends' y 'super'",
    category: "POO - Herencia",
    icon: "🦁",
    text: "Dato Curioso: La herencia permite crear subclases reutilizando código mediante la palabra clave 'extends': 'class Mago extends Personaje'. Java no permite herencia múltiple de clases. La palabra reservada 'super()' invoca al constructor de la clase padre.",
    position: { x: 44, y: 41 }
  },
  {
    id: 17,
    bossLevel: 17,
    title: "Dato Curioso #17: Polimorfismo y @Override",
    category: "POO - Polimorfismo",
    icon: "🗿",
    text: "Dato Curioso: El polimorfismo permite que una referencia de la clase padre apunte a un objeto hijo y ejecute el método especializado en tiempo de ejecución. La anotación '@Override' es una buena práctica obligatoria para indicarle al compilador que estamos sobreescribiendo un método heredado.",
    position: { x: 52, y: 41 }
  },
  {
    id: 18,
    bossLevel: 18,
    title: "Dato Curioso #18: Interfaces y Contratos con 'implements'",
    category: "POO - Interfaces",
    icon: "📜",
    text: "Dato Curioso: Una interfaz es un contrato de comportamiento donde los métodos son abstractos por defecto. Una clase implementa una interfaz con 'implements Interfaz'. A diferencia de las clases, ¡una clase sí puede implementar múltiples interfaces separadas por comas!",
    position: { x: 44, y: 55 }
  },
  {
    id: 19,
    bossLevel: 19,
    title: "Dato Curioso #19: Referencias Null y NullPointerException",
    category: "Manejo de Memoria",
    icon: "👻",
    text: "Dato Curioso: 'null' es un valor literal especial que indica que una variable de referencia no apunta a ningún objeto en memoria. Intentar invocar un método o atributo sobre una referencia null provoca el temido 'NullPointerException' (NPE). ¡Siempre verifica 'if (obj != null)' antes de usarlo!",
    position: { x: 52, y: 55 }
  },
  {
    id: 20,
    bossLevel: 20,
    title: "Dato Curioso #20: Arquitectura JVM y Bloque Try-Catch",
    category: "JVM y Excepciones",
    icon: "🧙‍♂️",
    text: "Dato Curioso: El código Java se compila a Bytecode (.class) que la Máquina Virtual Java (JVM) ejecuta en cualquier sistema operativo. Para manejar errores en tiempo de ejecución sin colapsar el programa se usa 'try { ... } catch (Exception e) { ... } finally { ... }', donde 'finally' se ejecuta siempre.",
    position: { x: 48, y: 44 }
  }
];
