// Letreros con Datos Curiosos de Java distribuidos en el mapa
// Contiene 42 letreros estratégicos (2 por cada uno de los 20 jefes + 2 en la Plaza Central)
// Cubren el 100% de los temas, conceptos y respuestas de las 400 preguntas del juego
const SIGNS_DATA = [
  {
    "id": 1,
    "bossLevel": 0,
    "title": "Sabiduría Central: El Reino de Java y la Gran Travesía",
    "category": "Introducción",
    "icon": "assets/icons/pergamino.png",
    "text": "¡Bienvenido a Bytevalia, héroe de la programación!\n\n• El reino está dividido en 4 grandes regiones gobernadas por 20 Guardianes del Código Java.\n• A lo largo de cada sendero encontrarás Carteles de Datos Curiosos con los principios, reglas y secretos necesarios para triunfar.\n• ¡Estudia cada letrero con atención! El conocimiento es tu arma más poderosa: cada respuesta correcta desatará golpes devastadores contra los jefes.",
    "position": {
      "x": 30,
      "y": 30
    }
  },
  {
    "id": 2,
    "bossLevel": 0,
    "title": "Sabiduría Central: Consejos de Supervivencia y Combate",
    "category": "Mecánicas",
    "icon": "assets/icons/foco.png",
    "text": "Estrategia del Sabio de Bytevalia:\n\n• Inspecciona cofres a lo largo de los senderos para hallar Pociones de curación, Llaves y Espadas que aumentan tu poder de ataque.\n• Cada jefe evalúa un área fundamental de Java. Si fallas una pregunta, el jefe contraatacará, pero se abrirá el Cuadro de Sabiduría con la explicación detallada.\n• Recuerda: puedes pausar en cualquier instante con la tecla ESC o el botón superior.",
    "position": {
      "x": 33,
      "y": 30
    }
  },
  {
    "id": 3,
    "bossLevel": 1,
    "title": "Dato Curioso #1A: Estructura Básica y el Método main()",
    "category": "Sintaxis Java",
    "icon": "assets/icons/pergamino.png",
    "text": "Reglas de Oro del Método Principal y Estructura:\n\n• Firma de Ejecución: Todo programa ejecutable en Java requiere el punto de entrada exacto: 'public static void main(String[] args)'.\n• static: Permite a la JVM invocar main() directamente a nivel de clase, sin necesidad de crear una instancia del objeto.\n• void: Indica que el método main no retorna ningún valor al finalizar.\n• String[] args: Arreglo de cadenas que recibe los argumentos pasados por línea de comandos.\n• Delimitadores: Cada sentencia termina obligatoriamente con punto y coma (;), y los bloques de código se delimitan con llaves { }.\n• Comentarios: Se usa '//' para comentarios de una sola línea y '/* ... */' para comentarios de múltiples líneas.",
    "position": {
      "x": 12,
      "y": 7
    }
  },
  {
    "id": 4,
    "bossLevel": 1,
    "title": "Dato Curioso #1B: Clases, Nombres de Archivos y Compilación",
    "category": "Sintaxis Java",
    "icon": "assets/icons/foco.png",
    "text": "Convenciones y Ciclo del Código:\n\n• Archivos y Clases Públicas: El nombre del archivo '.java' DEBE coincidir exactamente con el nombre de la clase pública (ej. 'public class Heroe' en 'Heroe.java'). Solo puede haber UNA única clase pública por archivo.\n• Case-Sensitive: Java es estrictamente sensible a mayúsculas y minúsculas ('heroe' y 'Heroe' son totalmente distintos).\n• Nomenclatura: Las clases se escriben en PascalCase (primera letra mayúscula) y los métodos/variables en camelCase.\n• Identificadores Válidos: Pueden contener letras, dígitos, guiones bajos (_) y signo de dólar ($). NUNCA pueden comenzar con número ni ser palabras reservadas (ej. 'class', 'static').\n• Paquete Automático: El paquete 'java.lang' se importa de forma automática e implícita en todos los programas.\n• Documentación y Bytecode: La herramienta 'Javadoc' genera documentación HTML a partir de comentarios '/** */'. El compilador 'javac' compila el archivo .java a Bytecode (.class).",
    "position": {
      "x": 10,
      "y": 8
    }
  },
  {
    "id": 5,
    "bossLevel": 2,
    "title": "Dato Curioso #2A: Los 8 Tipos Primitivos de Java",
    "category": "Tipos Primitivos",
    "icon": "assets/icons/pergamino.png",
    "text": "Los 8 Tipos Primitivos Fundamentales:\n\n• Java tiene exactamente 8 tipos primitivos. ¡Ojo! 'String' NO es un primitivo, es una clase de referencia.\n• boolean: Almacena únicamente 'true' o 'false' (su valor por defecto es false).\n• byte: 8 bits con signo, rango de -128 a 127.\n• short: 16 bits con signo.\n• int: 32 bits con signo (tipo entero estándar en Java).\n• long: 64 bits de memoria. Sus literales numéricos requieren el sufijo 'L' (ej. 10000000000L).\n• float: 32 bits en coma flotante (precisión simple). Requiere obligatoriamente el sufijo 'f' o 'F' (ej. 3.14f).\n• double: 64 bits en coma flotante (doble precisión). Es el tipo decimal por defecto en Java.\n• char: 16 bits Unicode para un único carácter entre comillas simples (ej. 'A').",
    "position": {
      "x": 17,
      "y": 8
    }
  },
  {
    "id": 6,
    "bossLevel": 2,
    "title": "Dato Curioso #2B: Inicialización, Constantes final y Casting",
    "category": "Variables y Memoria",
    "icon": "assets/icons/foco.png",
    "text": "Reglas de Variables y Conversiones:\n\n• Declaración e Inicialización: Se declara con 'tipo nombre = valor;' (ej. 'int edad = 20;').\n• Valores por Defecto: Variables numéricas de instancia se inicializan automáticamente en 0; boolean en false; referencias en null.\n• Constantes Inmutables: La palabra reservada 'final' impide reasignar una variable. Por convención se nombran en MAYUSCULAS_CON_GUION_BAJO (ej. 'final int MAX_VIDA = 100;').\n• Inferencia con var: Introducido en Java 10, 'var' permite inferir el tipo automáticamente en variables locales al inicializarlas.\n• Type Casting (Casteo): Convertir de double a int requiere casteo explícito con '(int) miDouble', lo cual trunca la parte decimal.",
    "position": {
      "x": 19,
      "y": 7
    }
  },
  {
    "id": 7,
    "bossLevel": 3,
    "title": "Dato Curioso #3A: Operadores Matemáticos, Módulo y División",
    "category": "Aritmética",
    "icon": "assets/icons/pergamino.png",
    "text": "Cálculos y Precedencia en Java:\n\n• Operadores Básicos: +, -, *, / y %.\n• Módulo (%): Calcula el residuo exacto de la división entera. Por ejemplo, '19 % 4' resulta en 3 (19 = 4*4 + 3); y '15 % 5' resulta en 0 porque la división es exacta.\n• División Entera: '7 / 2' en Java da 3 (trunca los decimales). Para obtener 3.5, al menos un operando debe ser decimal: '7.0 / 2'.\n• Asignación Compuesta: 'x += 5' equivale a 'x = x + 5'; 'x -= 3' equivale a 'x = x - 3'.\n• Pre-incremento vs Post-incremento: '++x' suma 1 antes de evaluar la expresión; 'x++' entrega el valor actual y luego suma 1.\n• Precedencia: Multiplicación (*), división (/) y módulo (%) se evalúan antes que suma y resta. Los paréntesis ( ) permiten forzar el orden deseado.",
    "position": {
      "x": 14,
      "y": 25
    }
  },
  {
    "id": 8,
    "bossLevel": 3,
    "title": "Dato Curioso #3B: Lógica de Cortocircuito y Operador Ternario",
    "category": "Lógica y Bits",
    "icon": "assets/icons/foco.png",
    "text": "Evaluación Booleana y Desplazamientos:\n\n• AND Cortocircuito (&&): Evalúa true solo si ambos operandos son true. Si el primero es false, ¡no evalúa el segundo!\n• OR Cortocircuito (||): Evalúa true si al menos un operando es true. Si el primero es true, no evalúa el segundo.\n• NOT (!): Invierte el valor lógico ('!false' es true; '!true' es false).\n• Comparación: '==' compara si dos valores primitivos son iguales; '!=' comprueba si son diferentes.\n• Operador Ternario (? :): Expresión compacta: 'condicion ? valorSiTrue : valorSiFalse;'. Ejemplo: '(x > 10) ? 1 : 2;'.\n• Desplazamiento de Bits: '<<' desplaza los bits de un entero a la izquierda multiplicando por potencias de 2.",
    "position": {
      "x": 11,
      "y": 22
    }
  },
  {
    "id": 9,
    "bossLevel": 4,
    "title": "Dato Curioso #4A: System.out.println() y Concatenación",
    "category": "Salida Estándar",
    "icon": "assets/icons/pergamino.png",
    "text": "Impresión en Consola y Operador +:\n\n• println vs print: 'System.out.println()' imprime y añade un salto de línea automático al final; 'System.out.print()' imprime manteniendo el cursor en la misma línea.\n• println() sin argumentos simplemente imprime una línea vacía.\n• Concatenación de Izquierda a Derecha:\n  - '\"A\" + 1 + 2' produce '\"A12\"' (texto + número = texto).\n  - '1 + 2 + \"A\"' produce '\"3A\"' (suma 1+2=3 y luego concatena '\"A\"').\n• Expresiones Booleanas: 'System.out.println(5 == 5)' imprime 'true'; 'System.out.println(10 > 20)' imprime 'false'.\n• Longitud en Impresión: 'System.out.println(\"Java\".length())' imprime 4.",
    "position": {
      "x": 17,
      "y": 22
    }
  },
  {
    "id": 10,
    "bossLevel": 4,
    "title": "Dato Curioso #4B: Secuencias de Escape, printf() y Scanner",
    "category": "Entrada y Formato",
    "icon": "assets/icons/foco.png",
    "text": "Secuencias Especiales y Formateo:\n\n• Secuencias de Escape en Cadenas:\n  - '\\n': Salto de línea.\n  - '\\t': Tabulación horizontal.\n  - '\\\"': Comilla doble literal dentro de un String.\n  - '\\\\': Barra invertida literal.\n• Formateo con printf() y format(): Permiten usar especificadores como '%d' para enteros, '%s' para cadenas String y '%f' para decimales.\n• Flujos del Sistema: 'System.out' es la salida estándar, 'System.err' es la salida de errores y 'System.in' es el flujo de entrada por teclado.\n• Lectura de Teclado: La clase 'java.util.Scanner' se utiliza frecuentemente para leer datos de System.in.",
    "position": {
      "x": 19,
      "y": 21
    }
  },
  {
    "id": 11,
    "bossLevel": 5,
    "title": "Dato Curioso #5A: Estructura Condicional if - else",
    "category": "Control de Flujo",
    "icon": "assets/icons/pergamino.png",
    "text": "Decisiones Lógicas en Java:\n\n• Condición Booleana Estricta: En Java, la condición dentro de 'if (condicion)' DEBE evaluar obligatoriamente a un tipo 'boolean' (true o false). No se admiten números como en C o JS.\n• Ramas if - else: Si la condición es true, se ejecuta el bloque del if; si es false, se ejecuta el bloque del else.\n• Encadenamiento else if: Permite comprobar múltiples condiciones mutuamente excluyentes en secuencia.\n• Un 'if' puede existir perfectamente sin ningún bloque 'else' si no se requiere acción en caso negativo.",
    "position": {
      "x": 14,
      "y": 18
    }
  },
  {
    "id": 12,
    "bossLevel": 5,
    "title": "Dato Curioso #5B: Operadores Relacionales y Buenas Prácticas",
    "category": "Condicionales",
    "icon": "assets/icons/foco.png",
    "text": "Operadores y Bloques Anidados:\n\n• Operadores de Comparación: '>' (mayor), '<' (menor), '>=' (mayor o igual), '<=' (menor o igual), '==' (igual), '!=' (diferente).\n• Llaves de Bloque: Si el cuerpo de un if/else tiene una sola instrucción, las llaves { } son técnicamente opcionales, pero es una buena práctica OBLIGATORIA incluirlas siempre para evitar bugs.\n• Condiciones Anidadas: Se puede colocar un bloque if dentro de otro para crear árboles de decisión complejos.\n• Cortocircuito: En condiciones compuestas con '&&' y '||', Java deja de evaluar operandos tan pronto como el resultado final está garantizado.",
    "position": {
      "x": 15,
      "y": 13
    }
  },
  {
    "id": 13,
    "bossLevel": 6,
    "title": "Dato Curioso #6A: Sentencia switch, break y Fall-Through",
    "category": "Selección Múltiple",
    "icon": "assets/icons/pergamino.png",
    "text": "Bifurcaciones con switch:\n\n• Estructura: 'switch (expresion)' compara un valor contra múltiples casos ('case valor:').\n• Importancia de break: La sentencia 'break;' finaliza la ejecución y sale del switch de inmediato.\n• Peligro de Fall-Through: Si olvidas colocar 'break;', la ejecución continuará hacia los casos siguientes sin evaluar sus condiciones, ejecutando código no deseado.\n• Etiqueta default: El bloque 'default:' se ejecuta cuando ninguno de los casos coincide con el valor evaluado. Aunque suele ponerse al final, puede ir en cualquier parte del switch.",
    "position": {
      "x": 46,
      "y": 8
    }
  },
  {
    "id": 14,
    "bossLevel": 6,
    "title": "Dato Curioso #6B: Tipos Permitidos en switch",
    "category": "Reglas de switch",
    "icon": "assets/icons/foco.png",
    "text": "Compatibilidad de Tipos en switch:\n\n• Tipos Permitidos: 'byte', 'short', 'char', 'int', tipos enumerados ('enum') y cadenas 'String' (incorporadas a partir de Java 7).\n• Tipos Prohibidos: NO se pueden usar tipos decimales ('float', 'double'), ni 'boolean', ni enteros 'long'.\n• Constantes de Caso: Los valores colocados en cada 'case' deben ser literales constantes o constantes 'final' conocidas en tiempo de compilación; no pueden ser variables dinámicas.\n• El cuerpo del switch se encierra completamente entre llaves { }.",
    "position": {
      "x": 44,
      "y": 7
    }
  },
  {
    "id": 15,
    "bossLevel": 7,
    "title": "Dato Curioso #7A: Bucle while vs do-while",
    "category": "Bucles",
    "icon": "assets/icons/pergamino.png",
    "text": "Comparación de Bucles Indeterminados:\n\n• Bucle while: Comprueba la condición al INICIO. Si la condición es falsa desde el primer momento, el cuerpo se ejecuta 0 veces.\n• Bucle do-while: Comprueba la condición al FINAL. Por eso, garantiza SIEMPRE al menos UNA ejecución de su cuerpo antes de evaluar la condición.\n• Sintaxis Estricta: La estructura do-while termina obligatoriamente con un punto y coma tras el while: 'do { ... } while (condicion);'. Si se omite el ';', causará un error de compilación.",
    "position": {
      "x": 50,
      "y": 8
    }
  },
  {
    "id": 16,
    "bossLevel": 7,
    "title": "Dato Curioso #7B: Bucles Infinitos, break y continue",
    "category": "Control de Bucles",
    "icon": "assets/icons/foco.png",
    "text": "Manejo de Iteraciones y Salidas:\n\n• Bucle Infinito: Ocurre cuando la condición nunca cambia a false (ej. 'while (true)').\n• Variable de Control: Es fundamental actualizar la variable de control dentro del cuerpo (ej. 'k++') para que eventualmente se cumpla la condición de salida.\n• break en Bucles: Termina abruptamente el bucle y transfiere el control a la línea posterior.\n• continue en Bucles: Detiene la iteración actual y salta de inmediato a la comprobación de la siguiente condición.",
    "position": {
      "x": 52,
      "y": 7
    }
  },
  {
    "id": 17,
    "bossLevel": 8,
    "title": "Dato Curioso #8A: Estructura del Bucle for Clásico",
    "category": "Iteraciones Determinadas",
    "icon": "assets/icons/pergamino.png",
    "text": "El Encabezado de 3 Secciones del for:\n\n• Encabezado: 'for (inicializacion; condicion; actualizacion) { cuerpo }'.\n• Orden de Ejecución: 1) Inicialización (se ejecuta una sola vez) -> 2) Comprobación de condición -> 3) Ejecuta el cuerpo -> 4) Actualización/incremento -> 5) Repite desde el paso 2.\n• Repeticiones: 'for (int i = 0; i < 5; i++)' itera exactamente 5 veces (para i = 0, 1, 2, 3, 4).\n• Ámbito de la Variable: La variable declarada en el encabezado ('int i') existe EXCLUSIVAMENTE dentro del bucle for; fuera de las llaves no se reconoce.\n• Bucle Infinito: 'for (;;)' es la sintaxis válida para un bucle for infinito.",
    "position": {
      "x": 46,
      "y": 22
    }
  },
  {
    "id": 18,
    "bossLevel": 8,
    "title": "Dato Curioso #8B: Bucle for-each y Bucles Anidados",
    "category": "Colecciones y Anidamiento",
    "icon": "assets/icons/foco.png",
    "text": "For Mejorado y Matrices:\n\n• Bucle for-each (Enhanced for): 'for (Tipo elem : coleccion)' recorre todos los elementos de un arreglo o lista sin necesidad de manejar contadores numéricos ni acceder por índices.\n• Bucles Anidados: Colocar un bucle dentro de otro (ej. para matrices o tablas de multiplicar). Por cada ciclo del bucle exterior, el bucle interior se ejecuta por completo.\n• break en Anidados: La sentencia 'break' por defecto sale únicamente del bucle más interno donde se encuentra, a menos que se use una etiqueta ('label').",
    "position": {
      "x": 44,
      "y": 21
    }
  },
  {
    "id": 19,
    "bossLevel": 9,
    "title": "Dato Curioso #9A: Declaración, Índices y Propiedad .length",
    "category": "Arreglos (Arrays)",
    "icon": "assets/icons/pergamino.png",
    "text": "Fundamentos de Arreglos en Java:\n\n• Tamaño Fijo: Los arreglos en Java son objetos de longitud fija. Se declaran como 'int[] arr = new int[5];'.\n• Índice Cero: El primer elemento de todo arreglo está en el índice 'arr[0]', y el último en 'arr[arr.length - 1]'.\n• Propiedad .length: La cantidad de casillas de un arreglo se consulta mediante '.length' (es un atributo, ¡sin paréntesis!).\n• Valores por Defecto: Al crear un arreglo con new, sus elementos numéricos se inicializan en 0, los booleanos en false y los de objetos en null.\n• Inicialización Rápida: Se pueden declarar con valores iniciales entre llaves: 'int[] numeros = { 10, 20, 30 };'.",
    "position": {
      "x": 50,
      "y": 22
    }
  },
  {
    "id": 20,
    "bossLevel": 9,
    "title": "Dato Curioso #9B: Límites, Excepciones y Arreglos Bidimensionales",
    "category": "Matrices y Seguridad",
    "icon": "assets/icons/foco.png",
    "text": "Límites y Matrices Multidimensionales:\n\n• ArrayIndexOutOfBoundsException: Intentar acceder a un índice menor a 0 o mayor o igual a arr.length lanza esta excepción fatal en tiempo de ejecución.\n• Matrices (2D): Se declaran con corchetes dobles: 'int[][] matriz = new int[filas][columnas];'.\n• Dimensiones de Matriz: 'matriz.length' retorna el número de filas, mientras que 'matriz[0].length' entrega la cantidad de columnas de esa fila.\n• Recorrido Completo: Para imprimir o recorrer una matriz se suelen utilizar dos bucles for anidados.",
    "position": {
      "x": 52,
      "y": 21
    }
  },
  {
    "id": 21,
    "bossLevel": 10,
    "title": "Dato Curioso #10A: Inmutabilidad de String y Comparación con equals()",
    "category": "Clase String",
    "icon": "assets/icons/pergamino.png",
    "text": "Inmutabilidad y String Pool:\n\n• Inmutabilidad: Los objetos 'String' son inmutables; una vez instanciados en memoria, su contenido nunca cambia. Métodos como '.toUpperCase()' retornan una cadena completamente nueva.\n• Comparación de Texto: Para comparar el contenido de texto SIEMPRE se debe usar 's1.equals(s2)'. El operador '==' compara si apuntan al mismo espacio en memoria, lo que causa errores lógicos.\n• equalsIgnoreCase(): Compara el contenido ignorando diferencias entre mayúsculas y minúsculas.\n• Longitud: Se obtiene con el método 's.length()' (¡con paréntesis, a diferencia de los arreglos!).",
    "position": {
      "x": 47,
      "y": 18
    }
  },
  {
    "id": 22,
    "bossLevel": 10,
    "title": "Dato Curioso #10B: Métodos Clave de String y StringBuilder",
    "category": "Manipulación de Texto",
    "icon": "assets/icons/foco.png",
    "text": "Métodos Esenciales y Rendimiento:\n\n• charAt(i): Devuelve el carácter en el índice especificado (comienza en 0). Si el índice es inválido lanza 'StringIndexOutOfBoundsException'.\n• indexOf(\"x\"): Retorna la primera posición donde aparece el texto, o '-1' si no existe.\n• substring(inicio, fin): Extrae el fragmento desde 'inicio' inclusive hasta 'fin' exclusivo.\n• contains(\"x\"): Retorna true si la subcadena está presente.\n• StringBuilder: Para concatenaciones intensivas en bucles, se debe usar 'StringBuilder' en vez de '+' para evitar crear cientos de objetos inmutables innecesarios en memoria.",
    "position": {
      "x": 48,
      "y": 13
    }
  },
  {
    "id": 23,
    "bossLevel": 11,
    "title": "Dato Curioso #11A: Declaración de Métodos y Paso por Valor",
    "category": "Funciones y Parámetros",
    "icon": "assets/icons/pergamino.png",
    "text": "Modularización y Parámetros en Java:\n\n• Sintaxis: 'modificador tipoRetorno nombreMetodo(parametros) { cuerpo }'.\n• Parámetros vs Argumentos: Parámetros formales son las variables declaradas en la firma; argumentos son los valores concretos enviados al invocar el método.\n• Regla Sagrada de Java: TODOS los argumentos se pasan estrictamente POR VALOR (pass-by-value).\n• Primitivos: Se envía una copia del dato; cambiar el parámetro dentro del método no afecta a la variable externa original.\n• Objetos: Se pasa una copia de la referencia de memoria. Modificar los atributos del objeto altera el objeto original, pero reasignar la referencia dentro del método no cambia el objeto del llamador.",
    "position": {
      "x": 14,
      "y": 36
    }
  },
  {
    "id": 24,
    "bossLevel": 11,
    "title": "Dato Curioso #11B: Sobrecarga (Overloading) y Métodos Estáticos",
    "category": "Métodos Avanzados",
    "icon": "assets/icons/foco.png",
    "text": "Sobrecarga y Palabra Clave static:\n\n• Sobrecarga de Métodos (Overloading): Permite definir métodos con el MISMO nombre pero DIFERENTE lista de parámetros (en número, tipo u orden).\n• La sobrecarga NO puede diferenciarse únicamente por el tipo de retorno.\n• Métodos static: Pertenecen a la clase en lugar de a un objeto individual. Se pueden invocar con 'NombreClase.metodo()' sin instanciar con new.\n• Restricción static: Desde un método estático NO se puede acceder directamente a variables o métodos de instancia no estáticos ('this' no existe).",
    "position": {
      "x": 11,
      "y": 41
    }
  },
  {
    "id": 25,
    "bossLevel": 12,
    "title": "Dato Curioso #12A: La Sentencia return y Tipos de Retorno",
    "category": "Retorno de Métodos",
    "icon": "assets/icons/pergamino.png",
    "text": "Devolución de Valores:\n\n• Función de return: Devuelve un valor al invocador y finaliza inmediatamente la ejecución del método.\n• Retorno Obligatorio: Si un método declara un tipo distinto de void (ej. 'public int sumar()'), debe existir una sentencia return con un valor compatible en todas las ramas; de lo contrario ocurrirá un error de compilación ('missing return statement').\n• Compatibilidad de Tipos: El tipo retornado debe coincidir exactamente o ser promovible al tipo declarado.",
    "position": {
      "x": 17,
      "y": 41
    }
  },
  {
    "id": 26,
    "bossLevel": 12,
    "title": "Dato Curioso #12B: Métodos void y Código Inalcanzable",
    "category": "Flujo de Ejecución",
    "icon": "assets/icons/foco.png",
    "text": "Procedimientos void y Errores de Flujo:\n\n• Métodos void: La palabra 'void' especifica que el método no produce ningún resultado de retorno.\n• return; en void: Es completamente válido escribir 'return;' (sin valor) dentro de un método void para salir de él anticipadamente.\n• Código Inalcanzable (Unreachable Code): Cualquier línea de código colocada inmediatamente después de un return incondicional generará un error de compilación.\n• Múltiples return: Un método puede tener múltiples retornos dentro de ramas 'if-else' independientes.",
    "position": {
      "x": 19,
      "y": 40
    }
  },
  {
    "id": 27,
    "bossLevel": 13,
    "title": "Dato Curioso #13A: Ámbitos (Scope) y Memoria Stack vs Heap",
    "category": "Alcance y Memoria",
    "icon": "assets/icons/pergamino.png",
    "text": "Dónde Viven las Variables:\n\n• Ámbito (Scope): Región del código donde una variable es accesible y visible.\n• Variables Locales: Declaradas dentro de métodos o bloques { }. Viven en la memoria **Stack** (Pila) y se destruyen tan pronto finaliza su bloque.\n• Variables de Instancia (Atributos): Declaradas en la clase fuera de los métodos. Viven en la memoria **Heap** como parte del objeto y existen mientras el objeto exista.\n• Variables Estáticas (static): Viven en el área de métodos de la JVM y son compartidas por todas las instancias de la clase.",
    "position": {
      "x": 14,
      "y": 51
    }
  },
  {
    "id": 28,
    "bossLevel": 13,
    "title": "Dato Curioso #13B: Palabra Clave this y Sombreado de Variables",
    "category": "POO y Contexto",
    "icon": "assets/icons/foco.png",
    "text": "Sombreado y la Referencia this:\n\n• Sombreado (Shadowing): Ocurre cuando un parámetro o variable local tiene el mismo nombre exacto que un atributo de clase, ocultando al atributo.\n• Palabra clave this: Referencia que apunta a la instancia actual del objeto que ejecuta el código.\n• Resolución: Se usa 'this.atributo = parametro;' para distinguir el atributo del objeto del parámetro local.\n• Encadenamiento this(): 'this(args)' llama a otro constructor de la misma clase y debe ser obligatoriamente la PRIMERA línea del constructor.\n• Restricción: 'this' no puede utilizarse en contextos estáticos ('static').",
    "position": {
      "x": 11,
      "y": 54
    }
  },
  {
    "id": 29,
    "bossLevel": 14,
    "title": "Dato Curioso #14A: Reglas de Oro de los Constructores",
    "category": "Instanciación",
    "icon": "assets/icons/pergamino.png",
    "text": "Creación de Objetos con new:\n\n• ¿Qué es un Constructor?: Método especial que se ejecuta automáticamente al instanciar un objeto con 'new' para inicializar sus atributos.\n• Dos Reglas Fundamentales:\n  1) Debe llamarse exactamente IGUAL que la clase (con mayúsculas y minúsculas idénticas).\n  2) NO tiene ningún tipo de retorno (¡ni siquiera void! Si le pones void, se convertirá en un método ordinario y no en un constructor).\n• Operador new: Reserva memoria dinámica en el Heap e invoca al constructor.",
    "position": {
      "x": 17,
      "y": 54
    }
  },
  {
    "id": 30,
    "bossLevel": 14,
    "title": "Dato Curioso #14B: Constructor por Defecto y Sobrecarga",
    "category": "Constructores",
    "icon": "assets/icons/foco.png",
    "text": "Constructor por Defecto y Múltiples Formas:\n\n• Constructor por Defecto: Si no escribes ningún constructor en tu clase, el compilador Java añade automáticamente uno público, sin argumentos y con cuerpo vacío.\n• Pérdida del Constructor por Defecto: Si defines al menos UN constructor con parámetros, Java retira de inmediato el constructor por defecto; si lo requieres, deberás escribirlo manualmente.\n• Sobrecarga de Constructores: Una clase puede tener varios constructores con diferentes listas de parámetros para inicializar objetos con distintas configuraciones de datos.",
    "position": {
      "x": 19,
      "y": 55
    }
  },
  {
    "id": 31,
    "bossLevel": 15,
    "title": "Dato Curioso #15A: Los 4 Modificadores de Acceso en Java",
    "category": "Seguridad y POO",
    "icon": "assets/icons/pergamino.png",
    "text": "Niveles de Visibilidad:\n\n• private: Máxima restricción; accesible ÚNICAMENTE dentro de la misma clase donde se declaró.\n• public: Máxima apertura; accesible desde cualquier otra clase y paquete de toda la aplicación.\n• protected: Accesible dentro del mismo paquete y por subclases derivadas (incluso si están en otros paquetes).\n• Package-Private (por defecto, sin modificador): Accesible únicamente por clases que pertenezcan al mismo paquete.\n• Regla de Encapsulamiento: Los atributos deben ser 'private' para proteger el estado interno del objeto.",
    "position": {
      "x": 14,
      "y": 44
    }
  },
  {
    "id": 32,
    "bossLevel": 15,
    "title": "Dato Curioso #15B: Encapsulamiento, Getters, Setters e Inmutabilidad",
    "category": "Encapsulamiento",
    "icon": "assets/icons/foco.png",
    "text": "Métodos de Acceso y Validación:\n\n• Getters y Setters: Métodos públicos 'getPropiedad()' para leer el valor y 'setPropiedad(valor)' para modificarlo.\n• Ventaja Clave: Los setters permiten validar datos antes de asignarlos (ej. evitar que la salud sea menor a cero).\n• Objetos Inmutables: Si una clase define atributos 'private final' y solo provee getters (sin ningún setter), el objeto es completamente inmutable y seguro para concurrencia.",
    "position": {
      "x": 15,
      "y": 46
    }
  },
  {
    "id": 33,
    "bossLevel": 16,
    "title": "Dato Curioso #16A: Herencia Simple, extends y la Clase Object",
    "category": "Herencia POO",
    "icon": "assets/icons/pergamino.png",
    "text": "Reutilización de Código y Jerarquías:\n\n• Palabra clave extends: Permite que una clase hija (subclase) herede atributos y métodos de una clase padre (superclase): 'class Mago extends Personaje'.\n• Herencia Simple: Java NO admite herencia múltiple directa de clases (no puedes hacer 'class C extends A, B') para evitar conflictos y ambigüedades como el problema del diamante.\n• java.lang.Object: Es la superclase raíz de todo el ecosistema Java. Toda clase hereda de Object directa o indirectamente (aportando métodos como '.toString()' y '.equals()').",
    "position": {
      "x": 46,
      "y": 41
    }
  },
  {
    "id": 34,
    "bossLevel": 16,
    "title": "Dato Curioso #16B: Palabra Clave super y Constructores Heredados",
    "category": "Jerarquía de Clases",
    "icon": "assets/icons/foco.png",
    "text": "Invocación a la Superclase con super:\n\n• super(): Invoca al constructor de la clase padre. En el constructor de la subclase, la llamada 'super()' DEBE ser obligatoriamente la PRIMERA instrucción ejecutable.\n• super.metodo(): Permite a la subclase invocar la versión original del método implementado en el padre cuando ha sido sobrescrito.\n• Lo que NO se hereda: Los constructores y miembros 'private' del padre no se heredan directamente en la subclase (aunque los constructores se invocan con super).",
    "position": {
      "x": 44,
      "y": 40
    }
  },
  {
    "id": 35,
    "bossLevel": 17,
    "title": "Dato Curioso #17A: Polimorfismo y Enlace Dinámico",
    "category": "Polimorfismo POO",
    "icon": "assets/icons/pergamino.png",
    "text": "Múltiples Formas en Ejecución:\n\n• Definición: Capacidad de una referencia de tipo padre de apuntar a un objeto de una clase hija: 'Animal a = new Gato();'.\n• Enlace Dinámico (Dynamic Binding): Al llamar a 'a.hacerSonido()', la JVM determina en tiempo de ejecución ejecutar la versión especializada implementada en la clase real ('Gato').\n• Acceso a Métodos del Hijo: Para invocar métodos exclusivos del hijo a través de una referencia padre, se debe realizar un casteo explícito: '((Gato) a).maullar();'.",
    "position": {
      "x": 50,
      "y": 41
    }
  },
  {
    "id": 36,
    "bossLevel": 17,
    "title": "Dato Curioso #17B: Sobreescritura @Override y Operador instanceof",
    "category": "Sobreescritura",
    "icon": "assets/icons/foco.png",
    "text": "Reglas de @Override y Comprobación:\n\n• Sobreescritura (Overriding): Redefinir en la subclase un método del padre con la MISMA firma exacta (nombre, parámetros y retorno compatible).\n• Anotación @Override: Valida en tiempo de compilación que realmente se esté sobrescribiendo un método de la superclase.\n• Lo que NO se puede Sobrescribir: Métodos 'final', 'static' o 'private' NO pueden ser sobrescritos.\n• Operador instanceof: Comprueba en tiempo de ejecución si un objeto pertenece a una clase antes de castearlo (ej. 'if (a instanceof Gato)'), evitando excepciones 'ClassCastException'.",
    "position": {
      "x": 52,
      "y": 40
    }
  },
  {
    "id": 37,
    "bossLevel": 18,
    "title": "Dato Curioso #18A: Contratos con interface e implements Múltiple",
    "category": "Interfaces",
    "icon": "assets/icons/pergamino.png",
    "text": "Contratos de Comportamiento:\n\n• Declaración: Se declaran con 'interface'. Una clase se compromete a cumplir el contrato usando la palabra 'implements'.\n• Implementación Múltiple: ¡A diferencia de las clases, una clase sí puede implementar MÚLTIPLES interfaces separadas por comas ('class Heroe implements Peleador, Curador')!\n• Miembros por Defecto en Interfaz Clásica: Todos los métodos son 'public abstract' y todas las variables son 'public static final' (constantes).\n• Instanciación: Las interfaces NO se pueden instanciar directamente con new (requieren una clase o una lambda).",
    "position": {
      "x": 46,
      "y": 54
    }
  },
  {
    "id": 38,
    "bossLevel": 18,
    "title": "Dato Curioso #18B: Java 8 default, Interfaces Funcionales y Clásicas",
    "category": "Interfaces Modernas",
    "icon": "assets/icons/foco.png",
    "text": "Evolución de Interfaces y Lambdas:\n\n• default methods (Java 8): Permite métodos con cuerpo en interfaces usando 'default'. También se permiten métodos 'static' y, desde Java 9, métodos 'private'.\n• Conflicto default: Si dos interfaces tienen el mismo método default, la clase debe sobrescribirlo resolviendo con 'InterfazA.super.metodo()'.\n• Interfaz Funcional: Posee exactamente UN único método abstracto. Se marca con '@FunctionalInterface' y es la base de las expresiones lambda.\n• Interfaces Famosas: 'Comparable<T>' (compareTo), 'Predicate<T>' (test -> boolean), 'Consumer<T>' (accept -> void), 'Supplier<T>' (get -> valor), 'Runnable' (run -> void).",
    "position": {
      "x": 44,
      "y": 55
    }
  },
  {
    "id": 39,
    "bossLevel": 19,
    "title": "Dato Curioso #19A: El Significado de null y el Temido NPE",
    "category": "Memoria y null",
    "icon": "assets/icons/pergamino.png",
    "text": "La Referencia Vacía y NullPointerException:\n\n• ¿Qué es null?: Literal que indica que una variable de referencia no apunta a ningún objeto real en la memoria Heap.\n• Primitivos vs null: Las variables primitivas (int, boolean, etc.) NUNCA pueden valer null.\n• Causa del NullPointerException (NPE): Ocurre al intentar invocar un método o acceder a un atributo a través de una referencia que vale null (ej. 'String s = null; s.length();').\n• Comprobación Defensiva: Siempre valida con 'if (obj != null) { obj.metodo(); }' antes de acceder al objeto.\n• Comparación Segura de Strings: Usa '\"CONSTANTE\".equals(variable)' en vez de 'variable.equals(\"CONSTANTE\")' para evitar NPE si la variable es null.",
    "position": {
      "x": 50,
      "y": 54
    }
  },
  {
    "id": 40,
    "bossLevel": 19,
    "title": "Dato Curioso #19B: Wrappers, Optional y Helpful NPEs",
    "category": "Seguridad Antinula",
    "icon": "assets/icons/foco.png",
    "text": "Clases Envoltorio y Herramientas Modernas:\n\n• Unboxing de Wrappers: Si un objeto 'Integer' vale null y se desempaca a 'int' primitivo, ¡lanza NullPointerException!\n• Imprimir null: 'System.out.println(nullRef)' imprime el texto '\"null\"' en consola de forma segura sin fallar.\n• java.util.Optional<T>: Contenedor de Java 8 para representar valores opcionales ('Optional.of(valor)', 'orElse(defecto)').\n• Objects.requireNonNull(obj, msg): Valida que una referencia no sea nula lanzando NPE con mensaje claro.\n• Helpful NPEs (Java 14): La JVM muestra con precisión qué variable exacta fue null (ej. 'cannot invoke X because Y is null').",
    "position": {
      "x": 52,
      "y": 55
    }
  },
  {
    "id": 41,
    "bossLevel": 20,
    "title": "Dato Curioso #20A: Arquitectura JVM, WORA y Garbage Collector",
    "category": "Arquitectura Java",
    "icon": "assets/icons/pergamino.png",
    "text": "El Ecosistema y la Máquina Virtual:\n\n• Filosofía WORA: 'Write Once, Run Anywhere' (Escribe una vez, ejecútalo en cualquier sistema operativo).\n• Ciclo de Vida: El código fuente .java se compila con 'javac' a Bytecode intermedio (.class), y la Máquina Virtual Java (JVM) lo ejecuta con su motor JIT (Just-In-Time) ultrarrápido a código máquina nativo.\n• JDK vs JRE: El JDK incluye compilador (javac) y herramientas de desarrollo; el JRE solo el motor de ejecución.\n• Garbage Collector (GC): Hilo que libera automáticamente la memoria Heap de objetos huérfanos sin referencias activas. 'System.gc()' solo sugiere su ejecución.\n• ClassLoader: Subsistema de la JVM que carga los archivos .class bajo demanda.",
    "position": {
      "x": 47,
      "y": 44
    }
  },
  {
    "id": 42,
    "bossLevel": 20,
    "title": "Dato Curioso #20B: Manejo de Excepciones (try, catch, finally)",
    "category": "Manejo de Errores",
    "icon": "assets/icons/foco.png",
    "text": "Control de Excepciones y Jerarquía:\n\n• Bloque try-catch-finally: 'try' envuelve código riesgoso, 'catch' captura la excepción y 'finally' se ejecuta SIEMPRE (haya ocurrido o no un error).\n• try-with-resources (Java 7): Cierra automáticamente recursos que implementen 'AutoCloseable' al terminar el bloque.\n• Jerarquía Throwable: 'java.lang.Throwable' es la raíz de todos los errores (Error) y excepciones (Exception).\n• Checked vs Unchecked: Checked (heredan de Exception) exigen manejo obligatorio con try-catch o declarar 'throws' en la firma del método. Unchecked (heredan de RuntimeException como NPE o ArrayIndexOutOfBounds) no exigen manejo en compilación.\n• throw vs throws: 'throw' lanza una excepción explícitamente; 'throws' advierte en la firma del método que puede propagar excepciones.\n• Multi-catch: Permite atrapar varias excepciones en un solo catch: 'catch (IOException | SQLException e)'.",
    "position": {
      "x": 48,
      "y": 52
    }
  }
];
