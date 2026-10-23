// js/data/challenges.js
// Base de datos de 200 Desafíos Prácticos de Programación en Java para Code Quest
// (10 desafíos por nivel x 20 niveles de jefes)
// Modos: fix_code (depuración), fill_blank (completar espacios) y drag_drop (arrastrar y soltar)

const CHALLENGES_DATA = {
  "1": [
    {
      "id": "p_1_1_fix",
      "bossLevel": 1,
      "type": "fix_code",
      "title": "Terminador de Sentencia Omitido",
      "theme": "Sintaxis básica y método main()",
      "instruction": "El compilador señala un error de sintaxis al finalizar la instrucción de impresión. Añade el símbolo reglamentario para terminar la sentencia.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"¡Hola Java!\")\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"¡Hola Java!\");\n    }\n}",
      "expectedOutput": "¡Hola Java!",
      "requiredTokens": [
        "System.out.println(\"¡Hola Java!\");"
      ],
      "explanation": "En Java cada instrucción ejecutable debe concluir obligatoriamente con punto y coma (;)."
    },
    {
      "id": "p_1_2_fix",
      "bossLevel": 1,
      "type": "fix_code",
      "title": "Mayúscula en Nombre de Clase Estándar",
      "theme": "Sintaxis básica y método main()",
      "instruction": "Java no localiza el identificador de la clase de consola debido a un error de capitalización. Corrige el nombre de la clase para que inicie con mayúscula.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        system.out.println(\"Acceso al Reino\");\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Acceso al Reino\");\n    }\n}",
      "expectedOutput": "Acceso al Reino",
      "requiredTokens": [
        "System.out.println"
      ],
      "explanation": "Java es sensible a mayúsculas y minúsculas (case-sensitive). Las clases del API estándar comienzan con mayúscula (System)."
    },
    {
      "id": "p_1_3_fix",
      "bossLevel": 1,
      "type": "fix_code",
      "title": "Bloque de Clase sin Cerrar",
      "theme": "Sintaxis básica y método main()",
      "instruction": "El archivo finaliza de forma abrupta dejando la clase abierta. Añade la llave de cierre para balancear los bloques.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Puerta Abierta\");\n    }\n",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Puerta Abierta\");\n    }\n}",
      "expectedOutput": "Puerta Abierta",
      "requiredTokens": [
        "}"
      ],
      "explanation": "Cada bloque delimitado con una llave de apertura ({) requiere una llave de cierre (}) para ser sintácticamente válido."
    },
    {
      "id": "p_1_4_fix",
      "bossLevel": 1,
      "type": "fix_code",
      "title": "Literal de Texto Incompleto",
      "theme": "Sintaxis básica y método main()",
      "instruction": "El texto a imprimir no fue cerrado antes del paréntesis. Cierra el literal de texto con el delimitador adecuado.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Comienza la Batalla);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Comienza la Batalla\");\n    }\n}",
      "expectedOutput": "Comienza la Batalla",
      "requiredTokens": [
        "\"Comienza la Batalla\""
      ],
      "explanation": "Las cadenas de texto en Java se abren y cierran con comillas dobles (\")."
    },
    {
      "id": "p_1_5_fill",
      "bossLevel": 1,
      "type": "fill_blank",
      "title": "Firma del Método Principal",
      "theme": "Sintaxis básica y método main()",
      "instruction": "Completa los modificadores de la cabecera que indican que el método no requiere instanciar la clase y que no devuelve ningún dato.",
      "template": "public class Main {\n    public {{blank_0}} {{blank_1}} main(String[] args) {\n        System.out.println(\"Ruta Iniciada\");\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "modificador",
          "validAnswers": [
            "static"
          ],
          "hint": "Palabra clave para invocar sin instanciar la clase"
        },
        {
          "id": "blank_1",
          "placeholder": "retorno",
          "validAnswers": [
            "void"
          ],
          "hint": "Tipo de retorno vacío o nulo"
        }
      ],
      "solutionAnswers": [
        "static",
        "void"
      ],
      "expectedOutput": "Ruta Iniciada",
      "explanation": "El método main debe declararse estático (static) y sin retorno (void)."
    },
    {
      "id": "p_1_6_fill",
      "bossLevel": 1,
      "type": "fill_blank",
      "title": "Canal de Salida de Consola",
      "theme": "Sintaxis básica y método main()",
      "instruction": "Completa el objeto del flujo estándar y el método para emitir la línea con salto final.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        System.{{blank_0}}.{{blank_1}}(\"Consola Activa\");\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "flujo",
          "validAnswers": [
            "out"
          ],
          "hint": "Flujo de salida estándar"
        },
        {
          "id": "blank_1",
          "placeholder": "método",
          "validAnswers": [
            "println"
          ],
          "hint": "Método de impresión con salto de línea"
        }
      ],
      "solutionAnswers": [
        "out",
        "println"
      ],
      "expectedOutput": "Consola Activa",
      "explanation": "System.out.println imprime el texto y añade un salto de línea."
    },
    {
      "id": "p_1_7_fill",
      "bossLevel": 1,
      "type": "fill_blank",
      "title": "Definición de Clase y Parámetro",
      "theme": "Sintaxis básica y método main()",
      "instruction": "Escribe la palabra reservada para declarar la clase y el tipo de arreglo para los argumentos.",
      "template": "public {{blank_0}} Main {\n    public static void main({{blank_1}} args) {\n        System.out.println(\"Java Preparado\");\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "estructura",
          "validAnswers": [
            "class"
          ],
          "hint": "Unidad fundamental de código en Java"
        },
        {
          "id": "blank_1",
          "placeholder": "tipo",
          "validAnswers": [
            "String[]",
            "String []"
          ],
          "hint": "Arreglo de textos para parámetros de entrada"
        }
      ],
      "solutionAnswers": [
        "class",
        "String[]"
      ],
      "expectedOutput": "Java Preparado",
      "explanation": "Todo programa Java reside dentro de una 'class' y main recibe un arreglo 'String[] args'."
    },
    {
      "id": "p_1_8_drag",
      "bossLevel": 1,
      "type": "drag_drop",
      "title": "Estructura de la Clase Principal",
      "theme": "Sintaxis básica y método main()",
      "instruction": "Ordena los elementos para declarar la clase y el tipo de retorno de la función de arranque.",
      "template": "public {{slot_0}} Main {\n    public static {{slot_1}} main(String[] args) {\n        System.out.println(\"Aventura Lista\");\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "class"
        },
        {
          "id": "slot_1",
          "expectedToken": "void"
        }
      ],
      "tokens": [
        "class",
        "void",
        "interface",
        "int"
      ],
      "expectedOutput": "Aventura Lista",
      "explanation": "La clase se declara con 'class' y la función principal no devuelve valor ('void')."
    },
    {
      "id": "p_1_9_drag",
      "bossLevel": 1,
      "type": "drag_drop",
      "title": "Argumentos del Punto de Entrada",
      "theme": "Sintaxis básica y método main()",
      "instruction": "Coloca el tipo de arreglo y el nombre convencional de los argumentos en la firma del método.",
      "template": "public class Main {\n    public static void main({{slot_0}} {{slot_1}}) {\n        System.out.println(\"Parametros OK\");\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "String[]"
        },
        {
          "id": "slot_1",
          "expectedToken": "args"
        }
      ],
      "tokens": [
        "String[]",
        "args",
        "int[]",
        "params"
      ],
      "expectedOutput": "Parametros OK",
      "explanation": "La convención del punto de entrada en Java es 'String[] args'."
    },
    {
      "id": "p_1_10_drag",
      "bossLevel": 1,
      "type": "drag_drop",
      "title": "Secuencia de Salida Estándar",
      "theme": "Sintaxis básica y método main()",
      "instruction": "Organiza los componentes de la llamada para proyectar el mensaje en la pantalla.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}}.{{slot_1}}.{{slot_2}}(\"Comando Ejecutado\");\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "System"
        },
        {
          "id": "slot_1",
          "expectedToken": "out"
        },
        {
          "id": "slot_2",
          "expectedToken": "println"
        }
      ],
      "tokens": [
        "System",
        "out",
        "println",
        "printline"
      ],
      "expectedOutput": "Comando Ejecutado",
      "explanation": "La secuencia completa requerida es System.out.println."
    }
  ],
  "2": [
    {
      "id": "p_2_1_fix",
      "bossLevel": 2,
      "type": "fix_code",
      "title": "Declaración de Tipo Entero",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Java es de tipado estático y no permite usar una variable sin haber declarado su tipo previamente. Agrega el tipo primitivo entero para la variable.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        armadura = 100;\n        System.out.println(\"Armadura: \" + armadura);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int armadura = 100;\n        System.out.println(\"Armadura: \" + armadura);\n    }\n}",
      "expectedOutput": "Armadura: 100",
      "requiredTokens": [
        "int armadura = 100;"
      ],
      "explanation": "En Java las variables deben declararse con su tipo correspondiente (ej. 'int') antes de ser usadas."
    },
    {
      "id": "p_2_2_fix",
      "bossLevel": 2,
      "type": "fix_code",
      "title": "Incompatibilidad de Tipo Numérico",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Se asignó un valor entre comillas a una variable numérica entera. Corrige el valor para que sea un número entero puro.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int nivel = \"5\";\n        System.out.println(\"Nivel Heroe: \" + nivel);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int nivel = 5;\n        System.out.println(\"Nivel Heroe: \" + nivel);\n    }\n}",
      "expectedOutput": "Nivel Heroe: 5",
      "requiredTokens": [
        "int nivel = 5;"
      ],
      "forbiddenTokens": [
        "\"5\""
      ],
      "explanation": "Los enteros (int) almacenan números directos sin comillas. Los valores entre comillas son de tipo String."
    },
    {
      "id": "p_2_3_fix",
      "bossLevel": 2,
      "type": "fix_code",
      "title": "Pérdida de Precisión Decimal",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Se declaró una variable como entero pero se le asigna un número con parte decimal. Ajusta el tipo de la variable para admitir números de punto flotante.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int velocidad = 12.5;\n        System.out.println(\"Velocidad: \" + velocidad);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        double velocidad = 12.5;\n        System.out.println(\"Velocidad: \" + velocidad);\n    }\n}",
      "expectedOutput": "Velocidad: 12.5",
      "requiredTokens": [
        "double velocidad = 12.5;"
      ],
      "explanation": "Para números con parte decimal se utiliza el tipo 'double'."
    },
    {
      "id": "p_2_4_fix",
      "bossLevel": 2,
      "type": "fix_code",
      "title": "Variable sin Inicializar",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "El código intenta imprimir una variable local que fue declarada pero nunca se le asignó un valor inicial. Inicialízala en 80.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int vida;\n        System.out.println(\"Vida Caballero: \" + vida);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int vida = 80;\n        System.out.println(\"Vida Caballero: \" + vida);\n    }\n}",
      "expectedOutput": "Vida Caballero: 80",
      "requiredTokens": [
        "int vida = 80;"
      ],
      "explanation": "Las variables locales en Java deben tener un valor asignado antes de poder ser leídas."
    },
    {
      "id": "p_2_5_fill",
      "bossLevel": 2,
      "type": "fill_blank",
      "title": "Tipos Entero y Booleano",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Indica los tipos de datos primitivos correspondientes para un conteo entero de maná y un estado de escudo activo.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} mana = 50;\n        {{blank_1}} escudoActivo = true;\n        System.out.println(\"Mana: \" + mana + \", Escudo: \" + escudoActivo);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo primitivo para enteros"
        },
        {
          "id": "blank_1",
          "placeholder": "tipo",
          "validAnswers": [
            "boolean"
          ],
          "hint": "Tipo primitivo para verdadero o falso"
        }
      ],
      "solutionAnswers": [
        "int",
        "boolean"
      ],
      "expectedOutput": "Mana: 50, Escudo: true",
      "explanation": "'int' se utiliza para números enteros y 'boolean' para valores de verdad (true/false)."
    },
    {
      "id": "p_2_6_fill",
      "bossLevel": 2,
      "type": "fill_blank",
      "title": "Tipos Decimal y Carácter",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Escribe los tipos primitivos para almacenar un multiplicador con decimales y una letra o categoría de rango.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} multiplicador = 1.5;\n        {{blank_1}} rango = 'S';\n        System.out.println(\"Mult: \" + multiplicador + \", Rango: \" + rango);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "double"
          ],
          "hint": "Tipo primitivo para números de doble precisión"
        },
        {
          "id": "blank_1",
          "placeholder": "tipo",
          "validAnswers": [
            "char"
          ],
          "hint": "Tipo primitivo para un único carácter entre comillas simples"
        }
      ],
      "solutionAnswers": [
        "double",
        "char"
      ],
      "expectedOutput": "Mult: 1.5, Rango: S",
      "explanation": "'double' almacena números de punto flotante y 'char' caracteres individuales."
    },
    {
      "id": "p_2_7_fill",
      "bossLevel": 2,
      "type": "fill_blank",
      "title": "Modificación de Variable",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Declara la variable de salud como entero e incrementa su valor tras recibir una bendición asignándole el nuevo número.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} salud = 100;\n        salud = {{blank_1}};\n        System.out.println(\"Salud Actualizada: \" + salud);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo de dato entero"
        },
        {
          "id": "blank_1",
          "placeholder": "valor",
          "validAnswers": [
            "150"
          ],
          "hint": "Nuevo valor entero que alcance 150"
        }
      ],
      "solutionAnswers": [
        "int",
        "150"
      ],
      "expectedOutput": "Salud Actualizada: 150",
      "explanation": "Una variable declarada puede reasignarse posteriormente sin repetir la palabra de tipo."
    },
    {
      "id": "p_2_8_drag",
      "bossLevel": 2,
      "type": "drag_drop",
      "title": "Asignación de Tipos Primitivos",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Asigna a cada variable el tipo de dato que corresponde con su respectivo valor inicial.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} oro = 300;\n        {{slot_1}} peso = 4.75;\n        {{slot_2}} listo = true;\n        System.out.println(\"Oro: \" + oro + \", Listo: \" + listo);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int"
        },
        {
          "id": "slot_1",
          "expectedToken": "double"
        },
        {
          "id": "slot_2",
          "expectedToken": "boolean"
        }
      ],
      "tokens": [
        "int",
        "double",
        "boolean",
        "String"
      ],
      "expectedOutput": "Oro: 300, Listo: true",
      "explanation": "int para enteros, double para números con decimal y boolean para verdadero/falso."
    },
    {
      "id": "p_2_9_drag",
      "bossLevel": 2,
      "type": "drag_drop",
      "title": "Variables de Combate",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Elige los tipos correctos para la letra de inicial del héroe y su multiplicador de ataque.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} inicial = 'A';\n        {{slot_1}} golpe = 2.5;\n        System.out.println(\"Heroe: \" + inicial + \", Golpe: \" + golpe);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "char"
        },
        {
          "id": "slot_1",
          "expectedToken": "double"
        }
      ],
      "tokens": [
        "char",
        "double",
        "int",
        "boolean"
      ],
      "expectedOutput": "Heroe: A, Golpe: 2.5",
      "explanation": "char contiene un único carácter delimitado por comillas simples y double almacena decimales."
    },
    {
      "id": "p_2_10_drag",
      "bossLevel": 2,
      "type": "drag_drop",
      "title": "Banderas y Contadores",
      "theme": "Tipos de datos primitivos (int, double, boolean)",
      "instruction": "Define el tipo para el contador de flechas y el estado de la puerta mágica.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} flechas = 15;\n        {{slot_1}} abierta = false;\n        System.out.println(\"Flechas: \" + flechas + \", Abierta: \" + abierta);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int"
        },
        {
          "id": "slot_1",
          "expectedToken": "boolean"
        }
      ],
      "tokens": [
        "int",
        "boolean",
        "char",
        "float"
      ],
      "expectedOutput": "Flechas: 15, Abierta: false",
      "explanation": "int representa cantidades numéricas enteras y boolean estados binarios de verdadero o falso."
    }
  ],
  "3": [
    {
      "id": "p_3_1_fix",
      "bossLevel": 3,
      "type": "fix_code",
      "title": "Cálculo de Residuo Aritmético",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "El código usó el operador de cociente en lugar del operador que obtiene el residuo de una división entera. Corrige la operación para obtener 0.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int residuo = 10 / 2;\n        System.out.println(\"Residuo: \" + residuo);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int residuo = 10 % 2;\n        System.out.println(\"Residuo: \" + residuo);\n    }\n}",
      "expectedOutput": "Residuo: 0",
      "requiredTokens": [
        "10 % 2"
      ],
      "explanation": "El operador '%' (módulo) calcula el residuo de una división entera (10 % 2 es 0)."
    },
    {
      "id": "p_3_2_fix",
      "bossLevel": 3,
      "type": "fix_code",
      "title": "Sentido de la Comparación Relacional",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "La condición evalúa si el héroe está vivo pero tiene el operador relacional invertido. Ajusta la comparación para que resulte verdadera.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int vida = 50;\n        boolean conVida = vida < 0;\n        System.out.println(\"Vivo: \" + conVida);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int vida = 50;\n        boolean conVida = vida > 0;\n        System.out.println(\"Vivo: \" + conVida);\n    }\n}",
      "expectedOutput": "Vivo: true",
      "requiredTokens": [
        "vida > 0"
      ],
      "explanation": "El operador '>' verifica que la vida sea mayor a cero para confirmar que el héroe continúa con vida."
    },
    {
      "id": "p_3_3_fix",
      "bossLevel": 3,
      "type": "fix_code",
      "title": "Operador de Modificación Unaria",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "Se aplicó un operador unario que resta una unidad cuando se requería aumentarla en uno. Corrige el operador sobre el maná.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int mana = 10;\n        mana--;\n        System.out.println(\"Mana: \" + mana);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int mana = 10;\n        mana++;\n        System.out.println(\"Mana: \" + mana);\n    }\n}",
      "expectedOutput": "Mana: 11",
      "requiredTokens": [
        "mana++"
      ],
      "explanation": "El operador '++' incrementa en uno el valor de la variable entera."
    },
    {
      "id": "p_3_4_fix",
      "bossLevel": 3,
      "type": "fix_code",
      "title": "Negación Lógica no Deseada",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "Se antepuso un operador de inversión lógica que invierte el valor de verdad. Elimina la negación para que el portal permanezca abierto.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        boolean activo = true;\n        boolean portal = !activo;\n        System.out.println(\"Portal: \" + portal);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        boolean activo = true;\n        boolean portal = activo;\n        System.out.println(\"Portal: \" + portal);\n    }\n}",
      "expectedOutput": "Portal: true",
      "requiredTokens": [
        "portal = activo;"
      ],
      "explanation": "El operador '!' niega una expresión booleana, transformando true en false."
    },
    {
      "id": "p_3_5_fill",
      "bossLevel": 3,
      "type": "fill_blank",
      "title": "Operador Lógico AND e Incremento",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "Completa la condición para que ambas expresiones deban ser verdaderas y luego aumenta en uno el maná.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int mana = 10;\n        boolean listo = (mana >= 10) {{blank_0}} true;\n        mana{{blank_1}};\n        System.out.println(\"Listo: \" + listo + \", Mana: \" + mana);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "op",
          "validAnswers": [
            "&&"
          ],
          "hint": "Operador lógico de conjunción"
        },
        {
          "id": "blank_1",
          "placeholder": "inc",
          "validAnswers": [
            "++"
          ],
          "hint": "Operador que añade 1 a la variable"
        }
      ],
      "solutionAnswers": [
        "&&",
        "++"
      ],
      "expectedOutput": "Listo: true, Mana: 11",
      "explanation": "'&&' evalúa que ambas condiciones se cumplan y '++' suma una unidad."
    },
    {
      "id": "p_3_6_fill",
      "bossLevel": 3,
      "type": "fill_blank",
      "title": "Operador Módulo y Asignación Compuesta",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "Calcula el resto de dividir 15 entre 4 y luego suma 5 al oro acumulado mediante una asignación compuesta.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int resto = 15 {{blank_0}} 4;\n        int oro = 10;\n        oro {{blank_1}} 5;\n        System.out.println(\"Resto: \" + resto + \", Oro: \" + oro);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "op",
          "validAnswers": [
            "%"
          ],
          "hint": "Operador aritmético de residuo"
        },
        {
          "id": "blank_1",
          "placeholder": "asig",
          "validAnswers": [
            "+="
          ],
          "hint": "Suma y asigna a la misma variable"
        }
      ],
      "solutionAnswers": [
        "%",
        "+="
      ],
      "expectedOutput": "Resto: 3, Oro: 15",
      "explanation": "'%' calcula el residuo y '+=' suma y reasigna en un solo paso."
    },
    {
      "id": "p_3_7_fill",
      "bossLevel": 3,
      "type": "fill_blank",
      "title": "Disyunción Lógica e Igualdad",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "Completa el operador que es verdadero si al menos una rama se cumple, y el operador para evaluar igualdad de valor.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        boolean tieneLlave = false;\n        boolean sabeHechizo = true;\n        boolean pasa = tieneLlave {{blank_0}} sabeHechizo;\n        boolean perfecto = (10 {{blank_1}} 10);\n        System.out.println(\"Paso: \" + pasa + \", Test: \" + perfecto);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "op",
          "validAnswers": [
            "||"
          ],
          "hint": "Operador lógico disyuntivo OR"
        },
        {
          "id": "blank_1",
          "placeholder": "op",
          "validAnswers": [
            "=="
          ],
          "hint": "Comparación de igualdad entre dos números"
        }
      ],
      "solutionAnswers": [
        "||",
        "=="
      ],
      "expectedOutput": "Paso: true, Test: true",
      "explanation": "'||' evalúa si al menos una condición es cierta y '==' compara igualdad numérica."
    },
    {
      "id": "p_3_8_drag",
      "bossLevel": 3,
      "type": "drag_drop",
      "title": "Evaluación Lógica Compuesta",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "Coloca los operadores para evaluar que la salud sea positiva, la posesión de llave coincida con verdadero y ambas se satisfagan simultáneamente.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int vida = 15;\n        boolean llave = true;\n        boolean paso = (vida {{slot_0}} 0) {{slot_1}} (llave {{slot_2}} true);\n        System.out.println(\"Paso: \" + paso);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": ">"
        },
        {
          "id": "slot_1",
          "expectedToken": "&&"
        },
        {
          "id": "slot_2",
          "expectedToken": "=="
        }
      ],
      "tokens": [
        ">",
        "&&",
        "==",
        "||",
        "<"
      ],
      "expectedOutput": "Paso: true",
      "explanation": "> evalúa mayor que, && une con conjunción lógica y == verifica igualdad."
    },
    {
      "id": "p_3_9_drag",
      "bossLevel": 3,
      "type": "drag_drop",
      "title": "Operadores de Desigualdad y Disyunción",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "Ensambla la expresión para comprobar que el código no sea cero o que la fuerza supere o iguale el umbral.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int codigo = 7;\n        int fuerza = 20;\n        boolean ok = (codigo {{slot_0}} 0) {{slot_1}} (fuerza {{slot_2}} 20);\n        System.out.println(\"Acceso: \" + ok);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "!="
        },
        {
          "id": "slot_1",
          "expectedToken": "||"
        },
        {
          "id": "slot_2",
          "expectedToken": ">="
        }
      ],
      "tokens": [
        "!=",
        "||",
        ">=",
        "==",
        "&&"
      ],
      "expectedOutput": "Acceso: true",
      "explanation": "!= comprueba diferencia, || une con OR y >= valida mayor o igual."
    },
    {
      "id": "p_3_10_drag",
      "bossLevel": 3,
      "type": "drag_drop",
      "title": "Cadena de Operaciones Aritméticas",
      "theme": "Operadores matemáticos, módulo y lógicos",
      "instruction": "Ubica los operadores aritméticos para calcular el residuo, producto y adición del daño total.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int danio = (20 {{slot_0}} 7) {{slot_1}} 2 {{slot_2}} 5;\n        System.out.println(\"Danio Final: \" + danio);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "%"
        },
        {
          "id": "slot_1",
          "expectedToken": "*"
        },
        {
          "id": "slot_2",
          "expectedToken": "+"
        }
      ],
      "tokens": [
        "%",
        "*",
        "+",
        "-",
        "/"
      ],
      "expectedOutput": "Danio Final: 17",
      "explanation": "(20 % 7) es 6; 6 * 2 es 12; 12 + 5 es 17."
    }
  ],
  "4": [
    {
      "id": "p_4_1_fix",
      "bossLevel": 4,
      "type": "fix_code",
      "title": "Operador de Concatenación Faltante",
      "theme": "System.out.println y concatenación",
      "instruction": "Falta el operador para unir el texto literal con el identificador de la variable. Inserta el operador de unión de cadenas.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int puntos = 500;\n        System.out.println(\"Puntos: \" puntos);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int puntos = 500;\n        System.out.println(\"Puntos: \" + puntos);\n    }\n}",
      "expectedOutput": "Puntos: 500",
      "requiredTokens": [
        "\"Puntos: \" + puntos"
      ],
      "explanation": "En Java el operador '+' actúa como concatenador cuando se combina con al menos una cadena."
    },
    {
      "id": "p_4_2_fix",
      "bossLevel": 4,
      "type": "fix_code",
      "title": "Uso Indebido de Comas en println",
      "theme": "System.out.println y concatenación",
      "instruction": "A diferencia de otros lenguajes, println en Java no acepta argumentos separados por coma. Emplea el operador de concatenación adecuado.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int nivel = 4;\n        System.out.println(\"Nivel:\", nivel);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int nivel = 4;\n        System.out.println(\"Nivel: \" + nivel);\n    }\n}",
      "expectedOutput": "Nivel: 4",
      "requiredTokens": [
        "\"Nivel: \" + nivel"
      ],
      "explanation": "println recibe un único argumento String resultante de la concatenación con '+'."
    },
    {
      "id": "p_4_3_fix",
      "bossLevel": 4,
      "type": "fix_code",
      "title": "Precedencia en Concatenación con Suma",
      "theme": "System.out.println y concatenación",
      "instruction": "El compilador evalúa de izquierda a derecha concatenando los números en lugar de sumarlos numéricamente. Agrupa los números entre paréntesis.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Total: \" + 10 + 5);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Total: \" + (10 + 5));\n    }\n}",
      "expectedOutput": "Total: 15",
      "requiredTokens": [
        "(10 + 5)"
      ],
      "explanation": "Sin paréntesis, 'Total: ' + 10 da 'Total: 10', y luego + 5 da 'Total: 105'. Los paréntesis fuerzan la suma aritmética previa."
    },
    {
      "id": "p_4_4_fix",
      "bossLevel": 4,
      "type": "fix_code",
      "title": "Salto de Línea Inoportuno",
      "theme": "System.out.println y concatenación",
      "instruction": "La primera llamada de salida provoca un salto de línea indebido cortando la frase. Cambia el método por el que imprime manteniendo el cursor en la misma línea.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Mundo \");\n        System.out.println(\"Espectral\");\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        System.out.print(\"Mundo \");\n        System.out.println(\"Espectral\");\n    }\n}",
      "expectedOutput": "Mundo Espectral",
      "requiredTokens": [
        "System.out.print(\"Mundo \");"
      ],
      "explanation": "System.out.print no añade salto de línea al final, permitiendo que la siguiente impresión continúe en el mismo renglón."
    },
    {
      "id": "p_4_5_fill",
      "bossLevel": 4,
      "type": "fill_blank",
      "title": "Impresión en la Misma Línea y Salto",
      "theme": "System.out.println y concatenación",
      "instruction": "Usa el método continuo en la primera instrucción y el método con salto final en la segunda.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        System.out.{{blank_0}}(\"Nivel: \");\n        System.out.{{blank_1}}(\"4\");\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "metodo",
          "validAnswers": [
            "print"
          ],
          "hint": "Emite sin avanzar renglón"
        },
        {
          "id": "blank_1",
          "placeholder": "metodo",
          "validAnswers": [
            "println"
          ],
          "hint": "Emite y avanza al siguiente renglón"
        }
      ],
      "solutionAnswers": [
        "print",
        "println"
      ],
      "expectedOutput": "Nivel: 4",
      "explanation": "print mantiene el renglón y println genera el salto de línea."
    },
    {
      "id": "p_4_6_fill",
      "bossLevel": 4,
      "type": "fill_blank",
      "title": "Concatenación Multivariable",
      "theme": "System.out.println y concatenación",
      "instruction": "Inserta los operadores para unir el prefijo textual con la vida y el sufijo con el maná.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int hp = 80;\n        int mp = 40;\n        System.out.println(\"HP: \" {{blank_0}} hp + \" | MP: \" {{blank_1}} mp);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "op",
          "validAnswers": [
            "+"
          ],
          "hint": "Operador de unión textual"
        },
        {
          "id": "blank_1",
          "placeholder": "op",
          "validAnswers": [
            "+"
          ],
          "hint": "Operador de unión textual"
        }
      ],
      "solutionAnswers": [
        "+",
        "+"
      ],
      "expectedOutput": "HP: 80 | MP: 40",
      "explanation": "El operador '+' une secuencialmente todas las cadenas y variables numéricas."
    },
    {
      "id": "p_4_7_fill",
      "bossLevel": 4,
      "type": "fill_blank",
      "title": "Salida Estándar con Salto",
      "theme": "System.out.println y concatenación",
      "instruction": "Completa el método de impresión de consola y el operador para concatenar el mensaje con la recompensa.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int oro = 75;\n        System.out.{{blank_0}}(\"Oro Ganado: \" {{blank_1}} oro);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "metodo",
          "validAnswers": [
            "println"
          ],
          "hint": "Método estándar con salto de línea"
        },
        {
          "id": "blank_1",
          "placeholder": "op",
          "validAnswers": [
            "+"
          ],
          "hint": "Operador de unión de cadenas"
        }
      ],
      "solutionAnswers": [
        "println",
        "+"
      ],
      "expectedOutput": "Oro Ganado: 75",
      "explanation": "System.out.println con '+' forma la oración completa con el valor de la variable."
    },
    {
      "id": "p_4_8_drag",
      "bossLevel": 4,
      "type": "drag_drop",
      "title": "Flujo de Salida Completo",
      "theme": "System.out.println y concatenación",
      "instruction": "Ordena los componentes para emitir la cadena hacia la terminal.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}}.{{slot_1}}.{{slot_2}}(\"Luz espectral\");\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "System"
        },
        {
          "id": "slot_1",
          "expectedToken": "out"
        },
        {
          "id": "slot_2",
          "expectedToken": "println"
        }
      ],
      "tokens": [
        "System",
        "out",
        "println",
        "console"
      ],
      "expectedOutput": "Luz espectral",
      "explanation": "System.out.println es la estructura reglamentaria de salida en Java."
    },
    {
      "id": "p_4_9_drag",
      "bossLevel": 4,
      "type": "drag_drop",
      "title": "Unión de Cadena y Sufijo",
      "theme": "System.out.println y concatenación",
      "instruction": "Ensambla la concatenación para adjuntar la unidad textual al valor numérico.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int danio = 45;\n        System.out.println(\"Ataque: \" {{slot_0}} danio {{slot_1}} {{slot_2}});\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "+"
        },
        {
          "id": "slot_1",
          "expectedToken": "+"
        },
        {
          "id": "slot_2",
          "expectedToken": "\" PTS\""
        }
      ],
      "tokens": [
        "+",
        "\" PTS\"",
        ",",
        ";"
      ],
      "expectedOutput": "Ataque: 45 PTS",
      "explanation": "El operador '+' une fragmentos textuales y variables en un único resultado."
    },
    {
      "id": "p_4_10_drag",
      "bossLevel": 4,
      "type": "drag_drop",
      "title": "Métodos Print y Println",
      "theme": "System.out.println y concatenación",
      "instruction": "Coloca los métodos adecuados para imprimir el prefijo en la misma línea y cerrar con salto de línea.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        System.out.{{slot_0}}(\"Carga: \");\n        System.out.{{slot_1}}(\"100%\");\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "print"
        },
        {
          "id": "slot_1",
          "expectedToken": "println"
        }
      ],
      "tokens": [
        "print",
        "println",
        "write",
        "echo"
      ],
      "expectedOutput": "Carga: 100%",
      "explanation": "print mantiene el renglón y println finaliza con un retorno de línea."
    }
  ],
  "5": [
    {
      "id": "p_5_1_fix",
      "bossLevel": 5,
      "type": "fix_code",
      "title": "Operador en Evaluación Condicional",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "Se utilizó un operador de asignación en lugar de comparación dentro de la prueba condicional. Corrige el operador para comprobar la igualdad.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int codigo = 777;\n        if (codigo = 777) {\n            System.out.println(\"¡Acceso Concedido!\");\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int codigo = 777;\n        if (codigo == 777) {\n            System.out.println(\"¡Acceso Concedido!\");\n        }\n    }\n}",
      "expectedOutput": "¡Acceso Concedido!",
      "requiredTokens": [
        "codigo == 777"
      ],
      "forbiddenTokens": [
        "if (codigo = 777)",
        "if(codigo=777)"
      ],
      "explanation": "'=' realiza asignación; para comparar si dos valores son iguales en una condición se debe usar '=='."
    },
    {
      "id": "p_5_2_fix",
      "bossLevel": 5,
      "type": "fix_code",
      "title": "Punto y Coma Prematuro en Condicional",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "Un punto y coma colocado inmediatamente después del paréntesis del condicional anula el bloque de instrucciones. Corrige la cabecera.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int pociones = 0;\n        if (pociones > 0);\n        {\n            System.out.println(\"Pocion Usada\");\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int pociones = 0;\n        if (pociones > 0) {\n            System.out.println(\"Pocion Usada\");\n        }\n    }\n}",
      "expectedOutput": "",
      "requiredTokens": [
        "if (pociones > 0) {"
      ],
      "forbiddenTokens": [
        "if (pociones > 0);"
      ],
      "explanation": "Colocar punto y coma tras 'if(...)' cierra la sentencia condicional como un bloque vacío, ejecutando siempre el bloque posterior."
    },
    {
      "id": "p_5_3_fix",
      "bossLevel": 5,
      "type": "fix_code",
      "title": "Condición en Cláusula Else",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "La cláusula residual intenta evaluar una condición directa sin la palabra clave de encadenamiento. Convierte la rama en una comprobación secundaria válida.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int hp = 50;\n        if (hp > 80) {\n            System.out.println(\"Fuerte\");\n        } else (hp > 20) {\n            System.out.println(\"Estable\");\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int hp = 50;\n        if (hp > 80) {\n            System.out.println(\"Fuerte\");\n        } else if (hp > 20) {\n            System.out.println(\"Estable\");\n        }\n    }\n}",
      "expectedOutput": "Estable",
      "requiredTokens": [
        "else if (hp > 20)"
      ],
      "explanation": "'else' por sí solo no admite condiciones; para condicionar la rama secundaria se debe usar 'else if'."
    },
    {
      "id": "p_5_4_fix",
      "bossLevel": 5,
      "type": "fix_code",
      "title": "Sentido de Validación de Acceso",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "La condición evalúa si el nivel es menor al requerido impidiendo que el héroe de nivel superior avance. Invierte la comparación a mayor o igual.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int nivelHeroe = 10;\n        if (nivelHeroe < 5) {\n            System.out.println(\"Supera la Prueba\");\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int nivelHeroe = 10;\n        if (nivelHeroe >= 5) {\n            System.out.println(\"Supera la Prueba\");\n        }\n    }\n}",
      "expectedOutput": "Supera la Prueba",
      "requiredTokens": [
        "nivelHeroe >= 5"
      ],
      "explanation": "El operador '>=' valida que el nivel actual alcance o sobrepase el requisito mínimo."
    },
    {
      "id": "p_5_5_fill",
      "bossLevel": 5,
      "type": "fill_blank",
      "title": "Bifurcación Condicional Doble",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "Completa las palabras reservadas para la rama afirmativa y la rama alternativa.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int pociones = 3;\n        {{blank_0}} (pociones > 0) {\n            System.out.println(\"Pocion Lista\");\n        } {{blank_1}} {\n            System.out.println(\"Sin Pociones\");\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "si",
          "validAnswers": [
            "if"
          ],
          "hint": "Condicional principal"
        },
        {
          "id": "blank_1",
          "placeholder": "sino",
          "validAnswers": [
            "else"
          ],
          "hint": "Rama alternativa por defecto"
        }
      ],
      "solutionAnswers": [
        "if",
        "else"
      ],
      "expectedOutput": "Pocion Lista",
      "explanation": "'if' ejecuta si la condición es verdadera; 'else' en cualquier otro caso."
    },
    {
      "id": "p_5_6_fill",
      "bossLevel": 5,
      "type": "fill_blank",
      "title": "Escalón Secundario con Mayor o Igual",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "Escribe la palabra de bifurcación secundaria encadenada y el operador para validar mayor o igual.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int puntos = 85;\n        if (puntos >= 90) {\n            System.out.println(\"Oro\");\n        } {{blank_0}} (puntos {{blank_1}} 70) {\n            System.out.println(\"Plata\");\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "rama",
          "validAnswers": [
            "else if"
          ],
          "hint": "Encadenamiento de condicional alternativo"
        },
        {
          "id": "blank_1",
          "placeholder": "op",
          "validAnswers": [
            ">="
          ],
          "hint": "Operador relacional de mayor o igual"
        }
      ],
      "solutionAnswers": [
        "else if",
        ">="
      ],
      "expectedOutput": "Plata",
      "explanation": "'else if' evalúa una condición secundaria cuando la primera fue falsa."
    },
    {
      "id": "p_5_7_fill",
      "bossLevel": 5,
      "type": "fill_blank",
      "title": "Comprobación de Dos Condiciones",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "Inicia la estructura condicional y utiliza el operador lógico que exige que ambas variables sean verdaderas.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        boolean llave = true;\n        boolean puertaAbierta = true;\n        {{blank_0}} (llave {{blank_1}} puertaAbierta) {\n            System.out.println(\"Paso Seguro\");\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "condicional",
          "validAnswers": [
            "if"
          ],
          "hint": "Palabra clave condicional"
        },
        {
          "id": "blank_1",
          "placeholder": "op",
          "validAnswers": [
            "&&"
          ],
          "hint": "Operador lógico de conjunción AND"
        }
      ],
      "solutionAnswers": [
        "if",
        "&&"
      ],
      "expectedOutput": "Paso Seguro",
      "explanation": "'if' junto con '&&' garantiza que ambas condiciones deban cumplirse para ejecutar el bloque."
    },
    {
      "id": "p_5_8_drag",
      "bossLevel": 5,
      "type": "drag_drop",
      "title": "Cascada Jerárquica de Rangos",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "Organiza los elementos en el orden secuencial de la cascada condicional.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int score = 95;\n        {{slot_0}} (score >= 90) {\n            System.out.println(\"Rango S\");\n        } {{slot_1}} (score >= 70) {\n            System.out.println(\"Rango A\");\n        } {{slot_2}} {\n            System.out.println(\"Rango B\");\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "if"
        },
        {
          "id": "slot_1",
          "expectedToken": "else if"
        },
        {
          "id": "slot_2",
          "expectedToken": "else"
        }
      ],
      "tokens": [
        "else if",
        "if",
        "else",
        "switch"
      ],
      "expectedOutput": "Rango S",
      "explanation": "El orden estándar de evaluación condicional en Java es 'if', luego 'else if' y finalmente 'else'."
    },
    {
      "id": "p_5_9_drag",
      "bossLevel": 5,
      "type": "drag_drop",
      "title": "Verificación de Igualdad Condicional",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "Coloca los elementos para iniciar la condición, comparar la contraseña y manejar la rama contraria.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int pin = 1234;\n        {{slot_0}} (pin {{slot_1}} 1234) {\n            System.out.println(\"PIN Correcto\");\n        } {{slot_2}} {\n            System.out.println(\"PIN Erroneo\");\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "if"
        },
        {
          "id": "slot_1",
          "expectedToken": "=="
        },
        {
          "id": "slot_2",
          "expectedToken": "else"
        }
      ],
      "tokens": [
        "if",
        "==",
        "else",
        "=",
        "!="
      ],
      "expectedOutput": "PIN Correcto",
      "explanation": "'if' inicia la prueba, '==' verifica igualdad y 'else' gestiona el caso contrario."
    },
    {
      "id": "p_5_10_drag",
      "bossLevel": 5,
      "type": "drag_drop",
      "title": "Condición Compuesta en Combate",
      "theme": "Estructuras de decisión if, else if, else",
      "instruction": "Arma el condicional para comprobar que la energía supere 0 y que el escudo se encuentre activo.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int energia = 25;\n        boolean escudo = true;\n        if (energia {{slot_0}} 0 {{slot_1}} escudo) {\n            System.out.println(\"Defensa Solida\");\n        } {{slot_2}} {\n            System.out.println(\"Vulnerable\");\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": ">"
        },
        {
          "id": "slot_1",
          "expectedToken": "&&"
        },
        {
          "id": "slot_2",
          "expectedToken": "else"
        }
      ],
      "tokens": [
        ">",
        "&&",
        "else",
        "<",
        "||"
      ],
      "expectedOutput": "Defensa Solida",
      "explanation": "> comprueba que haya energía positiva, && une ambas pruebas y else cubre la desprotección."
    }
  ],
  "6": [
    {
      "id": "p_6_1_fix",
      "bossLevel": 6,
      "type": "fix_code",
      "title": "Detener el Descenso de Casos",
      "theme": "Sentencia switch, break y default",
      "instruction": "El flujo de ejecución desciende al siguiente caso de forma no deseada por olvidar la sentencia de interrupción. Detén la ejecución al finalizar el primer caso.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int opcion = 1;\n        switch (opcion) {\n            case 1:\n                System.out.println(\"Espada Magica\");\n            case 2:\n                System.out.println(\"Arco Helado\");\n                break;\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int opcion = 1;\n        switch (opcion) {\n            case 1:\n                System.out.println(\"Espada Magica\");\n                break;\n            case 2:\n                System.out.println(\"Arco Helado\");\n                break;\n        }\n    }\n}",
      "expectedOutput": "Espada Magica",
      "requiredTokens": [
        "break;"
      ],
      "explanation": "Sin la sentencia 'break;', la ejecución continúa cayendo hacia los casos inferiores (fall-through)."
    },
    {
      "id": "p_6_2_fix",
      "bossLevel": 6,
      "type": "fix_code",
      "title": "Puntuación en Etiquetas de Casos",
      "theme": "Sentencia switch, break y default",
      "instruction": "El compilador detecta un símbolo erróneo al declarar la etiqueta del caso. Reemplaza el punto y coma por dos puntos en la cabecera del caso.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int portal = 2;\n        switch (portal) {\n            case 1:\n                System.out.println(\"Fuego\");\n                break;\n            case 2;\n                System.out.println(\"Hielo\");\n                break;\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int portal = 2;\n        switch (portal) {\n            case 1:\n                System.out.println(\"Fuego\");\n                break;\n            case 2:\n                System.out.println(\"Hielo\");\n                break;\n        }\n    }\n}",
      "expectedOutput": "Hielo",
      "requiredTokens": [
        "case 2:"
      ],
      "explanation": "Las etiquetas de caso en una estructura switch deben terminar siempre con dos puntos (:)."
    },
    {
      "id": "p_6_3_fix",
      "bossLevel": 6,
      "type": "fix_code",
      "title": "Escritura de la Cláusula por Defecto",
      "theme": "Sentencia switch, break y default",
      "instruction": "La palabra clave para el caso residual por defecto fue escrita incorrectamente. Corrige la etiqueta para que maneje las opciones no previstas.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int opcion = 99;\n        switch (opcion) {\n            case 1:\n                System.out.println(\"Arma\");\n                break;\n            defalt:\n                System.out.println(\"Opcion Desconocida\");\n                break;\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int opcion = 99;\n        switch (opcion) {\n            case 1:\n                System.out.println(\"Arma\");\n                break;\n            default:\n                System.out.println(\"Opcion Desconocida\");\n                break;\n        }\n    }\n}",
      "expectedOutput": "Opcion Desconocida",
      "requiredTokens": [
        "default:"
      ],
      "explanation": "La palabra clave para la rama no coincidente es 'default:'."
    },
    {
      "id": "p_6_4_fix",
      "bossLevel": 6,
      "type": "fix_code",
      "title": "Selección entre Múltiples Casos",
      "theme": "Sentencia switch, break y default",
      "instruction": "El switch evalúa el estado de una runa mágica pero falta interrumpir el caso correspondiente a la runa 3. Añade la sentencia de salida del switch.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int runa = 3;\n        switch (runa) {\n            case 3:\n                System.out.println(\"Runa Trueno\");\n            default:\n                System.out.println(\"Runa Inerte\");\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int runa = 3;\n        switch (runa) {\n            case 3:\n                System.out.println(\"Runa Trueno\");\n                break;\n            default:\n                System.out.println(\"Runa Inerte\");\n        }\n    }\n}",
      "expectedOutput": "Runa Trueno",
      "requiredTokens": [
        "break;"
      ],
      "explanation": "'break;' corta la ejecución del switch impidiendo que se ejecute la rama default."
    },
    {
      "id": "p_6_5_fill",
      "bossLevel": 6,
      "type": "fill_blank",
      "title": "Palabras Clave de Selección Múltiple",
      "theme": "Sentencia switch, break y default",
      "instruction": "Completa la palabra clave que inicia el bloque de opciones múltiples y la palabra que antecede a cada valor a comparar.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int eleccion = 1;\n        {{blank_0}} (eleccion) {\n            {{blank_1}} 1:\n                System.out.println(\"Hechizo Solar\");\n                break;\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "conmutador",
          "validAnswers": [
            "switch"
          ],
          "hint": "Estructura de selección múltiple"
        },
        {
          "id": "blank_1",
          "placeholder": "etiqueta",
          "validAnswers": [
            "case"
          ],
          "hint": "Palabra que precede al valor coincidente"
        }
      ],
      "solutionAnswers": [
        "switch",
        "case"
      ],
      "expectedOutput": "Hechizo Solar",
      "explanation": "'switch' inicia la estructura y 'case' define cada valor de coincidencia."
    },
    {
      "id": "p_6_6_fill",
      "bossLevel": 6,
      "type": "fill_blank",
      "title": "Salida de Caso y Rama Residual",
      "theme": "Sentencia switch, break y default",
      "instruction": "Inserta la instrucción para salir del bloque tras cumplir una opción y la palabra de la rama por defecto.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int cofre = 9;\n        switch (cofre) {\n            case 1:\n                System.out.println(\"Gemas\");\n                {{blank_0}};\n            {{blank_1}}:\n                System.out.println(\"Cofre Vacio\");\n                break;\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "interrupción",
          "validAnswers": [
            "break"
          ],
          "hint": "Sentencia para salir de la estructura"
        },
        {
          "id": "blank_1",
          "placeholder": "defecto",
          "validAnswers": [
            "default"
          ],
          "hint": "Rama que se ejecuta si ningún caso coincide"
        }
      ],
      "solutionAnswers": [
        "break",
        "default"
      ],
      "expectedOutput": "Cofre Vacio",
      "explanation": "'break' interrumpe el switch y 'default' atrapa cualquier valor sin coincidencia."
    },
    {
      "id": "p_6_7_fill",
      "bossLevel": 6,
      "type": "fill_blank",
      "title": "Evaluación de Casos Consecutivos",
      "theme": "Sentencia switch, break y default",
      "instruction": "Declara la segunda etiqueta para comparar con el valor 2 e incluye la instrucción que frena el flujo.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int pocion = 2;\n        switch (pocion) {\n            case 1:\n                System.out.println(\"Vida\");\n                break;\n            {{blank_0}} 2:\n                System.out.println(\"Mana\");\n                {{blank_1}};\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "etiqueta",
          "validAnswers": [
            "case"
          ],
          "hint": "Palabra para definir un caso"
        },
        {
          "id": "blank_1",
          "placeholder": "freno",
          "validAnswers": [
            "break"
          ],
          "hint": "Interrupción de la estructura"
        }
      ],
      "solutionAnswers": [
        "case",
        "break"
      ],
      "expectedOutput": "Mana",
      "explanation": "Cada rama se inicia con 'case' y se asegura con 'break'."
    },
    {
      "id": "p_6_8_drag",
      "bossLevel": 6,
      "type": "drag_drop",
      "title": "Arquitectura de un Conmutador",
      "theme": "Sentencia switch, break y default",
      "instruction": "Coloca los elementos para abrir la selección, etiquetar la primera opción y detener la ejecución.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int modo = 1;\n        {{slot_0}} (modo) {\n            {{slot_1}} 1:\n                System.out.println(\"Modo Heroico\");\n                {{slot_2}};\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "switch"
        },
        {
          "id": "slot_1",
          "expectedToken": "case"
        },
        {
          "id": "slot_2",
          "expectedToken": "break"
        }
      ],
      "tokens": [
        "switch",
        "case",
        "break",
        "if",
        "stop"
      ],
      "expectedOutput": "Modo Heroico",
      "explanation": "switch(variable) evalúa case [valor]: finalizando con break;."
    },
    {
      "id": "p_6_9_drag",
      "bossLevel": 6,
      "type": "drag_drop",
      "title": "Configuración de Caso Residual",
      "theme": "Sentencia switch, break y default",
      "instruction": "Ubica la palabra de opción por defecto, sus dos puntos reglamentarios y la interrupción final.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int id = 99;\n        switch (id) {\n            {{slot_0}}{{slot_1}}\n                System.out.println(\"Enemigo Estandar\");\n                {{slot_2}};\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "default"
        },
        {
          "id": "slot_1",
          "expectedToken": ":"
        },
        {
          "id": "slot_2",
          "expectedToken": "break"
        }
      ],
      "tokens": [
        "default",
        ":",
        "break",
        "case",
        ";"
      ],
      "expectedOutput": "Enemigo Estandar",
      "explanation": "default: actúa como bloque comodín cuando ninguna alternativa coincide."
    },
    {
      "id": "p_6_10_drag",
      "bossLevel": 6,
      "type": "drag_drop",
      "title": "Menú de Selección de Armas",
      "theme": "Sentencia switch, break y default",
      "instruction": "Organiza el switch para evaluar la elección y cortar la ejecución dentro del caso 2.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int arma = 2;\n        {{slot_0}} (arma) {\n            case 2:\n                System.out.println(\"Baston Sagrado\");\n                {{slot_1}};\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "switch"
        },
        {
          "id": "slot_1",
          "expectedToken": "break"
        }
      ],
      "tokens": [
        "switch",
        "break",
        "while",
        "return"
      ],
      "expectedOutput": "Baston Sagrado",
      "explanation": "switch junto con break garantiza una selección limpia y acotada."
    }
  ],
  "7": [
    {
      "id": "p_7_1_fix",
      "bossLevel": 7,
      "type": "fix_code",
      "title": "Bucle Infinito por Falta de Avance",
      "theme": "Bucles while y do-while",
      "instruction": "La variable de control nunca se modifica dentro del cuerpo del bucle, provocando un ciclo infinito. Incrementa el contador en una unidad por vuelta.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int paso = 1;\n        while (paso <= 2) {\n            System.out.println(\"Paso \" + paso);\n        }\n        System.out.println(\"Salida del Laberinto\");\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int paso = 1;\n        while (paso <= 2) {\n            System.out.println(\"Paso \" + paso);\n            paso++;\n        }\n        System.out.println(\"Salida del Laberinto\");\n    }\n}",
      "expectedOutput": "Paso 1\nPaso 2\nSalida del Laberinto",
      "requiredTokens": [
        "paso++"
      ],
      "explanation": "Los bucles while requieren que su condición de parada se aproxime en cada iteración (ej. paso++)."
    },
    {
      "id": "p_7_2_fix",
      "bossLevel": 7,
      "type": "fix_code",
      "title": "Punto y Coma Final en Do-While",
      "theme": "Bucles while y do-while",
      "instruction": "A diferencia del while tradicional, la estructura do-while exige un terminador al cerrar su condición. Añade el punto y coma correspondiente.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int intento = 1;\n        do {\n            System.out.println(\"Intento \" + intento);\n            intento++;\n        } while (intento <= 2)\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int intento = 1;\n        do {\n            System.out.println(\"Intento \" + intento);\n            intento++;\n        } while (intento <= 2);\n    }\n}",
      "expectedOutput": "Intento 1\nIntento 2",
      "requiredTokens": [
        "while (intento <= 2);"
      ],
      "explanation": "La sintaxis formal de do-while concluye obligatoriamente con punto y coma: do { ... } while(condicion);"
    },
    {
      "id": "p_7_3_fix",
      "bossLevel": 7,
      "type": "fix_code",
      "title": "Dirección Invertida de la Cuenta",
      "theme": "Bucles while y do-while",
      "instruction": "En una cuenta regresiva de escape, la variable se está incrementando en lugar de disminuir, alejándose de la parada. Aplica el operador de decremento.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int segundos = 2;\n        while (segundos > 0) {\n            System.out.println(\"Alerta: \" + segundos);\n            segundos++;\n        }\n        System.out.println(\"¡Escape exitoso!\");\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int segundos = 2;\n        while (segundos > 0) {\n            System.out.println(\"Alerta: \" + segundos);\n            segundos--;\n        }\n        System.out.println(\"¡Escape exitoso!\");\n    }\n}",
      "expectedOutput": "Alerta: 2\nAlerta: 1\n¡Escape exitoso!",
      "requiredTokens": [
        "segundos--"
      ],
      "explanation": "Para descender hacia cero en una cuenta regresiva se debe usar decremento ('--')."
    },
    {
      "id": "p_7_4_fix",
      "bossLevel": 7,
      "type": "fix_code",
      "title": "Condición de Entrada Estricta",
      "theme": "Bucles while y do-while",
      "instruction": "El bucle no se ejecuta ninguna vez porque la condición de entrada es falsa desde el inicio. Ajusta el operador relacional para que itere mientras la energía sea positiva.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int energia = 2;\n        while (energia < 0) {\n            System.out.println(\"Destello \" + energia);\n            energia--;\n        }\n        System.out.println(\"Energia agotada\");\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int energia = 2;\n        while (energia > 0) {\n            System.out.println(\"Destello \" + energia);\n            energia--;\n        }\n        System.out.println(\"Energia agotada\");\n    }\n}",
      "expectedOutput": "Destello 2\nDestello 1\nEnergia agotada",
      "requiredTokens": [
        "energia > 0"
      ],
      "explanation": "El bucle while comprueba la condición antes de cada iteración; si es falsa al inicio, no ejecuta el bloque."
    },
    {
      "id": "p_7_5_fill",
      "bossLevel": 7,
      "type": "fill_blank",
      "title": "Bucle con Precondición e Incremento",
      "theme": "Bucles while y do-while",
      "instruction": "Inicia el bucle condicional e incrementa el contador al final del cuerpo.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int antorchas = 1;\n        {{blank_0}} (antorchas <= 2) {\n            System.out.println(\"Antorcha \" + antorchas);\n            antorchas{{blank_1}};\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "bucle",
          "validAnswers": [
            "while"
          ],
          "hint": "Palabra clave de bucle con precondición"
        },
        {
          "id": "blank_1",
          "placeholder": "inc",
          "validAnswers": [
            "++"
          ],
          "hint": "Operador de incremento en una unidad"
        }
      ],
      "solutionAnswers": [
        "while",
        "++"
      ],
      "expectedOutput": "Antorcha 1\nAntorcha 2",
      "explanation": "'while' repite el bloque mientras la condición sea verdadera y '++' suma 1 en cada ciclo."
    },
    {
      "id": "p_7_6_fill",
      "bossLevel": 7,
      "type": "fill_blank",
      "title": "Bucle con Postcondición Do-While",
      "theme": "Bucles while y do-while",
      "instruction": "Escribe la palabra que inicia el bloque garantizando al menos una pasada y la palabra que evalúa la condición al final.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int golpe = 1;\n        {{blank_0}} {\n            System.out.println(\"Golpe \" + golpe);\n            golpe++;\n        } {{blank_1}} (golpe <= 2);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "inicio",
          "validAnswers": [
            "do"
          ],
          "hint": "Palabra que abre el bucle con postcondición"
        },
        {
          "id": "blank_1",
          "placeholder": "cierre",
          "validAnswers": [
            "while"
          ],
          "hint": "Palabra que evalúa la condición al pie del bloque"
        }
      ],
      "solutionAnswers": [
        "do",
        "while"
      ],
      "expectedOutput": "Golpe 1\nGolpe 2",
      "explanation": "'do-while' garantiza la ejecución de al menos una iteración sin importar la condición inicial."
    },
    {
      "id": "p_7_7_fill",
      "bossLevel": 7,
      "type": "fill_blank",
      "title": "Acumulación en Bucle While",
      "theme": "Bucles while y do-while",
      "instruction": "Define la cabecera del bucle y acumula el valor sumando con asignación compuesta.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int n = 1;\n        int suma = 0;\n        {{blank_0}} (n <= 2) {\n            suma {{blank_1}} n;\n            n++;\n        }\n        System.out.println(\"Suma Total: \" + suma);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "bucle",
          "validAnswers": [
            "while"
          ],
          "hint": "Bucle condicional"
        },
        {
          "id": "blank_1",
          "placeholder": "acumulador",
          "validAnswers": [
            "+="
          ],
          "hint": "Operador de suma y asignación"
        }
      ],
      "solutionAnswers": [
        "while",
        "+="
      ],
      "expectedOutput": "Suma Total: 3",
      "explanation": "El acumulador 'suma += n' agrega el valor de cada vuelta mientras 'while' itera."
    },
    {
      "id": "p_7_8_drag",
      "bossLevel": 7,
      "type": "drag_drop",
      "title": "Estructura de Ciclo Condicional",
      "theme": "Bucles while y do-while",
      "instruction": "Ubica la palabra de control, el operador relacional de límite y el operador de avance.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int ronda = 1;\n        {{slot_0}} (ronda {{slot_1}} 2) {\n            System.out.println(\"Ronda: \" + ronda);\n            ronda{{slot_2}};\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "while"
        },
        {
          "id": "slot_1",
          "expectedToken": "<="
        },
        {
          "id": "slot_2",
          "expectedToken": "++"
        }
      ],
      "tokens": [
        "while",
        "<=",
        "++",
        "for",
        "--"
      ],
      "expectedOutput": "Ronda: 1\nRonda: 2",
      "explanation": "while(ronda <= 2) itera aumentando de a uno con ronda++."
    },
    {
      "id": "p_7_9_drag",
      "bossLevel": 7,
      "type": "drag_drop",
      "title": "Componentes de un Do-While",
      "theme": "Bucles while y do-while",
      "instruction": "Coloca las palabras de apertura y cierre del bucle junto con el terminador de instrucción.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int c = 1;\n        {{slot_0}} {\n            System.out.println(\"Carga: \" + c);\n            c++;\n        } {{slot_1}} (c <= 2){{slot_2}}\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "do"
        },
        {
          "id": "slot_1",
          "expectedToken": "while"
        },
        {
          "id": "slot_2",
          "expectedToken": ";"
        }
      ],
      "tokens": [
        "do",
        "while",
        ";",
        "{",
        "}"
      ],
      "expectedOutput": "Carga: 1\nCarga: 2",
      "explanation": "El ciclo do-while se ensambla con 'do { ... } while (...);'."
    },
    {
      "id": "p_7_10_drag",
      "bossLevel": 7,
      "type": "drag_drop",
      "title": "Cuenta Regresiva con While",
      "theme": "Bucles while y do-while",
      "instruction": "Organiza el bucle para realizar una cuenta descendente hasta agotarse.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int vidas = 2;\n        {{slot_0}} (vidas {{slot_1}} 0) {\n            System.out.println(\"Vidas: \" + vidas);\n            vidas{{slot_2}};\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "while"
        },
        {
          "id": "slot_1",
          "expectedToken": ">"
        },
        {
          "id": "slot_2",
          "expectedToken": "--"
        }
      ],
      "tokens": [
        "while",
        ">",
        "--",
        "++",
        "<"
      ],
      "expectedOutput": "Vidas: 2\nVidas: 1",
      "explanation": "while(vidas > 0) desciende con vidas-- hasta llegar a cero."
    }
  ],
  "8": [
    {
      "id": "p_8_1_fix",
      "bossLevel": 8,
      "type": "fix_code",
      "title": "Separador en Cabecera de Bucle Determinado",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "Las tres secciones de la cabecera del for fueron separadas con comas en lugar del delimitador reglamentario. Corrige los separadores.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0, i < 3, i++) {\n            System.out.println(\"Fuego \" + i);\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            System.out.println(\"Fuego \" + i);\n        }\n    }\n}",
      "expectedOutput": "Fuego 0\nFuego 1\nFuego 2",
      "requiredTokens": [
        "for (int i = 0; i < 3; i++)"
      ],
      "explanation": "Las secciones del for (inicialización; condición; paso) se separan obligatoriamente con punto y coma (;)."
    },
    {
      "id": "p_8_2_fix",
      "bossLevel": 8,
      "type": "fix_code",
      "title": "Ajuste de Límite en Iteración",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "El bucle itera cuatro veces en lugar de tres por usar un operador inclusivo con el límite. Modifica la condición para que solo dé 3 vueltas (de 0 a 2).",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i <= 3; i++) {\n            System.out.println(\"Llamarada \" + i);\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            System.out.println(\"Llamarada \" + i);\n        }\n    }\n}",
      "expectedOutput": "Llamarada 0\nLlamarada 1\nLlamarada 2",
      "requiredTokens": [
        "i < 3"
      ],
      "explanation": "Con i iniciando en 0, 'i < 3' ejecuta exactamente 3 veces: 0, 1 y 2."
    },
    {
      "id": "p_8_3_fix",
      "bossLevel": 8,
      "type": "fix_code",
      "title": "Acumulador Sobrescrito en For",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "En cada iteración se está reemplazando el valor total en lugar de acumularlo sumándolo al anterior. Aplica el operador de suma compuesta.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int danioTotal = 0;\n        for (int i = 1; i <= 3; i++) {\n            danioTotal = i;\n        }\n        System.out.println(\"Total: \" + danioTotal);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int danioTotal = 0;\n        for (int i = 1; i <= 3; i++) {\n            danioTotal += i;\n        }\n        System.out.println(\"Total: \" + danioTotal);\n    }\n}",
      "expectedOutput": "Total: 6",
      "requiredTokens": [
        "danioTotal += i;"
      ],
      "explanation": "'danioTotal += i' añade el valor de cada iteración al acumulador acumulando 1 + 2 + 3 = 6."
    },
    {
      "id": "p_8_4_fix",
      "bossLevel": 8,
      "type": "fix_code",
      "title": "Sentido del Paso en Bucle For",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "El bucle avanza hacia arriba cuando la condición exige una cuenta regresiva que disminuya hacia cero. Invierte la actualización del paso.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 2; i > 0; i++) {\n            System.out.println(\"Bomba: \" + i);\n            break;\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 2; i > 0; i--) {\n            System.out.println(\"Bomba: \" + i);\n        }\n    }\n}",
      "expectedOutput": "Bomba: 2\nBomba: 1",
      "requiredTokens": [
        "i--"
      ],
      "explanation": "En un bucle descendente la variable debe actualizarse con decremento (i--)."
    },
    {
      "id": "p_8_5_fill",
      "bossLevel": 8,
      "type": "fill_blank",
      "title": "Cabecera de Bucle Determinado",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "Escribe la palabra de bucle for y el operador relacional estricto para iterar desde 0 hasta menos de 3.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} (int i = 0; i {{blank_1}} 3; i++) {\n            System.out.println(\"Paso: \" + i);\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "bucle",
          "validAnswers": [
            "for"
          ],
          "hint": "Palabra clave de bucle con contador"
        },
        {
          "id": "blank_1",
          "placeholder": "op",
          "validAnswers": [
            "<"
          ],
          "hint": "Menor que estricto"
        }
      ],
      "solutionAnswers": [
        "for",
        "<"
      ],
      "expectedOutput": "Paso: 0\nPaso: 1\nPaso: 2",
      "explanation": "El bucle for(int i = 0; i < 3; i++) ejecuta para los índices 0, 1 y 2."
    },
    {
      "id": "p_8_6_fill",
      "bossLevel": 8,
      "type": "fill_blank",
      "title": "Acumulación de Monedas",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "Declara el tipo de la variable acumuladora e introduce el operador de suma compuesta en el cuerpo.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} monedas = 0;\n        for (int i = 1; i <= 3; i++) {\n            monedas {{blank_1}} 10;\n        }\n        System.out.println(\"Monedas: \" + monedas);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo primitivo entero"
        },
        {
          "id": "blank_1",
          "placeholder": "acumulador",
          "validAnswers": [
            "+="
          ],
          "hint": "Operador de suma y asignación"
        }
      ],
      "solutionAnswers": [
        "int",
        "+="
      ],
      "expectedOutput": "Monedas: 30",
      "explanation": "El acumulador entero 'monedas += 10' suma 10 en cada una de las 3 iteraciones (total: 30)."
    },
    {
      "id": "p_8_7_fill",
      "bossLevel": 8,
      "type": "fill_blank",
      "title": "Bucle Descendente con Decremento",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "Indica la palabra del bucle y el operador de paso para descender de uno en uno.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} (int k = 2; k >= 1; k{{blank_1}}) {\n            System.out.println(\"Turno: \" + k);\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "bucle",
          "validAnswers": [
            "for"
          ],
          "hint": "Estructura de control de repetición"
        },
        {
          "id": "blank_1",
          "placeholder": "paso",
          "validAnswers": [
            "--"
          ],
          "hint": "Operador de decremento unario"
        }
      ],
      "solutionAnswers": [
        "for",
        "--"
      ],
      "expectedOutput": "Turno: 2\nTurno: 1",
      "explanation": "for con k-- disminuye el contador en cada ciclo."
    },
    {
      "id": "p_8_8_drag",
      "bossLevel": 8,
      "type": "drag_drop",
      "title": "Estructura de la Cabecera For",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "Coloca las piezas esenciales de la cabecera: palabra clave, operador relacional y operador de incremento.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} (int i = 0; i {{slot_1}} 2; i{{slot_2}}) {\n            System.out.println(\"Ráfaga: \" + i);\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "for"
        },
        {
          "id": "slot_1",
          "expectedToken": "<"
        },
        {
          "id": "slot_2",
          "expectedToken": "++"
        }
      ],
      "tokens": [
        "for",
        "<",
        "++",
        "while",
        ">"
      ],
      "expectedOutput": "Ráfaga: 0\nRáfaga: 1",
      "explanation": "for(int i = 0; i < 2; i++) es la construcción clásica de conteo finito."
    },
    {
      "id": "p_8_9_drag",
      "bossLevel": 8,
      "type": "drag_drop",
      "title": "Acumulación de Daño de Fuego",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "Ordena el tipo de la suma, el delimitador interno del for y el operador de acumulación.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} impacto = 0;\n        for (int i = 1; i <= 2{{slot_1}} i++) {\n            impacto {{slot_2}} 5;\n        }\n        System.out.println(\"Impacto: \" + impacto);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int"
        },
        {
          "id": "slot_1",
          "expectedToken": ";"
        },
        {
          "id": "slot_2",
          "expectedToken": "+="
        }
      ],
      "tokens": [
        "int",
        ";",
        "+=",
        "=",
        ","
      ],
      "expectedOutput": "Impacto: 10",
      "explanation": "int declara el total, ';' separa las secciones del for y '+=' acumula."
    },
    {
      "id": "p_8_10_drag",
      "bossLevel": 8,
      "type": "drag_drop",
      "title": "Conteo en Intervalo Cerrado",
      "theme": "Bucle for clásico y acumuladores",
      "instruction": "Ensambla la cabecera para ejecutar exactamente desde 1 hasta 2 inclusive.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        for (int x = 1; x {{slot_0}} 2; x{{slot_1}}) {\n            System.out.println(\"Dragón: \" + x);\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "<="
        },
        {
          "id": "slot_1",
          "expectedToken": "++"
        }
      ],
      "tokens": [
        "<=",
        "++",
        ">=",
        "--"
      ],
      "expectedOutput": "Dragón: 1\nDragón: 2",
      "explanation": "'x <= 2' incluye el extremo superior e 'x++' incrementa hacia el límite."
    }
  ],
  "9": [
    {
      "id": "p_9_1_fix",
      "bossLevel": 9,
      "type": "fix_code",
      "title": "Índice de Último Elemento Fuera de Rango",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "En Java los índices inician en 0, por lo que el último elemento está en la posición tamaño menos 1. Corrige el índice para evitar desbordamiento.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int[] numeros = {10, 20, 30};\n        int ultimo = numeros[numeros.length];\n        System.out.println(\"Ultimo: \" + ultimo);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int[] numeros = {10, 20, 30};\n        int ultimo = numeros[numeros.length - 1];\n        System.out.println(\"Ultimo: \" + ultimo);\n    }\n}",
      "expectedOutput": "Ultimo: 30",
      "requiredTokens": [
        "numeros[numeros.length - 1]"
      ],
      "explanation": "Un arreglo de tamaño N tiene índices de 0 a N-1. Acceder a [length] lanza ArrayIndexOutOfBoundsException."
    },
    {
      "id": "p_9_2_fix",
      "bossLevel": 9,
      "type": "fix_code",
      "title": "Literal de Inicialización de Arreglo",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Se usaron paréntesis en lugar de llaves para enumerar los elementos del arreglo. Emplea la sintaxis reglamentaria de llaves.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int[] gemas = (5, 10);\n        System.out.println(\"Primera Gema: \" + gemas[0]);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int[] gemas = {5, 10};\n        System.out.println(\"Primera Gema: \" + gemas[0]);\n    }\n}",
      "expectedOutput": "Primera Gema: 5",
      "requiredTokens": [
        "int[] gemas = {5, 10};"
      ],
      "explanation": "Los literales de inicialización de arreglos en Java se encierran entre llaves ({ y })."
    },
    {
      "id": "p_9_3_fix",
      "bossLevel": 9,
      "type": "fix_code",
      "title": "Acceso al Primer Elemento en Base Cero",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Se intentó acceder al primer elemento usando el índice 1 en lugar del índice base cero de Java. Corrige el índice para obtener el primer valor.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int[] runas = {100, 200};\n        int primera = runas[1];\n        System.out.println(\"Runa Base: \" + primera);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int[] runas = {100, 200};\n        int primera = runas[0];\n        System.out.println(\"Runa Base: \" + primera);\n    }\n}",
      "expectedOutput": "Runa Base: 100",
      "requiredTokens": [
        "runas[0]"
      ],
      "explanation": "El primer elemento de todo arreglo en Java se ubica en el índice 0."
    },
    {
      "id": "p_9_4_fix",
      "bossLevel": 9,
      "type": "fix_code",
      "title": "Propiedad de Longitud de Arreglos",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Los arreglos poseen una propiedad de tamaño directa, no un método con paréntesis. Corrige la consulta de la longitud del arreglo.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int[] items = {7, 8, 9};\n        int total = items.length();\n        System.out.println(\"Total Items: \" + total);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int[] items = {7, 8, 9};\n        int total = items.length;\n        System.out.println(\"Total Items: \" + total);\n    }\n}",
      "expectedOutput": "Total Items: 3",
      "requiredTokens": [
        "items.length;"
      ],
      "forbiddenTokens": [
        "items.length()"
      ],
      "explanation": "En arreglos, 'length' es un atributo directo (sin paréntesis); los paréntesis se usan en cadenas (String.length())."
    },
    {
      "id": "p_9_5_fill",
      "bossLevel": 9,
      "type": "fill_blank",
      "title": "Declaración y Tamaño de Arreglo",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Indica el tipo de arreglo entero en la declaración y la propiedad para consultar su longitud.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} datos = {4, 8};\n        int tam = datos.{{blank_1}};\n        System.out.println(\"Tamano: \" + tam);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "int[]",
            "int []"
          ],
          "hint": "Tipo de arreglo de enteros"
        },
        {
          "id": "blank_1",
          "placeholder": "propiedad",
          "validAnswers": [
            "length"
          ],
          "hint": "Atributo de tamaño del arreglo"
        }
      ],
      "solutionAnswers": [
        "int[]",
        "length"
      ],
      "expectedOutput": "Tamano: 2",
      "explanation": "'int[]' declara un arreglo de enteros y '.length' devuelve su cantidad de posiciones."
    },
    {
      "id": "p_9_6_fill",
      "bossLevel": 9,
      "type": "fill_blank",
      "title": "Indexación de Primero y Segundo Elemento",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Accede al primer elemento en la posición inicial y al segundo elemento en la posición subsiguiente.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int[] pociones = {50, 100};\n        System.out.println(\"P1: \" + pociones[{{blank_0}}] + \" P2: \" + pociones[{{blank_1}}]);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "idx",
          "validAnswers": [
            "0"
          ],
          "hint": "Índice base cero de la primera posición"
        },
        {
          "id": "blank_1",
          "placeholder": "idx",
          "validAnswers": [
            "1"
          ],
          "hint": "Índice de la segunda posición"
        }
      ],
      "solutionAnswers": [
        "0",
        "1"
      ],
      "expectedOutput": "P1: 50 P2: 100",
      "explanation": "Las posiciones en arreglos se numeran 0, 1, 2, ..."
    },
    {
      "id": "p_9_7_fill",
      "bossLevel": 9,
      "type": "fill_blank",
      "title": "Recorrido Secuencial de Arreglo",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Usa la propiedad de tamaño para delimitar el bucle e indexa el arreglo con la variable iteradora.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int[] vals = {10, 20};\n        for (int i = 0; i < vals.{{blank_0}}; i++) {\n            System.out.println(\"Dato: \" + vals[{{blank_1}}]);\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "longitud",
          "validAnswers": [
            "length"
          ],
          "hint": "Propiedad de dimensión del arreglo"
        },
        {
          "id": "blank_1",
          "placeholder": "índice",
          "validAnswers": [
            "i"
          ],
          "hint": "Variable de iteración del bucle"
        }
      ],
      "solutionAnswers": [
        "length",
        "i"
      ],
      "expectedOutput": "Dato: 10\nDato: 20",
      "explanation": "'vals.length' acota el límite superior y 'vals[i]' accede a cada posición."
    },
    {
      "id": "p_9_8_drag",
      "bossLevel": 9,
      "type": "drag_drop",
      "title": "Creación e Inicialización de Arreglo",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Coloca el tipo de arreglo y los delimitadores de la lista de valores.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} escudos = {{slot_1}}40, 80{{slot_2}};\n        System.out.println(\"Escudo: \" + escudos[0]);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int[]"
        },
        {
          "id": "slot_1",
          "expectedToken": "{"
        },
        {
          "id": "slot_2",
          "expectedToken": "}"
        }
      ],
      "tokens": [
        "int[]",
        "{",
        "}",
        "(",
        ")"
      ],
      "expectedOutput": "Escudo: 40",
      "explanation": "int[] nombre = {val1, val2}; define e inicializa el arreglo."
    },
    {
      "id": "p_9_9_drag",
      "bossLevel": 9,
      "type": "drag_drop",
      "title": "Fórmula de Último Índice",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Ensambla la expresión para acceder con seguridad a la última casilla del arreglo.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int[] lista = {7, 14, 21};\n        int finalVal = lista[lista.{{slot_0}} {{slot_1}} {{slot_2}}];\n        System.out.println(\"Final: \" + finalVal);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "length"
        },
        {
          "id": "slot_1",
          "expectedToken": "-"
        },
        {
          "id": "slot_2",
          "expectedToken": "1"
        }
      ],
      "tokens": [
        "length",
        "-",
        "1",
        "+",
        "0"
      ],
      "expectedOutput": "Final: 21",
      "explanation": "lista[lista.length - 1] obtiene siempre el último elemento."
    },
    {
      "id": "p_9_10_drag",
      "bossLevel": 9,
      "type": "drag_drop",
      "title": "Acceso y Longitud en Combate",
      "theme": "Arreglos unidimensionales (declaración, índices, length)",
      "instruction": "Ubica el índice del primer elemento y la propiedad que retorna el total de ranuras.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        int[] armaduras = {15, 30};\n        System.out.println(\"Primero: \" + armaduras[{{slot_0}}] + \", Total: \" + armaduras.{{slot_1}});\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "0"
        },
        {
          "id": "slot_1",
          "expectedToken": "length"
        }
      ],
      "tokens": [
        "0",
        "length",
        "1",
        "size"
      ],
      "expectedOutput": "Primero: 15, Total: 2",
      "explanation": "[0] accede al primer dato y .length reporta la capacidad total del arreglo."
    }
  ],
  "10": [
    {
      "id": "p_10_1_fix",
      "bossLevel": 10,
      "type": "fix_code",
      "title": "Comparación de Contenido en Objetos Texto",
      "theme": "Métodos de String",
      "instruction": "El operador de igualdad referencial compara identidades de memoria en lugar del contenido del texto. Utiliza el método de comparación de igualdad de contenido.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        String clave = new String(\"Heroe\");\n        if (clave == \"Heroe\") {\n            System.out.println(\"Acceso Autorizado\");\n        } else {\n            System.out.println(\"Bloqueado\");\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String clave = new String(\"Heroe\");\n        if (clave.equals(\"Heroe\")) {\n            System.out.println(\"Acceso Autorizado\");\n        } else {\n            System.out.println(\"Bloqueado\");\n        }\n    }\n}",
      "expectedOutput": "Acceso Autorizado",
      "requiredTokens": [
        "clave.equals(\"Heroe\")"
      ],
      "explanation": "En Java las cadenas deben compararse con '.equals()' para evaluar su contenido textual y no sus referencias de memoria."
    },
    {
      "id": "p_10_2_fix",
      "bossLevel": 10,
      "type": "fix_code",
      "title": "Extracción de Carácter por Posición",
      "theme": "Métodos de String",
      "instruction": "En Java las cadenas no permiten el acceso directo por corchetes. Reemplaza los corchetes por la llamada al método que extrae un carácter por índice.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        String hechizo = \"FUEGO\";\n        char inicial = hechizo[0];\n        System.out.println(\"Inicial: \" + inicial);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String hechizo = \"FUEGO\";\n        char inicial = hechizo.charAt(0);\n        System.out.println(\"Inicial: \" + inicial);\n    }\n}",
      "expectedOutput": "Inicial: F",
      "requiredTokens": [
        "hechizo.charAt(0)"
      ],
      "explanation": "Para obtener el carácter en una posición específica de un String se debe invocar 'charAt(indice)'."
    },
    {
      "id": "p_10_3_fix",
      "bossLevel": 10,
      "type": "fix_code",
      "title": "Invocación del Método de Longitud de Cadenas",
      "theme": "Métodos de String",
      "instruction": "A diferencia de los arreglos, en la clase String la longitud se obtiene mediante un método que requiere paréntesis. Corrige la invocación.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        String titulo = \"Paladin\";\n        int tam = titulo.length;\n        System.out.println(\"Longitud: \" + tam);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String titulo = \"Paladin\";\n        int tam = titulo.length();\n        System.out.println(\"Longitud: \" + tam);\n    }\n}",
      "expectedOutput": "Longitud: 7",
      "requiredTokens": [
        "titulo.length()"
      ],
      "explanation": "En objetos de tipo String la cantidad de caracteres se consulta con el método '.length()'."
    },
    {
      "id": "p_10_4_fix",
      "bossLevel": 10,
      "type": "fix_code",
      "title": "Extracción de Porción de Cadena",
      "theme": "Métodos de String",
      "instruction": "Se necesita extraer los primeros 3 caracteres usando el método de subcadena. Corrige los parámetros para tomar desde el inicio hasta el índice 3.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        String conjuro = \"RELAMPAGO\";\n        String prefijo = conjuro.substring(3, 0);\n        System.out.println(\"Prefijo: \" + prefijo);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String conjuro = \"RELAMPAGO\";\n        String prefijo = conjuro.substring(0, 3);\n        System.out.println(\"Prefijo: \" + prefijo);\n    }\n}",
      "expectedOutput": "Prefijo: REL",
      "requiredTokens": [
        "conjuro.substring(0, 3)"
      ],
      "explanation": "substring(inicio, fin) recibe primero el índice de inicio inclusivo y luego el índice de fin exclusivo."
    },
    {
      "id": "p_10_5_fill",
      "bossLevel": 10,
      "type": "fill_blank",
      "title": "Comparación e Inspección de Longitud",
      "theme": "Métodos de String",
      "instruction": "Aplica el método de igualdad de contenido y el método que retorna la cantidad de caracteres.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String texto = \"Sirena\";\n        boolean igual = texto.{{blank_0}}(\"Sirena\");\n        int total = texto.{{blank_1}}();\n        System.out.println(\"Igual: \" + igual + \", Total: \" + total);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "comparador",
          "validAnswers": [
            "equals"
          ],
          "hint": "Método para comparar igualdad de contenido"
        },
        {
          "id": "blank_1",
          "placeholder": "medida",
          "validAnswers": [
            "length"
          ],
          "hint": "Método que cuenta los caracteres de la cadena"
        }
      ],
      "solutionAnswers": [
        "equals",
        "length"
      ],
      "expectedOutput": "Igual: true, Total: 6",
      "explanation": "equals() valida identidad de texto y length() devuelve la longitud."
    },
    {
      "id": "p_10_6_fill",
      "bossLevel": 10,
      "type": "fill_blank",
      "title": "Inspección de Carácter y Fragmento",
      "theme": "Métodos de String",
      "instruction": "Extrae el primer símbolo mediante el método de carácter e invoca el método para extraer una porción del texto.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String mapa = \"TESORO\";\n        char letra = mapa.{{blank_0}}(0);\n        String sub = mapa.{{blank_1}}(0, 4);\n        System.out.println(\"Letra: \" + letra + \", Parte: \" + sub);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "método",
          "validAnswers": [
            "charAt"
          ],
          "hint": "Método que devuelve el char en una posición"
        },
        {
          "id": "blank_1",
          "placeholder": "método",
          "validAnswers": [
            "substring"
          ],
          "hint": "Método que recorta un rango de la cadena"
        }
      ],
      "solutionAnswers": [
        "charAt",
        "substring"
      ],
      "expectedOutput": "Letra: T, Parte: TESO",
      "explanation": "charAt(0) recupera 'T' y substring(0, 4) extrae los primeros 4 caracteres."
    },
    {
      "id": "p_10_7_fill",
      "bossLevel": 10,
      "type": "fill_blank",
      "title": "Transformación a Mayúsculas",
      "theme": "Métodos de String",
      "instruction": "Invoca el método que convierte todos los caracteres de la cadena a letras mayúsculas.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String grito = \"victoria\";\n        String res = grito.{{blank_0}}();\n        System.out.println(\"Grito: \" + res);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "conversión",
          "validAnswers": [
            "toUpperCase"
          ],
          "hint": "Método de conversión a mayúsculas"
        }
      ],
      "solutionAnswers": [
        "toUpperCase"
      ],
      "expectedOutput": "Grito: VICTORIA",
      "explanation": "toUpperCase() genera una nueva cadena con todos sus caracteres convertidos a mayúsculas."
    },
    {
      "id": "p_10_8_drag",
      "bossLevel": 10,
      "type": "drag_drop",
      "title": "Verificación de Contenido y Longitud",
      "theme": "Métodos de String",
      "instruction": "Coloca los métodos adecuados para evaluar igualdad lógica con la contraseña y obtener la cantidad de caracteres.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String palabra = \"Canto\";\n        boolean match = palabra.{{slot_0}}(\"Canto\");\n        int len = palabra.{{slot_1}}();\n        System.out.println(\"Coincide: \" + match + \" Total: \" + len);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "equals"
        },
        {
          "id": "slot_1",
          "expectedToken": "length"
        }
      ],
      "tokens": [
        "equals",
        "length",
        "compareTo",
        "size"
      ],
      "expectedOutput": "Coincide: true Total: 5",
      "explanation": "equals() valida contenido y length() cuantifica caracteres en la cadena."
    },
    {
      "id": "p_10_9_drag",
      "bossLevel": 10,
      "type": "drag_drop",
      "title": "Extracción y Segmentación de Cadenas",
      "theme": "Métodos de String",
      "instruction": "Ubica los nombres de los métodos que extraen un símbolo individual y que recortan un tramo de la cadena.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String perla = \"OCEANO\";\n        char c = perla.{{slot_0}}(1);\n        String sub = perla.{{slot_1}}(0, 3);\n        System.out.println(\"Char: \" + c + \", Sub: \" + sub);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "charAt"
        },
        {
          "id": "slot_1",
          "expectedToken": "substring"
        }
      ],
      "tokens": [
        "charAt",
        "substring",
        "slice",
        "get"
      ],
      "expectedOutput": "Char: C, Sub: OCE",
      "explanation": "charAt(1) devuelve 'C' y substring(0, 3) retorna 'OCE'."
    },
    {
      "id": "p_10_10_drag",
      "bossLevel": 10,
      "type": "drag_drop",
      "title": "Conversión y Comparación en Combate",
      "theme": "Métodos de String",
      "instruction": "Organiza los métodos para transformar la palabra a mayúsculas y comprobar si equivale al texto objetivo.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String clave = \"magia\";\n        boolean ok = clave.{{slot_0}}().{{slot_1}}(\"MAGIA\");\n        System.out.println(\"Validado: \" + ok);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "toUpperCase"
        },
        {
          "id": "slot_1",
          "expectedToken": "equals"
        }
      ],
      "tokens": [
        "toUpperCase",
        "equals",
        "toLowerCase",
        "=="
      ],
      "expectedOutput": "Validado: true",
      "explanation": "toUpperCase() convierte el texto a 'MAGIA' y equals() confirma su coincidencia exacta."
    }
  ],
  "11": [
    {
      "id": "p_11_1_fix",
      "bossLevel": 11,
      "type": "fix_code",
      "title": "Número de Argumentos Incompleto",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "El método exige dos parámetros para operar, pero solo se le suministró uno al invocarlo. Pasa el segundo argumento numérico con valor 5 para completar la llamada.",
      "initialCode": "public class Main {\n    public static int calcularDanio(int base, int bono) {\n        return base + bono;\n    }\n    public static void main(String[] args) {\n        int danio = calcularDanio(20);\n        System.out.println(\"Daño Total: \" + danio);\n    }\n}",
      "solutionCode": "public class Main {\n    public static int calcularDanio(int base, int bono) {\n        return base + bono;\n    }\n    public static void main(String[] args) {\n        int danio = calcularDanio(20, 5);\n        System.out.println(\"Daño Total: \" + danio);\n    }\n}",
      "expectedOutput": "Daño Total: 25",
      "requiredTokens": [
        "calcularDanio(20, 5)"
      ],
      "explanation": "La cantidad y tipo de argumentos pasados al invocar un método deben coincidir estrictamente con su firma declarada."
    },
    {
      "id": "p_11_2_fix",
      "bossLevel": 11,
      "type": "fix_code",
      "title": "Incompatibilidad en Tipo de Argumento",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "Se envió una cadena de texto a un método que espera recibir un número entero. Ajusta el argumento para que sea un número entero puro.",
      "initialCode": "public class Main {\n    public static void mostrarNivel(int nivel) {\n        System.out.println(\"Rango Hechicero: \" + nivel);\n    }\n    public static void main(String[] args) {\n        mostrarNivel(\"3\");\n    }\n}",
      "solutionCode": "public class Main {\n    public static void mostrarNivel(int nivel) {\n        System.out.println(\"Rango Hechicero: \" + nivel);\n    }\n    public static void main(String[] args) {\n        mostrarNivel(3);\n    }\n}",
      "expectedOutput": "Rango Hechicero: 3",
      "requiredTokens": [
        "mostrarNivel(3)"
      ],
      "forbiddenTokens": [
        "\"3\""
      ],
      "explanation": "El compilador de Java comprueba el tipado en la llamada: si el parámetro es int, el argumento debe ser un número entero."
    },
    {
      "id": "p_11_3_fix",
      "bossLevel": 11,
      "type": "fix_code",
      "title": "Invocación a Método no Estático desde Main",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "El método de ayuda no posee el modificador estático, por lo que no puede ser invocado de forma directa desde el contexto estático de main. Agrega el modificador al método.",
      "initialCode": "public class Main {\n    public void invocarHechizo() {\n        System.out.println(\"Rayo Espectral\");\n    }\n    public static void main(String[] args) {\n        invocarHechizo();\n    }\n}",
      "solutionCode": "public class Main {\n    public static void invocarHechizo() {\n        System.out.println(\"Rayo Espectral\");\n    }\n    public static void main(String[] args) {\n        invocarHechizo();\n    }\n}",
      "expectedOutput": "Rayo Espectral",
      "requiredTokens": [
        "public static void invocarHechizo()"
      ],
      "explanation": "Desde un método 'static' solo se pueden llamar directamente otros métodos marcados con 'static' en la misma clase."
    },
    {
      "id": "p_11_4_fix",
      "bossLevel": 11,
      "type": "fix_code",
      "title": "Tipo de Retorno Declarado en Función Procedimiento",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "El método solo imprime un mensaje y no devuelve ningún valor, pero se le olvidó especificar la palabra clave para métodos sin retorno. Añade el tipo nulo en su cabecera.",
      "initialCode": "public class Main {\n    public static registrarVictoria() {\n        System.out.println(\"Almas Liberadas\");\n    }\n    public static void main(String[] args) {\n        registrarVictoria();\n    }\n}",
      "solutionCode": "public class Main {\n    public static void registrarVictoria() {\n        System.out.println(\"Almas Liberadas\");\n    }\n    public static void main(String[] args) {\n        registrarVictoria();\n    }\n}",
      "expectedOutput": "Almas Liberadas",
      "requiredTokens": [
        "public static void registrarVictoria()"
      ],
      "explanation": "En Java todo método debe declarar obligatoriamente un tipo de retorno; si no retorna nada, se debe indicar 'void'."
    },
    {
      "id": "p_11_5_fill",
      "bossLevel": 11,
      "type": "fill_blank",
      "title": "Firma de Método Multiplicador",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "Declara el tipo de dato retornado por el método y el tipo de dato que debe tener el segundo parámetro.",
      "template": "public class Main {\n    public static {{blank_0}} multiplicar(int x, {{blank_1}} y) {\n        return x * y;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Resultado: \" + multiplicar(4, 5));\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "retorno",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo del valor que devuelve"
        },
        {
          "id": "blank_1",
          "placeholder": "tipo",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo de dato del segundo número"
        }
      ],
      "solutionAnswers": [
        "int",
        "int"
      ],
      "expectedOutput": "Resultado: 20",
      "explanation": "El método multiplica dos 'int' y devuelve como resultado otro 'int'."
    },
    {
      "id": "p_11_6_fill",
      "bossLevel": 11,
      "type": "fill_blank",
      "title": "Método con Parámetro Textual",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "Define el tipo para el parámetro de nombre y completa la invocación suministrando la palabra requerida.",
      "template": "public class Main {\n    public static void saludar({{blank_0}} nombre) {\n        System.out.println(\"Bienvenido: \" + nombre);\n    }\n    public static void main(String[] args) {\n        saludar({{blank_1}});\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "String"
          ],
          "hint": "Tipo de dato para texto"
        },
        {
          "id": "blank_1",
          "placeholder": "argumento",
          "validAnswers": [
            "\"Guerrero\"",
            "'Guerrero'"
          ],
          "hint": "Texto entre comillas dobles"
        }
      ],
      "solutionAnswers": [
        "String",
        "\"Guerrero\""
      ],
      "expectedOutput": "Bienvenido: Guerrero",
      "explanation": "String permite recibir texto como parámetro y se envía con comillas dobles al invocarlo."
    },
    {
      "id": "p_11_7_fill",
      "bossLevel": 11,
      "type": "fill_blank",
      "title": "Modificadores de Método Utilitario",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "Indica los modificadores para que la función sea accesible públicamente y pertenezca a la clase sin requerir instanciarla.",
      "template": "public class Main {\n    {{blank_0}} {{blank_1}} void invocarLuz() {\n        System.out.println(\"Luz Purificadora\");\n    }\n    public static void main(String[] args) {\n        invocarLuz();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "acceso",
          "validAnswers": [
            "public"
          ],
          "hint": "Modificador de máxima visibilidad"
        },
        {
          "id": "blank_1",
          "placeholder": "ámbito",
          "validAnswers": [
            "static"
          ],
          "hint": "Modificador que liga el método a la clase"
        }
      ],
      "solutionAnswers": [
        "public",
        "static"
      ],
      "expectedOutput": "Luz Purificadora",
      "explanation": "'public static void' es la cabecera estándar para métodos utilitarios de clase."
    },
    {
      "id": "p_11_8_drag",
      "bossLevel": 11,
      "type": "drag_drop",
      "title": "Firma e Invocación de Función Aritmética",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "Ubica el modificador estático, el tipo de retorno de la suma y el identificador de la función en su llamada.",
      "template": "public class Main {\n    public {{slot_0}} {{slot_1}} sumar(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Suma: \" + {{slot_2}}(10, 15));\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "static"
        },
        {
          "id": "slot_1",
          "expectedToken": "int"
        },
        {
          "id": "slot_2",
          "expectedToken": "sumar"
        }
      ],
      "tokens": [
        "static",
        "int",
        "sumar",
        "void",
        "calc"
      ],
      "expectedOutput": "Suma: 25",
      "explanation": "La función estática devuelve un int y se invoca mediante su identificador 'sumar(10, 15)'."
    },
    {
      "id": "p_11_9_drag",
      "bossLevel": 11,
      "type": "drag_drop",
      "title": "Parámetro Dual Mixto",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "Coloca los tipos de datos para un parámetro numérico y un parámetro de texto en el método de registro.",
      "template": "public class Main {\n    public static void registrar({{slot_0}} puntos, {{slot_1}} jugador) {\n        System.out.println(jugador + \": \" + puntos);\n    }\n    public static void main(String[] args) {\n        registrar(50, \"Mago\");\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int"
        },
        {
          "id": "slot_1",
          "expectedToken": "String"
        }
      ],
      "tokens": [
        "int",
        "String",
        "boolean",
        "char"
      ],
      "expectedOutput": "Mago: 50",
      "explanation": "Un método puede recibir parámetros de múltiples tipos diferentes en su lista de argumentos."
    },
    {
      "id": "p_11_10_drag",
      "bossLevel": 11,
      "type": "drag_drop",
      "title": "Método de Acción sin Retorno",
      "theme": "Métodos estáticos, definición y parámetros",
      "instruction": "Organiza los componentes de la cabecera del método para ejecutar una orden en el campo de batalla.",
      "template": "public class Main {\n    public static {{slot_0}} lanzarRayo({{slot_1}} potencia) {\n        System.out.println(\"Rayo Potencia: \" + potencia);\n    }\n    public static void main(String[] args) {\n        lanzarRayo(100);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "void"
        },
        {
          "id": "slot_1",
          "expectedToken": "int"
        }
      ],
      "tokens": [
        "void",
        "int",
        "return",
        "String"
      ],
      "expectedOutput": "Rayo Potencia: 100",
      "explanation": "'void' indica ausencia de retorno y 'int potencia' recibe el nivel numérico de fuerza."
    }
  ],
  "12": [
    {
      "id": "p_12_1_fix",
      "bossLevel": 12,
      "type": "fix_code",
      "title": "Retorno Faltante en Método Tipado",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "El método declara un tipo numérico como salida pero carece de la sentencia para devolver el dato. Agrega la sentencia de retorno correspondiente.",
      "initialCode": "public class Main {\n    public static int obtenerVida() {\n        int vida = 100;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Vida Valquiria: \" + obtenerVida());\n    }\n}",
      "solutionCode": "public class Main {\n    public static int obtenerVida() {\n        int vida = 100;\n        return vida;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Vida Valquiria: \" + obtenerVida());\n    }\n}",
      "expectedOutput": "Vida Valquiria: 100",
      "requiredTokens": [
        "return vida;"
      ],
      "explanation": "Si un método declara un tipo distinto de void, debe devolver un valor compatible con 'return'."
    },
    {
      "id": "p_12_2_fix",
      "bossLevel": 12,
      "type": "fix_code",
      "title": "Tipo de Retorno Incompatible",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "El método promete devolver un valor lógico verdadero o falso, pero intenta retornar una cadena. Modifica el retorno para que devuelva el valor booleano adecuado.",
      "initialCode": "public class Main {\n    public static boolean estaArmado() {\n        return \"si\";\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Listo: \" + estaArmado());\n    }\n}",
      "solutionCode": "public class Main {\n    public static boolean estaArmado() {\n        return true;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Listo: \" + estaArmado());\n    }\n}",
      "expectedOutput": "Listo: true",
      "requiredTokens": [
        "return true;"
      ],
      "explanation": "El valor devuelto debe coincidir exactamente con el tipo de retorno especificado en la firma (boolean)."
    },
    {
      "id": "p_12_3_fix",
      "bossLevel": 12,
      "type": "fix_code",
      "title": "Instrucción Inalcanzable tras Return",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "El compilador detecta código inalcanzable porque se colocó una sentencia después de haber devuelto el control. Mueve la impresión antes de la sentencia de retorno.",
      "initialCode": "public class Main {\n    public static int calcularOro() {\n        return 50;\n        System.out.println(\"Calculando...\");\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Oro: \" + calcularOro());\n    }\n}",
      "solutionCode": "public class Main {\n    public static int calcularOro() {\n        System.out.println(\"Calculando...\");\n        return 50;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Oro: \" + calcularOro());\n    }\n}",
      "expectedOutput": "Calculando...\nOro: 50",
      "requiredTokens": [
        "return 50;"
      ],
      "explanation": "Cualquier instrucción colocada tras un 'return' incondicional es inalcanzable y genera error de compilación."
    },
    {
      "id": "p_12_4_fix",
      "bossLevel": 12,
      "type": "fix_code",
      "title": "Asignación de Método Procedural sin Retorno",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "Se intenta almacenar en una variable el resultado de un método que fue declarado sin retorno. Modifica la cabecera del método para que retorne un entero.",
      "initialCode": "public class Main {\n    public static void consultarAtaque() {\n        return 75;\n    }\n    public static void main(String[] args) {\n        int atk = consultarAtaque();\n        System.out.println(\"Ataque: \" + atk);\n    }\n}",
      "solutionCode": "public class Main {\n    public static int consultarAtaque() {\n        return 75;\n    }\n    public static void main(String[] args) {\n        int atk = consultarAtaque();\n        System.out.println(\"Ataque: \" + atk);\n    }\n}",
      "expectedOutput": "Ataque: 75",
      "requiredTokens": [
        "public static int consultarAtaque()"
      ],
      "explanation": "Un método que devuelve un valor numérico debe declarar 'int' en su cabecera en lugar de 'void'."
    },
    {
      "id": "p_12_5_fill",
      "bossLevel": 12,
      "type": "fill_blank",
      "title": "Retorno de Cálculo Matemático",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "Especifica el tipo de retorno numérico entero y escribe la palabra reservada para devolver el resultado de la operación.",
      "template": "public class Main {\n    public static {{blank_0}} duplicar(int n) {\n        {{blank_1}} n * 2;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Doble: \" + duplicar(15));\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo de dato devuelto"
        },
        {
          "id": "blank_1",
          "placeholder": "sentencia",
          "validAnswers": [
            "return"
          ],
          "hint": "Palabra clave para emitir el valor de salida"
        }
      ],
      "solutionAnswers": [
        "int",
        "return"
      ],
      "expectedOutput": "Doble: 30",
      "explanation": "La función declara retorno 'int' y devuelve el cálculo mediante 'return n * 2;'."
    },
    {
      "id": "p_12_6_fill",
      "bossLevel": 12,
      "type": "fill_blank",
      "title": "Retorno Booleano de Validación",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "Declara el tipo de respuesta lógica del método y devuelve el valor que confirma la condición.",
      "template": "public class Main {\n    public static {{blank_0}} esPoderoso(int poder) {\n        if (poder >= 50) {\n            {{blank_1}} true;\n        }\n        return false;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Poderoso: \" + esPoderoso(80));\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "boolean"
          ],
          "hint": "Tipo de dato booleano"
        },
        {
          "id": "blank_1",
          "placeholder": "retorno",
          "validAnswers": [
            "return"
          ],
          "hint": "Sentencia de retorno"
        }
      ],
      "solutionAnswers": [
        "boolean",
        "return"
      ],
      "expectedOutput": "Poderoso: true",
      "explanation": "Un método booleano devuelve 'true' o 'false' mediante sentencias return."
    },
    {
      "id": "p_12_7_fill",
      "bossLevel": 12,
      "type": "fill_blank",
      "title": "Retorno de Precisión Decimal",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "Define el tipo para devolver un porcentaje decimal y completa la sentencia de devolución.",
      "template": "public class Main {\n    public static {{blank_0}} obtenerTasa() {\n        {{blank_1}} 0.75;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Tasa: \" + obtenerTasa());\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "double"
          ],
          "hint": "Tipo primitivo de punto flotante"
        },
        {
          "id": "blank_1",
          "placeholder": "sentencia",
          "validAnswers": [
            "return"
          ],
          "hint": "Palabra para devolver el valor"
        }
      ],
      "solutionAnswers": [
        "double",
        "return"
      ],
      "expectedOutput": "Tasa: 0.75",
      "explanation": "double permite que el método retorne cantidades no enteras con precisión decimal."
    },
    {
      "id": "p_12_8_drag",
      "bossLevel": 12,
      "type": "drag_drop",
      "title": "Estructura de Función con Retorno Entero",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "Ubica el tipo de retorno, la sentencia de salida y el operador que combina la base con la bonificación.",
      "template": "public class Main {\n    public static {{slot_0}} bonoTotal(int base, int extra) {\n        {{slot_1}} base {{slot_2}} extra;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Total: \" + bonoTotal(10, 5));\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int"
        },
        {
          "id": "slot_1",
          "expectedToken": "return"
        },
        {
          "id": "slot_2",
          "expectedToken": "+"
        }
      ],
      "tokens": [
        "int",
        "return",
        "+",
        "void",
        "*"
      ],
      "expectedOutput": "Total: 15",
      "explanation": "public static int define el tipo y return base + extra; entrega la suma."
    },
    {
      "id": "p_12_9_drag",
      "bossLevel": 12,
      "type": "drag_drop",
      "title": "Comprobación Defensiva Booleana",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "Coloca los elementos para que el método verifique si la armadura resiste devolviendo un valor lógico.",
      "template": "public class Main {\n    public static {{slot_0}} resiste(int escudo) {\n        {{slot_1}} escudo >= 50;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Resiste: \" + resiste(60));\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "boolean"
        },
        {
          "id": "slot_1",
          "expectedToken": "return"
        }
      ],
      "tokens": [
        "boolean",
        "return",
        "int",
        "void"
      ],
      "expectedOutput": "Resiste: true",
      "explanation": "El método retorna directamente el resultado de la expresión lógica evaluada."
    },
    {
      "id": "p_12_10_drag",
      "bossLevel": 12,
      "type": "drag_drop",
      "title": "Retorno de Multiplicación de Daño",
      "theme": "Métodos con retorno de valor (return)",
      "instruction": "Organiza los componentes para devolver el producto entre la fuerza y el factor de golpe.",
      "template": "public class Main {\n    public static int golpeCritico(int f, int factor) {\n        {{slot_0}} f {{slot_1}} factor;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Critico: \" + golpeCritico(20, 2));\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "return"
        },
        {
          "id": "slot_1",
          "expectedToken": "*"
        }
      ],
      "tokens": [
        "return",
        "*",
        "+",
        "void"
      ],
      "expectedOutput": "Critico: 40",
      "explanation": "'return f * factor;' entrega el resultado calculado al punto de invocación."
    }
  ],
  "13": [
    {
      "id": "p_13_1_fix",
      "bossLevel": 13,
      "type": "fix_code",
      "title": "Acceso a Variable Fuera de su Bloque",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "La variable fue declarada dentro de las llaves del condicional y no es visible en el exterior. Declara la variable antes del bloque condicional.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        boolean activo = true;\n        if (activo) {\n            int mana = 100;\n        }\n        System.out.println(\"Mana Final: \" + mana);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int mana = 0;\n        boolean activo = true;\n        if (activo) {\n            mana = 100;\n        }\n        System.out.println(\"Mana Final: \" + mana);\n    }\n}",
      "expectedOutput": "Mana Final: 100",
      "requiredTokens": [
        "int mana = 0;"
      ],
      "explanation": "Las variables tienen ámbito de bloque ({ }); para usarlas fuera del bloque deben declararse en el ámbito padre."
    },
    {
      "id": "p_13_2_fix",
      "bossLevel": 13,
      "type": "fix_code",
      "title": "Variable de Control de Bucle no Visible",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "La variable de conteo del for se destruye al terminar el bucle. Declárala antes de la cabecera para poder imprimir su valor final.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        for (int paso = 1; paso <= 3; paso++) {\n        }\n        System.out.println(\"Pasos Dados: \" + paso);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int paso = 1;\n        for (; paso <= 3; paso++) {\n        }\n        System.out.println(\"Pasos Dados: \" + paso);\n    }\n}",
      "expectedOutput": "Pasos Dados: 4",
      "requiredTokens": [
        "int paso = 1;"
      ],
      "explanation": "Si 'paso' se declara dentro de 'for (int paso ...)', su ciclo de vida queda restringido únicamente al interior del bucle."
    },
    {
      "id": "p_13_3_fix",
      "bossLevel": 13,
      "type": "fix_code",
      "title": "Redeclaración de Variable en el Mismo Ámbito",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "Se intentó redeclarar la misma variable con su tipo dos veces en el mismo método. Reasigna el valor sin volver a colocar el tipo de dato.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int energia = 50;\n        int energia = 90;\n        System.out.println(\"Energia: \" + energia);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int energia = 50;\n        energia = 90;\n        System.out.println(\"Energia: \" + energia);\n    }\n}",
      "expectedOutput": "Energia: 90",
      "requiredTokens": [
        "energia = 90;"
      ],
      "forbiddenTokens": [
        "int energia = 90;"
      ],
      "explanation": "No es legal declarar dos variables locales con el mismo identificador dentro del mismo bloque de código."
    },
    {
      "id": "p_13_4_fix",
      "bossLevel": 13,
      "type": "fix_code",
      "title": "Reinicio Indebido de Acumulador",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "La variable total se reinicializa en cada vuelta porque fue declarada dentro del bucle. Muévela fuera del bucle para preservar el acumulado.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            int total = 0;\n            total += 10;\n            if (i == 2) System.out.println(\"Total: \" + total);\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 2; i++) {\n            total += 10;\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
      "expectedOutput": "Total: 20",
      "requiredTokens": [
        "int total = 0;"
      ],
      "explanation": "Las variables locales creadas dentro de un bucle se destruyen y reinician en cada ciclo."
    },
    {
      "id": "p_13_5_fill",
      "bossLevel": 13,
      "type": "fill_blank",
      "title": "Extensión de Ámbito de Bloque",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "Declara la variable fuera del bloque condicional para que mantenga su visibilidad hasta la sentencia de salida.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} rango = 1;\n        if (true) {\n            rango = {{blank_1}};\n        }\n        System.out.println(\"Rango Definitivo: \" + rango);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo entero de la variable"
        },
        {
          "id": "blank_1",
          "placeholder": "valor",
          "validAnswers": [
            "5"
          ],
          "hint": "Valor numérico asignado"
        }
      ],
      "solutionAnswers": [
        "int",
        "5"
      ],
      "expectedOutput": "Rango Definitivo: 5",
      "explanation": "Al declarar 'int rango' en el método, las modificaciones dentro del 'if' se conservan al salir del bloque."
    },
    {
      "id": "p_13_6_fill",
      "bossLevel": 13,
      "type": "fill_blank",
      "title": "Ámbito de Parámetro como Variable Local",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "Acepta el parámetro en el método y reasigna su valor antes de devolverlo.",
      "template": "public class Main {\n    public static int ajustar({{blank_0}} val) {\n        val = val + 10;\n        {{blank_1}} val;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Ajustado: \" + ajustar(40));\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo de dato del parámetro"
        },
        {
          "id": "blank_1",
          "placeholder": "retorno",
          "validAnswers": [
            "return"
          ],
          "hint": "Sentencia de retorno"
        }
      ],
      "solutionAnswers": [
        "int",
        "return"
      ],
      "expectedOutput": "Ajustado: 50",
      "explanation": "Los parámetros se comportan como variables locales cuyo ámbito abarca todo el cuerpo del método."
    },
    {
      "id": "p_13_7_fill",
      "bossLevel": 13,
      "type": "fill_blank",
      "title": "Ámbito de Variable Booleana Externa",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "Declara la bandera en el ámbito superior y actualízala con valor de verdad si se supera el umbral.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} superado = false;\n        int puntos = 120;\n        if (puntos > 100) {\n            superado = {{blank_1}};\n        }\n        System.out.println(\"Estado: \" + superado);\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "boolean"
          ],
          "hint": "Tipo primitivo booleano"
        },
        {
          "id": "blank_1",
          "placeholder": "valor",
          "validAnswers": [
            "true"
          ],
          "hint": "Valor afirmativo verdadero"
        }
      ],
      "solutionAnswers": [
        "boolean",
        "true"
      ],
      "expectedOutput": "Estado: true",
      "explanation": "Declarar la bandera antes del if permite registrar el resultado y leerlo posteriormente."
    },
    {
      "id": "p_13_8_drag",
      "bossLevel": 13,
      "type": "drag_drop",
      "title": "Visibilidad de Variable Acumuladora",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "Coloca la declaración del total antes del bucle para que el acumulador sobreviva a la iteración.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} oro = {{slot_1}};\n        for (int i = 0; i < 2; i++) {\n            oro += 15;\n        }\n        System.out.println(\"Oro: \" + oro);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int"
        },
        {
          "id": "slot_1",
          "expectedToken": "0"
        }
      ],
      "tokens": [
        "int",
        "0",
        "void",
        "true"
      ],
      "expectedOutput": "Oro: 30",
      "explanation": "La variable 'int oro = 0;' al declararse fuera del for conserva los incrementos de cada vuelta."
    },
    {
      "id": "p_13_9_drag",
      "bossLevel": 13,
      "type": "drag_drop",
      "title": "Ámbito de Bloque Condicional",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "Ubica el tipo de variable previo y la reasignación dentro del bloque protegido.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} clave = 0;\n        if (true) {\n            clave = {{slot_1}};\n        }\n        System.out.println(\"Clave: \" + clave);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int"
        },
        {
          "id": "slot_1",
          "expectedToken": "77"
        }
      ],
      "tokens": [
        "int",
        "77",
        "String",
        "boolean"
      ],
      "expectedOutput": "Clave: 77",
      "explanation": "Las llaves del if pueden modificar variables del ámbito que las contiene."
    },
    {
      "id": "p_13_10_drag",
      "bossLevel": 13,
      "type": "drag_drop",
      "title": "Retorno de Variable Local del Método",
      "theme": "Ámbito de variables (scope local y de bloque)",
      "instruction": "Organiza la variable local y la sentencia para devolverla al invocador.",
      "template": "public class Main {\n    public static int conseguirFuerza() {\n        {{slot_0}} fuerza = 99;\n        {{slot_1}} fuerza;\n    }\n    public static void main(String[] args) {\n        System.out.println(\"Fuerza: \" + conseguirFuerza());\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "int"
        },
        {
          "id": "slot_1",
          "expectedToken": "return"
        }
      ],
      "tokens": [
        "int",
        "return",
        "void",
        "static"
      ],
      "expectedOutput": "Fuerza: 99",
      "explanation": "La variable local 'fuerza' existe durante la llamada y su valor se transfiere con 'return'."
    }
  ],
  "14": [
    {
      "id": "p_14_1_fix",
      "bossLevel": 14,
      "type": "fix_code",
      "title": "Operador de Instanciación Omitido",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "En Java la creación de una nueva instancia de clase requiere una palabra clave de asignación de memoria. Añade el operador de instanciación.",
      "initialCode": "class Heroe {\n    public Heroe() {\n        System.out.println(\"Héroe Invocado\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Heroe h = Heroe();\n    }\n}",
      "solutionCode": "class Heroe {\n    public Heroe() {\n        System.out.println(\"Héroe Invocado\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Heroe h = new Heroe();\n    }\n}",
      "expectedOutput": "Héroe Invocado",
      "requiredTokens": [
        "new Heroe()"
      ],
      "explanation": "El operador 'new' reserva memoria e invoca al constructor para instanciar un objeto."
    },
    {
      "id": "p_14_2_fix",
      "bossLevel": 14,
      "type": "fix_code",
      "title": "Tipo de Retorno Indebido en Constructor",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "Un constructor no debe declarar ningún tipo de retorno, ni siquiera void. Elimina el tipo de retorno en la cabecera del constructor.",
      "initialCode": "class Golem {\n    public void Golem() {\n        System.out.println(\"Gólem Despierto\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Golem g = new Golem();\n    }\n}",
      "solutionCode": "class Golem {\n    public Golem() {\n        System.out.println(\"Gólem Despierto\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Golem g = new Golem();\n    }\n}",
      "expectedOutput": "Gólem Despierto",
      "requiredTokens": [
        "public Golem()"
      ],
      "forbiddenTokens": [
        "public void Golem()"
      ],
      "explanation": "Los constructores llevan exactamente el mismo nombre de la clase y no admiten tipo de retorno (ni 'void')."
    },
    {
      "id": "p_14_3_fix",
      "bossLevel": 14,
      "type": "fix_code",
      "title": "Coincidencia de Nombre en Constructor",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "El método constructor tiene un nombre diferente al de la clase y no se ejecuta durante la instanciación. Ajusta su nombre para que coincida exactamente con la clase.",
      "initialCode": "class Reliquia {\n    public Crear() {\n        System.out.println(\"Reliquia Forjada\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Reliquia r = new Reliquia();\n    }\n}",
      "solutionCode": "class Reliquia {\n    public Reliquia() {\n        System.out.println(\"Reliquia Forjada\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Reliquia r = new Reliquia();\n    }\n}",
      "expectedOutput": "Reliquia Forjada",
      "requiredTokens": [
        "public Reliquia()"
      ],
      "explanation": "El constructor de una clase debe llamarse exactamente igual que la clase (con idéntica capitalización)."
    },
    {
      "id": "p_14_4_fix",
      "bossLevel": 14,
      "type": "fix_code",
      "title": "Llamada con Argumentos Inexistentes",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "La clase solo define el constructor sin parámetros pero se le intentó enviar un texto al instanciar. Llama al constructor vacío sin argumentos.",
      "initialCode": "class EscudoMagico {\n    public EscudoMagico() {\n        System.out.println(\"Escudo Listo\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        EscudoMagico e = new EscudoMagico(\"Fuego\");\n    }\n}",
      "solutionCode": "class EscudoMagico {\n    public EscudoMagico() {\n        System.out.println(\"Escudo Listo\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        EscudoMagico e = new EscudoMagico();\n    }\n}",
      "expectedOutput": "Escudo Listo",
      "requiredTokens": [
        "new EscudoMagico()"
      ],
      "forbiddenTokens": [
        "new EscudoMagico(\"Fuego\")"
      ],
      "explanation": "Para invocar un constructor sin parámetros se deben usar los paréntesis vacíos '()'."
    },
    {
      "id": "p_14_5_fill",
      "bossLevel": 14,
      "type": "fill_blank",
      "title": "Declaración de Clase e Instanciación",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "Escribe la palabra clave para definir la entidad y el operador para crear el objeto en memoria.",
      "template": "{{blank_0}} Torre {\n    public Torre() {\n        System.out.println(\"Torre en Pie\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Torre t = {{blank_1}} Torre();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "estructura",
          "validAnswers": [
            "class"
          ],
          "hint": "Palabra para definir una clase"
        },
        {
          "id": "blank_1",
          "placeholder": "operador",
          "validAnswers": [
            "new"
          ],
          "hint": "Operador de creación de objeto"
        }
      ],
      "solutionAnswers": [
        "class",
        "new"
      ],
      "expectedOutput": "Torre en Pie",
      "explanation": "'class' declara la plantilla y 'new' instancia el objeto llamando a su constructor."
    },
    {
      "id": "p_14_6_fill",
      "bossLevel": 14,
      "type": "fill_blank",
      "title": "Cabecera de Constructor",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "Completa el modificador de acceso y el nombre que debe llevar el constructor de la entidad.",
      "template": "class Cristal {\n    {{blank_0}} {{blank_1}}() {\n        System.out.println(\"Cristal Encendido\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Cristal c = new Cristal();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "acceso",
          "validAnswers": [
            "public"
          ],
          "hint": "Modificador accesible para instanciar"
        },
        {
          "id": "blank_1",
          "placeholder": "nombre",
          "validAnswers": [
            "Cristal"
          ],
          "hint": "Mismo nombre de la clase"
        }
      ],
      "solutionAnswers": [
        "public",
        "Cristal"
      ],
      "expectedOutput": "Cristal Encendido",
      "explanation": "Un constructor público se declara con 'public NombreClase()'."
    },
    {
      "id": "p_14_7_fill",
      "bossLevel": 14,
      "type": "fill_blank",
      "title": "Tipo de Referencia e Instancia",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "Indica el nombre de la clase como tipo de la variable e invoca el constructor.",
      "template": "class Orbe {\n    public Orbe() {\n        System.out.println(\"Orbe Radiante\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        {{blank_0}} o = new {{blank_1}}();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "Orbe"
          ],
          "hint": "Nombre de la clase que actúa como tipo"
        },
        {
          "id": "blank_1",
          "placeholder": "constructor",
          "validAnswers": [
            "Orbe"
          ],
          "hint": "Nombre del constructor invocado"
        }
      ],
      "solutionAnswers": [
        "Orbe",
        "Orbe"
      ],
      "expectedOutput": "Orbe Radiante",
      "explanation": "En Java la clase actúa como tipo de la variable de referencia: 'Clase obj = new Clase()'."
    },
    {
      "id": "p_14_8_drag",
      "bossLevel": 14,
      "type": "drag_drop",
      "title": "Sintaxis de Creación de Instancia",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "Coloca el tipo de la clase y el operador de instanciación en la sentencia.",
      "template": "class Objeto {\n    public Objeto() {\n        System.out.println(\"Entidad lista\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        {{slot_0}} obj = {{slot_1}} Objeto();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "Objeto"
        },
        {
          "id": "slot_1",
          "expectedToken": "new"
        }
      ],
      "tokens": [
        "Objeto",
        "new",
        "class",
        "void"
      ],
      "expectedOutput": "Entidad lista",
      "explanation": "Clase variable = new Clase(); es la sintaxis de creación de objetos en Java."
    },
    {
      "id": "p_14_9_drag",
      "bossLevel": 14,
      "type": "drag_drop",
      "title": "Definición de Clase y Constructor",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "Ubica la palabra para declarar la clase y el modificador del constructor.",
      "template": "{{slot_0}} Arma {\n    {{slot_1}} Arma() {\n        System.out.println(\"Arma Equipada\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Arma a = new Arma();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "class"
        },
        {
          "id": "slot_1",
          "expectedToken": "public"
        }
      ],
      "tokens": [
        "class",
        "public",
        "void",
        "static"
      ],
      "expectedOutput": "Arma Equipada",
      "explanation": "'class Arma' define la clase y 'public Arma()' su método constructor."
    },
    {
      "id": "p_14_10_drag",
      "bossLevel": 14,
      "type": "drag_drop",
      "title": "Invocación a Constructor por Defecto",
      "theme": "Constructores, instanciación y operador new",
      "instruction": "Organiza la sentencia de creación asignando el nuevo objeto a la referencia.",
      "template": "class Espiritu {\n    public Espiritu() {\n        System.out.println(\"Espíritu Presente\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Espiritu e = {{slot_0}} {{slot_1}}();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "new"
        },
        {
          "id": "slot_1",
          "expectedToken": "Espiritu"
        }
      ],
      "tokens": [
        "new",
        "Espiritu",
        "class",
        "void"
      ],
      "expectedOutput": "Espíritu Presente",
      "explanation": "'new Espiritu()' solicita memoria y dispara el constructor de la clase."
    }
  ],
  "15": [
    {
      "id": "p_15_1_fix",
      "bossLevel": 15,
      "type": "fix_code",
      "title": "Acceso a Campo Encapsulado",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "El atributo fue declarado con visibilidad privada y no puede leerse directamente mediante el operador punto. Reemplaza el acceso directo por la llamada al método getter.",
      "initialCode": "class Paladin {\n    private int vida = 100;\n    public int getVida() {\n        return vida;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Paladin p = new Paladin();\n        System.out.println(\"Vida Segura: \" + p.vida);\n    }\n}",
      "solutionCode": "class Paladin {\n    private int vida = 100;\n    public int getVida() {\n        return vida;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Paladin p = new Paladin();\n        System.out.println(\"Vida Segura: \" + p.getVida());\n    }\n}",
      "expectedOutput": "Vida Segura: 100",
      "requiredTokens": [
        "p.getVida()"
      ],
      "forbiddenTokens": [
        "p.vida"
      ],
      "explanation": "Los campos 'private' solo se consultan desde el exterior mediante métodos de acceso públicos ('getters')."
    },
    {
      "id": "p_15_2_fix",
      "bossLevel": 15,
      "type": "fix_code",
      "title": "Retorno en Método Accesor",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "El método accesor no está entregando el valor del campo interno de la clase. Agrega la sentencia de retorno del atributo.",
      "initialCode": "class Escudo {\n    private int defensa = 50;\n    public int getDefensa() {\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Escudo e = new Escudo();\n        System.out.println(\"Defensa: \" + e.getDefensa());\n    }\n}",
      "solutionCode": "class Escudo {\n    private int defensa = 50;\n    public int getDefensa() {\n        return defensa;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Escudo e = new Escudo();\n        System.out.println(\"Defensa: \" + e.getDefensa());\n    }\n}",
      "expectedOutput": "Defensa: 50",
      "requiredTokens": [
        "return defensa;"
      ],
      "explanation": "Un getter estándar devuelve el valor del campo privado encapsulado con 'return campo;'."
    },
    {
      "id": "p_15_3_fix",
      "bossLevel": 15,
      "type": "fix_code",
      "title": "Resolución de Ambigüedad con This",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "En el método modificador el parámetro oculta el atributo de clase al tener el mismo nombre. Usa la referencia a la instancia actual para asignar el nuevo valor.",
      "initialCode": "class Heroe {\n    private int nivel;\n    public void setNivel(int nivel) {\n        nivel = nivel;\n    }\n    public int getNivel() {\n        return nivel;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Heroe h = new Heroe();\n        h.setNivel(10);\n        System.out.println(\"Nivel: \" + h.getNivel());\n    }\n}",
      "solutionCode": "class Heroe {\n    private int nivel;\n    public void setNivel(int nivel) {\n        this.nivel = nivel;\n    }\n    public int getNivel() {\n        return nivel;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Heroe h = new Heroe();\n        h.setNivel(10);\n        System.out.println(\"Nivel: \" + h.getNivel());\n    }\n}",
      "expectedOutput": "Nivel: 10",
      "requiredTokens": [
        "this.nivel = nivel;"
      ],
      "explanation": "'this.nivel' se refiere explícitamente al atributo de la instancia diferenciándolo del parámetro local 'nivel'."
    },
    {
      "id": "p_15_4_fix",
      "bossLevel": 15,
      "type": "fix_code",
      "title": "Encapsulamiento de Atributo Expuesto",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "El atributo fue declarado con acceso público rompiendo el principio de encapsulamiento. Cambia el modificador del atributo para proteger su visibilidad.",
      "initialCode": "class Cofre {\n    public int oro = 999;\n    public int getOro() {\n        return oro;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Cofre c = new Cofre();\n        System.out.println(\"Oro Seguro: \" + c.getOro());\n    }\n}",
      "solutionCode": "class Cofre {\n    private int oro = 999;\n    public int getOro() {\n        return oro;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Cofre c = new Cofre();\n        System.out.println(\"Oro Seguro: \" + c.getOro());\n    }\n}",
      "expectedOutput": "Oro Seguro: 999",
      "requiredTokens": [
        "private int oro = 999;"
      ],
      "forbiddenTokens": [
        "public int oro = 999;"
      ],
      "explanation": "El encapsulamiento exige que los atributos internos sean 'private' y se accedan a través de métodos."
    },
    {
      "id": "p_15_5_fill",
      "bossLevel": 15,
      "type": "fill_blank",
      "title": "Modificadores de Atributo y Accesor",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "Indica el modificador que oculta el campo dentro de la clase y el modificador que expone el método de consulta.",
      "template": "class Armadura {\n    {{blank_0}} int defensa = 50;\n    {{blank_1}} int getDefensa() {\n        return defensa;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Armadura a = new Armadura();\n        System.out.println(\"Defensa: \" + a.getDefensa());\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "modificador",
          "validAnswers": [
            "private"
          ],
          "hint": "Visibilidad restringida a la propia clase"
        },
        {
          "id": "blank_1",
          "placeholder": "modificador",
          "validAnswers": [
            "public"
          ],
          "hint": "Visibilidad accesible desde cualquier lugar"
        }
      ],
      "solutionAnswers": [
        "private",
        "public"
      ],
      "expectedOutput": "Defensa: 50",
      "explanation": "Los campos se resguardan con 'private' y los métodos accesores se publican con 'public'."
    },
    {
      "id": "p_15_6_fill",
      "bossLevel": 15,
      "type": "fill_blank",
      "title": "Método Modificador Setter",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "Usa la referencia a la instancia para asignar el nuevo valor de maná al atributo.",
      "template": "class Mago {\n    private int mana;\n    public void setMana(int mana) {\n        {{blank_0}}.mana = {{blank_1}};\n    }\n    public int getMana() { return mana; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Mago m = new Mago();\n        m.setMana(80);\n        System.out.println(\"Mana: \" + m.getMana());\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "instancia",
          "validAnswers": [
            "this"
          ],
          "hint": "Palabra clave de referencia al objeto actual"
        },
        {
          "id": "blank_1",
          "placeholder": "parámetro",
          "validAnswers": [
            "mana"
          ],
          "hint": "Nombre de la variable de entrada"
        }
      ],
      "solutionAnswers": [
        "this",
        "mana"
      ],
      "expectedOutput": "Mana: 80",
      "explanation": "'this.mana = mana;' asigna el parámetro entrante al atributo del objeto actual."
    },
    {
      "id": "p_15_7_fill",
      "bossLevel": 15,
      "type": "fill_blank",
      "title": "Retorno en Método Getter",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "Escribe el tipo numérico que entrega el getter y la sentencia de entrega del valor.",
      "template": "class Gema {\n    private int poder = 120;\n    public {{blank_0}} getPoder() {\n        {{blank_1}} poder;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Gema g = new Gema();\n        System.out.println(\"Poder: \" + g.getPoder());\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipo",
          "validAnswers": [
            "int"
          ],
          "hint": "Tipo del dato devuelto"
        },
        {
          "id": "blank_1",
          "placeholder": "sentencia",
          "validAnswers": [
            "return"
          ],
          "hint": "Palabra de devolución"
        }
      ],
      "solutionAnswers": [
        "int",
        "return"
      ],
      "expectedOutput": "Poder: 120",
      "explanation": "El getter expone el campo int mediante la sentencia 'return'."
    },
    {
      "id": "p_15_8_drag",
      "bossLevel": 15,
      "type": "drag_drop",
      "title": "Construcción de un Setter Encapsulado",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "Coloca los modificadores y la referencia calificada para asignar el nivel del jugador.",
      "template": "class Jugador {\n    private int nivel;\n    {{slot_0}} {{slot_1}} setNivel(int nivel) {\n        {{slot_2}} = nivel;\n    }\n    public int getNivel() { return nivel; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Jugador j = new Jugador();\n        j.setNivel(5);\n        System.out.println(\"Nivel: \" + j.getNivel());\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "public"
        },
        {
          "id": "slot_1",
          "expectedToken": "void"
        },
        {
          "id": "slot_2",
          "expectedToken": "this.nivel"
        }
      ],
      "tokens": [
        "public",
        "void",
        "this.nivel",
        "int",
        "static"
      ],
      "expectedOutput": "Nivel: 5",
      "explanation": "public void setNivel(int nivel) { this.nivel = nivel; } es el estándar para un setter."
    },
    {
      "id": "p_15_9_drag",
      "bossLevel": 15,
      "type": "drag_drop",
      "title": "Encapsulación de Atributo y Getter",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "Ubica el modificador de restricción, el tipo de dato y la sentencia de entrega.",
      "template": "class Pocima {\n    {{slot_0}} {{slot_1}} curacion = 30;\n    public int getCuracion() {\n        {{slot_2}} curacion;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Pocima p = new Pocima();\n        System.out.println(\"Cura: \" + p.getCuracion());\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "private"
        },
        {
          "id": "slot_1",
          "expectedToken": "int"
        },
        {
          "id": "slot_2",
          "expectedToken": "return"
        }
      ],
      "tokens": [
        "private",
        "int",
        "return",
        "public",
        "void"
      ],
      "expectedOutput": "Cura: 30",
      "explanation": "private int resguarda el atributo y return entrega el valor en el getter."
    },
    {
      "id": "p_15_10_drag",
      "bossLevel": 15,
      "type": "drag_drop",
      "title": "Invocación a Métodos Accesores",
      "theme": "Modificadores private, public y encapsulamiento",
      "instruction": "Organiza los nombres de los métodos para modificar y consultar el rango de la entidad.",
      "template": "class Rango {\n    private int val;\n    public void setVal(int v) { this.val = v; }\n    public int getVal() { return val; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Rango r = new Rango();\n        r.{{slot_0}}(9);\n        System.out.println(\"Rango: \" + r.{{slot_1}}());\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "setVal"
        },
        {
          "id": "slot_1",
          "expectedToken": "getVal"
        }
      ],
      "tokens": [
        "setVal",
        "getVal",
        "val",
        "this"
      ],
      "expectedOutput": "Rango: 9",
      "explanation": "Se altera el estado con setVal(...) y se recupera con getVal()."
    }
  ],
  "16": [
    {
      "id": "p_16_1_fix",
      "bossLevel": 16,
      "type": "fix_code",
      "title": "Herencia de Clase Base Omitida",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "La subclase intenta invocar un método de la entidad base sin haber establecido la relación de herencia. Declara que la clase hija extiende a la clase padre.",
      "initialCode": "class Personaje {\n    public void atacar() {\n        System.out.println(\"¡Ataque Feroz!\");\n    }\n}\nclass Guerrero {\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guerrero g = new Guerrero();\n        g.atacar();\n    }\n}",
      "solutionCode": "class Personaje {\n    public void atacar() {\n        System.out.println(\"¡Ataque Feroz!\");\n    }\n}\nclass Guerrero extends Personaje {\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guerrero g = new Guerrero();\n        g.atacar();\n    }\n}",
      "expectedOutput": "¡Ataque Feroz!",
      "requiredTokens": [
        "class Guerrero extends Personaje"
      ],
      "explanation": "En Java una clase hereda de otra usando la palabra clave 'extends'."
    },
    {
      "id": "p_16_2_fix",
      "bossLevel": 16,
      "type": "fix_code",
      "title": "Palabra Clave de Herencia Errónea",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "Se utilizó una palabra incorrecta para vincular la clase derivada con la superclase. Emplea la palabra clave reservada de herencia en Java.",
      "initialCode": "class Escudo {\n    public void proteger() {\n        System.out.println(\"Bloqueo Total\");\n    }\n}\nclass EscudoTorre inherits Escudo {\n}\npublic class Main {\n    public static void main(String[] args) {\n        EscudoTorre e = new EscudoTorre();\n        e.proteger();\n    }\n}",
      "solutionCode": "class Escudo {\n    public void proteger() {\n        System.out.println(\"Bloqueo Total\");\n    }\n}\nclass EscudoTorre extends Escudo {\n}\npublic class Main {\n    public static void main(String[] args) {\n        EscudoTorre e = new EscudoTorre();\n        e.proteger();\n    }\n}",
      "expectedOutput": "Bloqueo Total",
      "requiredTokens": [
        "extends Escudo"
      ],
      "forbiddenTokens": [
        "inherits Escudo"
      ],
      "explanation": "Java utiliza exclusivamente la palabra 'extends' para la herencia entre clases."
    },
    {
      "id": "p_16_3_fix",
      "bossLevel": 16,
      "type": "fix_code",
      "title": "Ubicación de la Invocación al Constructor Base",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "La llamada al constructor padre debe ser estrictamente la primera instrucción del constructor hijo. Mueve la delegación a la primera línea.",
      "initialCode": "class Criatura {\n    public Criatura(String n) {\n        System.out.println(\"Criatura: \" + n);\n    }\n}\nclass Dragon extends Criatura {\n    public Dragon() {\n        System.out.println(\"Despertando dragón...\");\n        super(\"Ignis\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dragon d = new Dragon();\n    }\n}",
      "solutionCode": "class Criatura {\n    public Criatura(String n) {\n        System.out.println(\"Criatura: \" + n);\n    }\n}\nclass Dragon extends Criatura {\n    public Dragon() {\n        super(\"Ignis\");\n        System.out.println(\"Despertando dragón...\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dragon d = new Dragon();\n    }\n}",
      "expectedOutput": "Criatura: Ignis\nDespertando dragón...",
      "requiredTokens": [
        "super(\"Ignis\");"
      ],
      "explanation": "La llamada 'super(...)' debe ser obligatoriamente la primera línea en el cuerpo del constructor."
    },
    {
      "id": "p_16_4_fix",
      "bossLevel": 16,
      "type": "fix_code",
      "title": "Delegación de Parámetro hacia Constructor Padre",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "El constructor de la clase base requiere un valor numérico pero la llamada se dejó vacía. Pasa el valor 100 en la invocación hacia la clase padre.",
      "initialCode": "class Soldado {\n    public Soldado(int vida) {\n        System.out.println(\"Vida Inicial: \" + vida);\n    }\n}\nclass Caballero extends Soldado {\n    public Caballero() {\n        super();\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Caballero c = new Caballero();\n    }\n}",
      "solutionCode": "class Soldado {\n    public Soldado(int vida) {\n        System.out.println(\"Vida Inicial: \" + vida);\n    }\n}\nclass Caballero extends Soldado {\n    public Caballero() {\n        super(100);\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Caballero c = new Caballero();\n    }\n}",
      "expectedOutput": "Vida Inicial: 100",
      "requiredTokens": [
        "super(100);"
      ],
      "explanation": "'super(100)' invoca el constructor con parámetros de la superclase satisfaciendo su firma."
    },
    {
      "id": "p_16_5_fill",
      "bossLevel": 16,
      "type": "fill_blank",
      "title": "Herencia y Constructor Padre",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "Indica la palabra clave de extensión de clase y la llamada para activar el constructor de la superclase con el texto especificado.",
      "template": "class Monstruo {\n    public Monstruo(String tipo) {\n        System.out.println(\"Monstruo: \" + tipo);\n    }\n}\nclass Fenix {{blank_0}} Monstruo {\n    public Fenix() {\n        {{blank_1}}(\"Fenix de Fuego\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Fenix f = new Fenix();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "herencia",
          "validAnswers": [
            "extends"
          ],
          "hint": "Palabra para heredar de otra clase"
        },
        {
          "id": "blank_1",
          "placeholder": "padre",
          "validAnswers": [
            "super"
          ],
          "hint": "Palabra para invocar al constructor base"
        }
      ],
      "solutionAnswers": [
        "extends",
        "super"
      ],
      "expectedOutput": "Monstruo: Fenix de Fuego",
      "explanation": "'extends' declara la herencia y 'super(...)' invoca al constructor de la superclase."
    },
    {
      "id": "p_16_6_fill",
      "bossLevel": 16,
      "type": "fill_blank",
      "title": "Extensión de Entidad de Combate",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "Define la relación de herencia entre Mago y Personaje e invoca el método heredado.",
      "template": "class Personaje {\n    public void actuar() {\n        System.out.println(\"Hechizo Lanzado\");\n    }\n}\nclass Mago {{blank_0}} Personaje {\n}\npublic class Main {\n    public static void main(String[] args) {\n        Mago m = new Mago();\n        m.{{blank_1}}();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "relación",
          "validAnswers": [
            "extends"
          ],
          "hint": "Palabra de derivación"
        },
        {
          "id": "blank_1",
          "placeholder": "método",
          "validAnswers": [
            "actuar"
          ],
          "hint": "Nombre del método heredado de la clase padre"
        }
      ],
      "solutionAnswers": [
        "extends",
        "actuar"
      ],
      "expectedOutput": "Hechizo Lanzado",
      "explanation": "La clase derivada hereda y puede ejecutar directamente los métodos públicos de su base."
    },
    {
      "id": "p_16_7_fill",
      "bossLevel": 16,
      "type": "fill_blank",
      "title": "Invocación a Constructor sin Argumentos",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "Escribe la palabra para llamar al constructor por defecto de la clase superior.",
      "template": "class Entidad {\n    public Entidad() {\n        System.out.println(\"Entidad Creada\");\n    }\n}\nclass Titan extends Entidad {\n    public Titan() {\n        {{blank_0}}();\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Titan t = new Titan();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "base",
          "validAnswers": [
            "super"
          ],
          "hint": "Llamada al constructor superior"
        }
      ],
      "solutionAnswers": [
        "super"
      ],
      "expectedOutput": "Entidad Creada",
      "explanation": "'super()' delega la construcción inicial a la clase superior."
    },
    {
      "id": "p_16_8_drag",
      "bossLevel": 16,
      "type": "drag_drop",
      "title": "Jerarquía y Delegación a Super",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "Coloca las palabras reservadas para declarar la clase, vincular la herencia y activar el constructor base.",
      "template": "{{slot_0}} Bestia {\n    public Bestia() { System.out.println(\"Rugido\"); }\n}\nclass Lobo {{slot_1}} Bestia {\n    public Lobo() {\n        {{slot_2}}();\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Lobo l = new Lobo();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "class"
        },
        {
          "id": "slot_1",
          "expectedToken": "extends"
        },
        {
          "id": "slot_2",
          "expectedToken": "super"
        }
      ],
      "tokens": [
        "class",
        "extends",
        "super",
        "this",
        "implements"
      ],
      "expectedOutput": "Rugido",
      "explanation": "class Bestia define la base, extends vincula a Lobo y super() dispara el constructor."
    },
    {
      "id": "p_16_9_drag",
      "bossLevel": 16,
      "type": "drag_drop",
      "title": "Paso de Argumento a Constructor Superior",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "Organiza la relación de herencia y la instrucción para enviar la categoría a la superclase.",
      "template": "class Arma {\n    public Arma(String t) { System.out.println(\"Arma: \" + t); }\n}\nclass Lanza {{slot_0}} Arma {\n    public Lanza() {\n        {{slot_1}}(\"Dorada\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Lanza l = new Lanza();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "extends"
        },
        {
          "id": "slot_1",
          "expectedToken": "super"
        }
      ],
      "tokens": [
        "extends",
        "super",
        "this",
        "implements"
      ],
      "expectedOutput": "Arma: Dorada",
      "explanation": "'extends Arma' hereda la plantilla y 'super(\"Dorada\")' inicializa el estado base."
    },
    {
      "id": "p_16_10_drag",
      "bossLevel": 16,
      "type": "drag_drop",
      "title": "Extensión de Clases y Reutilización",
      "theme": "Herencia con 'extends' y llamada a 'super'",
      "instruction": "Ubica la palabra de herencia y el método heredado en la llamada del objeto hijo.",
      "template": "class Artefacto {\n    public void activar() { System.out.println(\"Artefacto Listo\"); }\n}\nclass Amuleto {{slot_0}} Artefacto {\n}\npublic class Main {\n    public static void main(String[] args) {\n        Amuleto a = new Amuleto();\n        a.{{slot_1}}();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "extends"
        },
        {
          "id": "slot_1",
          "expectedToken": "activar"
        }
      ],
      "tokens": [
        "extends",
        "activar",
        "implements",
        "usar"
      ],
      "expectedOutput": "Artefacto Listo",
      "explanation": "extends otorga acceso a los métodos de la clase base sin tener que reescribirlos."
    }
  ],
  "17": [
    {
      "id": "p_17_1_fix",
      "bossLevel": 17,
      "type": "fix_code",
      "title": "Discrepancia en Nombre de Método Sobrescrito",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "La subclase no está sobreescribiendo el comportamiento porque escribió un nombre diferente al del método base. Haz coincidir el nombre exacto del método.",
      "initialCode": "class Hechizo {\n    public void actuar() {\n        System.out.println(\"Magia Basica\");\n    }\n}\nclass Ilusion extends Hechizo {\n    @Override\n    public void lanzar() {\n        System.out.println(\"Magia Ilusoria\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hechizo h = new Ilusion();\n        h.actuar();\n    }\n}",
      "solutionCode": "class Hechizo {\n    public void actuar() {\n        System.out.println(\"Magia Basica\");\n    }\n}\nclass Ilusion extends Hechizo {\n    @Override\n    public void actuar() {\n        System.out.println(\"Magia Ilusoria\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hechizo h = new Ilusion();\n        h.actuar();\n    }\n}",
      "expectedOutput": "Magia Ilusoria",
      "requiredTokens": [
        "public void actuar()"
      ],
      "explanation": "Para sobreescribir con @Override, la firma (nombre y parámetros) debe coincidir con la de la superclase."
    },
    {
      "id": "p_17_2_fix",
      "bossLevel": 17,
      "type": "fix_code",
      "title": "Anotación de Sobreescritura Mal Escrita",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "La anotación que indica al compilador la sustitución del método contiene un error de ortografía. Escribe correctamente la anotación de sobreescritura.",
      "initialCode": "class Guerrero {\n    public void combatir() {\n        System.out.println(\"Combate Base\");\n    }\n}\nclass Berserker extends Guerrero {\n    @Overide\n    public void combatir() {\n        System.out.println(\"Furia Total\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guerrero g = new Berserker();\n        g.combatir();\n    }\n}",
      "solutionCode": "class Guerrero {\n    public void combatir() {\n        System.out.println(\"Combate Base\");\n    }\n}\nclass Berserker extends Guerrero {\n    @Override\n    public void combatir() {\n        System.out.println(\"Furia Total\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guerrero g = new Berserker();\n        g.combatir();\n    }\n}",
      "expectedOutput": "Furia Total",
      "requiredTokens": [
        "@Override"
      ],
      "explanation": "La anotación estándar en Java es '@Override' con doble 'r'."
    },
    {
      "id": "p_17_3_fix",
      "bossLevel": 17,
      "type": "fix_code",
      "title": "Reducción de Visibilidad en Sobreescritura",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "En Java no se puede reducir la visibilidad de un método al sobreescribirlo (de public a private). Restaura el modificador de visibilidad original.",
      "initialCode": "class Mago {\n    public void encantar() {\n        System.out.println(\"Chispa\");\n    }\n}\nclass Archmago extends Mago {\n    @Override\n    private void encantar() {\n        System.out.println(\"Meteoro\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Mago m = new Archmago();\n        m.encantar();\n    }\n}",
      "solutionCode": "class Mago {\n    public void encantar() {\n        System.out.println(\"Chispa\");\n    }\n}\nclass Archmago extends Mago {\n    @Override\n    public void encantar() {\n        System.out.println(\"Meteoro\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Mago m = new Archmago();\n        m.encantar();\n    }\n}",
      "expectedOutput": "Meteoro",
      "requiredTokens": [
        "public void encantar()"
      ],
      "forbiddenTokens": [
        "private void encantar()"
      ],
      "explanation": "Un método sobreescrito debe tener al menos la misma visibilidad que el método en la clase base (public)."
    },
    {
      "id": "p_17_4_fix",
      "bossLevel": 17,
      "type": "fix_code",
      "title": "Asignación Polimórfica Invertida",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "Se está intentando asignar una instancia de la clase genérica a una referencia especializada. Invierte la asignación para apuntar con la base al objeto concreto.",
      "initialCode": "class Animal {\n    public void emitirSonido() {\n        System.out.println(\"Sonido\");\n    }\n}\nclass Lobo extends Animal {\n    @Override\n    public void emitirSonido() {\n        System.out.println(\"Aullido Lunar\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Lobo a = new Animal();\n        a.emitirSonido();\n    }\n}",
      "solutionCode": "class Animal {\n    public void emitirSonido() {\n        System.out.println(\"Sonido\");\n    }\n}\nclass Lobo extends Animal {\n    @Override\n    public void emitirSonido() {\n        System.out.println(\"Aullido Lunar\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Animal a = new Lobo();\n        a.emitirSonido();\n    }\n}",
      "expectedOutput": "Aullido Lunar",
      "requiredTokens": [
        "Animal a = new Lobo();"
      ],
      "explanation": "El polimorfismo permite que una variable de la superclase (Animal) almacene una instancia de la subclase (Lobo)."
    },
    {
      "id": "p_17_5_fill",
      "bossLevel": 17,
      "type": "fill_blank",
      "title": "Anotación de Sobreescritura y Acceso",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "Coloca la anotación de sobreescritura y el modificador de visibilidad pública del método redefinido.",
      "template": "class Heroe {\n    public void presentarse() { System.out.println(\"Heroe\"); }\n}\nclass Paladin extends Heroe {\n    {{blank_0}}\n    {{blank_1}} void presentarse() {\n        System.out.println(\"Paladin de la Luz\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Heroe h = new Paladin();\n        h.presentarse();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "anotación",
          "validAnswers": [
            "@Override"
          ],
          "hint": "Anotación que valida la sobreescritura"
        },
        {
          "id": "blank_1",
          "placeholder": "acceso",
          "validAnswers": [
            "public"
          ],
          "hint": "Modificador de visibilidad"
        }
      ],
      "solutionAnswers": [
        "@Override",
        "public"
      ],
      "expectedOutput": "Paladin de la Luz",
      "explanation": "@Override le indica explícitamente al compilador que se está redefiniendo el método base."
    },
    {
      "id": "p_17_6_fill",
      "bossLevel": 17,
      "type": "fill_blank",
      "title": "Variable de Tipo Base e Instancia Derivada",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "Declara la variable usando el tipo de la superclase e instánciala con el constructor de la clase concreta.",
      "template": "class Escudo {\n    public void activar() { System.out.println(\"Escudo Base\"); }\n}\nclass EscudoRunico extends Escudo {\n    @Override\n    public void activar() { System.out.println(\"Barrera Rúnica\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        {{blank_0}} e = new {{blank_1}}();\n        e.activar();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipoBase",
          "validAnswers": [
            "Escudo"
          ],
          "hint": "Nombre de la superclase"
        },
        {
          "id": "blank_1",
          "placeholder": "tipoDerivado",
          "validAnswers": [
            "EscudoRunico"
          ],
          "hint": "Nombre de la subclase concreta"
        }
      ],
      "solutionAnswers": [
        "Escudo",
        "EscudoRunico"
      ],
      "expectedOutput": "Barrera Rúnica",
      "explanation": "El despacho dinámico ejecuta la versión del objeto real en memoria ('EscudoRunico')."
    },
    {
      "id": "p_17_7_fill",
      "bossLevel": 17,
      "type": "fill_blank",
      "title": "Sobreescritura de Método de Impacto",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "Inserta la anotación de redefinición y el tipo de retorno nulo.",
      "template": "class Ataque {\n    public void golpear() { System.out.println(\"Golpe\"); }\n}\nclass ImpactoFuerte extends Ataque {\n    {{blank_0}}\n    public {{blank_1}} golpear() {\n        System.out.println(\"Golpe Devastador\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Ataque a = new ImpactoFuerte();\n        a.golpear();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "anotación",
          "validAnswers": [
            "@Override"
          ],
          "hint": "Anotación de sobreescritura"
        },
        {
          "id": "blank_1",
          "placeholder": "retorno",
          "validAnswers": [
            "void"
          ],
          "hint": "Tipo de retorno del método"
        }
      ],
      "solutionAnswers": [
        "@Override",
        "void"
      ],
      "expectedOutput": "Golpe Devastador",
      "explanation": "El método sobreescrito conserva el retorno 'void' y se documenta con '@Override'."
    },
    {
      "id": "p_17_8_drag",
      "bossLevel": 17,
      "type": "drag_drop",
      "title": "Redefinición con Anotación",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "Coloca la anotación de control, el modificador de visibilidad y el tipo de retorno.",
      "template": "class Runa {\n    public void brillar() { System.out.println(\"Luz\"); }\n}\nclass RunaSolar extends Runa {\n    {{slot_0}}\n    {{slot_1}} {{slot_2}} brillar() {\n        System.out.println(\"Luz Solar\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Runa r = new RunaSolar();\n        r.brillar();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "@Override"
        },
        {
          "id": "slot_1",
          "expectedToken": "public"
        },
        {
          "id": "slot_2",
          "expectedToken": "void"
        }
      ],
      "tokens": [
        "@Override",
        "public",
        "void",
        "static",
        "int"
      ],
      "expectedOutput": "Luz Solar",
      "explanation": "@Override public void asegura una sobreescritura válida y comprobada por el compilador."
    },
    {
      "id": "p_17_9_drag",
      "bossLevel": 17,
      "type": "drag_drop",
      "title": "Instanciación y Despacho Polimórfico",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "Ubica el tipo base en la referencia, el operador de memoria y la clase concreta especializada.",
      "template": "class Magia {\n    public void lanzar() { System.out.println(\"Magia simple\"); }\n}\nclass MagiaFuego extends Magia {\n    @Override\n    public void lanzar() { System.out.println(\"Llamarada viva\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        {{slot_0}} m = {{slot_1}} {{slot_2}}();\n        m.lanzar();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "Magia"
        },
        {
          "id": "slot_1",
          "expectedToken": "new"
        },
        {
          "id": "slot_2",
          "expectedToken": "MagiaFuego"
        }
      ],
      "tokens": [
        "Magia",
        "new",
        "MagiaFuego",
        "class",
        "void"
      ],
      "expectedOutput": "Llamarada viva",
      "explanation": "Magia m = new MagiaFuego(); permite invocar polimórficamente la versión de MagiaFuego."
    },
    {
      "id": "p_17_10_drag",
      "bossLevel": 17,
      "type": "drag_drop",
      "title": "Invocación Dinámica de Comportamiento",
      "theme": "Polimorfismo y sobreescritura de métodos (@Override)",
      "instruction": "Organiza los elementos para asociar la instancia concreta y llamar al método dinámico.",
      "template": "class Reliquia {\n    public void activar() { System.out.println(\"Poder neutro\"); }\n}\nclass ReliquiaSagrada extends Reliquia {\n    @Override\n    public void activar() { System.out.println(\"Poder Divino\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Reliquia r = new ReliquiaSagrada();\n        r.{{slot_0}}();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "activar"
        }
      ],
      "tokens": [
        "activar",
        "lanzar",
        "usar"
      ],
      "expectedOutput": "Poder Divino",
      "explanation": "Gracias al polimorfismo, r.activar() ejecuta la versión sobreescrita de ReliquiaSagrada."
    }
  ],
  "18": [
    {
      "id": "p_18_1_fix",
      "bossLevel": 18,
      "type": "fix_code",
      "title": "Instanciación Ilegal de Interfaz",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "Las interfaces son contratos abstractos y no pueden instanciarse directamente con el operador new. Instancia la clase concreta que implementa la interfaz.",
      "initialCode": "interface Combatiente {\n    void golpear();\n}\nclass Titan implements Combatiente {\n    public void golpear() {\n        System.out.println(\"Golpe Devastador\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Combatiente c = new Combatiente();\n        c.golpear();\n    }\n}",
      "solutionCode": "interface Combatiente {\n    void golpear();\n}\nclass Titan implements Combatiente {\n    public void golpear() {\n        System.out.println(\"Golpe Devastador\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Combatiente c = new Titan();\n        c.golpear();\n    }\n}",
      "expectedOutput": "Golpe Devastador",
      "requiredTokens": [
        "new Titan()"
      ],
      "forbiddenTokens": [
        "new Combatiente()"
      ],
      "explanation": "Una interfaz no posee implementación concreta y no puede instanciarse con new; se instancia la clase que la implementa."
    },
    {
      "id": "p_18_2_fix",
      "bossLevel": 18,
      "type": "fix_code",
      "title": "Visibilidad de Método de Interfaz Implementado",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "Los métodos definidos en una interfaz son implícitamente públicos; al implementarlos en la clase, omitir el modificador reduce su visibilidad. Agrega el modificador público al método.",
      "initialCode": "interface Destructor {\n    void destruir();\n}\nclass Coloso implements Destructor {\n    void destruir() {\n        System.out.println(\"Destruccion Total\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Destructor d = new Coloso();\n        d.destruir();\n    }\n}",
      "solutionCode": "interface Destructor {\n    void destruir();\n}\nclass Coloso implements Destructor {\n    public void destruir() {\n        System.out.println(\"Destruccion Total\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Destructor d = new Coloso();\n        d.destruir();\n    }\n}",
      "expectedOutput": "Destruccion Total",
      "requiredTokens": [
        "public void destruir()"
      ],
      "explanation": "Todo método de interfaz implementado en una clase debe declararse explícitamente con visibilidad 'public'."
    },
    {
      "id": "p_18_3_fix",
      "bossLevel": 18,
      "type": "fix_code",
      "title": "Cumplimiento del Contrato de Interfaz",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "La clase afirma implementar el contrato pero no proveyó el cuerpo del método obligatorio. Implementa el método del contrato imprimiendo el mensaje esperado.",
      "initialCode": "interface Magia {\n    void brillar();\n}\nclass Cristal implements Magia {\n}\npublic class Main {\n    public static void main(String[] args) {\n        Magia m = new Cristal();\n        m.brillar();\n    }\n}",
      "solutionCode": "interface Magia {\n    void brillar();\n}\nclass Cristal implements Magia {\n    public void brillar() {\n        System.out.println(\"Luz Cristalina\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Magia m = new Cristal();\n        m.brillar();\n    }\n}",
      "expectedOutput": "Luz Cristalina",
      "requiredTokens": [
        "public void brillar()",
        "System.out.println(\"Luz Cristalina\");"
      ],
      "explanation": "Cualquier clase no abstracta que implemente una interfaz debe definir el cuerpo de todos sus métodos."
    },
    {
      "id": "p_18_4_fix",
      "bossLevel": 18,
      "type": "fix_code",
      "title": "Cuerpo en Método de Interfaz Abstracta",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "En una interfaz clásica los métodos son abstractos y terminan con punto y coma sin llevar llaves de implementación. Corrige la firma del contrato.",
      "initialCode": "interface Guerrero {\n    void atacar() {\n    }\n}\nclass Barbaro implements Guerrero {\n    public void atacar() {\n        System.out.println(\"Carga Salvaje\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guerrero g = new Barbaro();\n        g.atacar();\n    }\n}",
      "solutionCode": "interface Guerrero {\n    void atacar();\n}\nclass Barbaro implements Guerrero {\n    public void atacar() {\n        System.out.println(\"Carga Salvaje\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guerrero g = new Barbaro();\n        g.atacar();\n    }\n}",
      "expectedOutput": "Carga Salvaje",
      "requiredTokens": [
        "void atacar();"
      ],
      "explanation": "Los métodos abstractos de una interfaz se declaran con su firma y terminan con ';' sin cuerpo de código."
    },
    {
      "id": "p_18_5_fill",
      "bossLevel": 18,
      "type": "fill_blank",
      "title": "Declaración e Implementación de Contrato",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "Usa la palabra para declarar el contrato de métodos y la palabra que adopta dicho contrato en la clase.",
      "template": "{{blank_0}} Accion {\n    void ejecutar();\n}\nclass Golpe {{blank_1}} Accion {\n    public void ejecutar() {\n        System.out.println(\"Accion Ejecutada\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Accion a = new Golpe();\n        a.ejecutar();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "contrato",
          "validAnswers": [
            "interface"
          ],
          "hint": "Palabra para definir una interfaz"
        },
        {
          "id": "blank_1",
          "placeholder": "adopción",
          "validAnswers": [
            "implements"
          ],
          "hint": "Palabra para implementar la interfaz"
        }
      ],
      "solutionAnswers": [
        "interface",
        "implements"
      ],
      "expectedOutput": "Accion Ejecutada",
      "explanation": "'interface' define el contrato e 'implements' lo materializa en una clase concreta."
    },
    {
      "id": "p_18_6_fill",
      "bossLevel": 18,
      "type": "fill_blank",
      "title": "Visibilidad Pública en Implementación",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "Aplica el modificador de visibilidad obligatorio al método que concreta el contrato.",
      "template": "interface Poder {\n    void activar();\n}\nclass Furia implements Poder {\n    {{blank_0}} void activar() {\n        System.out.println(\"Furia Activada\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Poder p = new Furia();\n        p.activar();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "visibilidad",
          "validAnswers": [
            "public"
          ],
          "hint": "Modificador de acceso requerido"
        }
      ],
      "solutionAnswers": [
        "public"
      ],
      "expectedOutput": "Furia Activada",
      "explanation": "Los métodos de una interfaz son públicos, por lo que su implementación debe ser 'public'."
    },
    {
      "id": "p_18_7_fill",
      "bossLevel": 18,
      "type": "fill_blank",
      "title": "Polimorfismo Basado en Interfaces",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "Utiliza la interfaz como tipo de la variable e instánciala con el constructor de la clase concreta.",
      "template": "interface Arma {\n    void disparar();\n}\nclass Arco implements Arma {\n    public void disparar() {\n        System.out.println(\"Flecha Certera\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        {{blank_0}} a = new {{blank_1}}();\n        a.disparar();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "tipoInterfaz",
          "validAnswers": [
            "Arma"
          ],
          "hint": "Nombre de la interfaz"
        },
        {
          "id": "blank_1",
          "placeholder": "claseConcreta",
          "validAnswers": [
            "Arco"
          ],
          "hint": "Nombre de la clase que implementa"
        }
      ],
      "solutionAnswers": [
        "Arma",
        "Arco"
      ],
      "expectedOutput": "Flecha Certera",
      "explanation": "Una variable de tipo interfaz desacopla el código permitiendo apuntar a cualquier clase implementadora."
    },
    {
      "id": "p_18_8_drag",
      "bossLevel": 18,
      "type": "drag_drop",
      "title": "Estructura de Contrato de Interfaz",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "Coloca la palabra para declarar la interfaz, la palabra de adopción en la clase y el modificador del método.",
      "template": "{{slot_0}} Poder {\n    void activar();\n}\nclass Reliquia {{slot_1}} Poder {\n    {{slot_2}} void activar() {\n        System.out.println(\"Poder Activado\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Poder p = new Reliquia();\n        p.activar();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "interface"
        },
        {
          "id": "slot_1",
          "expectedToken": "implements"
        },
        {
          "id": "slot_2",
          "expectedToken": "public"
        }
      ],
      "tokens": [
        "interface",
        "implements",
        "public",
        "extends",
        "class"
      ],
      "expectedOutput": "Poder Activado",
      "explanation": "interface define el contrato, implements lo adopta y public califica el método resultante."
    },
    {
      "id": "p_18_9_drag",
      "bossLevel": 18,
      "type": "drag_drop",
      "title": "Firma Abstracta en Interfaz",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "Ubica la palabra de contrato, el tipo de retorno nulo y el terminador de la firma.",
      "template": "{{slot_0}} Guardia {\n    {{slot_1}} vigilar(){{slot_2}}\n}\nclass Centinela implements Guardia {\n    public void vigilar() {\n        System.out.println(\"Vigilancia Activa\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guardia g = new Centinela();\n        g.vigilar();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "interface"
        },
        {
          "id": "slot_1",
          "expectedToken": "void"
        },
        {
          "id": "slot_2",
          "expectedToken": ";"
        }
      ],
      "tokens": [
        "interface",
        "void",
        ";",
        "class",
        "{}"
      ],
      "expectedOutput": "Vigilancia Activa",
      "explanation": "Las firmas en una interfaz se declaran con tipo y ';' sin cuerpo de código."
    },
    {
      "id": "p_18_10_drag",
      "bossLevel": 18,
      "type": "drag_drop",
      "title": "Instanciación a través de Interfaz",
      "theme": "Palabra clave 'implements' y contratos de métodos",
      "instruction": "Organiza los elementos para asociar la interfaz a la clase implementadora y ejecutar la orden.",
      "template": "interface Escudo {\n    void bloquear();\n}\nclass EscudoPesado implements Escudo {\n    public void bloquear() { System.out.println(\"Bloqueo Pesado\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Escudo e = {{slot_0}} {{slot_1}}();\n        e.{{slot_2}}();\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "new"
        },
        {
          "id": "slot_1",
          "expectedToken": "EscudoPesado"
        },
        {
          "id": "slot_2",
          "expectedToken": "bloquear"
        }
      ],
      "tokens": [
        "new",
        "EscudoPesado",
        "bloquear",
        "Escudo",
        "usar"
      ],
      "expectedOutput": "Bloqueo Pesado",
      "explanation": "Se crea la instancia concreta con 'new EscudoPesado()' y se invoca el método del contrato."
    }
  ],
  "19": [
    {
      "id": "p_19_1_fix",
      "bossLevel": 19,
      "type": "fix_code",
      "title": "Prevención de NullPointerException",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "Se invoca un método sobre un objeto cuya referencia vale null, provocando la caída del programa. Envuelve la invocación dentro de una comprobación de seguridad para actuar solo si no es nulo o imprimir el mensaje de arma no equipada.",
      "initialCode": "class Espada {\n    public void brillar() {\n        System.out.println(\"Luz divina\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Espada arma = null;\n        arma.brillar();\n    }\n}",
      "solutionCode": "class Espada {\n    public void brillar() {\n        System.out.println(\"Luz divina\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Espada arma = null;\n        if (arma != null) {\n            arma.brillar();\n        } else {\n            System.out.println(\"Arma no equipada\");\n        }\n    }\n}",
      "expectedOutput": "Arma no equipada",
      "requiredTokens": [
        "if (arma != null)",
        "Arma no equipada"
      ],
      "explanation": "Antes de invocar métodos sobre una referencia de objeto se debe verificar que no sea null para evitar NullPointerException."
    },
    {
      "id": "p_19_2_fix",
      "bossLevel": 19,
      "type": "fix_code",
      "title": "Sentido de Validación Anti-Nula",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "La comprobación tiene el operador invertido: intenta acceder al método cuando el objeto es nulo en lugar de cuando es válido. Invierte el operador a distinto de nulo.",
      "initialCode": "class Pocion {\n    public void beber() {\n        System.out.println(\"Salud restaurada\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Pocion p = new Pocion();\n        if (p == null) {\n            p.beber();\n        } else {\n            System.out.println(\"Poción consumida\");\n        }\n    }\n}",
      "solutionCode": "class Pocion {\n    public void beber() {\n        System.out.println(\"Salud restaurada\");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Pocion p = new Pocion();\n        if (p != null) {\n            p.beber();\n        } else {\n            System.out.println(\"Poción consumida\");\n        }\n    }\n}",
      "expectedOutput": "Salud restaurada",
      "requiredTokens": [
        "if (p != null)"
      ],
      "explanation": "'p != null' comprueba que la variable apunte a un objeto válido en memoria antes de invocarlo."
    },
    {
      "id": "p_19_3_fix",
      "bossLevel": 19,
      "type": "fix_code",
      "title": "Desreferenciación de Arreglo Nulo",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "El arreglo no fue inicializado y contiene una referencia nula, por lo que consultar su tamaño detiene el programa. Instancia el arreglo con dos elementos antes de consultar su longitud.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int[] inventario = null;\n        System.out.println(\"Capacidad: \" + inventario.length);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        int[] inventario = {1, 2};\n        System.out.println(\"Capacidad: \" + inventario.length);\n    }\n}",
      "expectedOutput": "Capacidad: 2",
      "requiredTokens": [
        "int[] inventario = {1, 2};"
      ],
      "forbiddenTokens": [
        "int[] inventario = null;"
      ],
      "explanation": "Un arreglo que vale null no tiene posiciones de memoria; debe instanciarse antes de acceder a sus atributos."
    },
    {
      "id": "p_19_4_fix",
      "bossLevel": 19,
      "type": "fix_code",
      "title": "Valor de Reemplazo ante Referencia Nula",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "Si el título es nulo, se debe usar una cadena por defecto para evitar imprimir null. Proporciona una alternativa condicional para que imprima Aventurero.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        String titulo = null;\n        System.out.println(\"Titulo: \" + titulo);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        String titulo = null;\n        if (titulo == null) {\n            titulo = \"Aventurero\";\n        }\n        System.out.println(\"Titulo: \" + titulo);\n    }\n}",
      "expectedOutput": "Titulo: Aventurero",
      "requiredTokens": [
        "titulo = \"Aventurero\";"
      ],
      "explanation": "Comprobar '== null' permite asignar un valor de respaldo por defecto."
    },
    {
      "id": "p_19_5_fill",
      "bossLevel": 19,
      "type": "fill_blank",
      "title": "Comprobación de Existencia de Objeto",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "Completa el operador de desigualdad y la palabra reservada para indicar una referencia vacía.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String pergamino = \"Papiro Sagrado\";\n        if (pergamino {{blank_0}} {{blank_1}}) {\n            System.out.println(\"Pergamino encontrado\");\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "op",
          "validAnswers": [
            "!="
          ],
          "hint": "Operador de desigualdad"
        },
        {
          "id": "blank_1",
          "placeholder": "vacio",
          "validAnswers": [
            "null"
          ],
          "hint": "Palabra clave para referencia nula"
        }
      ],
      "solutionAnswers": [
        "!=",
        "null"
      ],
      "expectedOutput": "Pergamino encontrado",
      "explanation": "'!= null' verifica que la variable apunte a una instancia válida en memoria."
    },
    {
      "id": "p_19_6_fill",
      "bossLevel": 19,
      "type": "fill_blank",
      "title": "Inicialización Segura de Referencia",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "Asigna el valor nulo inicial y la palabra de instanciación con el constructor.",
      "template": "class Amuleto {\n    public void brillar() { System.out.println(\"Brillo Divino\"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Amuleto a = {{blank_0}};\n        a = {{blank_1}} Amuleto();\n        a.brillar();\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "inicial",
          "validAnswers": [
            "null"
          ],
          "hint": "Valor de referencia vacía"
        },
        {
          "id": "blank_1",
          "placeholder": "creación",
          "validAnswers": [
            "new"
          ],
          "hint": "Operador de creación de objeto"
        }
      ],
      "solutionAnswers": [
        "null",
        "new"
      ],
      "expectedOutput": "Brillo Divino",
      "explanation": "Inicializar el objeto con 'new' antes de usarlo garantiza que no ocurra un error de referencia nula."
    },
    {
      "id": "p_19_7_fill",
      "bossLevel": 19,
      "type": "fill_blank",
      "title": "Bifurcación con Guarda Anti-Nula",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "Escribe la palabra condicional y la rama alternativa que atiende el caso sin objeto.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String gema = null;\n        {{blank_0}} (gema != null) {\n            System.out.println(\"Gema Lista\");\n        } {{blank_1}} {\n            System.out.println(\"Gema Vacia\");\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "condicional",
          "validAnswers": [
            "if"
          ],
          "hint": "Condicional principal"
        },
        {
          "id": "blank_1",
          "placeholder": "alternativa",
          "validAnswers": [
            "else"
          ],
          "hint": "Rama cuando la condición falla"
        }
      ],
      "solutionAnswers": [
        "if",
        "else"
      ],
      "expectedOutput": "Gema Vacia",
      "explanation": "Combinar 'if (ref != null) ... else ...' protege la ejecución ante cualquier eventualidad."
    },
    {
      "id": "p_19_8_drag",
      "bossLevel": 19,
      "type": "drag_drop",
      "title": "Estructura de Manejo de Nulos",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "Coloca el valor nulo, el operador de distinción y la rama que atiende la ausencia de objeto.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String gema = {{slot_0}};\n        if (gema {{slot_1}} null) {\n            System.out.println(\"Gema activa\");\n        } {{slot_2}} {\n            System.out.println(\"Sin gema\");\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "null"
        },
        {
          "id": "slot_1",
          "expectedToken": "!="
        },
        {
          "id": "slot_2",
          "expectedToken": "else"
        }
      ],
      "tokens": [
        "null",
        "!=",
        "else",
        "==",
        "void"
      ],
      "expectedOutput": "Sin gema",
      "explanation": "Si la variable vale null, la condición se vuelve falsa y se ejecuta el bloque 'else'."
    },
    {
      "id": "p_19_9_drag",
      "bossLevel": 19,
      "type": "drag_drop",
      "title": "Condición de Guarda de Seguridad",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "Ubica la palabra de condición, el operador de desigualdad y la palabra clave de ausencia de valor.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String reliquia = \"Corona\";\n        {{slot_0}} (reliquia {{slot_1}} {{slot_2}}) {\n            System.out.println(\"Reliquia Encontrada\");\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "if"
        },
        {
          "id": "slot_1",
          "expectedToken": "!="
        },
        {
          "id": "slot_2",
          "expectedToken": "null"
        }
      ],
      "tokens": [
        "if",
        "!=",
        "null",
        "==",
        "new"
      ],
      "expectedOutput": "Reliquia Encontrada",
      "explanation": "if (reliquia != null) es la guarda de seguridad estándar en Java."
    },
    {
      "id": "p_19_10_drag",
      "bossLevel": 19,
      "type": "drag_drop",
      "title": "Asignación de Fallback para Nulos",
      "theme": "Referencias null, NullPointerException y comprobación",
      "instruction": "Organiza los operadores para comprobar si la referencia está vacía y otorgar un valor de respaldo.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        String usuario = null;\n        if (usuario {{slot_0}} {{slot_1}}) {\n            usuario = \"Invitado\";\n        }\n        System.out.println(\"Usuario: \" + usuario);\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "=="
        },
        {
          "id": "slot_1",
          "expectedToken": "null"
        }
      ],
      "tokens": [
        "==",
        "null",
        "!=",
        "equals"
      ],
      "expectedOutput": "Usuario: Invitado",
      "explanation": "La comparación '== null' detecta la falta de inicialización y permite establecer un valor seguro."
    }
  ],
  "20": [
    {
      "id": "p_20_1_fix",
      "bossLevel": 20,
      "type": "fix_code",
      "title": "Bloque Try sin Manejador de Errores",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "El código escribió un bloque protegido pero olvidó incluir la cláusula para interceptar la excepción. Agrega el bloque de captura de excepciones para atrapar el fallo e imprimir el mensaje esperado.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int resultado = 10 / 0;\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int resultado = 10 / 0;\n        } catch (Exception e) {\n            System.out.println(\"Excepción capturada\");\n        }\n    }\n}",
      "expectedOutput": "Excepción capturada",
      "requiredTokens": [
        "catch (Exception",
        "System.out.println(\"Excepción capturada\");"
      ],
      "explanation": "Un bloque 'try' debe ir siempre acompañado de al menos un bloque 'catch' o un bloque 'finally'."
    },
    {
      "id": "p_20_2_fix",
      "bossLevel": 20,
      "type": "fix_code",
      "title": "Identificador Faltante en Parámetro Catch",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "El bloque de captura declaró el tipo de excepción pero olvidó asignarle un nombre a la variable del error. Añade el identificador de variable en el parámetro del catch.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int valor = 5 / 0;\n        } catch (ArithmeticException) {\n            System.out.println(\"Division por cero evitada\");\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int valor = 5 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Division por cero evitada\");\n        }\n    }\n}",
      "expectedOutput": "Division por cero evitada",
      "requiredTokens": [
        "catch (ArithmeticException e)"
      ],
      "explanation": "El bloque catch recibe el objeto de la excepción como parámetro, requiriendo tipo y nombre (ej. ArithmeticException e)."
    },
    {
      "id": "p_20_3_fix",
      "bossLevel": 20,
      "type": "fix_code",
      "title": "Orden Invertido entre Catch y Finally",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "La cláusula de limpieza final fue colocada antes de la cláusula de captura. Coloca el bloque catch antes del bloque finally.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int x = 20 / 0;\n        } finally {\n            System.out.println(\"Limpieza de recursos\");\n        } catch (Exception e) {\n            System.out.println(\"Error controlado\");\n        }\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int x = 20 / 0;\n        } catch (Exception e) {\n            System.out.println(\"Error controlado\");\n        } finally {\n            System.out.println(\"Limpieza de recursos\");\n        }\n    }\n}",
      "expectedOutput": "Error controlado\nLimpieza de recursos",
      "requiredTokens": [
        "catch (Exception e) {\n            System.out.println(\"Error controlado\");\n        } finally {"
      ],
      "explanation": "El orden legal de las cláusulas en Java es obligatoriamente try, luego catch, y finalmente 'finally'."
    },
    {
      "id": "p_20_4_fix",
      "bossLevel": 20,
      "type": "fix_code",
      "title": "División por Cero sin Protección",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "La operación aritmética divide entre cero de forma desprotegida deteniendo la ejecución. Envuelve la operación en un try-catch para capturar el fallo e imprimir el mensaje previsto.",
      "initialCode": "public class Main {\n    public static void main(String[] args) {\n        int res = 100 / 0;\n        System.out.println(\"Resultado: \" + res);\n    }\n}",
      "solutionCode": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int res = 100 / 0;\n            System.out.println(\"Resultado: \" + res);\n        } catch (Exception e) {\n            System.out.println(\"Fallo Aritmetico Controlado\");\n        }\n    }\n}",
      "expectedOutput": "Fallo Aritmetico Controlado",
      "requiredTokens": [
        "try {",
        "catch (Exception e) {",
        "Fallo Aritmetico Controlado"
      ],
      "explanation": "Al proteger operaciones riesgosas con try-catch, el programa continúa ejecutándose sin interrumpir la máquina virtual."
    },
    {
      "id": "p_20_5_fill",
      "bossLevel": 20,
      "type": "fill_blank",
      "title": "Palabras Reservadas Try y Catch",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "Escribe la palabra clave para vigilar el bloque que puede fallar y la palabra clave para interceptar la excepción aritmética.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} {\n            int x = 50 / 0;\n        } {{blank_1}} (ArithmeticException e) {\n            System.out.println(\"Error aritmetico controlado\");\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "protección",
          "validAnswers": [
            "try"
          ],
          "hint": "Palabra para iniciar el bloque vigilado"
        },
        {
          "id": "blank_1",
          "placeholder": "captura",
          "validAnswers": [
            "catch"
          ],
          "hint": "Palabra para interceptar el error"
        }
      ],
      "solutionAnswers": [
        "try",
        "catch"
      ],
      "expectedOutput": "Error aritmetico controlado",
      "explanation": "'try' vigila la operación y 'catch' atrapa la excepción aritmética."
    },
    {
      "id": "p_20_6_fill",
      "bossLevel": 20,
      "type": "fill_blank",
      "title": "Cláusula Finally de Ejecución Garantizada",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "Completa el nombre de la cláusula que se ejecuta siempre, ocurra o no una excepción, para liberar recursos.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"Operacion Segura\");\n        } {{blank_0}} {\n            System.out.println(\"Recursos Liberados\");\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "cláusula",
          "validAnswers": [
            "finally"
          ],
          "hint": "Bloque de ejecución garantizada"
        }
      ],
      "solutionAnswers": [
        "finally"
      ],
      "expectedOutput": "Operacion Segura\nRecursos Liberados",
      "explanation": "'finally' se ejecuta incondicionalmente para limpieza de recursos."
    },
    {
      "id": "p_20_7_fill",
      "bossLevel": 20,
      "type": "fill_blank",
      "title": "Tipo de Excepción Genérica",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "Indica el tipo de clase base de excepciones y el nombre de la variable asociada.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int div = 1 / 0;\n        } catch ({{blank_0}} {{blank_1}}) {\n            System.out.println(\"Excepcion Detectada\");\n        }\n    }\n}",
      "blanks": [
        {
          "id": "blank_0",
          "placeholder": "clase",
          "validAnswers": [
            "Exception",
            "ArithmeticException"
          ],
          "hint": "Clase de la jerarquía de excepciones"
        },
        {
          "id": "blank_1",
          "placeholder": "variable",
          "validAnswers": [
            "e",
            "ex"
          ],
          "hint": "Identificador de la excepción capturada"
        }
      ],
      "solutionAnswers": [
        "Exception",
        "e"
      ],
      "expectedOutput": "Excepcion Detectada",
      "explanation": "'catch (Exception e)' captura cualquier excepción derivada de la clase Exception."
    },
    {
      "id": "p_20_8_drag",
      "bossLevel": 20,
      "type": "drag_drop",
      "title": "Estructura Completa Try-Catch-Finally",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "Coloca las tres palabras reservadas en el orden canónico reglamentario de la JVM.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} {\n            System.out.println(\"Inicio protegido\");\n        } {{slot_1}} (Exception e) {\n            System.out.println(\"Fallo\");\n        } {{slot_2}} {\n            System.out.println(\"Liberando recursos en JVM\");\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "try"
        },
        {
          "id": "slot_1",
          "expectedToken": "catch"
        },
        {
          "id": "slot_2",
          "expectedToken": "finally"
        }
      ],
      "tokens": [
        "try",
        "catch",
        "finally",
        "throw",
        "throws"
      ],
      "expectedOutput": "Inicio protegido\nLiberando recursos en JVM",
      "explanation": "try abre el código vigilado, catch maneja excepciones y finally limpia recursos siempre."
    },
    {
      "id": "p_20_9_drag",
      "bossLevel": 20,
      "type": "drag_drop",
      "title": "Manejo de Excepción Aritmética",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "Ubica la palabra de vigilancia, la clase de excepción específica y el nombre de la variable de captura.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} {\n            int n = 30 / 0;\n        } catch ({{slot_1}} {{slot_2}}) {\n            System.out.println(\"Fallo por cero atrapado\");\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "try"
        },
        {
          "id": "slot_1",
          "expectedToken": "ArithmeticException"
        },
        {
          "id": "slot_2",
          "expectedToken": "e"
        }
      ],
      "tokens": [
        "try",
        "ArithmeticException",
        "e",
        "catch",
        "throw"
      ],
      "expectedOutput": "Fallo por cero atrapado",
      "explanation": "try captura divisiones por cero mediante ArithmeticException e."
    },
    {
      "id": "p_20_10_drag",
      "bossLevel": 20,
      "type": "drag_drop",
      "title": "Garantía de Ejecución en Finally",
      "theme": "JVM, Bytecode, Garbage Collector y Try-Catch",
      "instruction": "Organiza los elementos para vigilar la operación y asegurar el mensaje final de limpieza en la JVM.",
      "template": "public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} {\n            System.out.println(\"Fase 1\");\n        } {{slot_1}} {\n            System.out.println(\"Fase Final Siempre\");\n        }\n    }\n}",
      "slots": [
        {
          "id": "slot_0",
          "expectedToken": "try"
        },
        {
          "id": "slot_1",
          "expectedToken": "finally"
        }
      ],
      "tokens": [
        "try",
        "finally",
        "catch",
        "while"
      ],
      "expectedOutput": "Fase 1\nFase Final Siempre",
      "explanation": "Un bloque try puede acompañarse directamente de finally sin requerir catch si solo se busca limpieza."
    }
  ]
};
