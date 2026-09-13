// Banco Oficial de 400 Preguntas de Fundamentos de Java de Code Quest
// Exactamente 20 preguntas secuenciales y sin repetición para cada uno de los 20 Jefes (20 x 20 = 400)

const QUESTIONS_DATA = {
  "1": [
    {
      "id": "1_1",
      "bossLevel": 1,
      "order": 1,
      "question": "[1/20] ¿Cuál es la firma exacta del método principal de ejecución en Java?",
      "options": [
        "public static void main(String[] args)",
        "public void main(String[] args)",
        "static void main(String args)",
        "public static int main(String[] args)"
      ],
      "correct": 0,
      "explanation": "La firma requerida por la JVM es public static void main(String[] args)."
    },
    {
      "id": "1_2",
      "bossLevel": 1,
      "order": 2,
      "question": "[2/20] ¿Qué símbolo finaliza la gran mayoría de sentencias en Java?",
      "options": [
        "Punto (.)",
        "Dos puntos (:)",
        "Punto y coma (;)",
        "Coma (,)"
      ],
      "correct": 2,
      "explanation": "El punto y coma (;) finaliza sentencias de código."
    },
    {
      "id": "1_3",
      "bossLevel": 1,
      "order": 3,
      "question": "[3/20] Si el archivo fuente se llama \"Heroe.java\", ¿cómo debe nombrarse la clase pública?",
      "options": [
        "public class Heroe",
        "public class heroe",
        "class MiHeroe",
        "public class Main"
      ],
      "correct": 0,
      "explanation": "En Java, el nombre de la clase pública debe coincidir exactamente con el archivo .java."
    },
    {
      "id": "1_4",
      "bossLevel": 1,
      "order": 4,
      "question": "[4/20] ¿Cómo se escribe un comentario de una sola línea en Java?",
      "options": [
        "# Comentario",
        "// Comentario",
        "/* Comentario */",
        "<!-- Comentario -->"
      ],
      "correct": 1,
      "explanation": "Dos barras diagonales // inician un comentario de una línea."
    },
    {
      "id": "1_5",
      "bossLevel": 1,
      "order": 5,
      "question": "[5/20] ¿Cómo se escribe un comentario de múltiples líneas en Java?",
      "options": [
        "/* Comentario */",
        "<!-- Comentario -->",
        "## Comentario ##",
        "{{ Comentario }}"
      ],
      "correct": 0,
      "explanation": "Los comentarios multilínea se encierran entre /* y */."
    },
    {
      "id": "1_6",
      "bossLevel": 1,
      "order": 6,
      "question": "[6/20] ¿Java distingue entre mayúsculas y minúsculas (case-sensitive)?",
      "options": [
        "No, es insensible",
        "Sí, estrictamente",
        "Solo en números",
        "Solo en cadenas"
      ],
      "correct": 1,
      "explanation": "Java es estrictamente sensible a mayúsculas y minúsculas."
    },
    {
      "id": "1_7",
      "bossLevel": 1,
      "order": 7,
      "question": "[7/20] ¿Qué paquete se importa de manera automática en todos los archivos de Java?",
      "options": [
        "java.util",
        "java.io",
        "java.lang",
        "java.net"
      ],
      "correct": 2,
      "explanation": "El paquete java.lang está disponible siempre de forma implícita."
    },
    {
      "id": "1_8",
      "bossLevel": 1,
      "order": 8,
      "question": "[8/20] ¿Cuál es la convención de nombres recomendada para las clases en Java?",
      "options": [
        "camelCase",
        "PascalCase (UpperCamelCase)",
        "snake_case",
        "kebab-case"
      ],
      "correct": 1,
      "explanation": "Las clases se nombran con PascalCase iniciando en mayúscula."
    },
    {
      "id": "1_9",
      "bossLevel": 1,
      "order": 9,
      "question": "[9/20] ¿Cuál de los siguientes identificadores es VÁLIDO en Java?",
      "options": [
        "1erNombre",
        "nombre_heroe$",
        "class",
        "nombre-usuario"
      ],
      "correct": 1,
      "explanation": "Un identificador válido puede contener letras, números, guiones bajos y $, pero no empezar con número ni ser palabra reservada."
    },
    {
      "id": "1_10",
      "bossLevel": 1,
      "order": 10,
      "question": "[10/20] ¿Qué palabra clave se usa para definir una nueva clase en Java?",
      "options": [
        "def",
        "class",
        "struct",
        "object"
      ],
      "correct": 1,
      "explanation": "La palabra reservada es class."
    },
    {
      "id": "1_11",
      "bossLevel": 1,
      "order": 11,
      "question": "[11/20] ¿Qué delimitadores encierran un bloque de código en Java?",
      "options": [
        "Paréntesis ( )",
        "Corchetes [ ]",
        "Llaves { }",
        "Comillas \" \""
      ],
      "correct": 2,
      "explanation": "Las llaves { } delimitan el alcance de bloques de código."
    },
    {
      "id": "1_12",
      "bossLevel": 1,
      "order": 12,
      "question": "[12/20] ¿Cuál de las siguientes es una palabra reservada en Java?",
      "options": [
        "main",
        "static",
        "String",
        "System"
      ],
      "correct": 1,
      "explanation": "static es una palabra clave reservada del lenguaje."
    },
    {
      "id": "1_13",
      "bossLevel": 1,
      "order": 13,
      "question": "[13/20] ¿Cuál es la extensión de los archivos de código fuente en Java?",
      "options": [
        ".class",
        ".java",
        ".jar",
        ".jvm"
      ],
      "correct": 1,
      "explanation": "El código fuente editable se guarda con extensión .java."
    },
    {
      "id": "1_14",
      "bossLevel": 1,
      "order": 14,
      "question": "[14/20] ¿Cuál es la extensión de los archivos compilados a Bytecode?",
      "options": [
        ".class",
        ".exe",
        ".bin",
        ".byte"
      ],
      "correct": 0,
      "explanation": "El compilador genera archivos .class ejecutables por la JVM."
    },
    {
      "id": "1_15",
      "bossLevel": 1,
      "order": 15,
      "question": "[15/20] ¿Qué significa \"static\" en el método main?",
      "options": [
        "Que pertenece a la clase y no requiere instanciar un objeto",
        "Que nunca cambia de valor",
        "Que no retorna nada",
        "Que es privado"
      ],
      "correct": 0,
      "explanation": "Permite a la JVM invocar main directamente sin crear una instancia de la clase."
    },
    {
      "id": "1_16",
      "bossLevel": 1,
      "order": 16,
      "question": "[16/20] ¿Qué contiene el parámetro \"String[] args\" en main?",
      "options": [
        "Un arreglo con los argumentos de línea de comandos",
        "El nombre del autor",
        "La memoria RAM libre",
        "La versión de Java"
      ],
      "correct": 0,
      "explanation": "Recibe los argumentos pasados al ejecutar la aplicación."
    },
    {
      "id": "1_17",
      "bossLevel": 1,
      "order": 17,
      "question": "[17/20] ¿Cuántas clases públicas puede haber como máximo en un solo archivo .java?",
      "options": [
        "Exactamente una",
        "Hasta dos",
        "Ilimitadas",
        "Ninguna"
      ],
      "correct": 0,
      "explanation": "Solo se permite una única clase pública por archivo."
    },
    {
      "id": "1_18",
      "bossLevel": 1,
      "order": 18,
      "question": "[18/20] ¿Cómo se llama la herramienta oficial que genera documentación HTML desde comentarios /** */?",
      "options": [
        "Javadoc",
        "Javalog",
        "Javadir",
        "Javaspec"
      ],
      "correct": 0,
      "explanation": "Javadoc crea páginas de documentación técnica estandarizadas."
    },
    {
      "id": "1_19",
      "bossLevel": 1,
      "order": 19,
      "question": "[19/20] ¿Qué palabra clave se usa para importar clases de otros paquetes?",
      "options": [
        "include",
        "using",
        "import",
        "require"
      ],
      "correct": 2,
      "explanation": "Se usa la palabra import al inicio del archivo."
    },
    {
      "id": "1_20",
      "bossLevel": 1,
      "order": 20,
      "question": "[20/20] ¿Cuál es la palabra clave para definir que un método no retorna ningún valor?",
      "options": [
        "void",
        "null",
        "empty",
        "zero"
      ],
      "correct": 0,
      "explanation": "void especifica ausencia de valor de retorno."
    }
  ],
  "2": [
    {
      "id": "2_1",
      "bossLevel": 2,
      "order": 1,
      "question": "[1/20] ¿Cuántos tipos de datos primitivos existen en Java?",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "correct": 2,
      "explanation": "Java cuenta con exactamente 8 tipos primitivos."
    },
    {
      "id": "2_2",
      "bossLevel": 2,
      "order": 2,
      "question": "[2/20] ¿Cuál de los siguientes NO es un tipo primitivo en Java?",
      "options": [
        "int",
        "boolean",
        "String",
        "double"
      ],
      "correct": 2,
      "explanation": "String es una clase de referencia, no un tipo primitivo."
    },
    {
      "id": "2_3",
      "bossLevel": 2,
      "order": 3,
      "question": "[3/20] ¿Qué tipo primitivo se usa para almacenar valores verdadero o falso?",
      "options": [
        "bool",
        "boolean",
        "binary",
        "bit"
      ],
      "correct": 1,
      "explanation": "En Java la palabra clave es boolean."
    },
    {
      "id": "2_4",
      "bossLevel": 2,
      "order": 4,
      "question": "[4/20] ¿Cuántos bits de memoria ocupa el tipo primitivo byte en Java?",
      "options": [
        "8 bits",
        "16 bits",
        "32 bits",
        "64 bits"
      ],
      "correct": 0,
      "explanation": "byte ocupa 8 bits con signo (-128 a 127)."
    },
    {
      "id": "2_5",
      "bossLevel": 2,
      "order": 5,
      "question": "[5/20] ¿Cuántos bits de memoria ocupa el tipo primitivo int en Java?",
      "options": [
        "8 bits",
        "16 bits",
        "32 bits",
        "64 bits"
      ],
      "correct": 2,
      "explanation": "int ocupa 32 bits de memoria."
    },
    {
      "id": "2_6",
      "bossLevel": 2,
      "order": 6,
      "question": "[6/20] ¿Cuántos bits de memoria ocupa el tipo primitivo long en Java?",
      "options": [
        "32 bits",
        "64 bits",
        "128 bits",
        "16 bits"
      ],
      "correct": 1,
      "explanation": "long ocupa 64 bits de memoria."
    },
    {
      "id": "2_7",
      "bossLevel": 2,
      "order": 7,
      "question": "[7/20] ¿Qué sufijo es necesario para literales numéricos largos de tipo long?",
      "options": [
        "F",
        "L (o l)",
        "D",
        "B"
      ],
      "correct": 1,
      "explanation": "Se añade la letra L al final (ejemplo: 10000000000L)."
    },
    {
      "id": "2_8",
      "bossLevel": 2,
      "order": 8,
      "question": "[8/20] ¿Qué tipo primitivo representa números decimales de precisión simple (32 bits)?",
      "options": [
        "double",
        "float",
        "decimal",
        "real"
      ],
      "correct": 1,
      "explanation": "float representa números en coma flotante de 32 bits."
    },
    {
      "id": "2_9",
      "bossLevel": 2,
      "order": 9,
      "question": "[9/20] ¿Qué sufijo es obligatorio al asignar un literal decimal a un float?",
      "options": [
        "F (o f)",
        "D",
        "L",
        "S"
      ],
      "correct": 0,
      "explanation": "Los decimales literales son double por defecto, por lo que float requiere el sufijo f (ej: 3.14f)."
    },
    {
      "id": "2_10",
      "bossLevel": 2,
      "order": 10,
      "question": "[10/20] ¿Qué tipo primitivo representa números decimales de doble precisión (64 bits)?",
      "options": [
        "float",
        "double",
        "decimal",
        "long"
      ],
      "correct": 1,
      "explanation": "double es el tipo de 64 bits estándar para decimales."
    },
    {
      "id": "2_11",
      "bossLevel": 2,
      "order": 11,
      "question": "[11/20] ¿Qué tipo primitivo se usa para almacenar un único carácter Unicode?",
      "options": [
        "string",
        "char",
        "character",
        "byte"
      ],
      "correct": 1,
      "explanation": "char almacena un carácter de 16 bits Unicode."
    },
    {
      "id": "2_12",
      "bossLevel": 2,
      "order": 12,
      "question": "[12/20] ¿Cómo se delimitan los literales de tipo char en Java?",
      "options": [
        "Comillas dobles \" \"",
        "Comillas simples ' '",
        "Acentos graves ",
        "Paréntesis ( )"
      ],
      "correct": 1,
      "explanation": "Los caracteres usan comillas simples (ejemplo: 'A')."
    },
    {
      "id": "2_13",
      "bossLevel": 2,
      "order": 13,
      "question": "[13/20] ¿Cuál es el valor por defecto de una variable numérica primitiva de instancia?",
      "options": [
        "null",
        "0",
        "undefined",
        "-1"
      ],
      "correct": 1,
      "explanation": "Las variables numéricas de instancia se inicializan automáticamente en 0."
    },
    {
      "id": "2_14",
      "bossLevel": 2,
      "order": 14,
      "question": "[14/20] ¿Cuál es el valor por defecto de un boolean de instancia en Java?",
      "options": [
        "true",
        "false",
        "null",
        "0"
      ],
      "correct": 1,
      "explanation": "El valor por defecto de un boolean es false."
    },
    {
      "id": "2_15",
      "bossLevel": 2,
      "order": 15,
      "question": "[15/20] ¿Cuál es la forma correcta de declarar e inicializar un entero en Java?",
      "options": [
        "int edad = 20;",
        "edad = 20 as int;",
        "var int edad = 20;",
        "integer edad = 20;"
      ],
      "correct": 0,
      "explanation": "La sintaxis estándar es: tipo nombre = valor;."
    },
    {
      "id": "2_16",
      "bossLevel": 2,
      "order": 16,
      "question": "[16/20] ¿Qué palabra clave hace que una variable sea constante (inmutable)?",
      "options": [
        "const",
        "final",
        "static",
        "immutable"
      ],
      "correct": 1,
      "explanation": "final impide la reasignación de la variable."
    },
    {
      "id": "2_17",
      "bossLevel": 2,
      "order": 17,
      "question": "[17/20] ¿Cuál es la convención para nombrar constantes en Java?",
      "options": [
        "camelCase",
        "MAYUSCULAS_CON_GUION_BAJO",
        "PascalCase",
        "lowercase"
      ],
      "correct": 1,
      "explanation": "Las constantes usan mayúsculas separadas por guiones bajos (ej: MAX_VIDA)."
    },
    {
      "id": "2_18",
      "bossLevel": 2,
      "order": 18,
      "question": "[18/20] ¿Qué palabra clave introducida en Java 10 permite inferencia de tipos en variables locales?",
      "options": [
        "auto",
        "var",
        "let",
        "def"
      ],
      "correct": 1,
      "explanation": "var permite deducir el tipo a partir de la expresión de inicialización."
    },
    {
      "id": "2_19",
      "bossLevel": 2,
      "order": 19,
      "question": "[19/20] ¿Se puede asignar un valor double directamente a un int sin casteo?",
      "options": [
        "Sí, automáticamente",
        "No, genera error de pérdida de precisión",
        "Solo si es positivo",
        "Solo si vale cero"
      ],
      "correct": 1,
      "explanation": "Requiere casteo explícito: (int) miDouble."
    },
    {
      "id": "2_20",
      "bossLevel": 2,
      "order": 20,
      "question": "[20/20] ¿Cómo se realiza un casteo explícito (type casting) de double a int?",
      "options": [
        "(int) valorDouble",
        "int(valorDouble)",
        "valorDouble.toInt()",
        "valorDouble as int"
      ],
      "correct": 0,
      "explanation": "Se antepone el tipo deseado entre paréntesis: (int) valorDouble."
    }
  ],
  "3": [
    {
      "id": "3_1",
      "bossLevel": 3,
      "order": 1,
      "question": "[1/20] ¿Cuál es el resultado de la operación 19 % 4 en Java?",
      "options": [
        "4",
        "3",
        "4.75",
        "1"
      ],
      "correct": 1,
      "explanation": "El operador % es el residuo: 19 dividido entre 4 es 4 con residuo de 3."
    },
    {
      "id": "3_2",
      "bossLevel": 3,
      "order": 2,
      "question": "[2/20] ¿Qué hace el operador de pre-incremento ++x?",
      "options": [
        "Incrementa x antes de evaluar la expresión",
        "Incrementa x después de usar su valor",
        "Multiplica x por dos",
        "Eleva x al cuadrado"
      ],
      "correct": 0,
      "explanation": "++x primero suma 1 y luego entrega el nuevo valor."
    },
    {
      "id": "3_3",
      "bossLevel": 3,
      "order": 3,
      "question": "[3/20] Si int x = 5; int y = x++; ¿cuál es el valor de y?",
      "options": [
        "5",
        "6",
        "7",
        "4"
      ],
      "correct": 0,
      "explanation": "x++ entrega primero el valor actual (5) y luego incrementa x a 6."
    },
    {
      "id": "3_4",
      "bossLevel": 3,
      "order": 4,
      "question": "[4/20] ¿Qué operador representa el Y lógico (AND) con cortocircuito?",
      "options": [
        "&",
        "&&",
        "AND",
        "/\\"
      ],
      "correct": 1,
      "explanation": "&& evalúa como true solo si ambos operandos son verdaderos."
    },
    {
      "id": "3_5",
      "bossLevel": 3,
      "order": 5,
      "question": "[5/20] ¿Qué operador representa el O lógico (OR) con cortocircuito?",
      "options": [
        "|",
        "||",
        "OR",
        "\\/"
      ],
      "correct": 1,
      "explanation": "|| evalúa como true si al menos uno de los operandos es verdadero."
    },
    {
      "id": "3_6",
      "bossLevel": 3,
      "order": 6,
      "question": "[6/20] ¿Qué operador invierte el valor de una expresión booleana (NOT lógico)?",
      "options": [
        "~",
        "!",
        "NOT",
        "^"
      ],
      "correct": 1,
      "explanation": "! niega el valor booleano (!true es false)."
    },
    {
      "id": "3_7",
      "bossLevel": 3,
      "order": 7,
      "question": "[7/20] ¿Cuál es el resultado de evaluar: (true || false) && (!false)?",
      "options": [
        "true",
        "false",
        "null",
        "Error"
      ],
      "correct": 0,
      "explanation": "(true || false) es true; (!false) es true; true && true es true."
    },
    {
      "id": "3_8",
      "bossLevel": 3,
      "order": 8,
      "question": "[8/20] ¿Qué significa la asignación compuesta: x += 5?",
      "options": [
        "x = 5;",
        "x = x + 5;",
        "x = x * 5;",
        "x == 5"
      ],
      "correct": 1,
      "explanation": "x += 5 equivale exactamente a x = x + 5;."
    },
    {
      "id": "3_9",
      "bossLevel": 3,
      "order": 9,
      "question": "[9/20] ¿Cuál es el resultado de la división entera 7 / 2 en Java?",
      "options": [
        "3.5",
        "3",
        "4",
        "3.0"
      ],
      "correct": 1,
      "explanation": "La división entre dos enteros trunca la parte decimal dando 3."
    },
    {
      "id": "3_10",
      "bossLevel": 3,
      "order": 10,
      "question": "[10/20] Para obtener 3.5 al dividir 7 entre 2, ¿cómo debe escribirse?",
      "options": [
        "7 / 2",
        "7.0 / 2",
        "(int) 7 / 2",
        "div(7, 2)"
      ],
      "correct": 1,
      "explanation": "Al menos uno de los operandos debe ser decimal: 7.0 / 2 da 3.5."
    },
    {
      "id": "3_11",
      "bossLevel": 3,
      "order": 11,
      "question": "[11/20] ¿Qué operador compara si dos valores primitivos son iguales?",
      "options": [
        "=",
        "==",
        "===",
        "equals"
      ],
      "correct": 1,
      "explanation": "== compara igualdad de valores en tipos primitivos."
    },
    {
      "id": "3_12",
      "bossLevel": 3,
      "order": 12,
      "question": "[12/20] ¿Qué operador evalúa si dos valores son diferentes?",
      "options": [
        "!=",
        "<>",
        "not ==",
        "!=="
      ],
      "correct": 0,
      "explanation": "!= evalúa desigualdad."
    },
    {
      "id": "3_13",
      "bossLevel": 3,
      "order": 13,
      "question": "[13/20] ¿Qué operador se conoce como el operador ternario en Java?",
      "options": [
        "if-else",
        "? :",
        "??",
        "::"
      ],
      "correct": 1,
      "explanation": "El operador ternario es condición ? valorSiTrue : valorSiFalse;."
    },
    {
      "id": "3_14",
      "bossLevel": 3,
      "order": 14,
      "question": "[14/20] En a = (x > 10) ? 1 : 2; si x vale 5, ¿cuánto vale a?",
      "options": [
        "1",
        "2",
        "10",
        "5"
      ],
      "correct": 1,
      "explanation": "Como 5 > 10 es falso, toma el segundo valor: 2."
    },
    {
      "id": "3_15",
      "bossLevel": 3,
      "order": 15,
      "question": "[15/20] ¿Qué significa que un operador lógico sea de cortocircuito?",
      "options": [
        "Que causa un error",
        "Que no evalúa el segundo operando si el primero determina el resultado",
        "Que es más lento",
        "Que solo opera con enteros"
      ],
      "correct": 1,
      "explanation": "En &&, si el primer operando es false, el segundo no se evalúa."
    },
    {
      "id": "3_16",
      "bossLevel": 3,
      "order": 16,
      "question": "[16/20] ¿Cuál es el resultado de 10 + 2 * 3 según la precedencia de operadores?",
      "options": [
        "36",
        "16",
        "26",
        "15"
      ],
      "correct": 1,
      "explanation": "La multiplicación tiene prioridad: 2 * 3 = 6; 10 + 6 = 16."
    },
    {
      "id": "3_17",
      "bossLevel": 3,
      "order": 17,
      "question": "[17/20] ¿Cómo se fuerza que una suma se ejecute antes que una multiplicación?",
      "options": [
        "Usando corchetes [ ]",
        "Usando paréntesis ( )",
        "Con llaves { }",
        "Con comas"
      ],
      "correct": 1,
      "explanation": "Los paréntesis ( ) tienen la máxima precedencia."
    },
    {
      "id": "3_18",
      "bossLevel": 3,
      "order": 18,
      "question": "[18/20] ¿Qué operador realiza un desplazamiento de bits a la izquierda?",
      "options": [
        "<<",
        ">>",
        ">>>",
        "<="
      ],
      "correct": 0,
      "explanation": "<< desplaza los bits a la izquierda."
    },
    {
      "id": "3_19",
      "bossLevel": 3,
      "order": 19,
      "question": "[19/20] ¿Cuál es el resultado de x -= 3 si x valía 10?",
      "options": [
        "13",
        "7",
        "3",
        "-7"
      ],
      "correct": 1,
      "explanation": "x = 10 - 3 = 7."
    },
    {
      "id": "3_20",
      "bossLevel": 3,
      "order": 20,
      "question": "[20/20] ¿Cuál es el resultado de la operación 15 % 5?",
      "options": [
        "3",
        "0",
        "1",
        "5"
      ],
      "correct": 1,
      "explanation": "15 es divisible exactamente entre 5, por lo que el residuo es 0."
    }
  ],
  "4": [
    {
      "id": "4_1",
      "bossLevel": 4,
      "order": 1,
      "question": "[1/20] ¿Qué instrucción imprime texto en consola con un salto de línea al final?",
      "options": [
        "System.out.print()",
        "System.out.println()",
        "Console.writeLine()",
        "echo()"
      ],
      "correct": 1,
      "explanation": "System.out.println() añade automáticamente un salto de línea."
    },
    {
      "id": "4_2",
      "bossLevel": 4,
      "order": 2,
      "question": "[2/20] ¿Qué instrucción imprime texto en consola SIN dar salto de línea?",
      "options": [
        "System.out.print()",
        "System.out.println()",
        "System.out.write()",
        "print.out()"
      ],
      "correct": 0,
      "explanation": "System.out.print() deja el cursor al final de lo impreso."
    },
    {
      "id": "4_3",
      "bossLevel": 4,
      "order": 3,
      "question": "[3/20] ¿Qué imprime: System.out.println(\"A\" + 1 + 2);?",
      "options": [
        "A3",
        "A12",
        "Error",
        "A1+2"
      ],
      "correct": 1,
      "explanation": "De izquierda a derecha: \"A\" + 1 -> \"A1\" + 2 -> \"A12\"."
    },
    {
      "id": "4_4",
      "bossLevel": 4,
      "order": 4,
      "question": "[4/20] ¿Qué imprime: System.out.println(1 + 2 + \"A\");?",
      "options": [
        "3A",
        "12A",
        "Error",
        "A3"
      ],
      "correct": 0,
      "explanation": "1 + 2 es suma numérica (3) y luego se concatena con \"A\" dando \"3A\"."
    },
    {
      "id": "4_5",
      "bossLevel": 4,
      "order": 5,
      "question": "[5/20] ¿Qué secuencia de escape representa un salto de línea en una cadena?",
      "options": [
        "\t",
        "\n",
        "\b",
        "\r"
      ],
      "correct": 1,
      "explanation": "\n inserta un salto de línea."
    },
    {
      "id": "4_6",
      "bossLevel": 4,
      "order": 6,
      "question": "[6/20] ¿Qué secuencia de escape inserta una tabulación horizontal?",
      "options": [
        "\n",
        "\t",
        "\\s",
        "\\h"
      ],
      "correct": 1,
      "explanation": "\t inserta una tabulación."
    },
    {
      "id": "4_7",
      "bossLevel": 4,
      "order": 7,
      "question": "[7/20] ¿Cómo se incluye una comilla doble dentro de un String sin cerrarlo?",
      "options": [
        "\\\"",
        "/\"",
        "\"\"",
        "\\'"
      ],
      "correct": 0,
      "explanation": "Se escapa con barra invertida: \\\"."
    },
    {
      "id": "4_8",
      "bossLevel": 4,
      "order": 8,
      "question": "[8/20] ¿Qué método de System.out permite imprimir con formato tipo printf?",
      "options": [
        "System.out.printf()",
        "System.out.format()",
        "Ambas opciones son correctas",
        "Ninguna"
      ],
      "correct": 2,
      "explanation": "Tanto printf() como format() aceptan especificadores de formato."
    },
    {
      "id": "4_9",
      "bossLevel": 4,
      "order": 9,
      "question": "[9/20] En System.out.printf(), ¿qué especificador se usa para un número entero?",
      "options": [
        "%f",
        "%d",
        "%s",
        "%c"
      ],
      "correct": 1,
      "explanation": "%d representa un entero decimal."
    },
    {
      "id": "4_10",
      "bossLevel": 4,
      "order": 10,
      "question": "[10/20] En System.out.printf(), ¿qué especificador se usa para una cadena de texto?",
      "options": [
        "%d",
        "%s",
        "%t",
        "%c"
      ],
      "correct": 1,
      "explanation": "%s representa una cadena String."
    },
    {
      "id": "4_11",
      "bossLevel": 4,
      "order": 11,
      "question": "[11/20] En System.out.printf(), ¿qué especificador se usa para un número flotante/double?",
      "options": [
        "%d",
        "%f",
        "%s",
        "%b"
      ],
      "correct": 1,
      "explanation": "%f representa punto flotante."
    },
    {
      "id": "4_12",
      "bossLevel": 4,
      "order": 12,
      "question": "[12/20] ¿Qué objeto representa la salida estándar de errores en Java?",
      "options": [
        "System.in",
        "System.err",
        "System.out",
        "System.log"
      ],
      "correct": 1,
      "explanation": "System.err es el flujo estándar de error."
    },
    {
      "id": "4_13",
      "bossLevel": 4,
      "order": 13,
      "question": "[13/20] ¿Qué objeto representa la entrada estándar por teclado en Java?",
      "options": [
        "System.in",
        "System.input",
        "System.read",
        "System.keyboard"
      ],
      "correct": 0,
      "explanation": "System.in representa el flujo estándar de entrada."
    },
    {
      "id": "4_14",
      "bossLevel": 4,
      "order": 14,
      "question": "[14/20] ¿Qué clase de java.util se usa frecuentemente para leer datos de System.in?",
      "options": [
        "Reader",
        "Scanner",
        "InputGrabber",
        "ConsoleReader"
      ],
      "correct": 1,
      "explanation": "Scanner permite parsear datos primitivos y cadenas desde la consola."
    },
    {
      "id": "4_15",
      "bossLevel": 4,
      "order": 15,
      "question": "[15/20] ¿Qué imprime System.out.println(5 == 5);?",
      "options": [
        "5",
        "true",
        "false",
        "null"
      ],
      "correct": 1,
      "explanation": "Evalúa la comparación e imprime true."
    },
    {
      "id": "4_16",
      "bossLevel": 4,
      "order": 16,
      "question": "[16/20] ¿Qué imprime System.out.println(\"Java\".length());?",
      "options": [
        "4",
        "5",
        "3",
        "Error"
      ],
      "correct": 0,
      "explanation": "La cadena \"Java\" tiene 4 caracteres."
    },
    {
      "id": "4_17",
      "bossLevel": 4,
      "order": 17,
      "question": "[17/20] ¿Qué secuencia de escape representa la barra invertida literal?",
      "options": [
        "\\",
        "//",
        "\b",
        "\u0000"
      ],
      "correct": 0,
      "explanation": "\\ imprime una única barra invertida."
    },
    {
      "id": "4_18",
      "bossLevel": 4,
      "order": 18,
      "question": "[18/20] ¿Qué imprime System.out.println(\"Hola \" + \"Mundo\");?",
      "options": [
        "HolaMundo",
        "Hola Mundo",
        "Error de tipos",
        "null"
      ],
      "correct": 1,
      "explanation": "Concatena ambas cadenas con el espacio intermedio."
    },
    {
      "id": "4_19",
      "bossLevel": 4,
      "order": 19,
      "question": "[19/20] ¿Qué imprime System.out.println(10 > 20);?",
      "options": [
        "true",
        "false",
        "10",
        "20"
      ],
      "correct": 1,
      "explanation": "10 no es mayor que 20, por lo que imprime false."
    },
    {
      "id": "4_20",
      "bossLevel": 4,
      "order": 20,
      "question": "[20/20] ¿Cuál es el resultado de invocar System.out.println(); sin argumentos?",
      "options": [
        "Error",
        "Imprime una línea vacía (salto de línea)",
        "Imprime null",
        "Imprime 0"
      ],
      "correct": 1,
      "explanation": "Emite únicamente un salto de línea."
    }
  ],
  "5": [
    {
      "id": "5_1",
      "bossLevel": 5,
      "order": 1,
      "question": "[1/20] ¿Qué tipo de dato DEBE retornar la condición dentro de un if en Java?",
      "options": [
        "int",
        "boolean",
        "String",
        "Cualquier número"
      ],
      "correct": 1,
      "explanation": "En Java la condición dentro de if() debe ser estrictamente boolean."
    },
    {
      "id": "5_2",
      "bossLevel": 5,
      "order": 2,
      "question": "[2/20] En: int x = 10; if (x > 15) { ... } else { ... } ¿Qué bloque se ejecuta?",
      "options": [
        "El bloque if",
        "El bloque else",
        "Ambos",
        "Ninguno"
      ],
      "correct": 1,
      "explanation": "Como 10 > 15 es false, se ejecuta el bloque else."
    },
    {
      "id": "5_3",
      "bossLevel": 5,
      "order": 3,
      "question": "[3/20] ¿Cuál es la sintaxis correcta para encadenar condiciones en Java?",
      "options": [
        "else if",
        "elif",
        "elseif",
        "then if"
      ],
      "correct": 0,
      "explanation": "Se escribe else if como dos palabras separadas."
    },
    {
      "id": "5_4",
      "bossLevel": 5,
      "order": 4,
      "question": "[4/20] ¿Es obligatorio que todo bloque if tenga una cláusula else?",
      "options": [
        "Sí, siempre",
        "No, el bloque else es opcional",
        "Solo si hay variables",
        "Solo en métodos void"
      ],
      "correct": 1,
      "explanation": "El bloque else es completamente opcional."
    },
    {
      "id": "5_5",
      "bossLevel": 5,
      "order": 5,
      "question": "[5/20] Si un bloque if contiene solo una sentencia, ¿son obligatorias las llaves { }?",
      "options": [
        "Sí, siempre",
        "No, pero es buena práctica usarlas",
        "Solo si es un return",
        "Solo en bucles"
      ],
      "correct": 1,
      "explanation": "Para una única instrucción las llaves son opcionales, pero muy recomendadas."
    },
    {
      "id": "5_6",
      "bossLevel": 5,
      "order": 6,
      "question": "[6/20] ¿Qué imprime: int a = 5; if (a == 5) System.out.print(\"A\"); else System.out.print(\"B\");?",
      "options": [
        "A",
        "B",
        "AB",
        "Error"
      ],
      "correct": 0,
      "explanation": "a == 5 es true, por lo que imprime A."
    },
    {
      "id": "5_7",
      "bossLevel": 5,
      "order": 7,
      "question": "[7/20] ¿Qué operador relacional evalúa si un número es menor o igual a otro?",
      "options": [
        "<=",
        "=<",
        "<==",
        "min"
      ],
      "correct": 0,
      "explanation": "<= es menor o igual."
    },
    {
      "id": "5_8",
      "bossLevel": 5,
      "order": 8,
      "question": "[8/20] ¿Qué operador relacional evalúa si un número es mayor o igual a otro?",
      "options": [
        ">=",
        "=>",
        ">>",
        "max"
      ],
      "correct": 0,
      "explanation": ">= es mayor o igual."
    },
    {
      "id": "5_9",
      "bossLevel": 5,
      "order": 9,
      "question": "[9/20] Dada la condición: if (x > 0 && x < 10), ¿cuándo es verdadera?",
      "options": [
        "Cuando x está entre 1 y 9",
        "Cuando x es menor que 0",
        "Cuando x es 10",
        "Siempre"
      ],
      "correct": 0,
      "explanation": "Ambas condiciones deben cumplirse: x mayor que 0 y menor que 10."
    },
    {
      "id": "5_10",
      "bossLevel": 5,
      "order": 10,
      "question": "[10/20] Dada la condición: if (x < 0 || x > 100), ¿cuándo es verdadera?",
      "options": [
        "Cuando x está fuera del rango [0, 100]",
        "Cuando x es 50",
        "Solo si x es 0",
        "Nunca"
      ],
      "correct": 0,
      "explanation": "Es true si x es negativo o si es mayor que 100."
    },
    {
      "id": "5_11",
      "bossLevel": 5,
      "order": 11,
      "question": "[11/20] ¿Se pueden anidar sentencias if dentro de otros bloques if?",
      "options": [
        "No, está prohibido",
        "Sí, a cualquier nivel de profundidad",
        "Solo hasta 2 niveles",
        "Solo con switch"
      ],
      "correct": 1,
      "explanation": "Java permite anidar condicionales sin restricción de niveles."
    },
    {
      "id": "5_12",
      "bossLevel": 5,
      "order": 12,
      "question": "[12/20] ¿Qué ocurre si escribes if (x = 5) siendo x un entero en Java?",
      "options": [
        "Se asigna 5 y evalúa true",
        "Error de compilación",
        "Se evalúa false",
        "Se lanza una excepción"
      ],
      "correct": 1,
      "explanation": "En Java = es asignación y no produce boolean, causando error de compilación."
    },
    {
      "id": "5_13",
      "bossLevel": 5,
      "order": 13,
      "question": "[13/20] ¿Qué ocurre si escribes if (b = true) siendo b una variable boolean?",
      "options": [
        "Error de compilación",
        "Asigna true y la condición resulta verdadera",
        "Evalúa falso",
        "Se cuelga el programa"
      ],
      "correct": 1,
      "explanation": "Como b es boolean, la asignación retorna true y se ejecuta el if."
    },
    {
      "id": "5_14",
      "bossLevel": 5,
      "order": 14,
      "question": "[14/20] ¿Qué imprime: if (true) System.out.print(\"1\"); if (false) System.out.print(\"2\");?",
      "options": [
        "1",
        "2",
        "12",
        "Error"
      ],
      "correct": 0,
      "explanation": "Solo la primera condición se cumple."
    },
    {
      "id": "5_15",
      "bossLevel": 5,
      "order": 15,
      "question": "[15/20] ¿Cuál es la forma más idiomática de verificar si un booleano esHeroe es falso?",
      "options": [
        "if (!esHeroe)",
        "if (esHeroe == false)",
        "Ambas funcionan, pero !esHeroe es la convención",
        "if (esHeroe != true)"
      ],
      "correct": 2,
      "explanation": "!esHeroe es la forma limpia y estándar."
    },
    {
      "id": "5_16",
      "bossLevel": 5,
      "order": 16,
      "question": "[16/20] En una cadena if - else if - else, ¿cuántos bloques se ejecutan como máximo?",
      "options": [
        "Todos los que coincidan",
        "Exactamente uno",
        "Dos",
        "Ninguno"
      ],
      "correct": 1,
      "explanation": "Solo se ejecuta el primer bloque que resulte verdadero y se ignora el resto."
    },
    {
      "id": "5_17",
      "bossLevel": 5,
      "order": 17,
      "question": "[17/20] ¿Qué sentencia se ejecuta si ninguna condición de un if - else if es verdadera?",
      "options": [
        "El bloque else (si existe)",
        "La primera de nuevo",
        "El programa termina",
        "Se lanza error"
      ],
      "correct": 0,
      "explanation": "El bloque else captura todos los casos no contemplados."
    },
    {
      "id": "5_18",
      "bossLevel": 5,
      "order": 18,
      "question": "[18/20] ¿Qué valor tiene r tras: int x = 4; String r = (x % 2 == 0) ? \"Par\" : \"Impar\";?",
      "options": [
        "Par",
        "Impar",
        "null",
        "Error"
      ],
      "correct": 0,
      "explanation": "4 % 2 es 0, por lo que toma el valor Par."
    },
    {
      "id": "5_19",
      "bossLevel": 5,
      "order": 19,
      "question": "[19/20] ¿Qué operadores se evalúan primero: los relacionales (> , <) o los lógicos (&&, ||)?",
      "options": [
        "Los relacionales se evalúan antes",
        "Los lógicos van primero",
        "Tienen igual precedencia",
        "Depende de la JVM"
      ],
      "correct": 0,
      "explanation": "Los operadores de comparación tienen mayor precedencia que los lógicos."
    },
    {
      "id": "5_20",
      "bossLevel": 5,
      "order": 20,
      "question": "[20/20] ¿Qué imprime: if (5 > 3) { if (2 > 4) System.out.print(\"A\"); else System.out.print(\"B\"); }?",
      "options": [
        "A",
        "B",
        "AB",
        "Nada"
      ],
      "correct": 1,
      "explanation": "5 > 3 es true, pero 2 > 4 es false, por lo que el else anidado imprime B."
    }
  ],
  "6": [
    {
      "id": "6_1",
      "bossLevel": 6,
      "order": 1,
      "question": "[1/20] ¿Qué palabra clave se usa para detener la ejecución dentro de un switch y evitar el fall-through?",
      "options": [
        "stop",
        "exit",
        "break",
        "return"
      ],
      "correct": 2,
      "explanation": "break rompe la estructura switch y salta fuera de ella."
    },
    {
      "id": "6_2",
      "bossLevel": 6,
      "order": 2,
      "question": "[2/20] ¿Qué etiqueta se ejecuta en un switch si ningún caso coincide?",
      "options": [
        "else",
        "default",
        "fallback",
        "catch"
      ],
      "correct": 1,
      "explanation": "default: se ejecuta cuando ningún case concuerda."
    },
    {
      "id": "6_3",
      "bossLevel": 6,
      "order": 3,
      "question": "[3/20] ¿A partir de qué versión de Java se puede usar String dentro de un switch?",
      "options": [
        "Java 1.0",
        "Java 5",
        "Java 7",
        "Java 17"
      ],
      "correct": 2,
      "explanation": "Java 7 introdujo soporte para cadenas String en switch."
    },
    {
      "id": "6_4",
      "bossLevel": 6,
      "order": 4,
      "question": "[4/20] ¿Qué sucede si olvidas colocar break al final de un caso que coincide?",
      "options": [
        "Error de compilación",
        "Se ejecutan los siguientes casos en cascada (fall-through)",
        "El programa se cierra",
        "Se reinicia el switch"
      ],
      "correct": 1,
      "explanation": "Ocurre el efecto fall-through ejecutando los casos subsiguientes."
    },
    {
      "id": "6_5",
      "bossLevel": 6,
      "order": 5,
      "question": "[5/20] ¿Cuál de los siguientes tipos NO se puede usar como expresión de un switch clásico?",
      "options": [
        "int",
        "char",
        "double",
        "String"
      ],
      "correct": 2,
      "explanation": "Los tipos en coma flotante (float y double) no están permitidos en switch."
    },
    {
      "id": "6_6",
      "bossLevel": 6,
      "order": 6,
      "question": "[6/20] ¿Se pueden usar tipos enumerados (enum) en una sentencia switch?",
      "options": [
        "No",
        "Sí, son ampliamente utilizados",
        "Solo con enteros",
        "Solo en Java 21"
      ],
      "correct": 1,
      "explanation": "Los enums se integran perfectamente con switch."
    },
    {
      "id": "6_7",
      "bossLevel": 6,
      "order": 7,
      "question": "[7/20] ¿Es obligatorio que la etiqueta default esté al final del switch?",
      "options": [
        "Sí, obligatoriamente",
        "No, puede colocarse en cualquier posición dentro del switch",
        "Solo si no hay break",
        "Solo en Java 8"
      ],
      "correct": 1,
      "explanation": "default puede ubicarse en cualquier parte, aunque por convención se pone al final."
    },
    {
      "id": "6_8",
      "bossLevel": 6,
      "order": 8,
      "question": "[8/20] ¿Los valores de cada etiqueta case deben ser constantes en tiempo de compilación?",
      "options": [
        "Sí, deben ser literales o constantes final",
        "No, pueden ser variables comunes",
        "Depende del sistema",
        "Solo en enteros"
      ],
      "correct": 0,
      "explanation": "Los valores de case deben ser expresiones constantes evaluables en compilación."
    },
    {
      "id": "6_9",
      "bossLevel": 6,
      "order": 9,
      "question": "[9/20] ¿Se pueden agrupar múltiples casos para ejecutar el mismo bloque (case 1: case 2: ...)?",
      "options": [
        "No",
        "Sí, omitiendo el break entre ellos",
        "Solo con comas en Java 14+",
        "Ambas opciones son válidas según la versión"
      ],
      "correct": 3,
      "explanation": "Ambas sintaxis son válidas (cascada tradicional o separadas por coma en Java moderno)."
    },
    {
      "id": "6_10",
      "bossLevel": 6,
      "order": 10,
      "question": "[10/20] ¿Qué operador introdujo Java 14 en las expresiones switch para evitar el break (case 1 -> ...)?",
      "options": [
        "=>",
        "->",
        "::",
        "~>"
      ],
      "correct": 1,
      "explanation": "La flecha -> ejecuta únicamente la rama correspondiente sin fall-through."
    },
    {
      "id": "6_11",
      "bossLevel": 6,
      "order": 11,
      "question": "[11/20] En una expresión switch que devuelve un valor (Java 14+), ¿qué palabra clave retorna el valor?",
      "options": [
        "return",
        "yield",
        "emit",
        "send"
      ],
      "correct": 1,
      "explanation": "yield devuelve el valor desde un bloque en una expresión switch."
    },
    {
      "id": "6_12",
      "bossLevel": 6,
      "order": 12,
      "question": "[12/20] ¿Puede un switch tener dos casos con el mismo valor literal duplicado?",
      "options": [
        "Sí",
        "No, provoca error de compilación por caso duplicado",
        "Solo si están vacíos",
        "Solo con String"
      ],
      "correct": 1,
      "explanation": "El compilador prohíbe casos duplicados."
    },
    {
      "id": "6_13",
      "bossLevel": 6,
      "order": 13,
      "question": "[13/20] ¿Qué imprime: int k = 2; switch(k) { case 1: System.out.print(\"1\"); case 2: System.out.print(\"2\"); case 3: System.out.print(\"3\"); }?",
      "options": [
        "2",
        "23",
        "123",
        "Error"
      ],
      "correct": 1,
      "explanation": "Coincide en case 2 y, al no haber break, cae a case 3 imprimiendo 23."
    },
    {
      "id": "6_14",
      "bossLevel": 6,
      "order": 14,
      "question": "[14/20] ¿Qué imprime el código anterior si añadimos break después de imprimir 2?",
      "options": [
        "2",
        "23",
        "3",
        "Error"
      ],
      "correct": 0,
      "explanation": "Con break se detiene y solo imprime 2."
    },
    {
      "id": "6_15",
      "bossLevel": 6,
      "order": 15,
      "question": "[15/20] ¿Se pueden evaluar rangos numéricos como case (1..10) en un switch clásico?",
      "options": [
        "Sí",
        "No, solo valores puntuales exactos",
        "Solo con enteros",
        "Solo en Java 11"
      ],
      "correct": 1,
      "explanation": "El switch clásico solo evalúa valores puntuales discretos."
    },
    {
      "id": "6_16",
      "bossLevel": 6,
      "order": 16,
      "question": "[16/20] ¿Qué tipo primitivo pequeño SÍ está permitido en un switch?",
      "options": [
        "byte",
        "float",
        "double",
        "boolean"
      ],
      "correct": 0,
      "explanation": "byte, short, char e int están permitidos."
    },
    {
      "id": "6_17",
      "bossLevel": 6,
      "order": 17,
      "question": "[17/20] ¿Se puede usar null como valor en una etiqueta case tradicional?",
      "options": [
        "Sí",
        "No, genera error de compilación",
        "Solo en Java 7",
        "Solo con String"
      ],
      "correct": 1,
      "explanation": "En Java clásico case null no es válido y evaluar un String nulo lanza NullPointerException."
    },
    {
      "id": "6_18",
      "bossLevel": 6,
      "order": 18,
      "question": "[18/20] ¿Es obligatorio incluir la etiqueta default en todo switch?",
      "options": [
        "Sí, siempre",
        "No, es opcional",
        "Solo si no hay case",
        "Solo con enums"
      ],
      "correct": 1,
      "explanation": "default es opcional."
    },
    {
      "id": "6_19",
      "bossLevel": 6,
      "order": 19,
      "question": "[19/20] ¿Qué imprime: char c = 'B'; switch(c) { case 'A': System.out.print(\"A\"); break; default: System.out.print(\"D\"); break; }?",
      "options": [
        "A",
        "D",
        "B",
        "Error"
      ],
      "correct": 1,
      "explanation": "Al no coincidir con 'A', salta a default imprimiendo D."
    },
    {
      "id": "6_20",
      "bossLevel": 6,
      "order": 20,
      "question": "[20/20] ¿Un bloque switch puede estar completamente vacío: switch(x) {}?",
      "options": [
        "No, da error sintáctico",
        "Sí, compila sin problemas aunque no hace nada",
        "Solo si x es int",
        "Solo en Java 8"
      ],
      "correct": 1,
      "explanation": "Es sintácticamente legal, aunque no realiza ninguna acción."
    }
  ],
  "7": [
    {
      "id": "7_1",
      "bossLevel": 7,
      "order": 1,
      "question": "[1/20] ¿Cuál es la diferencia principal entre el bucle while y el bucle do-while?",
      "options": [
        "while es más rápido",
        "do-while garantiza al menos una ejecución de su cuerpo",
        "while no acepta booleanos",
        "do-while solo opera con enteros"
      ],
      "correct": 1,
      "explanation": "do-while evalúa la condición al final, garantizando una iteración inicial."
    },
    {
      "id": "7_2",
      "bossLevel": 7,
      "order": 2,
      "question": "[2/20] ¿Dónde se coloca la condición en un bucle do-while?",
      "options": [
        "Al inicio",
        "Al final tras la palabra clave while(...) y un punto y coma",
        "En medio",
        "En el encabezado"
      ],
      "correct": 1,
      "explanation": "Se escribe do { ... } while(condicion);."
    },
    {
      "id": "7_3",
      "bossLevel": 7,
      "order": 3,
      "question": "[3/20] int k = 0; while (k < 3) { k++; } ¿Cuál es el valor final de k al terminar?",
      "options": [
        "2",
        "3",
        "4",
        "0"
      ],
      "correct": 1,
      "explanation": "k pasa de 0 a 1, 2 y 3. En 3 la condición falla y sale con k = 3."
    },
    {
      "id": "7_4",
      "bossLevel": 7,
      "order": 4,
      "question": "[4/20] ¿Qué ocurre si la condición de un bucle while nunca se vuelve falsa?",
      "options": [
        "El programa compila con advertencia",
        "Se produce un bucle infinito",
        "Java lo detiene a los 10 segundos",
        "La variable se reinicia sola"
      ],
      "correct": 1,
      "explanation": "El bucle se ejecuta indefinidamente consumiendo CPU."
    },
    {
      "id": "7_5",
      "bossLevel": 7,
      "order": 5,
      "question": "[5/20] ¿Qué palabra clave dentro de un bucle salta de inmediato a la siguiente iteración?",
      "options": [
        "skip",
        "pass",
        "continue",
        "next"
      ],
      "correct": 2,
      "explanation": "continue interrumpe la iteración actual y pasa a la siguiente."
    },
    {
      "id": "7_6",
      "bossLevel": 7,
      "order": 6,
      "question": "[6/20] ¿Qué palabra clave dentro de un bucle termina y sale inmediatamente del ciclo?",
      "options": [
        "stop",
        "exit",
        "break",
        "halt"
      ],
      "correct": 2,
      "explanation": "break interrumpe el bucle por completo."
    },
    {
      "id": "7_7",
      "bossLevel": 7,
      "order": 7,
      "question": "[7/20] ¿Cuántas veces se ejecuta: int x = 10; while (x < 5) { x++; }?",
      "options": [
        "0 veces",
        "1 vez",
        "5 veces",
        "Infinitas"
      ],
      "correct": 0,
      "explanation": "La condición 10 < 5 es falsa desde el inicio, por lo que no itera."
    },
    {
      "id": "7_8",
      "bossLevel": 7,
      "order": 8,
      "question": "[8/20] ¿Cuántas veces se ejecuta: int x = 10; do { x++; } while (x < 5);?",
      "options": [
        "0 veces",
        "1 vez",
        "5 veces",
        "Infinitas"
      ],
      "correct": 1,
      "explanation": "do-while ejecuta el cuerpo primero, incrementa a 11 y luego comprueba que 11 < 5 es false."
    },
    {
      "id": "7_9",
      "bossLevel": 7,
      "order": 9,
      "question": "[9/20] ¿Qué debe actualizarse dentro del cuerpo de un bucle while para evitar un bucle infinito?",
      "options": [
        "La variable de control de la condición",
        "El nombre del método",
        "La clase",
        "El paquete"
      ],
      "correct": 0,
      "explanation": "La variable que determina la condición debe cambiar hacia el caso de parada."
    },
    {
      "id": "7_10",
      "bossLevel": 7,
      "order": 10,
      "question": "[10/20] ¿Qué imprime: int i = 0; while(i < 3) { System.out.print(i); i++; }?",
      "options": [
        "012",
        "123",
        "0123",
        "01"
      ],
      "correct": 0,
      "explanation": "Imprime 0, luego 1, luego 2."
    },
    {
      "id": "7_11",
      "bossLevel": 7,
      "order": 11,
      "question": "[11/20] ¿Qué imprime: int i = 0; while(i < 3) { i++; System.out.print(i); }?",
      "options": [
        "012",
        "123",
        "12",
        "0123"
      ],
      "correct": 1,
      "explanation": "Como incrementa antes de imprimir, muestra 123."
    },
    {
      "id": "7_12",
      "bossLevel": 7,
      "order": 12,
      "question": "[12/20] ¿Es legal escribir while(true) en Java?",
      "options": [
        "No, marca error de compilación",
        "Sí, crea un bucle infinito intencional",
        "Solo con un if adentro",
        "Solo en Java 8"
      ],
      "correct": 1,
      "explanation": "Es completamente legal y habitual cuando la salida se controla con break interno."
    },
    {
      "id": "7_13",
      "bossLevel": 7,
      "order": 13,
      "question": "[13/20] ¿Qué signo es OBLIGATORIO al final de un bucle do-while: do { ... } while(c)___?",
      "options": [
        "Llave }",
        "Punto y coma (;)",
        "Dos puntos (:)",
        "Nada"
      ],
      "correct": 1,
      "explanation": "do-while requiere un punto y coma al final."
    },
    {
      "id": "7_14",
      "bossLevel": 7,
      "order": 14,
      "question": "[14/20] En un bucle con continue, ¿se ejecutan las líneas de código posteriores a continue en esa iteración?",
      "options": [
        "Sí",
        "No, se ignoran y salta a la siguiente evaluación",
        "Solo si no hay error",
        "Solo las pares"
      ],
      "correct": 1,
      "explanation": "continue salta inmediatamente a la siguiente iteración omitiendo el resto del bloque."
    },
    {
      "id": "7_15",
      "bossLevel": 7,
      "order": 15,
      "question": "[15/20] ¿Se pueden usar etiquetas (labels) con break y continue para controlar bucles anidados en Java?",
      "options": [
        "No, no existen en Java",
        "Sí, colocando un identificador seguido de dos puntos (miBucle: while...)",
        "Solo en bucles for",
        "Solo con switch"
      ],
      "correct": 1,
      "explanation": "Las etiquetas permiten romper o continuar un bucle exterior específico."
    },
    {
      "id": "7_16",
      "bossLevel": 7,
      "order": 16,
      "question": "[16/20] ¿Qué ocurre si colocas código después de un while(true) sin break?",
      "options": [
        "Se ejecuta normalmente",
        "Error de compilación de código inalcanzable (unreachable code)",
        "Se borra solo",
        "Genera advertencia"
      ],
      "correct": 1,
      "explanation": "El compilador detecta que el código posterior jamás será alcanzado."
    },
    {
      "id": "7_17",
      "bossLevel": 7,
      "order": 17,
      "question": "[17/20] ¿Qué imprime: int c = 0; while(c < 5) { c++; if (c == 3) continue; System.out.print(c); }?",
      "options": [
        "1245",
        "12345",
        "12",
        "345"
      ],
      "correct": 0,
      "explanation": "Cuando c es 3, se salta la impresión y continúa con 4 y 5."
    },
    {
      "id": "7_18",
      "bossLevel": 7,
      "order": 18,
      "question": "[18/20] ¿Qué tipo de expresión debe estar entre los paréntesis de while(...) en Java?",
      "options": [
        "Un entero 0 o 1",
        "Estrictamente un boolean",
        "Cualquier objeto",
        "Una cadena"
      ],
      "correct": 1,
      "explanation": "Debe ser estrictamente una expresión booleana."
    },
    {
      "id": "7_19",
      "bossLevel": 7,
      "order": 19,
      "question": "[19/20] ¿Qué valor imprime: int n = 5; while(n > 0) { n -= 2; } System.out.print(n);?",
      "options": [
        "0",
        "-1",
        "1",
        "Error"
      ],
      "correct": 1,
      "explanation": "n pasa de 5 a 3, a 1 y luego a -1 (donde -1 > 0 es false), imprimiendo -1."
    },
    {
      "id": "7_20",
      "bossLevel": 7,
      "order": 20,
      "question": "[20/20] ¿Cuál es el uso más habitual de un bucle do-while en aplicaciones interactivas?",
      "options": [
        "Para menús donde se requiere mostrar las opciones al menos una vez",
        "Para recorrer arreglos inversos",
        "Para cálculos matemáticos puros",
        "Para compilar clases"
      ],
      "correct": 0,
      "explanation": "Es ideal para solicitar entradas al usuario o desplegar menús que deben verse al inicio."
    }
  ],
  "8": [
    {
      "id": "8_1",
      "bossLevel": 8,
      "order": 1,
      "question": "[1/20] ¿Cuáles son las 3 secciones del encabezado de un bucle for clásico separadas por punto y coma?",
      "options": [
        "Inicialización; Condición; Actualización",
        "Condición; Paso; Fin",
        "Declaración; Límite; Salida",
        "Inicio; Fin; Salto"
      ],
      "correct": 0,
      "explanation": "La sintaxis es for (inicialización; condición; actualización)."
    },
    {
      "id": "8_2",
      "bossLevel": 8,
      "order": 2,
      "question": "[2/20] ¿Cuántas veces se ejecuta: for (int i = 0; i < 5; i++) { ... }?",
      "options": [
        "4 veces",
        "5 veces",
        "6 veces",
        "Infinitas"
      ],
      "correct": 1,
      "explanation": "Itera con i = 0, 1, 2, 3 y 4 (exactamente 5 veces)."
    },
    {
      "id": "8_3",
      "bossLevel": 8,
      "order": 3,
      "question": "[3/20] ¿Cuál es el ámbito (scope) de la variable declarada en el encabezado del for (int i = 0)?",
      "options": [
        "Toda la clase",
        "Exclusivamente el cuerpo del bucle for",
        "Todo el método",
        "El paquete"
      ],
      "correct": 1,
      "explanation": "La variable i solo existe dentro del bucle for."
    },
    {
      "id": "8_4",
      "bossLevel": 8,
      "order": 4,
      "question": "[4/20] ¿Qué ocurre si omites las tres partes en un for: for (;;) { ... }?",
      "options": [
        "Error de compilación",
        "Bucle infinito legal",
        "Se ejecuta una sola vez",
        "No compila"
      ],
      "correct": 1,
      "explanation": "for (;;) es la forma canónica en C/Java de escribir un bucle infinito."
    },
    {
      "id": "8_5",
      "bossLevel": 8,
      "order": 5,
      "question": "[5/20] ¿Cómo se llama la variante for (Tipo elemento : coleccion)?",
      "options": [
        "Bucle for-each o for mejorado",
        "Bucle while-in",
        "Bucle iterador",
        "Bucle dinámico"
      ],
      "correct": 0,
      "explanation": "Se conoce como enhanced for loop o for-each."
    },
    {
      "id": "8_6",
      "bossLevel": 8,
      "order": 6,
      "question": "[6/20] ¿En qué versión de Java se introdujo el bucle for-each?",
      "options": [
        "Java 1.2",
        "Java 5",
        "Java 8",
        "Java 11"
      ],
      "correct": 1,
      "explanation": "Fue introducido en Java 5 (J2SE 5.0)."
    },
    {
      "id": "8_7",
      "bossLevel": 8,
      "order": 7,
      "question": "[7/20] ¿Se puede modificar la estructura de un arreglo nativo durante un bucle for-each?",
      "options": [
        "Sí, añadiendo elementos",
        "No, los arreglos tienen tamaño fijo y for-each no provee índices",
        "Solo borrando",
        "Solo con enteros"
      ],
      "correct": 1,
      "explanation": "for-each no permite alterar el tamaño ni provee el índice de iteración."
    },
    {
      "id": "8_8",
      "bossLevel": 8,
      "order": 8,
      "question": "[8/20] ¿Cuántas iteraciones realiza un bucle anidado si el externo corre 3 veces y el interno 4 veces?",
      "options": [
        "7 iteraciones",
        "12 iteraciones",
        "4 iteraciones",
        "3 iteraciones"
      ],
      "correct": 1,
      "explanation": "Por cada una de las 3 pasadas externas se ejecutan 4 internas: 3 * 4 = 12 veces."
    },
    {
      "id": "8_9",
      "bossLevel": 8,
      "order": 9,
      "question": "[9/20] ¿Qué imprime: for (int i = 0; i < 3; i++) System.out.print(i);?",
      "options": [
        "012",
        "123",
        "0123",
        "Error"
      ],
      "correct": 0,
      "explanation": "Imprime 0, 1 y 2 consecutivamente."
    },
    {
      "id": "8_10",
      "bossLevel": 8,
      "order": 10,
      "question": "[10/20] ¿Qué imprime: for (int i = 3; i > 0; i--) System.out.print(i);?",
      "options": [
        "321",
        "3210",
        "123",
        "012"
      ],
      "correct": 0,
      "explanation": "Decrementa desde 3 hasta 1."
    },
    {
      "id": "8_11",
      "bossLevel": 8,
      "order": 11,
      "question": "[11/20] ¿Se pueden declarar múltiples variables del mismo tipo en la inicialización de un for?",
      "options": [
        "No",
        "Sí, separadas por comas (for (int i = 0, j = 10; ...))",
        "Solo con float",
        "Solo en Java 17"
      ],
      "correct": 1,
      "explanation": "Se pueden declarar e inicializar múltiples variables del mismo tipo con comas."
    },
    {
      "id": "8_12",
      "bossLevel": 8,
      "order": 12,
      "question": "[12/20] ¿Se pueden colocar múltiples expresiones en la sección de actualización separadas por comas?",
      "options": [
        "No",
        "Sí, por ejemplo i++, j--",
        "Solo si son del mismo signo",
        "Solo una"
      ],
      "correct": 1,
      "explanation": "Se pueden encadenar actualizaciones separadas por comas."
    },
    {
      "id": "8_13",
      "bossLevel": 8,
      "order": 13,
      "question": "[13/20] ¿Qué imprime: int suma = 0; for (int i = 1; i <= 3; i++) suma += i; System.out.print(suma);?",
      "options": [
        "3",
        "6",
        "5",
        "4"
      ],
      "correct": 1,
      "explanation": "1 + 2 + 3 = 6."
    },
    {
      "id": "8_14",
      "bossLevel": 8,
      "order": 14,
      "question": "[14/20] Dado int[] arr = {10, 20, 30}; ¿qué imprime for (int x : arr) System.out.print(x + \" \");?",
      "options": [
        "10 20 30 ",
        "0 1 2 ",
        "30 20 10 ",
        "Error"
      ],
      "correct": 0,
      "explanation": "for-each recorre secuencialmente cada valor del arreglo."
    },
    {
      "id": "8_15",
      "bossLevel": 8,
      "order": 15,
      "question": "[15/20] ¿Qué imprime: for (int i = 0; i < 5; i += 2) System.out.print(i);?",
      "options": [
        "01234",
        "024",
        "24",
        "02"
      ],
      "correct": 1,
      "explanation": "i toma los valores 0, 2 y 4 (al sumar 2 llega a 6 y se detiene)."
    },
    {
      "id": "8_16",
      "bossLevel": 8,
      "order": 16,
      "question": "[16/20] ¿Qué ocurre si la condición de un bucle for es falsa desde el primer instante?",
      "options": [
        "Se ejecuta una vez",
        "No se ejecuta ninguna vez",
        "Error en runtime",
        "Bucle infinito"
      ],
      "correct": 1,
      "explanation": "No se ejecuta el cuerpo y continúa el flujo normal."
    },
    {
      "id": "8_17",
      "bossLevel": 8,
      "order": 17,
      "question": "[17/20] ¿Cuál es la diferencia entre break y continue dentro de un for?",
      "options": [
        "break termina el bucle; continue salta a la actualización e inicia la siguiente iteración",
        "Son idénticos",
        "continue sale del método",
        "break reinicia el contador"
      ],
      "correct": 0,
      "explanation": "continue salta inmediatamente a la sección de incremento del bucle."
    },
    {
      "id": "8_18",
      "bossLevel": 8,
      "order": 18,
      "question": "[18/20] ¿Qué imprime: for (int i = 0; i < 5; i++) { if (i == 2) break; System.out.print(i); }?",
      "options": [
        "01",
        "012",
        "0134",
        "2"
      ],
      "correct": 0,
      "explanation": "Imprime 0 y 1; al llegar a 2 el break termina el bucle."
    },
    {
      "id": "8_19",
      "bossLevel": 8,
      "order": 19,
      "question": "[19/20] ¿Qué imprime: for (int i = 0; i < 4; i++) { if (i == 2) continue; System.out.print(i); }?",
      "options": [
        "013",
        "0123",
        "2",
        "01"
      ],
      "correct": 0,
      "explanation": "Omite el 2 e imprime 0, 1 y 3."
    },
    {
      "id": "8_20",
      "bossLevel": 8,
      "order": 20,
      "question": "[20/20] ¿Se puede omitir el cuerpo de un for usando solo un punto y coma: for (...);?",
      "options": [
        "No compila",
        "Sí, ejecuta las iteraciones sin hacer nada en el cuerpo",
        "Solo si no tiene condición",
        "Solo en pruebas"
      ],
      "correct": 1,
      "explanation": "Es legal, el bucle ejecuta la inicialización, condición y actualización en vacío."
    }
  ],
  "9": [
    {
      "id": "9_1",
      "bossLevel": 9,
      "order": 1,
      "question": "[1/20] ¿Cuál es el índice del primer elemento de un arreglo en Java?",
      "options": [
        "1",
        "0",
        "-1",
        "Cualquiera"
      ],
      "correct": 1,
      "explanation": "Java usa indexación en base cero; el primer elemento está en el índice 0."
    },
    {
      "id": "9_2",
      "bossLevel": 9,
      "order": 2,
      "question": "[2/20] ¿Cómo se declara e inicializa un arreglo de 5 enteros en Java?",
      "options": [
        "int[] arr = new int[5];",
        "int arr = new array(5);",
        "Array<int> arr = new Array(5);",
        "int arr[5];"
      ],
      "correct": 0,
      "explanation": "La sintaxis estándar es int[] arr = new int[5];."
    },
    {
      "id": "9_3",
      "bossLevel": 9,
      "order": 3,
      "question": "[3/20] ¿Con qué valor se inicializan por defecto los elementos de un arreglo numérico new int[3]?",
      "options": [
        "null",
        "0",
        "-1",
        "Basura de memoria"
      ],
      "correct": 1,
      "explanation": "Los arreglos de enteros se llenan con ceros por defecto."
    },
    {
      "id": "9_4",
      "bossLevel": 9,
      "order": 4,
      "question": "[4/20] ¿Con qué valor se inicializan por defecto los elementos de new boolean[3]?",
      "options": [
        "true",
        "false",
        "null",
        "0"
      ],
      "correct": 1,
      "explanation": "Los elementos de un arreglo boolean se inicializan en false."
    },
    {
      "id": "9_5",
      "bossLevel": 9,
      "order": 5,
      "question": "[5/20] ¿Con qué valor se inicializan por defecto los elementos de new String[3]?",
      "options": [
        "\"\"",
        "null",
        "0",
        "undefined"
      ],
      "correct": 1,
      "explanation": "Los arreglos de objetos se inicializan con referencias null."
    },
    {
      "id": "9_6",
      "bossLevel": 9,
      "order": 6,
      "question": "[6/20] ¿Cómo se obtiene el número total de elementos de un arreglo llamado datos?",
      "options": [
        "datos.length()",
        "datos.length",
        "datos.size()",
        "datos.count"
      ],
      "correct": 1,
      "explanation": "Los arreglos usan la propiedad de solo lectura .length (sin paréntesis)."
    },
    {
      "id": "9_7",
      "bossLevel": 9,
      "order": 7,
      "question": "[7/20] ¿Qué excepción se lanza si accedes a arr[5] en un arreglo de tamaño 5?",
      "options": [
        "NullPointerException",
        "ArrayIndexOutOfBoundsException",
        "IndexOverflowException",
        "ArrayLimitException"
      ],
      "correct": 1,
      "explanation": "Los índices van de 0 a 4, por lo que el índice 5 está fuera de rango."
    },
    {
      "id": "9_8",
      "bossLevel": 9,
      "order": 8,
      "question": "[8/20] ¿Cuál es el índice del último elemento de un arreglo llamado arr?",
      "options": [
        "arr.length",
        "arr.length - 1",
        "arr.length + 1",
        "arr.last"
      ],
      "correct": 1,
      "explanation": "El último elemento siempre está en el índice arr.length - 1."
    },
    {
      "id": "9_9",
      "bossLevel": 9,
      "order": 9,
      "question": "[9/20] ¿Cómo se inicializa un arreglo con valores conocidos en una sola línea?",
      "options": [
        "int[] arr = {1, 2, 3};",
        "int[] arr = [1, 2, 3];",
        "int arr = {1, 2, 3};",
        "array arr = (1, 2, 3);"
      ],
      "correct": 0,
      "explanation": "Se usan llaves {1, 2, 3} para inicialización literal."
    },
    {
      "id": "9_10",
      "bossLevel": 9,
      "order": 10,
      "question": "[10/20] ¿Se puede cambiar el tamaño de un arreglo nativo después de haber sido creado?",
      "options": [
        "Sí, con .resize()",
        "No, los arreglos tienen tamaño fijo inmutable",
        "Solo aumentando",
        "Solo en Java 11"
      ],
      "correct": 1,
      "explanation": "Los arreglos tienen tamaño estático; para tamaño dinámico se usa ArrayList."
    },
    {
      "id": "9_11",
      "bossLevel": 9,
      "order": 11,
      "question": "[11/20] ¿En qué área de memoria se almacenan los arreglos en Java?",
      "options": [
        "Stack (Pila)",
        "Heap (Montículo)",
        "Metaspace",
        "Registro de CPU"
      ],
      "correct": 1,
      "explanation": "Todos los arreglos son objetos y se asignan en la memoria Heap."
    },
    {
      "id": "9_12",
      "bossLevel": 9,
      "order": 12,
      "question": "[12/20] ¿Qué clase de java.util provee métodos estáticos útiles como sort() y binarySearch() para arreglos?",
      "options": [
        "java.util.Collections",
        "java.util.Arrays",
        "java.util.ArrayHelper",
        "java.util.Vector"
      ],
      "correct": 1,
      "explanation": "La clase java.util.Arrays ofrece utilidades para manipular arreglos."
    },
    {
      "id": "9_13",
      "bossLevel": 9,
      "order": 13,
      "question": "[13/20] ¿Qué imprime: int[] n = {10, 20, 30}; System.out.print(n[1]);?",
      "options": [
        "10",
        "20",
        "30",
        "Error"
      ],
      "correct": 1,
      "explanation": "El índice 1 corresponde al segundo elemento: 20."
    },
    {
      "id": "9_14",
      "bossLevel": 9,
      "order": 14,
      "question": "[14/20] ¿Qué imprime System.out.println(new int[4].length);?",
      "options": [
        "4",
        "0",
        "null",
        "Error"
      ],
      "correct": 0,
      "explanation": "El arreglo fue creado con tamaño 4."
    },
    {
      "id": "9_15",
      "bossLevel": 9,
      "order": 15,
      "question": "[15/20] ¿Cómo se copia eficientemente un arreglo a otro en bajo nivel en Java?",
      "options": [
        "System.arraycopy()",
        "arr.copyAll()",
        "clone.system()",
        "copier.run()"
      ],
      "correct": 0,
      "explanation": "System.arraycopy() realiza una copia nativa rápida en memoria."
    },
    {
      "id": "9_16",
      "bossLevel": 9,
      "order": 16,
      "question": "[16/20] ¿Qué método de java.util.Arrays ordena un arreglo en orden ascendente?",
      "options": [
        "Arrays.sort(arr)",
        "Arrays.order(arr)",
        "arr.sort()",
        "Arrays.arrange(arr)"
      ],
      "correct": 0,
      "explanation": "Arrays.sort(arr) ordena los elementos."
    },
    {
      "id": "9_17",
      "bossLevel": 9,
      "order": 17,
      "question": "[17/20] ¿Qué imprime: int[] a = {1, 2}; int[] b = a; b[0] = 99; System.out.print(a[0]);?",
      "options": [
        "1",
        "99",
        "2",
        "Error"
      ],
      "correct": 1,
      "explanation": "b y a apuntan al mismo objeto en memoria Heap, por lo que alterar b altera a."
    },
    {
      "id": "9_18",
      "bossLevel": 9,
      "order": 18,
      "question": "[18/20] ¿Qué método de java.util.Arrays convierte un arreglo a formato legible [1, 2, 3] para imprimir?",
      "options": [
        "Arrays.toString(arr)",
        "arr.print()",
        "arr.toString()",
        "Arrays.print(arr)"
      ],
      "correct": 0,
      "explanation": "Arrays.toString() genera una representación textual legible de los elementos."
    },
    {
      "id": "9_19",
      "bossLevel": 9,
      "order": 19,
      "question": "[19/20] ¿Es legal un arreglo de tamaño cero: new int[0]?",
      "options": [
        "No, mínimo tamaño 1",
        "Sí, es un arreglo vacío válido con length 0",
        "Solo con cadenas",
        "Solo en C"
      ],
      "correct": 1,
      "explanation": "Es totalmente legal y útil para retornar colecciones vacías."
    },
    {
      "id": "9_20",
      "bossLevel": 9,
      "order": 20,
      "question": "[20/20] ¿Qué ocurre si creas un arreglo con tamaño negativo: new int[-5]?",
      "options": [
        "Compila pero lanza NegativeArraySizeException en runtime",
        "Crea un arreglo inverso",
        "El compilador lo corrige a positivo",
        "Da null"
      ],
      "correct": 0,
      "explanation": "Lanza la excepción NegativeArraySizeException en tiempo de ejecución."
    }
  ],
  "10": [
    {
      "id": "10_1",
      "bossLevel": 10,
      "order": 1,
      "question": "[1/20] ¿Cuál es la forma correcta de comparar el contenido textual de dos Strings en Java?",
      "options": [
        "s1 == s2",
        "s1.equals(s2)",
        "s1 === s2",
        "s1.compareToExact(s2)"
      ],
      "correct": 1,
      "explanation": "El método equals() compara el contenido; == compara identidades de referencia."
    },
    {
      "id": "10_2",
      "bossLevel": 10,
      "order": 2,
      "question": "[2/20] ¿Por qué se dice que los objetos String son inmutables en Java?",
      "options": [
        "Porque una vez creados no se pueden modificar en memoria",
        "Porque no aceptan números",
        "Porque solo aceptan letras",
        "Porque son estáticos"
      ],
      "correct": 0,
      "explanation": "Cualquier modificación genera un nuevo String en memoria."
    },
    {
      "id": "10_3",
      "bossLevel": 10,
      "order": 3,
      "question": "[3/20] ¿Qué método retorna la cantidad de caracteres de un String?",
      "options": [
        "s.length",
        "s.length()",
        "s.size()",
        "s.count()"
      ],
      "correct": 1,
      "explanation": "En String es un método con paréntesis: s.length()."
    },
    {
      "id": "10_4",
      "bossLevel": 10,
      "order": 4,
      "question": "[4/20] ¿Qué retorna \"Programacion\".charAt(0)?",
      "options": [
        "'P'",
        "'r'",
        "\"P\"",
        "Error"
      ],
      "correct": 0,
      "explanation": "charAt(0) retorna el primer carácter en el índice 0 como tipo char."
    },
    {
      "id": "10_5",
      "bossLevel": 10,
      "order": 5,
      "question": "[5/20] ¿Qué retorna \"Java\".toUpperCase()?",
      "options": [
        "\"java\"",
        "\"JAVA\"",
        "\"Java\"",
        "null"
      ],
      "correct": 1,
      "explanation": "Convierte todos los caracteres a mayúsculas."
    },
    {
      "id": "10_6",
      "bossLevel": 10,
      "order": 6,
      "question": "[6/20] ¿Qué retorna \"Java\".toLowerCase()?",
      "options": [
        "\"java\"",
        "\"JAVA\"",
        "\"Java\"",
        "null"
      ],
      "correct": 0,
      "explanation": "Convierte todos los caracteres a minúsculas."
    },
    {
      "id": "10_7",
      "bossLevel": 10,
      "order": 7,
      "question": "[7/20] ¿Qué método compara dos cadenas ignorando diferencias entre mayúsculas y minúsculas?",
      "options": [
        "equalsIgnoreCase()",
        "equalsNoCase()",
        "sameAs()",
        "compareIgnoreCase()"
      ],
      "correct": 0,
      "explanation": "equalsIgnoreCase() compara ignorando la capitalización."
    },
    {
      "id": "10_8",
      "bossLevel": 10,
      "order": 8,
      "question": "[8/20] ¿Qué retorna \"Hola Mundo\".substring(0, 4)?",
      "options": [
        "\"Hola\"",
        "\"Hola \"",
        "\"Hol\"",
        "\"Mundo\""
      ],
      "correct": 0,
      "explanation": "substring(inicio, fin) incluye el índice inicial y excluye el final (índices 0 a 3: \"Hola\")."
    },
    {
      "id": "10_9",
      "bossLevel": 10,
      "order": 9,
      "question": "[9/20] ¿Qué método verifica si una cadena contiene una subcadena específica?",
      "options": [
        "s.contains(\"sub\")",
        "s.has(\"sub\")",
        "s.includes(\"sub\")",
        "s.find(\"sub\")"
      ],
      "correct": 0,
      "explanation": "contains() devuelve true si la secuencia de caracteres está presente."
    },
    {
      "id": "10_10",
      "bossLevel": 10,
      "order": 10,
      "question": "[10/20] ¿Qué método verifica si una cadena inicia con un prefijo determinado?",
      "options": [
        "startsWith()",
        "beginsWith()",
        "hasPrefix()",
        "prefix()"
      ],
      "correct": 0,
      "explanation": "startsWith() comprueba el inicio de la cadena."
    },
    {
      "id": "10_11",
      "bossLevel": 10,
      "order": 11,
      "question": "[11/20] ¿Qué método verifica si una cadena termina con un sufijo determinado?",
      "options": [
        "endsWith()",
        "finishesWith()",
        "hasSuffix()",
        "postfix()"
      ],
      "correct": 0,
      "explanation": "endsWith() comprueba el final de la cadena."
    },
    {
      "id": "10_12",
      "bossLevel": 10,
      "order": 12,
      "question": "[12/20] ¿Qué método elimina los espacios en blanco al inicio y al final de una cadena?",
      "options": [
        "trim() (o strip() en Java 11+)",
        "clean()",
        "cut()",
        "removeSpaces()"
      ],
      "correct": 0,
      "explanation": "trim() y strip() remueven espacios en los extremos."
    },
    {
      "id": "10_13",
      "bossLevel": 10,
      "order": 13,
      "question": "[13/20] ¿Qué retorna \"hola\".concat(\" mundo\")?",
      "options": [
        "\"hola mundo\"",
        "\"holamundo\"",
        "Error",
        "null"
      ],
      "correct": 0,
      "explanation": "concat() une dos cadenas produciendo una nueva."
    },
    {
      "id": "10_14",
      "bossLevel": 10,
      "order": 14,
      "question": "[14/20] ¿Qué método reemplaza caracteres o secuencias dentro de un String?",
      "options": [
        "replace()",
        "swap()",
        "alter()",
        "change()"
      ],
      "correct": 0,
      "explanation": "replace() sustituye ocurrencias de caracteres o cadenas."
    },
    {
      "id": "10_15",
      "bossLevel": 10,
      "order": 15,
      "question": "[15/20] ¿Qué método divide una cadena en un arreglo de subcadenas según un delimitador?",
      "options": [
        "split()",
        "divide()",
        "slice()",
        "tokenize()"
      ],
      "correct": 0,
      "explanation": "split() divide la cadena usando una expresión regular o delimitador."
    },
    {
      "id": "10_16",
      "bossLevel": 10,
      "order": 16,
      "question": "[16/20] ¿Qué clase mutable se recomienda para concatenar cadenas intensivamente en un solo hilo?",
      "options": [
        "StringBuilder",
        "StringAdder",
        "StringChain",
        "StringBuffer"
      ],
      "correct": 0,
      "explanation": "StringBuilder es mutable, eficiente y no sincronizado."
    },
    {
      "id": "10_17",
      "bossLevel": 10,
      "order": 17,
      "question": "[17/20] ¿Qué clase mutable y thread-safe (sincronizada) existe para manipulación de cadenas?",
      "options": [
        "StringBuffer",
        "StringBuilder",
        "StringSafe",
        "StringLock"
      ],
      "correct": 0,
      "explanation": "StringBuffer es thread-safe gracias a sus métodos sincronizados."
    },
    {
      "id": "10_18",
      "bossLevel": 10,
      "order": 18,
      "question": "[18/20] ¿Qué retorna \"Code Quest\".indexOf(\"Quest\")?",
      "options": [
        "5",
        "4",
        "0",
        "-1"
      ],
      "correct": 0,
      "explanation": "La palabra \"Quest\" inicia en el índice 5 (C=0, o=1, d=2, e=3, espacio=4, Q=5)."
    },
    {
      "id": "10_19",
      "bossLevel": 10,
      "order": 19,
      "question": "[19/20] ¿Qué retorna indexOf() si la subcadena buscada NO existe en la cadena?",
      "options": [
        "0",
        "-1",
        "null",
        "Lanza excepción"
      ],
      "correct": 1,
      "explanation": "Retorna -1 para indicar que no se encontró."
    },
    {
      "id": "10_20",
      "bossLevel": 10,
      "order": 20,
      "question": "[20/20] ¿Qué es el String Constant Pool en la JVM?",
      "options": [
        "Un área especial en el Heap que almacena una única copia de cada literal de cadena para optimizar memoria",
        "Un archivo en disco",
        "Una lista de errores",
        "Un plugin"
      ],
      "correct": 0,
      "explanation": "El pool de cadenas reutiliza literales idénticos para ahorrar memoria."
    }
  ],
  "11": [
    {
      "id": "11_1",
      "bossLevel": 11,
      "order": 1,
      "question": "[1/20] ¿Qué es un método en Java?",
      "options": [
        "Un bloque de código reutilizable con nombre que realiza una tarea",
        "Una variable global",
        "Un tipo de dato primitivo",
        "Un archivo"
      ],
      "correct": 0,
      "explanation": "Un método encapsula instrucciones para realizar una acción específica."
    },
    {
      "id": "11_2",
      "bossLevel": 11,
      "order": 2,
      "question": "[2/20] ¿Cuál es la sintaxis correcta para declarar un método en Java?",
      "options": [
        "modificador tipoRetorno nombre(parametros) { cuerpo }",
        "def nombre(parametros): tipo { cuerpo }",
        "function nombre(parametros) { cuerpo }",
        "method nombre() { cuerpo }"
      ],
      "correct": 0,
      "explanation": "La estructura es modificador tipoRetorno nombre(parametros) { ... }."
    },
    {
      "id": "11_3",
      "bossLevel": 11,
      "order": 3,
      "question": "[3/20] ¿Cómo se le llama a los valores que se definen en la declaración del método?",
      "options": [
        "Parámetros formales",
        "Argumentos reales",
        "Variables de paquete",
        "Retornos"
      ],
      "correct": 0,
      "explanation": "Son los parámetros formales que el método espera recibir."
    },
    {
      "id": "11_4",
      "bossLevel": 11,
      "order": 4,
      "question": "[4/20] ¿Cómo se le llama a los valores exactos que se le envían a un método al invocarlo?",
      "options": [
        "Argumentos",
        "Parámetros formales",
        "Variables estáticas",
        "Retornos"
      ],
      "correct": 0,
      "explanation": "Los valores reales proporcionados en la llamada se denominan argumentos."
    },
    {
      "id": "11_5",
      "bossLevel": 11,
      "order": 5,
      "question": "[5/20] ¿Cómo se pasan los tipos de datos primitivos a los métodos en Java?",
      "options": [
        "Siempre por valor (se copia el valor exacto)",
        "Por referencia",
        "Por puntero directo",
        "Por alias"
      ],
      "correct": 0,
      "explanation": "Java es estrictamente paso por valor (pass-by-value)."
    },
    {
      "id": "11_6",
      "bossLevel": 11,
      "order": 6,
      "question": "[6/20] Si pasas un int x = 10 a un método y este lo modifica a 20 dentro de su cuerpo, ¿cuánto vale x fuera?",
      "options": [
        "10 (el original no se altera)",
        "20",
        "0",
        "Error"
      ],
      "correct": 0,
      "explanation": "Al pasarse una copia del primitivo, el valor original permanece inalterado."
    },
    {
      "id": "11_7",
      "bossLevel": 11,
      "order": 7,
      "question": "[7/20] ¿Cómo se pasan las referencias a objetos en Java?",
      "options": [
        "Se pasa por valor el valor de la referencia (puntero/dirección)",
        "Por referencia pura",
        "Por duplicación de memoria",
        "Por puntero C"
      ],
      "correct": 0,
      "explanation": "Se pasa por valor la copia del valor de la referencia que apunta al objeto en el Heap."
    },
    {
      "id": "11_8",
      "bossLevel": 11,
      "order": 8,
      "question": "[8/20] ¿Qué es la sobrecarga de métodos (method overloading)?",
      "options": [
        "Definir múltiples métodos con el mismo nombre pero diferente lista de parámetros en la misma clase",
        "Llamar a un método muchas veces",
        "Tener métodos con código duplicado",
        "Heredar métodos"
      ],
      "correct": 0,
      "explanation": "La sobrecarga varía el número o tipo de parámetros con el mismo nombre."
    },
    {
      "id": "11_9",
      "bossLevel": 11,
      "order": 9,
      "question": "[9/20] ¿Es suficiente cambiar únicamente el tipo de retorno para sobrecargar un método?",
      "options": [
        "No, el compilador marca error de método duplicado",
        "Sí, es suficiente",
        "Solo si retorna void",
        "Solo en Java 17"
      ],
      "correct": 0,
      "explanation": "La lista de parámetros DEBE cambiar; cambiar solo el tipo de retorno es ilegal."
    },
    {
      "id": "11_10",
      "bossLevel": 11,
      "order": 10,
      "question": "[10/20] ¿Qué palabra clave permite invocar un método sin crear un objeto de la clase?",
      "options": [
        "static",
        "void",
        "new",
        "this"
      ],
      "correct": 0,
      "explanation": "Los métodos static se llaman directamente con NombreClase.metodo()."
    },
    {
      "id": "11_11",
      "bossLevel": 11,
      "order": 11,
      "question": "[11/20] ¿Puede un método estático acceder directamente a variables de instancia no estáticas?",
      "options": [
        "No, requiere una instancia de objeto",
        "Sí, siempre",
        "Solo si es público",
        "Solo con this"
      ],
      "correct": 0,
      "explanation": "Los métodos estáticos no tienen contexto de instancia (no existe this)."
    },
    {
      "id": "11_12",
      "bossLevel": 11,
      "order": 12,
      "question": "[12/20] ¿Qué es la recursividad en un método?",
      "options": [
        "Cuando un método se invoca a sí mismo para resolver un subproblema",
        "Cuando corre en un bucle for",
        "Cuando nunca termina",
        "Cuando no recibe parámetros"
      ],
      "correct": 0,
      "explanation": "Un método recursivo se llama a sí mismo hasta alcanzar un caso base."
    },
    {
      "id": "11_13",
      "bossLevel": 11,
      "order": 13,
      "question": "[13/20] ¿Qué condición es indispensable en un método recursivo para evitar StackOverflowError?",
      "options": [
        "Un caso base de parada",
        "Un bucle for",
        "Una variable estática",
        "Un switch"
      ],
      "correct": 0,
      "explanation": "El caso base detiene las llamadas recursivas sucesivas."
    },
    {
      "id": "11_14",
      "bossLevel": 11,
      "order": 14,
      "question": "[14/20] ¿Qué excepción se lanza si la recursión es infinita y agota la pila?",
      "options": [
        "StackOverflowError",
        "OutOfMemoryError",
        "InfiniteLoopException",
        "RecursionLimitException"
      ],
      "correct": 0,
      "explanation": "Se desborda la pila de ejecución generando StackOverflowError."
    },
    {
      "id": "11_15",
      "bossLevel": 11,
      "order": 15,
      "question": "[15/20] ¿Qué característica de Java 5 permite recibir un número variable de argumentos (varargs)?",
      "options": [
        "El operador tres puntos ... (ej: int... numeros)",
        "El operador asterisco *",
        "Arreglos dinámicos",
        "Listas mágicas"
      ],
      "correct": 0,
      "explanation": "varargs se declara con ... y se trata internamente como un arreglo."
    },
    {
      "id": "11_16",
      "bossLevel": 11,
      "order": 16,
      "question": "[16/20] En la lista de parámetros de un método, ¿dónde debe ubicarse el parámetro varargs?",
      "options": [
        "Únicamente como el último parámetro",
        "Al principio",
        "En cualquier posición",
        "Solo si no hay otros"
      ],
      "correct": 0,
      "explanation": "El parámetro varargs debe ser forzosamente el último en la firma."
    },
    {
      "id": "11_17",
      "bossLevel": 11,
      "order": 17,
      "question": "[17/20] ¿Cuántos parámetros varargs puede tener un método como máximo?",
      "options": [
        "Exactamente uno",
        "Dos",
        "Tantos como se deseen",
        "Cero"
      ],
      "correct": 0,
      "explanation": "Solo se permite un único parámetro varargs por método."
    },
    {
      "id": "11_18",
      "bossLevel": 11,
      "order": 18,
      "question": "[18/20] ¿Cuál es la firma correcta para un método que recibe un arreglo de cadenas?",
      "options": [
        "public void procesar(String[] datos)",
        "public void procesar(String datos[])",
        "Ambas son sintácticamente válidas",
        "Ninguna"
      ],
      "correct": 2,
      "explanation": "Ambas sintaxis son aceptadas en Java, siendo String[] la más recomendada."
    },
    {
      "id": "11_19",
      "bossLevel": 11,
      "order": 19,
      "question": "[19/20] ¿Qué modificador hace que un método sea accesible únicamente dentro de la misma clase?",
      "options": [
        "private",
        "public",
        "protected",
        "default"
      ],
      "correct": 0,
      "explanation": "private restringe el acceso exclusivamente al código de la propia clase."
    },
    {
      "id": "11_20",
      "bossLevel": 11,
      "order": 20,
      "question": "[20/20] ¿Cómo se llama la firma de un método?",
      "options": [
        "La combinación de su nombre y su lista de tipos de parámetros",
        "Solo su nombre",
        "Su tipo de retorno",
        "Su código interno"
      ],
      "correct": 0,
      "explanation": "La firma (signature) está compuesta por el nombre del método y los tipos de sus parámetros."
    }
  ],
  "12": [
    {
      "id": "12_1",
      "bossLevel": 12,
      "order": 1,
      "question": "[1/20] ¿Qué palabra clave se usa para enviar un resultado de vuelta al llamador del método?",
      "options": [
        "return",
        "send",
        "output",
        "yield"
      ],
      "correct": 0,
      "explanation": "return envía el valor y termina inmediatamente la ejecución del método."
    },
    {
      "id": "12_2",
      "bossLevel": 12,
      "order": 2,
      "question": "[2/20] Si un método declara que retorna int, ¿qué ocurre si no incluye return?",
      "options": [
        "Retorna 0 solo",
        "Error de compilación: missing return statement",
        "Retorna null",
        "Compila con advertencia"
      ],
      "correct": 1,
      "explanation": "El compilador exige que todas las rutas de ejecución retornen un valor del tipo declarado."
    },
    {
      "id": "12_3",
      "bossLevel": 12,
      "order": 3,
      "question": "[3/20] ¿Se puede usar la instrucción \"return;\" (sin valor) dentro de un método void?",
      "options": [
        "Sí, para salir anticipadamente del método",
        "No, está prohibido en métodos void",
        "Solo en bucles",
        "Solo en Java 8"
      ],
      "correct": 0,
      "explanation": "return; vacío es legal para terminar anticipadamente la ejecución de un método void."
    },
    {
      "id": "12_4",
      "bossLevel": 12,
      "order": 4,
      "question": "[4/20] ¿Qué sucede con el código colocado inmediatamente después de un return incondicional?",
      "options": [
        "Se ejecuta en segundo plano",
        "Error de compilación: unreachable code",
        "Se ignora en silencio",
        "Se ejecuta al salir"
      ],
      "correct": 1,
      "explanation": "Cualquier código inalcanzable tras un return definitivo causa error de compilación."
    },
    {
      "id": "12_5",
      "bossLevel": 12,
      "order": 5,
      "question": "[5/20] Si un método retorna boolean, ¿cuáles son los únicos dos valores literales que puede retornar?",
      "options": [
        "0 y 1",
        "true y false",
        "yes y no",
        "null y void"
      ],
      "correct": 1,
      "explanation": "Un método booleano debe retornar true o false."
    },
    {
      "id": "12_6",
      "bossLevel": 12,
      "order": 6,
      "question": "[6/20] ¿Puede un método retornar un objeto o instancia de una clase (ej: Heroe)?",
      "options": [
        "No, solo tipos primitivos",
        "Sí, puede retornar referencias a cualquier tipo de objeto",
        "Solo si es estático",
        "Solo mediante interfaces"
      ],
      "correct": 1,
      "explanation": "Los métodos pueden retornar cualquier clase, interfaz o arreglo."
    },
    {
      "id": "12_7",
      "bossLevel": 12,
      "order": 7,
      "question": "[7/20] ¿Puede un método retornar null si su tipo de retorno es un objeto?",
      "options": [
        "Sí, null es una referencia válida para cualquier tipo no primitivo",
        "No, genera error de compilación",
        "Solo si retorna void",
        "Solo en pruebas"
      ],
      "correct": 0,
      "explanation": "Cualquier tipo de referencia puede retornar null."
    },
    {
      "id": "12_8",
      "bossLevel": 12,
      "order": 8,
      "question": "[8/20] ¿Puede un método con tipo de retorno int retornar null?",
      "options": [
        "Sí",
        "No, los primitivos no aceptan null y causa error de compilación",
        "Solo si vale 0",
        "Solo con casteo"
      ],
      "correct": 1,
      "explanation": "Los tipos primitivos no son objetos y no pueden almacenar null."
    },
    {
      "id": "12_9",
      "bossLevel": 12,
      "order": 9,
      "question": "[9/20] ¿Puede un método retornar un arreglo (ej: int[])?",
      "options": [
        "Sí, declarando el tipo de retorno como int[]",
        "No, está prohibido",
        "Solo si es estático",
        "Solo si tiene 1 elemento"
      ],
      "correct": 0,
      "explanation": "Los arreglos son tipos de referencia válidos como valor de retorno."
    },
    {
      "id": "12_10",
      "bossLevel": 12,
      "order": 10,
      "question": "[10/20] ¿Qué tipo de dato compatible puede retornar un método que declara double?",
      "options": [
        "int (se promueve implícitamente a double)",
        "float",
        "double",
        "Todas las anteriores"
      ],
      "correct": 3,
      "explanation": "Cualquier tipo numérico convertible implícitamente a double es válido."
    },
    {
      "id": "12_11",
      "bossLevel": 12,
      "order": 11,
      "question": "[11/20] Si un método tiene un condicional if-else, ¿dónde debe haber sentencias return?",
      "options": [
        "Solo en el if",
        "Solo en el else",
        "En todas las ramas posibles para asegurar que siempre haya un retorno",
        "En ninguna"
      ],
      "correct": 2,
      "explanation": "El compilador debe constatar que toda ruta posible alcance un return válido."
    },
    {
      "id": "12_12",
      "bossLevel": 12,
      "order": 12,
      "question": "[12/20] ¿Qué imprime: int test() { return 10; } ... System.out.print(test() * 2);?",
      "options": [
        "10",
        "20",
        "2",
        "Error"
      ],
      "correct": 1,
      "explanation": "test() devuelve 10, y 10 * 2 = 20."
    },
    {
      "id": "12_13",
      "bossLevel": 12,
      "order": 13,
      "question": "[13/20] ¿Se puede asignar el resultado de un método con retorno directamente a una variable?",
      "options": [
        "Sí: int x = calcular();",
        "No, se requiere puntero",
        "Solo si es void",
        "Solo con new"
      ],
      "correct": 0,
      "explanation": "El valor retornado se asigna directamente a variables del tipo compatible."
    },
    {
      "id": "12_14",
      "bossLevel": 12,
      "order": 14,
      "question": "[14/20] ¿Se puede pasar el resultado de un método como argumento de otro método?",
      "options": [
        "Sí: System.out.println(sumar(2, 3));",
        "No, debe guardarse primero",
        "Solo si es estático",
        "Solo en C"
      ],
      "correct": 0,
      "explanation": "La llamada anidada se evalúa y su retorno se pasa como argumento."
    },
    {
      "id": "12_15",
      "bossLevel": 12,
      "order": 15,
      "question": "[15/20] ¿Cuántos valores puede retornar directamente una sentencia return en Java?",
      "options": [
        "Exactamente uno (un primitivo, un objeto o un arreglo que agrupe varios)",
        "Hasta 3 separados por comas",
        "Ilimitados",
        "Dos"
      ],
      "correct": 0,
      "explanation": "Java solo retorna un único valor o referencia por llamada."
    },
    {
      "id": "12_16",
      "bossLevel": 12,
      "order": 16,
      "question": "[16/20] ¿Para retornar múltiples valores desde un método qué técnica se suele usar?",
      "options": [
        "Retornar un objeto contenedor, un arreglo o una colección",
        "Usar return a, b, c;",
        "Usar múltiples returns seguidos",
        "No es posible"
      ],
      "correct": 0,
      "explanation": "Se agrupan en una clase (DTO/Record), arreglo o lista."
    },
    {
      "id": "12_17",
      "bossLevel": 12,
      "order": 17,
      "question": "[17/20] ¿Qué palabra clave introdujo Java 14 para definir clases inmutables ideales para retornos múltiples?",
      "options": [
        "record",
        "data",
        "tuple",
        "struct"
      ],
      "correct": 0,
      "explanation": "Los records proveen portadores de datos inmutables y concisos."
    },
    {
      "id": "12_18",
      "bossLevel": 12,
      "order": 18,
      "question": "[18/20] Si un método declara tipo de retorno int, ¿puede ejecutar return 3.14;?",
      "options": [
        "Sí, trunca a 3",
        "No, error de compilación por incompatibilidad de tipos",
        "Solo con advertencia",
        "Solo si es público"
      ],
      "correct": 1,
      "explanation": "double no cabe implícitamente en int, requiriendo casteo explícito."
    },
    {
      "id": "12_19",
      "bossLevel": 12,
      "order": 19,
      "question": "[19/20] ¿Un método puede tener múltiples sentencias return en diferentes bloques if?",
      "options": [
        "No, solo un return por método",
        "Sí, siempre que cada rama retorne el tipo correcto",
        "Solo hasta 2",
        "Solo en switch"
      ],
      "correct": 1,
      "explanation": "Es habitual tener retornos tempranos (early returns) dentro de condicionales."
    },
    {
      "id": "12_20",
      "bossLevel": 12,
      "order": 20,
      "question": "[20/20] ¿Qué retorna un método con tipo de retorno void cuando finaliza naturalmente?",
      "options": [
        "0",
        "null",
        "Nada, simplemente cede el control al invocador",
        "undefined"
      ],
      "correct": 2,
      "explanation": "Finaliza y el flujo continúa en la siguiente línea del llamador."
    }
  ],
  "13": [
    {
      "id": "13_1",
      "bossLevel": 13,
      "order": 1,
      "question": "[1/20] ¿Qué es el ámbito (scope) de una variable?",
      "options": [
        "La región del programa donde la variable es visible y accesible",
        "El tamaño en memoria",
        "El tiempo que tarda en compilar",
        "Su tipo de dato"
      ],
      "correct": 0,
      "explanation": "El ámbito delimita las líneas de código donde el identificador tiene validez."
    },
    {
      "id": "13_2",
      "bossLevel": 13,
      "order": 2,
      "question": "[2/20] ¿Dónde vive una variable local declarada dentro de un método?",
      "options": [
        "En toda la clase",
        "Únicamente dentro del bloque delimitado por llaves { } donde fue creada",
        "En todo el paquete",
        "En la memoria Heap"
      ],
      "correct": 1,
      "explanation": "Su vida y visibilidad terminan al cerrarse el bloque { } donde se declaró."
    },
    {
      "id": "13_3",
      "bossLevel": 13,
      "order": 3,
      "question": "[3/20] ¿En qué área de memoria de la JVM residen las variables locales y llamadas a métodos?",
      "options": [
        "Stack (Pila)",
        "Heap (Montículo)",
        "Disco duro",
        "Metaspace"
      ],
      "correct": 0,
      "explanation": "El Stack almacena los frames de los métodos y sus variables locales."
    },
    {
      "id": "13_4",
      "bossLevel": 13,
      "order": 4,
      "question": "[4/20] ¿Qué es una variable de instancia (atributo)?",
      "options": [
        "Una variable declarada dentro de una clase pero fuera de cualquier método",
        "Una variable local",
        "Una constante global",
        "Un método"
      ],
      "correct": 0,
      "explanation": "Los atributos pertenecen al objeto y definen su estado."
    },
    {
      "id": "13_5",
      "bossLevel": 13,
      "order": 5,
      "question": "[5/20] ¿En qué área de memoria residen las variables de instancia de los objetos?",
      "options": [
        "Stack (Pila)",
        "Heap (Montículo)",
        "Caché L1",
        "ROM"
      ],
      "correct": 1,
      "explanation": "Los objetos y sus variables de instancia residen en el Heap."
    },
    {
      "id": "13_6",
      "bossLevel": 13,
      "order": 6,
      "question": "[6/20] ¿Para qué sirve la palabra clave this en Java?",
      "options": [
        "Para referirse a la instancia actual del objeto",
        "Para invocar la clase padre",
        "Para crear variables estáticas",
        "Para reiniciar el método"
      ],
      "correct": 0,
      "explanation": "this es una referencia al objeto sobre el cual se ejecuta el código actual."
    },
    {
      "id": "13_7",
      "bossLevel": 13,
      "order": 7,
      "question": "[7/20] Si un parámetro tiene el mismo nombre que un atributo de instancia, ¿cómo se desambigua?",
      "options": [
        "Usando this.nombreAtributo = nombreParametro;",
        "Cambiando el compilador",
        "No es posible",
        "Con super"
      ],
      "correct": 0,
      "explanation": "this.atributo especifica el campo del objeto frente a la variable local."
    },
    {
      "id": "13_8",
      "bossLevel": 13,
      "order": 8,
      "question": "[8/20] ¿Cómo se llama el fenómeno cuando una variable local oculta a un atributo con el mismo nombre?",
      "options": [
        "Sombreado de variables (variable shadowing)",
        "Polimorfismo",
        "Encapsulamiento",
        "Herencia"
      ],
      "correct": 0,
      "explanation": "Se conoce como variable shadowing."
    },
    {
      "id": "13_9",
      "bossLevel": 13,
      "order": 9,
      "question": "[9/20] ¿Se puede utilizar la palabra clave this dentro de un método estático?",
      "options": [
        "Sí, siempre",
        "No, genera error de compilación (non-static variable this cannot be referenced)",
        "Solo en constructores",
        "Solo con Strings"
      ],
      "correct": 1,
      "explanation": "En contexto estático no existe ninguna instancia actual del objeto."
    },
    {
      "id": "13_10",
      "bossLevel": 13,
      "order": 10,
      "question": "[10/20] ¿Qué hace la llamada this(...) con paréntesis dentro de un constructor?",
      "options": [
        "Invoca a otro constructor sobrecargado de la misma clase",
        "Llama al destructor",
        "Reinicia el objeto",
        "Llama a la superclase"
      ],
      "correct": 0,
      "explanation": "this(...) reutiliza lógica entre constructores de la misma clase."
    },
    {
      "id": "13_11",
      "bossLevel": 13,
      "order": 11,
      "question": "[11/20] Si se utiliza this(...) para llamar a otro constructor, ¿en qué línea debe ubicarse?",
      "options": [
        "Debe ser estrictamente la primera instrucción del constructor",
        "Al final",
        "En cualquier línea",
        "En el destructor"
      ],
      "correct": 0,
      "explanation": "La llamada a otro constructor debe ser la primera línea ejecutable."
    },
    {
      "id": "13_12",
      "bossLevel": 13,
      "order": 12,
      "question": "[12/20] ¿Pueden dos variables locales tener el mismo nombre dentro del mismo bloque exacto?",
      "options": [
        "Sí",
        "No, error de compilación por variable duplicada",
        "Solo si una es int",
        "Solo en bucles"
      ],
      "correct": 1,
      "explanation": "No se permite duplicar nombres de variables en el mismo alcance."
    },
    {
      "id": "13_13",
      "bossLevel": 13,
      "order": 13,
      "question": "[13/20] ¿Una variable declarada dentro de un bucle for existe fuera del bucle?",
      "options": [
        "Sí, en todo el método",
        "No, su alcance expira al terminar el bucle",
        "Solo si es entera",
        "Solo si no hubo break"
      ],
      "correct": 1,
      "explanation": "La variable declarada en el for solo existe dentro de su estructura."
    },
    {
      "id": "13_14",
      "bossLevel": 13,
      "order": 14,
      "question": "[14/20] ¿Se inicializan automáticamente las variables locales en Java si no les asignas valor?",
      "options": [
        "Sí, en cero",
        "No, el compilador marca error si intentas leer una variable local no inicializada",
        "Sí, en null",
        "Depende de la JVM"
      ],
      "correct": 1,
      "explanation": "Las variables locales NO tienen valor por defecto y deben inicializarse antes de leerlas."
    },
    {
      "id": "13_15",
      "bossLevel": 13,
      "order": 15,
      "question": "[15/20] ¿Se inicializan automáticamente las variables de instancia en Java si no se les asigna valor?",
      "options": [
        "Sí, reciben valores por defecto (0, false, null)",
        "No, dan error",
        "Solo los enteros",
        "Solo si son públicas"
      ],
      "correct": 0,
      "explanation": "Los campos de instancia se inicializan automáticamente con sus valores por defecto."
    },
    {
      "id": "13_16",
      "bossLevel": 13,
      "order": 16,
      "question": "[16/20] ¿Qué es una variable de clase (estática)?",
      "options": [
        "Una variable declarada con static compartida por todas las instancias de la clase",
        "Una variable local",
        "Una variable privada",
        "Un parámetro"
      ],
      "correct": 0,
      "explanation": "Existe una única copia de la variable estática para toda la clase."
    },
    {
      "id": "13_17",
      "bossLevel": 13,
      "order": 17,
      "question": "[17/20] ¿Dónde se almacenan las variables estáticas en la memoria de la JVM?",
      "options": [
        "En el Metaspace / Heap como parte de la clase",
        "En el Stack del hilo",
        "En registros temporales",
        "En la tarjeta gráfica"
      ],
      "correct": 0,
      "explanation": "Pertenecen a la metadata de la clase en memoria."
    },
    {
      "id": "13_18",
      "bossLevel": 13,
      "order": 18,
      "question": "[18/20] ¿Se puede pasar this como argumento a otro método para enviar el objeto actual?",
      "options": [
        "Sí: otroMetodo(this);",
        "No, está prohibido",
        "Solo si es nulo",
        "Solo en Java 8"
      ],
      "correct": 0,
      "explanation": "Es muy común pasar this como callback o para registrar la instancia."
    },
    {
      "id": "13_19",
      "bossLevel": 13,
      "order": 19,
      "question": "[19/20] ¿Qué retorna el patrón Fluent Interface usando return this;?",
      "options": [
        "El propio objeto para permitir encadenamiento de llamadas (metodoA().metodoB())",
        "Un clon",
        "Null",
        "Un nuevo objeto"
      ],
      "correct": 0,
      "explanation": "Permite encadenar métodos (method chaining) como en los Builders."
    },
    {
      "id": "13_20",
      "bossLevel": 13,
      "order": 20,
      "question": "[20/20] ¿Cuál es el ciclo de vida de una variable local?",
      "options": [
        "Desde su declaración hasta que el bloque de ejecución finaliza y su frame se retira del Stack",
        "Durante toda la vida de la app",
        "Hasta que se apaga la PC",
        "Hasta el garbage collector"
      ],
      "correct": 0,
      "explanation": "Se destruye automáticamente al salir del ámbito del método en el Stack."
    }
  ],
  "14": [
    {
      "id": "14_1",
      "bossLevel": 14,
      "order": 1,
      "question": "[1/20] ¿Qué es un constructor en Java?",
      "options": [
        "Un método especial que se invoca al instanciar un objeto con new para inicializar su estado",
        "Un compilador",
        "Una función que destruye objetos",
        "Una interfaz"
      ],
      "correct": 0,
      "explanation": "El constructor inicializa los atributos del nuevo objeto en memoria."
    },
    {
      "id": "14_2",
      "bossLevel": 14,
      "order": 2,
      "question": "[2/20] ¿Cuáles son las dos reglas fundamentales del nombre y retorno de un constructor?",
      "options": [
        "Debe llamarse igual que la clase y NO tiene tipo de retorno (ni siquiera void)",
        "Debe llamarse constructor y retornar void",
        "Debe llamarse new y retornar la clase",
        "Debe ser privado siempre"
      ],
      "correct": 0,
      "explanation": "Lleva el nombre exacto de la clase y no declara ningún tipo de retorno."
    },
    {
      "id": "14_3",
      "bossLevel": 14,
      "order": 3,
      "question": "[3/20] ¿Qué constructor provee Java automáticamente si no escribes ninguno?",
      "options": [
        "Constructor por defecto (sin parámetros y con cuerpo vacío)",
        "Constructor copia",
        "Constructor estático",
        "Ninguno, da error"
      ],
      "correct": 0,
      "explanation": "Si no declaras constructores, el compilador inserta el constructor por defecto sin argumentos."
    },
    {
      "id": "14_4",
      "bossLevel": 14,
      "order": 4,
      "question": "[4/20] ¿Qué sucede con el constructor por defecto automático si escribes un constructor con parámetros?",
      "options": [
        "Se mantiene disponible",
        "Desaparece (se anula la generación automática)",
        "Da error de compilación",
        "Se duplica"
      ],
      "correct": 1,
      "explanation": "Al definir un constructor propio, Java ya no provee el constructor por defecto a menos que lo escribas explícitamente."
    },
    {
      "id": "14_5",
      "bossLevel": 14,
      "order": 5,
      "question": "[5/20] ¿Qué operador de Java reserva memoria en el Heap para un nuevo objeto e invoca al constructor?",
      "options": [
        "malloc",
        "alloc",
        "new",
        "create"
      ],
      "correct": 2,
      "explanation": "new asigna el espacio en el Heap e invoca el constructor."
    },
    {
      "id": "14_6",
      "bossLevel": 14,
      "order": 6,
      "question": "[6/20] ¿Qué es la sobrecarga de constructores?",
      "options": [
        "Tener múltiples constructores en la misma clase con diferente número o tipo de parámetros",
        "Tener constructores repetidos",
        "Llamar a new muchas veces",
        "Heredar constructores"
      ],
      "correct": 0,
      "explanation": "Permite inicializar objetos de distintas maneras con diferentes datos."
    },
    {
      "id": "14_7",
      "bossLevel": 14,
      "order": 7,
      "question": "[7/20] ¿Cómo puede un constructor llamar a otro constructor de la misma clase?",
      "options": [
        "Usando this(argumentos); en la primera línea",
        "Usando new()",
        "Usando constructor()",
        "Con super()"
      ],
      "correct": 0,
      "explanation": "this(...) reutiliza constructores sobrecargados."
    },
    {
      "id": "14_8",
      "bossLevel": 14,
      "order": 8,
      "question": "[8/20] ¿Puede un constructor ser declarado con el modificador private?",
      "options": [
        "No, debe ser público",
        "Sí, útil para clases utilitarias o el patrón Singleton",
        "Solo si no tiene atributos",
        "Solo en Java 17"
      ],
      "correct": 1,
      "explanation": "Los constructores privados impiden instanciar la clase desde fuera (ej: Math o Singleton)."
    },
    {
      "id": "14_9",
      "bossLevel": 14,
      "order": 9,
      "question": "[9/20] ¿Puede un constructor ser static en Java?",
      "options": [
        "Sí",
        "No, los constructores inicializan instancias y no pueden ser static",
        "Solo en clases abstractas",
        "Solo con final"
      ],
      "correct": 1,
      "explanation": "Un constructor nunca puede ser estático."
    },
    {
      "id": "14_10",
      "bossLevel": 14,
      "order": 10,
      "question": "[10/20] ¿Puede un constructor ser final en Java?",
      "options": [
        "Sí",
        "No, los constructores no se heredan, por lo que final no aplica",
        "Solo si la clase es final",
        "Solo en Java 8"
      ],
      "correct": 1,
      "explanation": "Los constructores no admiten el modificador final."
    },
    {
      "id": "14_11",
      "bossLevel": 14,
      "order": 11,
      "question": "[11/20] ¿Qué se ejecuta primero al instanciar un objeto: los bloques de inicialización de instancia o el cuerpo del constructor?",
      "options": [
        "Los bloques de inicialización de instancia se ejecutan antes del cuerpo del constructor",
        "El cuerpo del constructor primero",
        "Ocurren al azar",
        "Depende de new"
      ],
      "correct": 0,
      "explanation": "Los campos y bloques de inicialización se resuelven antes de ejecutar el cuerpo del constructor."
    },
    {
      "id": "14_12",
      "bossLevel": 14,
      "order": 12,
      "question": "[12/20] ¿Qué es un bloque de inicialización estático (static { ... })?",
      "options": [
        "Un bloque que se ejecuta una sola vez cuando la clase es cargada en memoria por la JVM",
        "Un constructor privado",
        "Un método main",
        "Un bucle"
      ],
      "correct": 0,
      "explanation": "Inicializa recursos estáticos una única vez al cargar la clase."
    },
    {
      "id": "14_13",
      "bossLevel": 14,
      "order": 13,
      "question": "[13/20] ¿Qué se crea en memoria cuando se ejecuta: Heroe h1 = new Heroe();?",
      "options": [
        "Una referencia en el Stack y el objeto Heroe en el Heap",
        "Solo un número",
        "Un archivo en disco",
        "Nada"
      ],
      "correct": 0,
      "explanation": "La variable h1 en el Stack apunta a la instancia en el Heap."
    },
    {
      "id": "14_14",
      "bossLevel": 14,
      "order": 14,
      "question": "[14/20] ¿Cuántas veces se ejecuta el constructor de un objeto a lo largo de su existencia?",
      "options": [
        "Una única vez en el momento de su creación con new",
        "Cada vez que llamas a un método",
        "En cada iteración de bucle",
        "Infinitas"
      ],
      "correct": 0,
      "explanation": "Solo se ejecuta al momento de instanciar el objeto."
    },
    {
      "id": "14_15",
      "bossLevel": 14,
      "order": 15,
      "question": "[15/20] ¿Qué ocurre si intentas instanciar una clase que no tiene constructor accesible?",
      "options": [
        "Error de compilación indicando que el constructor no es visible",
        "Se instancia en null",
        "Se crea un clon",
        "Se apaga la JVM"
      ],
      "correct": 0,
      "explanation": "El compilador impide la instanciación si el constructor está fuera de alcance."
    },
    {
      "id": "14_16",
      "bossLevel": 14,
      "order": 16,
      "question": "[16/20] ¿Un constructor puede lanzar excepciones con la cláusula throws?",
      "options": [
        "No, está prohibido",
        "Sí, un constructor puede declarar y lanzar excepciones si falla la inicialización",
        "Solo RuntimeException",
        "Solo en C++"
      ],
      "correct": 1,
      "explanation": "Un constructor puede declarar throws y abortar la creación si los datos son inválidos."
    },
    {
      "id": "14_17",
      "bossLevel": 14,
      "order": 17,
      "question": "[17/20] ¿Qué valor tienen los atributos de un objeto antes de que comience el cuerpo de su constructor?",
      "options": [
        "Sus valores por defecto de tipo (0, false, null) o valores de inicialización en línea",
        "Basura de memoria",
        "Valores aleatorios",
        "1"
      ],
      "correct": 0,
      "explanation": "Java garantiza memoria limpia inicializada en valores cero o literales iniciales."
    },
    {
      "id": "14_18",
      "bossLevel": 14,
      "order": 18,
      "question": "[18/20] ¿Es legal que una clase tenga un método normal que se llame igual que la clase pero tenga void (ej: void Heroe())?",
      "options": [
        "Es legal pero es una pésima práctica (es un método normal, NO un constructor)",
        "No compila",
        "Se convierte en constructor automáticamente",
        "Da advertencia fatal"
      ],
      "correct": 0,
      "explanation": "Al tener void se convierte en un método común, prestando a graves confusiones."
    },
    {
      "id": "14_19",
      "bossLevel": 14,
      "order": 19,
      "question": "[19/20] ¿Se heredan los constructores en las subclases en Java?",
      "options": [
        "Sí, automáticamente",
        "No, las subclases no heredan constructores, deben invocar a los del padre con super()",
        "Solo los públicos",
        "Solo en interfaces"
      ],
      "correct": 1,
      "explanation": "Los constructores no se heredan; las subclases definen sus propios constructores."
    },
    {
      "id": "14_20",
      "bossLevel": 14,
      "order": 20,
      "question": "[20/20] ¿Qué llamada implícita inserta Java en la primera línea de un constructor si tú no pones this() ni super()?",
      "options": [
        "super(); (invocación al constructor sin argumentos de la clase padre)",
        "this();",
        "System.gc();",
        "Nada"
      ],
      "correct": 0,
      "explanation": "Java añade super(); automáticamente para inicializar la jerarquía de herencia."
    }
  ],
  "15": [
    {
      "id": "15_1",
      "bossLevel": 15,
      "order": 1,
      "question": "[1/20] ¿Qué es el encapsulamiento en Programación Orientada a Objetos?",
      "options": [
        "Ocultar los detalles internos y atributos de un objeto protegiendo su estado e integridad",
        "Tener muchas clases",
        "Compilar a Bytecode",
        "Usar variables públicas"
      ],
      "correct": 0,
      "explanation": "Protege el estado interno exponiendo solo métodos controlados."
    },
    {
      "id": "15_2",
      "bossLevel": 15,
      "order": 2,
      "question": "[2/20] ¿Qué modificador de acceso restringe la visibilidad únicamente a la misma clase?",
      "options": [
        "private",
        "public",
        "protected",
        "default"
      ],
      "correct": 0,
      "explanation": "private es el nivel más restrictivo."
    },
    {
      "id": "15_3",
      "bossLevel": 15,
      "order": 3,
      "question": "[3/20] ¿Qué modificador de acceso permite la visibilidad desde cualquier clase y paquete?",
      "options": [
        "public",
        "private",
        "protected",
        "package-private"
      ],
      "correct": 0,
      "explanation": "public otorga acceso universal."
    },
    {
      "id": "15_4",
      "bossLevel": 15,
      "order": 4,
      "question": "[4/20] ¿Cuál es la visibilidad por defecto (package-private) si no especificas ningún modificador?",
      "options": [
        "Visible para todas las clases del mismo paquete",
        "Privado total",
        "Público global",
        "Solo para subclases"
      ],
      "correct": 0,
      "explanation": "default permite acceso a cualquier clase dentro del mismo paquete."
    },
    {
      "id": "15_5",
      "bossLevel": 15,
      "order": 5,
      "question": "[5/20] ¿Qué visibilidad otorga el modificador protected?",
      "options": [
        "Acceso a clases del mismo paquete y a subclases en otros paquetes mediante herencia",
        "Solo al mismo archivo",
        "Público universal",
        "Solo a métodos"
      ],
      "correct": 0,
      "explanation": "protected abre el acceso a subclases incluso fuera del paquete original."
    },
    {
      "id": "15_6",
      "bossLevel": 15,
      "order": 6,
      "question": "[6/20] ¿Cuál es el orden de más restrictivo a más permisivo de los modificadores de acceso?",
      "options": [
        "private -> default -> protected -> public",
        "public -> protected -> default -> private",
        "private -> protected -> default -> public",
        "default -> private -> protected -> public"
      ],
      "correct": 0,
      "explanation": "El orden estricto de visibilidad creciente es private, default, protected, public."
    },
    {
      "id": "15_7",
      "bossLevel": 15,
      "order": 7,
      "question": "[7/20] ¿Cuál es el propósito común de un método Getter?",
      "options": [
        "Leer u obtener de forma controlada el valor de un atributo privado",
        "Modificar un dato",
        "Borrar la variable",
        "Imprimir en consola"
      ],
      "correct": 0,
      "explanation": "Un getter expone el valor de un campo privado de solo lectura."
    },
    {
      "id": "15_8",
      "bossLevel": 15,
      "order": 8,
      "question": "[8/20] ¿Cuál es la convención para nombrar un getter para una variable entera llamada nivel?",
      "options": [
        "getNivel()",
        "leerNivel()",
        "nivel()",
        "fetchNivel()"
      ],
      "correct": 0,
      "explanation": "La convención estándar es prefijar con get: getNivel()."
    },
    {
      "id": "15_9",
      "bossLevel": 15,
      "order": 9,
      "question": "[9/20] ¿Cuál es la convención para nombrar un getter para una variable booleana llamada activo?",
      "options": [
        "isActivo() (o getActivo())",
        "checkActivo()",
        "hasActivo()",
        "activoBool()"
      ],
      "correct": 0,
      "explanation": "Para booleanos la convención JavaBeans es isPropiedad(), ej: isActivo()."
    },
    {
      "id": "15_10",
      "bossLevel": 15,
      "order": 10,
      "question": "[10/20] ¿Cuál es el propósito común de un método Setter?",
      "options": [
        "Modificar el valor de un atributo privado aplicando validaciones y reglas de negocio",
        "Leer el valor",
        "Destruir el objeto",
        "Calcular promedios"
      ],
      "correct": 0,
      "explanation": "Un setter permite validar los datos antes de asignarlos al atributo."
    },
    {
      "id": "15_11",
      "bossLevel": 15,
      "order": 11,
      "question": "[11/20] ¿Cuál es la convención para nombrar un setter para la variable nivel?",
      "options": [
        "setNivel(int nuevoNivel)",
        "cambiarNivel()",
        "putNivel()",
        "writeNivel()"
      ],
      "correct": 0,
      "explanation": "La convención es setPropiedad(valor): setNivel(int nuevoNivel)."
    },
    {
      "id": "15_12",
      "bossLevel": 15,
      "order": 12,
      "question": "[12/20] ¿Por qué no es una buena práctica declarar atributos como public en POO?",
      "options": [
        "Porque cualquier clase externa puede alterar los datos sin validación rompiendo la consistencia",
        "Porque ocupan más RAM",
        "Porque son más lentos",
        "Porque no se pueden compilar"
      ],
      "correct": 0,
      "explanation": "Rompe el encapsulamiento permitiendo estados corruptos e inválidos."
    },
    {
      "id": "15_13",
      "bossLevel": 15,
      "order": 13,
      "question": "[13/20] ¿Cómo se crea una clase inmutable mediante encapsulamiento?",
      "options": [
        "Atributos private final, sin métodos setter y solo getters",
        "Haciendo todo público",
        "Haciendo todo estático",
        "Con constructores vacíos"
      ],
      "correct": 0,
      "explanation": "Campos privados y finales sin setters garantizan inmutabilidad."
    },
    {
      "id": "15_14",
      "bossLevel": 15,
      "order": 14,
      "question": "[14/20] ¿Puede una clase de nivel superior (top-level) ser declarada como private?",
      "options": [
        "No, solo public o default",
        "Sí, siempre",
        "Solo si no tiene métodos",
        "Solo en Java 21"
      ],
      "correct": 0,
      "explanation": "Las clases externas solo pueden ser public o package-private."
    },
    {
      "id": "15_15",
      "bossLevel": 15,
      "order": 15,
      "question": "[15/20] ¿Pueden las clases internas (inner classes) ser declaradas como private?",
      "options": [
        "Sí, pueden tener cualquier modificador de acceso",
        "No",
        "Solo protected",
        "Solo estáticas"
      ],
      "correct": 0,
      "explanation": "Las clases anidadas como miembros de otra sí admiten private."
    },
    {
      "id": "15_16",
      "bossLevel": 15,
      "order": 16,
      "question": "[16/20] ¿Qué principio de diseño promueve tener bajo acoplamiento y alta cohesión mediante encapsulamiento?",
      "options": [
        "Principio de responsabilidad única y ocultamiento de información",
        "Herencia múltiple",
        "Código espagueti",
        "Programación lineal"
      ],
      "correct": 0,
      "explanation": "El ocultamiento de información minimiza dependencias entre módulos."
    },
    {
      "id": "15_17",
      "bossLevel": 15,
      "order": 17,
      "question": "[17/20] ¿Qué retorna comúnmente un método setter?",
      "options": [
        "void (aunque puede retornar this en fluent builders)",
        "int",
        "String",
        "boolean"
      ],
      "correct": 0,
      "explanation": "Los setters clásicos retornan void."
    },
    {
      "id": "15_18",
      "bossLevel": 15,
      "order": 18,
      "question": "[18/20] ¿Qué ventaja ofrece encapsular el cálculo de un dato derivado en un getter?",
      "options": [
        "Permite calcularlo al vuelo sin necesidad de almacenar una variable redundante",
        "Aumenta el tamaño en disco",
        "Hace que sea estático",
        "Ninguna"
      ],
      "correct": 0,
      "explanation": "Permite cambiar la implementación interna sin alterar el código que consume el getter."
    },
    {
      "id": "15_19",
      "bossLevel": 15,
      "order": 19,
      "question": "[19/20] ¿Puede un setter rechazar valores inválidos lanzando IllegalArgumentException?",
      "options": [
        "Sí, es una de las mayores ventajas del encapsulamiento",
        "No, está prohibido lanzar errores en setters",
        "Solo si es abstracto",
        "Solo en C#"
      ],
      "correct": 0,
      "explanation": "Los setters protegen los invariantes de la clase rechazando datos ilícitos."
    },
    {
      "id": "15_20",
      "bossLevel": 15,
      "order": 20,
      "question": "[20/20] ¿Qué herramienta de Java moderna autogenera getters y constructores transparentemente?",
      "options": [
        "Java Records (record Nombre(...))",
        "Lombok",
        "Ambas opciones son ampliamente usadas",
        "Ninguna"
      ],
      "correct": 2,
      "explanation": "Tanto los Records nativos como la librería Lombok automatizan este patrón."
    }
  ],
  "16": [
    {
      "id": "16_1",
      "bossLevel": 16,
      "order": 1,
      "question": "[1/20] ¿Qué palabra clave se usa en Java para que una clase herede de otra?",
      "options": [
        "extends",
        "implements",
        "inherits",
        "subclass"
      ],
      "correct": 0,
      "explanation": "extends establece la relación de herencia entre clases."
    },
    {
      "id": "16_2",
      "bossLevel": 16,
      "order": 2,
      "question": "[2/20] ¿Admite Java herencia múltiple directa de clases (class C extends A, B)?",
      "options": [
        "No, solo permite herencia simple de clases para evitar ambigüedades",
        "Sí, siempre",
        "Solo a partir de Java 8",
        "Solo con clases abstractas"
      ],
      "correct": 0,
      "explanation": "Java restringe a una única superclase directa evitando el problema del diamante."
    },
    {
      "id": "16_3",
      "bossLevel": 16,
      "order": 3,
      "question": "[3/20] ¿Cuál es la clase raíz de la cual heredan directa o indirectamente todas las clases en Java?",
      "options": [
        "java.lang.Object",
        "java.lang.Class",
        "java.lang.System",
        "java.lang.Root"
      ],
      "correct": 0,
      "explanation": "Toda clase en Java es una subclase de Object."
    },
    {
      "id": "16_4",
      "bossLevel": 16,
      "order": 4,
      "question": "[4/20] ¿Qué palabra clave se utiliza dentro de una subclase para invocar métodos o constructores de la superclase?",
      "options": [
        "super",
        "parent",
        "base",
        "this"
      ],
      "correct": 0,
      "explanation": "super permite acceder a los miembros de la clase padre."
    },
    {
      "id": "16_5",
      "bossLevel": 16,
      "order": 5,
      "question": "[5/20] ¿Cómo se invoca al constructor de la clase padre desde el constructor de la hija?",
      "options": [
        "super(argumentos);",
        "this.super()",
        "parent()",
        "Base()"
      ],
      "correct": 0,
      "explanation": "super(...) llama al constructor correspondiente de la superclase."
    },
    {
      "id": "16_6",
      "bossLevel": 16,
      "order": 6,
      "question": "[6/20] Si se escribe super(...) en un constructor, ¿dónde debe estar ubicado?",
      "options": [
        "Debe ser forzosamente la primera sentencia del constructor",
        "Al final",
        "En cualquier línea",
        "En el destructor"
      ],
      "correct": 0,
      "explanation": "Debe ser la primera línea para inicializar la clase base antes que la hija."
    },
    {
      "id": "16_7",
      "bossLevel": 16,
      "order": 7,
      "question": "[7/20] ¿Hereda una subclase los miembros con modificador private de la superclase?",
      "options": [
        "No tiene acceso directo a ellos, aunque existen en el objeto y se acceden vía métodos protegidos o públicos",
        "Sí, directamente",
        "Se borran",
        "Se convierten en públicos"
      ],
      "correct": 0,
      "explanation": "Los miembros privados no son directamente accesibles por las subclases."
    },
    {
      "id": "16_8",
      "bossLevel": 16,
      "order": 8,
      "question": "[8/20] ¿Qué palabra clave impide que una clase pueda ser heredada (evita subclases)?",
      "options": [
        "final",
        "static",
        "sealed",
        "const"
      ],
      "correct": 0,
      "explanation": "Una clase final no puede ser extendida (ejemplo: String o Math)."
    },
    {
      "id": "16_9",
      "bossLevel": 16,
      "order": 9,
      "question": "[9/20] ¿Qué palabra clave impide que un método pueda ser sobrescrito por las clases hijas?",
      "options": [
        "final",
        "static",
        "abstract",
        "private"
      ],
      "correct": 0,
      "explanation": "Un método final no puede tener @Override en subclases."
    },
    {
      "id": "16_10",
      "bossLevel": 16,
      "order": 10,
      "question": "[10/20] ¿Qué es una clase abstracta en Java (abstract class)?",
      "options": [
        "Una clase que no puede ser instanciada directamente con new y sirve como plantilla base",
        "Una clase vacía",
        "Una clase que no compila",
        "Una interfaz"
      ],
      "correct": 0,
      "explanation": "Define una estructura base incompleta para que las subclases la extiendan y completen."
    },
    {
      "id": "16_11",
      "bossLevel": 16,
      "order": 11,
      "question": "[11/20] ¿Puede una clase abstracta tener constructores?",
      "options": [
        "Sí, que son invocados por las subclases mediante super()",
        "No, está prohibido",
        "Solo si no tiene atributos",
        "Solo en Java 8"
      ],
      "correct": 0,
      "explanation": "Tienen constructores para inicializar sus atributos cuando las subclases se instancian."
    },
    {
      "id": "16_12",
      "bossLevel": 16,
      "order": 12,
      "question": "[12/20] ¿Puede una clase abstracta tener métodos con código (métodos concretos)?",
      "options": [
        "Sí, puede mezclar métodos abstractos y métodos con implementación completa",
        "No, todos deben ser vacíos",
        "Solo métodos estáticos",
        "Solo getters"
      ],
      "correct": 0,
      "explanation": "Una clase abstracta puede proveer implementaciones comunes a todas sus hijas."
    },
    {
      "id": "16_13",
      "bossLevel": 16,
      "order": 13,
      "question": "[13/20] ¿Qué palabra clave introdujo Java 17 para restringir explícitamente qué clases pueden heredar de ella?",
      "options": [
        "sealed (clases selladas con permits)",
        "locked",
        "private class",
        "frozen"
      ],
      "correct": 0,
      "explanation": "sealed declara una jerarquía cerrada permitiendo heredar solo a clases autorizadas."
    },
    {
      "id": "16_14",
      "bossLevel": 16,
      "order": 14,
      "question": "[14/20] ¿Cómo se accede a un método sobrescrito de la clase padre desde la hija?",
      "options": [
        "super.nombreMetodo()",
        "this.super.metodo()",
        "parent.metodo()",
        "base.metodo()"
      ],
      "correct": 0,
      "explanation": "super.metodo() invoca la versión implementada en la superclase."
    },
    {
      "id": "16_15",
      "bossLevel": 16,
      "order": 15,
      "question": "[15/20] ¿Qué relación describe la herencia entre la clase hija y la clase padre?",
      "options": [
        "Es un (is-a)",
        "Tiene un (has-a)",
        "Usa un (uses-a)",
        "Ninguna"
      ],
      "correct": 0,
      "explanation": "La herencia modela la relación \"es un\" (un Perro es un Animal)."
    },
    {
      "id": "16_16",
      "bossLevel": 16,
      "order": 16,
      "question": "[16/20] ¿Qué relación describe la composición frente a la herencia?",
      "options": [
        "Tiene un (has-a)",
        "Es un (is-a)",
        "Es igual a",
        "Hereda de"
      ],
      "correct": 0,
      "explanation": "La composición modela \"tiene un\" (un Auto tiene un Motor)."
    },
    {
      "id": "16_17",
      "bossLevel": 16,
      "order": 17,
      "question": "[17/20] ¿Qué principio de diseño sugiere priorizar la composición sobre la herencia?",
      "options": [
        "Favor composition over inheritance",
        "DRY estricto",
        "Herencia extrema",
        "Singleton"
      ],
      "correct": 0,
      "explanation": "La composición ofrece mayor flexibilidad y desacoplamiento que jerarquías rígidas."
    },
    {
      "id": "16_18",
      "bossLevel": 16,
      "order": 18,
      "question": "[18/20] ¿Cuál es el modificador de método que DEBE ser implementado por la primera subclase concreta?",
      "options": [
        "abstract",
        "default",
        "virtual",
        "override"
      ],
      "correct": 0,
      "explanation": "Un método abstract obliga a la subclase concreta a proveer su cuerpo."
    },
    {
      "id": "16_19",
      "bossLevel": 16,
      "order": 19,
      "question": "[19/20] ¿Qué método de la clase Object retorna una representación en texto del objeto?",
      "options": [
        "toString()",
        "text()",
        "asString()",
        "print()"
      ],
      "correct": 0,
      "explanation": "toString() genera la representación textual que se suele sobrescribir."
    },
    {
      "id": "16_20",
      "bossLevel": 16,
      "order": 20,
      "question": "[20/20] ¿Qué método de la clase Object compara igualdad de objetos y se suele sobrescribir junto con hashCode()?",
      "options": [
        "equals(Object obj)",
        "same()",
        "compare()",
        "isEqual()"
      ],
      "correct": 0,
      "explanation": "equals() y hashCode() forman el contrato fundamental de igualdad en Java."
    }
  ],
  "17": [
    {
      "id": "17_1",
      "bossLevel": 17,
      "order": 1,
      "question": "[1/20] ¿Qué es el polimorfismo en Java?",
      "options": [
        "La habilidad de un objeto de tomar múltiples formas y ejecutar comportamientos específicos en tiempo de ejecución",
        "Tener muchas clases",
        "Compilar muchas veces",
        "Repetir bucles"
      ],
      "correct": 0,
      "explanation": "Permite tratar instancias de subclases a través del tipo de su superclase común."
    },
    {
      "id": "17_2",
      "bossLevel": 17,
      "order": 2,
      "question": "[2/20] Dada la jerarquía Animal -> Gato, ¿es válida la instrucción: Animal a = new Gato();?",
      "options": [
        "Sí, es el principio básico del polimorfismo",
        "No, causa error de compilación",
        "Solo si Animal es interfaz",
        "Solo si no hay constructores"
      ],
      "correct": 0,
      "explanation": "Una referencia del tipo padre puede apuntar a cualquier objeto hijo."
    },
    {
      "id": "17_3",
      "bossLevel": 17,
      "order": 3,
      "question": "[3/20] Si ejecutas a.hacerSonido(); con a siendo Animal que apunta a un Gato, ¿qué versión se ejecuta?",
      "options": [
        "La versión sobrescrita en la clase Gato (enlace dinámico)",
        "La versión de Animal",
        "Ninguna",
        "Da error"
      ],
      "correct": 0,
      "explanation": "El polimorfismo resuelve el método en tiempo de ejecución según el tipo real del objeto en el Heap."
    },
    {
      "id": "17_4",
      "bossLevel": 17,
      "order": 4,
      "question": "[4/20] ¿Qué es el enlace dinámico (dynamic binding o late binding)?",
      "options": [
        "El mecanismo de la JVM que determina qué método ejecutar en tiempo de ejecución según el tipo del objeto",
        "Compilar con javac",
        "Castear variables",
        "Crear hilos"
      ],
      "correct": 0,
      "explanation": "Permite que la llamada responda al comportamiento del objeto real instanciado."
    },
    {
      "id": "17_5",
      "bossLevel": 17,
      "order": 5,
      "question": "[5/20] ¿Qué anotación estándar se debe colocar al sobrescribir un método heredado?",
      "options": [
        "@Override",
        "@Overwrite",
        "@Shadow",
        "@Super"
      ],
      "correct": 0,
      "explanation": "@Override instruye al compilador a validar que la firma coincida exactamente con la del padre."
    },
    {
      "id": "17_6",
      "bossLevel": 17,
      "order": 6,
      "question": "[6/20] ¿Cuál es la diferencia entre sobreescritura (overriding) y sobrecarga (overloading)?",
      "options": [
        "Sobreescritura redefine un método heredado idéntico; sobrecarga define métodos con mismo nombre y distintos parámetros",
        "Son lo mismo",
        "Sobreescritura es solo en interfaces",
        "Sobrecarga requiere herencia"
      ],
      "correct": 0,
      "explanation": "Overriding altera comportamiento en jerarquías; Overloading diversifica firmas en la misma clase."
    },
    {
      "id": "17_7",
      "bossLevel": 17,
      "order": 7,
      "question": "[7/20] ¿Puede un método sobrescrito en la subclase tener un modificador de acceso MÁS restrictivo que en el padre?",
      "options": [
        "No, no puede reducir la visibilidad del método heredado",
        "Sí, siempre",
        "Solo a private",
        "Solo si es void"
      ],
      "correct": 0,
      "explanation": "La subclase puede mantener o ampliar la visibilidad, pero jamás reducirla."
    },
    {
      "id": "17_8",
      "bossLevel": 17,
      "order": 8,
      "question": "[8/20] ¿Puede un método sobrescrito declarar excepciones verificadas más amplias que las del método padre?",
      "options": [
        "No, solo excepciones iguales, más específicas (subtipos) o ninguna",
        "Sí, cualquier excepción",
        "Solo Exception",
        "Solo Throwable"
      ],
      "correct": 0,
      "explanation": "El método hijo no puede arrojar excepciones comprobadas más generales."
    },
    {
      "id": "17_9",
      "bossLevel": 17,
      "order": 9,
      "question": "[9/20] ¿Se pueden sobrescribir métodos declarados como private en la superclase?",
      "options": [
        "No, los métodos privados no son visibles para las subclases",
        "Sí, usando @Override",
        "Solo si son void",
        "Solo en el mismo archivo"
      ],
      "correct": 0,
      "explanation": "Un método privado no se hereda y por tanto no puede sobrescribirse."
    },
    {
      "id": "17_10",
      "bossLevel": 17,
      "order": 10,
      "question": "[10/20] ¿Se pueden sobrescribir métodos declarados como static?",
      "options": [
        "No, los métodos estáticos no se sobrescriben sino que se ocultan (method hiding)",
        "Sí, con polimorfismo",
        "Solo si no reciben argumentos",
        "Solo en Java 11"
      ],
      "correct": 0,
      "explanation": "El polimorfismo aplica a métodos de instancia; los métodos estáticos se resuelven en compilación."
    },
    {
      "id": "17_11",
      "bossLevel": 17,
      "order": 11,
      "question": "[11/20] ¿Qué operador evalúa si un objeto es una instancia de una clase o interfaz determinada?",
      "options": [
        "instanceof",
        "isType",
        "typeof",
        "as"
      ],
      "correct": 0,
      "explanation": "objeto instanceof Clase retorna true si el objeto desciende de esa clase."
    },
    {
      "id": "17_12",
      "bossLevel": 17,
      "order": 12,
      "question": "[12/20] ¿Qué patrón de lenguaje introdujo Java 16 para combinar instanceof y casteo: if (obj instanceof String s)?",
      "options": [
        "Pattern Matching para instanceof",
        "Smart Casts",
        "Type inference",
        "Quick cast"
      ],
      "correct": 0,
      "explanation": "Pattern matching castea automáticamente la variable s si la comprobación es true."
    },
    {
      "id": "17_13",
      "bossLevel": 17,
      "order": 13,
      "question": "[13/20] ¿Qué excepción se lanza si intentas castear un objeto a un tipo incompatible en runtime: (Perro) new Gato()?",
      "options": [
        "ClassCastException",
        "NullPointerException",
        "IllegalArgumentException",
        "TypeMismatchException"
      ],
      "correct": 0,
      "explanation": "Lanza ClassCastException al violar la jerarquía de tipos en runtime."
    },
    {
      "id": "17_14",
      "bossLevel": 17,
      "order": 14,
      "question": "[14/20] ¿Qué es el casteo ascendente (upcasting) en Java?",
      "options": [
        "Asignar un objeto hijo a una referencia padre (automático y seguro)",
        "Castear padre a hijo",
        "Convertir número a texto",
        "Elevar al cuadrado"
      ],
      "correct": 0,
      "explanation": "Upcasting es implícito y siempre seguro (Animal a = miPerro;)."
    },
    {
      "id": "17_15",
      "bossLevel": 17,
      "order": 15,
      "question": "[15/20] ¿Qué es el casteo descendente (downcasting)?",
      "options": [
        "Convertir una referencia de tipo padre al tipo hijo específico (requiere casteo explícito)",
        "Asignar hijo a padre",
        "Subir de versión",
        "Castear a Object"
      ],
      "correct": 0,
      "explanation": "Downcasting requiere comprobación previa para evitar ClassCastException."
    },
    {
      "id": "17_16",
      "bossLevel": 17,
      "order": 16,
      "question": "[16/20] ¿Qué es el retorno covariante en métodos sobrescritos?",
      "options": [
        "Permitir que el método hijo retorne un subtipo del tipo declarado en el método padre",
        "Retornar dos cosas",
        "Retornar void",
        "Cambiar a primitivo"
      ],
      "correct": 0,
      "explanation": "El método sobrescrito puede devolver un tipo más específico que el original."
    },
    {
      "id": "17_17",
      "bossLevel": 17,
      "order": 17,
      "question": "[17/20] ¿Puede el polimorfismo operar a través de interfaces?",
      "options": [
        "Sí, una variable de tipo interfaz puede apuntar a cualquier clase que la implemente",
        "No, solo con clases abstractas",
        "Solo en colecciones",
        "Solo con listas"
      ],
      "correct": 0,
      "explanation": "Las interfaces son el pilar más potente del polimorfismo en Java."
    },
    {
      "id": "17_18",
      "bossLevel": 17,
      "order": 18,
      "question": "[18/20] ¿Qué principio SOLID establece que los objetos deben ser reemplazables por instancias de sus subtipos sin alterar el programa?",
      "options": [
        "Principio de Sustitución de Liskov (LSP)",
        "Principio Abierto/Cerrado (OCP)",
        "Inversión de Dependencias (DIP)",
        "Segregación de Interfaces (ISP)"
      ],
      "correct": 0,
      "explanation": "Liskov Substitution Principle garantiza que las subclases preserven el contrato del padre."
    },
    {
      "id": "17_19",
      "bossLevel": 17,
      "order": 19,
      "question": "[19/20] ¿Por qué el polimorfismo facilita la extensión de sistemas (código abierto a extensión, cerrado a modificación)?",
      "options": [
        "Porque se pueden agregar nuevas subclases sin modificar el código que consume la superclase",
        "Porque usa menos archivos",
        "Porque borra la memoria",
        "Porque elimina los bucles"
      ],
      "correct": 0,
      "explanation": "Permite desacoplar el cliente de las implementaciones concretas."
    },
    {
      "id": "17_20",
      "bossLevel": 17,
      "order": 20,
      "question": "[20/20] ¿Qué imprime el siguiente código?: Animal a = new Perro(); System.out.println(a.getClass().getSimpleName());?",
      "options": [
        "Perro",
        "Animal",
        "Object",
        "Error"
      ],
      "correct": 0,
      "explanation": "getClass() devuelve el tipo real instanciado en runtime: Perro."
    }
  ],
  "18": [
    {
      "id": "18_1",
      "bossLevel": 18,
      "order": 1,
      "question": "[1/20] ¿Qué palabra clave se usa para declarar una interfaz en Java?",
      "options": [
        "interface",
        "implements",
        "contract",
        "abstract class"
      ],
      "correct": 0,
      "explanation": "La palabra clave es interface."
    },
    {
      "id": "18_2",
      "bossLevel": 18,
      "order": 2,
      "question": "[2/20] ¿Qué palabra clave usa una clase para comprometerse a cumplir con una interfaz?",
      "options": [
        "implements",
        "extends",
        "uses",
        "applies"
      ],
      "correct": 0,
      "explanation": "class MiClase implements MiInterfaz."
    },
    {
      "id": "18_3",
      "bossLevel": 18,
      "order": 3,
      "question": "[3/20] ¿Puede una clase en Java implementar MÚLTIPLES interfaces a la vez?",
      "options": [
        "Sí, separadas por comas (implements A, B, C)",
        "No, solo una",
        "Solo en Java 8",
        "Solo si están vacías"
      ],
      "correct": 0,
      "explanation": "Una clase puede implementar tantas interfaces como necesite."
    },
    {
      "id": "18_4",
      "bossLevel": 18,
      "order": 4,
      "question": "[4/20] ¿Puede una interfaz heredar de OTRA interfaz usando extends?",
      "options": [
        "Sí, e incluso puede extender múltiples interfaces a la vez",
        "No, las interfaces usan implements",
        "Solo una interfaz",
        "No pueden heredar"
      ],
      "correct": 0,
      "explanation": "Una interfaz puede extender varias interfaces con extends A, B."
    },
    {
      "id": "18_5",
      "bossLevel": 18,
      "order": 5,
      "question": "[5/20] ¿Por defecto, cómo son los métodos declarados en una interfaz clásica?",
      "options": [
        "public abstract",
        "private",
        "protected",
        "default final"
      ],
      "correct": 0,
      "explanation": "Los métodos tradicionales de interfaz son implícitamente public abstract."
    },
    {
      "id": "18_6",
      "bossLevel": 18,
      "order": 6,
      "question": "[6/20] ¿Por defecto, cómo son las variables (constantes) declaradas en una interfaz?",
      "options": [
        "public static final",
        "private",
        "variables normales de instancia",
        "protected"
      ],
      "correct": 0,
      "explanation": "Las variables de interfaz son siempre constantes públicas, estáticas y finales."
    },
    {
      "id": "18_7",
      "bossLevel": 18,
      "order": 7,
      "question": "[7/20] ¿Qué palabra clave introdujo Java 8 para permitir métodos con cuerpo en interfaces?",
      "options": [
        "default",
        "concrete",
        "fallback",
        "virtual"
      ],
      "correct": 0,
      "explanation": "Los default methods permiten añadir lógica base a las interfaces sin romper implementaciones previas."
    },
    {
      "id": "18_8",
      "bossLevel": 18,
      "order": 8,
      "question": "[8/20] ¿Permite Java 8 declarar métodos estáticos (static) dentro de interfaces?",
      "options": [
        "Sí, con su implementación completa",
        "No, está prohibido",
        "Solo si son privados",
        "Solo en Java 17"
      ],
      "correct": 0,
      "explanation": "Java 8 añadió métodos estáticos utilitarios en interfaces."
    },
    {
      "id": "18_9",
      "bossLevel": 18,
      "order": 9,
      "question": "[9/20] ¿Permite Java 9 declarar métodos privados (private) dentro de interfaces para reutilizar código interno?",
      "options": [
        "Sí, introducidos en Java 9",
        "No",
        "Solo métodos públicos",
        "Solo en clases abstractas"
      ],
      "correct": 0,
      "explanation": "Java 9 permite métodos privados para encapsular lógica común entre default methods."
    },
    {
      "id": "18_10",
      "bossLevel": 18,
      "order": 10,
      "question": "[10/20] ¿Qué es una interfaz funcional (Functional Interface)?",
      "options": [
        "Una interfaz que tiene exactamente UN método abstracto",
        "Una interfaz sin métodos",
        "Una interfaz que corre rápido",
        "Una clase estática"
      ],
      "correct": 0,
      "explanation": "Tiene un único método abstracto (SAM: Single Abstract Method) y se usa con lambdas."
    },
    {
      "id": "18_11",
      "bossLevel": 18,
      "order": 11,
      "question": "[11/20] ¿Qué anotación estándar se usa para marcar interfaces funcionales?",
      "options": [
        "@FunctionalInterface",
        "@Function",
        "@Lambda",
        "@SAM"
      ],
      "correct": 0,
      "explanation": "@FunctionalInterface valida en compilación que solo tenga un método abstracto."
    },
    {
      "id": "18_12",
      "bossLevel": 18,
      "order": 12,
      "question": "[12/20] ¿Puede una interfaz ser instanciada directamente con new MiInterfaz()?",
      "options": [
        "No, a menos que se use una clase anónima o lambda",
        "Sí, siempre",
        "Solo si tiene default methods",
        "Solo en pruebas"
      ],
      "correct": 0,
      "explanation": "Las interfaces no son clases y no pueden instanciarse directamente."
    },
    {
      "id": "18_13",
      "bossLevel": 18,
      "order": 13,
      "question": "[13/20] ¿Qué es una clase anónima al instanciar una interfaz?",
      "options": [
        "Una implementación al vuelo sin nombre creada en la misma expresión new Interfaz() { ... }",
        "Una clase privada",
        "Un error de sintaxis",
        "Un paquete"
      ],
      "correct": 0,
      "explanation": "Provee la implementación inline de los métodos de la interfaz."
    },
    {
      "id": "18_14",
      "bossLevel": 18,
      "order": 14,
      "question": "[14/20] ¿Cómo se resuelve el conflicto si una clase implementa dos interfaces con el mismo default method?",
      "options": [
        "La clase debe sobrescribir obligatoriamente el método y resolver la ambigüedad con InterfazA.super.metodo()",
        "El compilador elige la primera",
        "Se lanzan ambas",
        "Se borra el método"
      ],
      "correct": 0,
      "explanation": "La clase que implementa debe desempatar explícitamente."
    },
    {
      "id": "18_15",
      "bossLevel": 18,
      "order": 15,
      "question": "[15/20] ¿Cuál es la principal ventaja de programar contra interfaces en vez de clases concretas?",
      "options": [
        "Desacoplamiento: el código cliente depende del contrato y no de una implementación específica",
        "Compila más rápido",
        "Usa menos RAM",
        "Evita los condicionales"
      ],
      "correct": 0,
      "explanation": "Permite sustituir implementaciones (ej: cambiar ArrayList por LinkedList) sin alterar el cliente."
    },
    {
      "id": "18_16",
      "bossLevel": 18,
      "order": 16,
      "question": "[16/20] ¿Qué interfaz clave de java.lang implementan los objetos que pueden ser ordenados naturalmente?",
      "options": [
        "Comparable<T> (con compareTo)",
        "Comparator<T>",
        "Sortable",
        "Ordered"
      ],
      "correct": 0,
      "explanation": "Comparable define el orden natural mediante el método compareTo()."
    },
    {
      "id": "18_17",
      "bossLevel": 18,
      "order": 17,
      "question": "[17/20] ¿Qué interfaz funcional de java.util.function recibe un argumento y retorna un boolean?",
      "options": [
        "Predicate<T>",
        "Consumer<T>",
        "Function<T, R>",
        "Supplier<T>"
      ],
      "correct": 0,
      "explanation": "Predicate evalúa una condición booleana sobre el elemento dado."
    },
    {
      "id": "18_18",
      "bossLevel": 18,
      "order": 18,
      "question": "[18/20] ¿Qué interfaz funcional recibe un argumento y no retorna nada (void)?",
      "options": [
        "Consumer<T>",
        "Supplier<T>",
        "Predicate<T>",
        "Function<T, R>"
      ],
      "correct": 0,
      "explanation": "Consumer consume el dato realizando una acción sin retorno."
    },
    {
      "id": "18_19",
      "bossLevel": 18,
      "order": 19,
      "question": "[19/20] ¿Qué interfaz funcional no recibe argumentos y retorna un nuevo valor?",
      "options": [
        "Supplier<T>",
        "Consumer<T>",
        "Predicate<T>",
        "Runnable"
      ],
      "correct": 0,
      "explanation": "Supplier abastece o provee instancias."
    },
    {
      "id": "18_20",
      "bossLevel": 18,
      "order": 20,
      "question": "[20/20] ¿Qué interfaz clásica de java.lang representa una tarea ejecutable por un hilo sin retorno?",
      "options": [
        "Runnable (con método run())",
        "Callable",
        "Threadable",
        "Executable"
      ],
      "correct": 0,
      "explanation": "Runnable define la tarea con el método public void run()."
    }
  ],
  "19": [
    {
      "id": "19_1",
      "bossLevel": 19,
      "order": 1,
      "question": "[1/20] ¿Qué significa que una variable de referencia valga null en Java?",
      "options": [
        "Que no apunta a ningún objeto real en la memoria Heap",
        "Que vale cero numérico",
        "Que la variable fue borrada",
        "Que tiene texto vacío"
      ],
      "correct": 0,
      "explanation": "null indica la ausencia intencional de objeto apuntado."
    },
    {
      "id": "19_2",
      "bossLevel": 19,
      "order": 2,
      "question": "[2/20] ¿Pueden las variables primitivas (int, double, boolean) tener el valor null?",
      "options": [
        "No, los tipos primitivos almacenan valores directos y no admiten null",
        "Sí, siempre",
        "Solo el boolean",
        "Solo en Java 17"
      ],
      "correct": 0,
      "explanation": "null solo es aplicable a tipos de referencia (objetos)."
    },
    {
      "id": "19_3",
      "bossLevel": 19,
      "order": 3,
      "question": "[3/20] ¿Qué causa una excepción NullPointerException (NPE) en Java?",
      "options": [
        "Intentar invocar un método o acceder a un atributo a través de una referencia que vale null",
        "Dividir entre cero",
        "Quedarse sin memoria",
        "Acceder a un índice fuera de rango"
      ],
      "correct": 0,
      "explanation": "La JVM no puede dereferenciar una dirección de memoria inexistente."
    },
    {
      "id": "19_4",
      "bossLevel": 19,
      "order": 4,
      "question": "[4/20] ¿Quién inventó la referencia nula y la denominó su \"error de los mil millones de dólares\"?",
      "options": [
        "Sir Tony Hoare en 1965",
        "James Gosling",
        "Dennis Ritchie",
        "Bjarne Stroustrup"
      ],
      "correct": 0,
      "explanation": "Tony Hoare lamentó haber introducido null por los millones de bugs y caídas provocados."
    },
    {
      "id": "19_5",
      "bossLevel": 19,
      "order": 5,
      "question": "[5/20] ¿Cuál es la forma segura de comparar un String variable contra una constante para prevenir NPE?",
      "options": [
        "\"CONSTANTE\".equals(variable)",
        "variable.equals(\"CONSTANTE\")",
        "variable == \"CONSTANTE\"",
        "equals(variable, \"CONSTANTE\")"
      ],
      "correct": 0,
      "explanation": "Al llamar equals sobre el literal seguro nunca se lanza NPE (Yoda condition)."
    },
    {
      "id": "19_6",
      "bossLevel": 19,
      "order": 6,
      "question": "[6/20] ¿Cómo se realiza una comprobación defensiva clásica contra null?",
      "options": [
        "if (objeto != null) { objeto.metodo(); }",
        "if (objeto.exists())",
        "try { objeto.check() }",
        "checkNull(objeto)"
      ],
      "correct": 0,
      "explanation": "La guarda if (obj != null) protege el acceso."
    },
    {
      "id": "19_7",
      "bossLevel": 19,
      "order": 7,
      "question": "[7/20] ¿Qué clase envoltorio introdujo Java 8 para representar explícitamente valores presentes o ausentes?",
      "options": [
        "java.util.Optional<T>",
        "java.lang.Nullable<T>",
        "java.util.Maybe<T>",
        "java.util.SafeObject<T>"
      ],
      "correct": 0,
      "explanation": "Optional fomenta un diseño de retorno que advierte al llamador que el valor puede faltar."
    },
    {
      "id": "19_8",
      "bossLevel": 19,
      "order": 8,
      "question": "[8/20] ¿Qué método estático de Optional crea un contenedor con un valor no nulo garantizado?",
      "options": [
        "Optional.of(valor)",
        "Optional.ofNullable(valor)",
        "Optional.empty()",
        "Optional.make(valor)"
      ],
      "correct": 0,
      "explanation": "Optional.of(v) lanza NPE si v es null; para valores potencialmente nulos se usa ofNullable()."
    },
    {
      "id": "19_9",
      "bossLevel": 19,
      "order": 9,
      "question": "[9/20] ¿Qué método de Optional retorna el valor interior o un valor de respaldo si está ausente?",
      "options": [
        "orElse(valorPorDefecto)",
        "getOrDefault()",
        "fallback()",
        "otherwise()"
      ],
      "correct": 0,
      "explanation": "orElse(...) provee un valor alternativo de rescate."
    },
    {
      "id": "19_10",
      "bossLevel": 19,
      "order": 10,
      "question": "[10/20] ¿Qué método de java.util.Objects valida que una referencia no sea nula lanzando NPE con mensaje descriptivo?",
      "options": [
        "Objects.requireNonNull(obj, \"mensaje\")",
        "Objects.check(obj)",
        "Objects.assertNotNull(obj)",
        "Objects.validate(obj)"
      ],
      "correct": 0,
      "explanation": "Objects.requireNonNull() es el estándar de validación de argumentos en constructores y métodos."
    },
    {
      "id": "19_11",
      "bossLevel": 19,
      "order": 11,
      "question": "[11/20] ¿Qué método de java.util.Objects verifica si una referencia es nula retornando boolean?",
      "options": [
        "Objects.isNull(obj)",
        "Objects.hasNull(obj)",
        "obj.isNull()",
        "Objects.nil(obj)"
      ],
      "correct": 0,
      "explanation": "Objects.isNull(obj) devuelve true si obj == null."
    },
    {
      "id": "19_12",
      "bossLevel": 19,
      "order": 12,
      "question": "[12/20] ¿Qué ocurre si intentas desempacar (unboxing) un objeto Integer que vale null a un int primitivo?",
      "options": [
        "Lanza NullPointerException en tiempo de ejecución",
        "Asigna 0 automáticamente",
        "Compila con error",
        "Asigna -1"
      ],
      "correct": 0,
      "explanation": "El compilador intenta ejecutar miInteger.intValue(), lo que provoca un NPE."
    },
    {
      "id": "19_13",
      "bossLevel": 19,
      "order": 13,
      "question": "[13/20] ¿Qué son las clases Wrapper (Integer, Double, Boolean, etc.)?",
      "options": [
        "Clases de objeto que envuelven a los tipos primitivos para usarlos en colecciones",
        "Métodos de sistema",
        "Tipos primitivos con esteroides",
        "Hilos"
      ],
      "correct": 0,
      "explanation": "Permiten usar primitivos en genéricos como List<Integer> y pueden valer null."
    },
    {
      "id": "19_14",
      "bossLevel": 19,
      "order": 14,
      "question": "[14/20] ¿Qué imprime: String s = null; System.out.println(s);?",
      "options": [
        "Imprime el texto \"null\" en consola sin fallar",
        "Lanza NullPointerException",
        "Imprime vacío",
        "Se traba el programa"
      ],
      "correct": 0,
      "explanation": "PrintStream convierte referencias nulas al texto literal \"null\" sin arrojar error."
    },
    {
      "id": "19_15",
      "bossLevel": 19,
      "order": 15,
      "question": "[15/20] ¿Qué imprime: String s = null; System.out.println(s.length());?",
      "options": [
        "Lanza NullPointerException inmediatamente",
        "0",
        "null",
        "Error de compilación"
      ],
      "correct": 0,
      "explanation": "Al dereferenciar s invocando .length() sobre null se dispara el NPE."
    },
    {
      "id": "19_16",
      "bossLevel": 19,
      "order": 16,
      "question": "[16/20] ¿Qué mejora introdujo Java 14 en los mensajes de error de NullPointerException (Helpful NPEs)?",
      "options": [
        "Muestra exactamente qué variable o invocación encadenada causó el null (ej: \"cannot invoke X because Y is null\")",
        "Muestra la fecha del error",
        "Corrige el null automáticamente",
        "Apaga la pantalla"
      ],
      "correct": 0,
      "explanation": "Los Helpful NullPointerExceptions identifican la expresión exacta culpable del fallo."
    },
    {
      "id": "19_17",
      "bossLevel": 19,
      "order": 17,
      "question": "[17/20] ¿Qué anotaciones se usan en frameworks modernos (ej: Spring, Checker Framework) para advertir sobre nulidad?",
      "options": [
        "@NonNull y @Nullable",
        "@NotNullOnly",
        "@NoNullPointerException",
        "@NullCheck"
      ],
      "correct": 0,
      "explanation": "Guían a herramientas de análisis estático para atrapar errores antes de compilar."
    },
    {
      "id": "19_18",
      "bossLevel": 19,
      "order": 18,
      "question": "[18/20] ¿Un arreglo puede almacenar elementos que valgan null?",
      "options": [
        "Sí, cualquier arreglo de tipos no primitivos puede albergar nulls",
        "No, lo prohíbe",
        "Solo si no tiene tamaño",
        "Solo en Java 8"
      ],
      "correct": 0,
      "explanation": "String[] nombres = { \"Juan\", null, \"Ana\" }; es perfectamente válido."
    },
    {
      "id": "19_19",
      "bossLevel": 19,
      "order": 19,
      "question": "[19/20] ¿Qué retorna: Boolean.TRUE.equals(null);?",
      "options": [
        "false (de forma segura sin lanzar excepción)",
        "true",
        "Lanza NullPointerException",
        "null"
      ],
      "correct": 0,
      "explanation": "equals() retorna false limpiamente cuando el argumento recibido es null."
    },
    {
      "id": "19_20",
      "bossLevel": 19,
      "order": 20,
      "question": "[20/20] ¿Qué es el patrón de diseño Null Object?",
      "options": [
        "Crear una implementación concreta neutra (que no hace nada) para evitar retornar null",
        "Un tipo de dato especial",
        "Un método estático",
        "Una excepción"
      ],
      "correct": 0,
      "explanation": "Evita el chequeo constante de nulidad dotando al sistema de objetos neutros seguros."
    }
  ],
  "20": [
    {
      "id": "20_1",
      "bossLevel": 20,
      "order": 1,
      "question": "[1/20] ¿Qué significa el lema histórico de Java WORA?",
      "options": [
        "Write Once, Run Anywhere (Escribe una vez, ejecútalo donde sea)",
        "Work Once, Rest Always",
        "Web Oriented Rapid Application",
        "Windows Only Running App"
      ],
      "correct": 0,
      "explanation": "El Bytecode corre en cualquier dispositivo que disponga de una Máquina Virtual de Java."
    },
    {
      "id": "20_2",
      "bossLevel": 20,
      "order": 2,
      "question": "[2/20] ¿Cuál es la función principal del compilador javac?",
      "options": [
        "Traducir el código fuente .java al lenguaje intermedio de Bytecode en archivos .class",
        "Ejecutar el programa",
        "Optimizar la RAM",
        "Depurar errores"
      ],
      "correct": 0,
      "explanation": "javac es el compilador frontend que genera el Bytecode universal."
    },
    {
      "id": "20_3",
      "bossLevel": 20,
      "order": 3,
      "question": "[3/20] ¿Qué componente ejecuta el Bytecode interpretándolo o compilándolo con JIT a código nativo?",
      "options": [
        "La Máquina Virtual de Java (JVM)",
        "El sistema operativo directo",
        "El navegador web",
        "El disco rígido"
      ],
      "correct": 0,
      "explanation": "La JVM interpreta y optimiza la ejecución en cada plataforma."
    },
    {
      "id": "20_4",
      "bossLevel": 20,
      "order": 4,
      "question": "[4/20] ¿Qué es el compilador JIT (Just-In-Time) dentro de la JVM?",
      "options": [
        "Un motor que compila fragmentos frecuentes de Bytecode a código máquina nativo ultrarrápido durante la ejecución",
        "El compilador javac",
        "Un depurador",
        "Una librería"
      ],
      "correct": 0,
      "explanation": "Compila \"hotspots\" al vuelo para alcanzar velocidades cercanas a C++."
    },
    {
      "id": "20_5",
      "bossLevel": 20,
      "order": 5,
      "question": "[5/20] ¿Qué hace el Garbage Collector (Recolector de Basura) de Java?",
      "options": [
        "Rastrea y libera automáticamente la memoria ocupada por objetos huérfanos sin referencias activas en el Heap",
        "Borra archivos temporales",
        "Elimina comentarios",
        "Cierra ventanas"
      ],
      "correct": 0,
      "explanation": "Gestiona de forma autónoma la memoria previniendo fugas (memory leaks)."
    },
    {
      "id": "20_6",
      "bossLevel": 20,
      "order": 6,
      "question": "[6/20] ¿En qué estructura de bloques se manejan las excepciones en Java?",
      "options": [
        "try - catch - finally",
        "do - catch - end",
        "attempt - except - close",
        "begin - error - done"
      ],
      "correct": 0,
      "explanation": "El bloque try captura errores, catch los procesa y finally limpia recursos."
    },
    {
      "id": "20_7",
      "bossLevel": 20,
      "order": 7,
      "question": "[7/20] ¿Cuándo se ejecuta el bloque finally en un try - catch - finally?",
      "options": [
        "SIEMPRE se ejecuta, ocurra o no una excepción en el try",
        "Solo si ocurrió un error",
        "Solo si no ocurrió error",
        "Solo si hay memoria"
      ],
      "correct": 0,
      "explanation": "finally está garantizado para ejecutarse siempre (salvo apagado abrupto del proceso)."
    },
    {
      "id": "20_8",
      "bossLevel": 20,
      "order": 8,
      "question": "[8/20] ¿Qué sentencia introdujo Java 7 para cerrar automáticamente recursos que implementan AutoCloseable?",
      "options": [
        "try-with-resources: try (Recurso r = new Recurso()) { ... }",
        "auto-close try",
        "closeable-try",
        "using block"
      ],
      "correct": 0,
      "explanation": "Cierra flujos y conexiones automáticamente al finalizar el bloque."
    },
    {
      "id": "20_9",
      "bossLevel": 20,
      "order": 9,
      "question": "[9/20] ¿Cuál es la superclase cósmica de todos los errores y excepciones en Java?",
      "options": [
        "java.lang.Throwable",
        "java.lang.Exception",
        "java.lang.Error",
        "java.lang.Fault"
      ],
      "correct": 0,
      "explanation": "Throwable encabeza la jerarquía; de ella descienden Exception y Error."
    },
    {
      "id": "20_10",
      "bossLevel": 20,
      "order": 10,
      "question": "[10/20] ¿Cuál es la diferencia entre Checked Exceptions y Unchecked Exceptions (RuntimeException)?",
      "options": [
        "Checked deben ser manejadas o declaradas con throws obligatoriamente; Unchecked no lo exigen en compilación",
        "Son exactamente iguales",
        "Checked solo son de red",
        "Unchecked no compilan"
      ],
      "correct": 0,
      "explanation": "Checked representan fallas recuperables verificadas en compilación (ej: IOException)."
    },
    {
      "id": "20_11",
      "bossLevel": 20,
      "order": 11,
      "question": "[11/20] ¿Qué palabra clave se usa para lanzar deliberadamente una excepción?",
      "options": [
        "throw",
        "throws",
        "raise",
        "emit"
      ],
      "correct": 0,
      "explanation": "throw new MiExcepcion(\"error\"); arroja la instancia de la excepción."
    },
    {
      "id": "20_12",
      "bossLevel": 20,
      "order": 12,
      "question": "[12/20] ¿Qué palabra clave se coloca en la firma del método para advertir que puede lanzar excepciones checked?",
      "options": [
        "throws",
        "throw",
        "exception",
        "warns"
      ],
      "correct": 0,
      "explanation": "public void leer() throws IOException { ... }."
    },
    {
      "id": "20_13",
      "bossLevel": 20,
      "order": 13,
      "question": "[13/20] ¿Puede un único bloque try tener múltiples bloques catch?",
      "options": [
        "Sí, ordenados de la excepción más específica a la más general",
        "No, solo uno",
        "Solo si son RuntimeException",
        "Solo dos"
      ],
      "correct": 0,
      "explanation": "Permite atrapar distintos tipos de error con manejo especializado."
    },
    {
      "id": "20_14",
      "bossLevel": 20,
      "order": 14,
      "question": "[14/20] ¿Qué característica de Java 7 permite atrapar múltiples excepciones en un solo catch con una barra vertical?",
      "options": [
        "Multi-catch: catch (IOException | SQLException e)",
        "Union-catch",
        "Group-catch",
        "Multi-error"
      ],
      "correct": 0,
      "explanation": "Simplifica la captura de excepciones con lógica de manejo idéntica."
    },
    {
      "id": "20_15",
      "bossLevel": 20,
      "order": 15,
      "question": "[15/20] ¿Qué imprime el método printStackTrace() de un objeto Throwable?",
      "options": [
        "La traza completa de la pila mostrando el origen y líneas de código donde ocurrió el error",
        "El nombre del autor",
        "El consumo de RAM",
        "La hora de inicio"
      ],
      "correct": 0,
      "explanation": "Despliega la cadena de llamadas del Stack hasta el punto de la falla."
    },
    {
      "id": "20_16",
      "bossLevel": 20,
      "order": 16,
      "question": "[16/20] ¿Qué diferencia a los Errors (ej: OutOfMemoryError) de las Exceptions en Java?",
      "options": [
        "Los Errors indican fallas graves catastróficas de la JVM de las cuales la app rara vez puede recuperarse",
        "Los Errors son leves",
        "Los Errors no son clases",
        "Son idénticos"
      ],
      "correct": 0,
      "explanation": "Los Errors no están pensados para ser capturados en el flujo de negocio normal."
    },
    {
      "id": "20_17",
      "bossLevel": 20,
      "order": 17,
      "question": "[17/20] ¿Qué contiene el JDK (Java Development Kit) frente al JRE (Java Runtime Environment)?",
      "options": [
        "El JDK incluye herramientas de desarrollo como javac, javadoc y depuradores; el JRE solo el motor para ejecutar",
        "Son idénticos",
        "El JRE es más completo",
        "El JDK es de pago"
      ],
      "correct": 0,
      "explanation": "El JDK es el kit completo para desarrolladores."
    },
    {
      "id": "20_18",
      "bossLevel": 20,
      "order": 18,
      "question": "[18/20] ¿Qué es el ClassLoader dentro de la arquitectura de la JVM?",
      "options": [
        "El subsistema encargado de cargar los archivos .class en la memoria de la JVM bajo demanda",
        "El compilador",
        "El recolector de basura",
        "Un instalador"
      ],
      "correct": 0,
      "explanation": "Carga, vincula e inicializa las clases necesarias para ejecutar el programa."
    },
    {
      "id": "20_19",
      "bossLevel": 20,
      "order": 19,
      "question": "[19/20] ¿Qué método de System sugiere (sin garantizar) la ejecución inmediata del Garbage Collector?",
      "options": [
        "System.gc()",
        "System.clean()",
        "System.free()",
        "System.collect()"
      ],
      "correct": 0,
      "explanation": "System.gc() solicita una pasada del recolector de basura, pero queda a criterio de la JVM."
    },
    {
      "id": "20_20",
      "bossLevel": 20,
      "order": 20,
      "question": "[20/20] ¿Qué significa que Java sea un lenguaje administrado (managed language)?",
      "options": [
        "Que la memoria, ejecución y seguridad son gestionadas automáticamente por una máquina virtual segura",
        "Que no tiene código",
        "Que se ejecuta en el navegador solo",
        "Que pertenece a una sola empresa"
      ],
      "correct": 0,
      "explanation": "Libera al desarrollador del manejo manual de punteros y memoria previniendo fallos críticos de seguridad."
    }
  ]
};
