// js/data/challenges.js
// Banco Oficial de Ejercicios Prácticos de Programación en Java para Code Quest
// Incluye 3 modalidades interactivas para cada uno de los 20 Jefes:
// 1. fix_code: Código con error (depuración)
// 2. fill_blank: Código incompleto con espacios a rellenar
// 3. drag_drop: Código incompleto con fichas para arrastrar y soltar

const CHALLENGES_DATA = {
  1: [
    {
      id: "p_1_fix",
      bossLevel: 1,
      type: "fix_code",
      title: "Reparar la Salida de Consola",
      theme: "Sintaxis básica y método main()",
      instruction: "El duende escribió 'system' con minúscula y olvidó el punto y coma final. Corrige ambos errores para que compile y muestre: ¡Hola Java!",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        system.out.println("¡Hola Java!")\n    }\n}`,
      expectedOutput: "¡Hola Java!",
      requiredTokens: ["System.out.println", ";"],
      forbiddenTokens: ["system.out"],
      explanation: "En Java, 'System' debe iniciar con mayúscula y cada sentencia debe finalizar con punto y coma (;)."
    },
    {
      id: "p_1_fill",
      bossLevel: 1,
      type: "fill_blank",
      title: "Completar la Firma de Main",
      theme: "Sintaxis básica y método main()",
      instruction: "Rellena los espacios con el tipo de retorno vacío ('void') y la clase para argumentos de texto ('String').",
      template: `public class Main {\n    public static {{blank_0}} main({{blank_1}}[] args) {\n        System.out.println("Sintaxis Correcta");\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "tipo", validAnswers: ["void"], hint: "Palabra clave para métodos que no devuelven valor" },
        { id: "blank_1", placeholder: "clase", validAnswers: ["String"], hint: "Clase de cadenas de texto en Java" }
      ],
      expectedOutput: "Sintaxis Correcta",
      explanation: "La firma requerida por la JVM es 'public static void main(String[] args)'."
    },
    {
      id: "p_1_drag",
      bossLevel: 1,
      type: "drag_drop",
      title: "Ensamblar el Método Main",
      theme: "Sintaxis básica y método main()",
      instruction: "Arrastra los modificadores y tipos a sus posiciones correctas para estructurar el método main.",
      template: `public class Main {\n    {{slot_0}} {{slot_1}} {{slot_2}} main({{slot_3}}[] args) {\n        System.out.println("Main Ensamblado");\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "public" },
        { id: "slot_1", expectedToken: "static" },
        { id: "slot_2", expectedToken: "void" },
        { id: "slot_3", expectedToken: "String" }
      ],
      tokens: ["void", "public", "String", "static"],
      expectedOutput: "Main Ensamblado",
      explanation: "El orden canónico es: public static void main(String[] args)."
    }
  ],

  2: [
    {
      id: "p_2_fix",
      bossLevel: 2,
      type: "fix_code",
      title: "Corregir Tipo Incompatible",
      theme: "Tipos de datos primitivos",
      instruction: "El caballero guardó un texto con comillas en una variable 'int' entera. Corrige el valor asignado a 100 sin comillas para que imprima: Armadura: 100",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        int armadura = "100";\n        System.out.println("Armadura: " + armadura);\n    }\n}`,
      expectedOutput: "Armadura: 100",
      requiredTokens: ["int armadura = 100;"],
      forbiddenTokens: ['"100"'],
      explanation: "Las variables de tipo 'int' guardan números enteros puros. Las comillas dobles representan un objeto String."
    },
    {
      id: "p_2_fill",
      bossLevel: 2,
      type: "fill_blank",
      title: "Declaración de Tipos Primitivos",
      theme: "Tipos de datos primitivos",
      instruction: "Escribe el tipo de dato primitivo para un valor booleano ('boolean') y para un número decimal ('double').",
      template: `public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} escudoActivo = true;\n        {{blank_1}} porcentaje = 75.5;\n        System.out.println("Escudo: " + escudoActivo + " al " + porcentaje + "%");\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "tipo", validAnswers: ["boolean"], hint: "Tipo lógico verdadero/falso" },
        { id: "blank_1", placeholder: "tipo", validAnswers: ["double", "float"], hint: "Tipo para números con punto decimal" }
      ],
      expectedOutput: "Escudo: true al 75.5%",
      explanation: "'boolean' admite únicamente true o false, y 'double' números con punto decimal."
    },
    {
      id: "p_2_drag",
      bossLevel: 2,
      type: "drag_drop",
      title: "Asignar Tipos a sus Valores",
      theme: "Tipos de datos primitivos",
      instruction: "Arrastra cada tipo ('int', 'char', 'boolean') a la variable con su valor compatible.",
      template: `public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} vida = 50;\n        {{slot_1}} rango = 'A';\n        {{slot_2}} activo = false;\n        System.out.println("Estado: " + vida + " " + rango + " " + activo);\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "int" },
        { id: "slot_1", expectedToken: "char" },
        { id: "slot_2", expectedToken: "boolean" }
      ],
      tokens: ["boolean", "int", "char", "double"],
      expectedOutput: "Estado: 50 A false",
      explanation: "50 es 'int', 'A' entre comillas simples es 'char', y false es 'boolean'."
    }
  ],

  3: [
    {
      id: "p_3_fix",
      bossLevel: 3,
      type: "fix_code",
      title: "Operador de Módulo",
      theme: "Operadores matemáticos y lógicos",
      instruction: "El gólem usó la barra de división '/' en lugar del operador de módulo '%' para calcular el residuo. Cámbialo para que imprima: Residuo: 0",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        int residuo = 10 / 2;\n        System.out.println("Residuo: " + residuo);\n    }\n}`,
      expectedOutput: "Residuo: 0",
      requiredTokens: ["10 % 2"],
      explanation: "El operador '%' devuelve el residuo de una división entera. 10 % 2 es 0."
    },
    {
      id: "p_3_fill",
      bossLevel: 3,
      type: "fill_blank",
      title: "Operador Lógico AND e Incremento",
      theme: "Operadores matemáticos y lógicos",
      instruction: "Rellena el operador lógico AND ('&&') y el operador de incremento ('++').",
      template: `public class Main {\n    public static void main(String[] args) {\n        int mana = 10;\n        boolean listo = (mana >= 10) {{blank_0}} true;\n        mana{{blank_1}};\n        System.out.println("Listo: " + listo + ", Mana: " + mana);\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "op", validAnswers: ["&&"], hint: "Operador lógico Y" },
        { id: "blank_1", placeholder: "inc", validAnswers: ["++"], hint: "Operador que suma 1 a la variable" }
      ],
      expectedOutput: "Listo: true, Mana: 11",
      explanation: "'&&' es el operador lógico AND y '++' suma 1 al valor de la variable."
    },
    {
      id: "p_3_drag",
      bossLevel: 3,
      type: "drag_drop",
      title: "Condición Lógica Compuesta",
      theme: "Operadores matemáticos y lógicos",
      instruction: "Arrastra los operadores '>', '&&' y '==' para verificar si (vida > 0 Y tieneLlave == true).",
      template: `public class Main {\n    public static void main(String[] args) {\n        int vida = 15;\n        boolean llave = true;\n        boolean paso = (vida {{slot_0}} 0) {{slot_1}} (llave {{slot_2}} true);\n        System.out.println("Paso: " + paso);\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: ">" },
        { id: "slot_1", expectedToken: "&&" },
        { id: "slot_2", expectedToken: "==" }
      ],
      tokens: ["&&", ">", "==", "||"],
      expectedOutput: "Paso: true",
      explanation: "> comprueba mayor que, && une condiciones y == evalúa igualdad."
    }
  ],

  4: [
    {
      id: "p_4_fix",
      bossLevel: 4,
      type: "fix_code",
      title: "Concatenación de Cadenas",
      theme: "System.out.println y concatenación",
      instruction: "Falta el signo '+' para unir el texto con la variable 'puntos'. Corrige la línea para imprimir: Puntos: 500",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        int puntos = 500;\n        System.out.println("Puntos: " puntos);\n    }\n}`,
      expectedOutput: "Puntos: 500",
      requiredTokens: ['"Puntos: " + puntos'],
      explanation: "En Java, el operador '+' concatena cadenas de texto con variables."
    },
    {
      id: "p_4_fill",
      bossLevel: 4,
      type: "fill_blank",
      title: "print vs println",
      theme: "System.out.println y concatenación",
      instruction: "Usa 'print' (sin salto de línea) en la primera instrucción y 'println' (con salto) en la segunda.",
      template: `public class Main {\n    public static void main(String[] args) {\n        System.out.{{blank_0}}("Nivel: ");\n        System.out.{{blank_1}}("4");\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "metodo", validAnswers: ["print"], hint: "Imprime sin salto de línea" },
        { id: "blank_1", placeholder: "metodo", validAnswers: ["println"], hint: "Imprime con salto de línea final" }
      ],
      expectedOutput: "Nivel: 4",
      explanation: "print mantiene el cursor en la misma línea; println avanza a la siguiente línea."
    },
    {
      id: "p_4_drag",
      bossLevel: 4,
      type: "drag_drop",
      title: "Canal de Salida Estándar",
      theme: "System.out.println y concatenación",
      instruction: "Arrastra los componentes 'System', 'out' y 'println' en el orden requerido.",
      template: `public class Main {\n    public static void main(String[] args) {\n        {{slot_0}}.{{slot_1}}.{{slot_2}}("Luz espectral");\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "System" },
        { id: "slot_1", expectedToken: "out" },
        { id: "slot_2", expectedToken: "println" }
      ],
      tokens: ["out", "System", "println", "Print"],
      expectedOutput: "Luz espectral",
      explanation: "La llamada completa y exacta es System.out.println."
    }
  ],

  5: [
    {
      id: "p_5_fix",
      bossLevel: 5,
      type: "fix_code",
      title: "Comparación en Condicional",
      theme: "Estructuras de decisión if, else if, else",
      instruction: "El guardia usó '=' (asignación) en lugar de '==' (comparación) dentro del if. Corrige el operador para que imprima: ¡Acceso Concedido!",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        int codigo = 777;\n        if (codigo = 777) {\n            System.out.println("¡Acceso Concedido!");\n        }\n    }\n}`,
      expectedOutput: "¡Acceso Concedido!",
      requiredTokens: ["codigo == 777"],
      forbiddenTokens: ["if (codigo = 777)", "if(codigo=777)"],
      explanation: "'=' asigna un valor a una variable. Para comparar igualdad condicional se usa '=='."
    },
    {
      id: "p_5_fill",
      bossLevel: 5,
      type: "fill_blank",
      title: "Bifurcación if - else",
      theme: "Estructuras de decisión if, else if, else",
      instruction: "Escribe las palabras reservadas 'if' y 'else' para completar la estructura de decisión.",
      template: `public class Main {\n    public static void main(String[] args) {\n        int pociones = 3;\n        {{blank_0}} (pociones > 0) {\n            System.out.println("Pocion Lista");\n        } {{blank_1}} {\n            System.out.println("Sin Pociones");\n        }\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "si", validAnswers: ["if"], hint: "Condicional 'si'" },
        { id: "blank_1", placeholder: "sino", validAnswers: ["else"], hint: "Rama alternativa 'sino'" }
      ],
      expectedOutput: "Pocion Lista",
      explanation: "'if' ejecuta el bloque si la condición es verdadera; 'else' si es falsa."
    },
    {
      id: "p_5_drag",
      bossLevel: 5,
      type: "drag_drop",
      title: "Escala de Rangos con else if",
      theme: "Estructuras de decisión if, else if, else",
      instruction: "Arrastra 'if', 'else if' y 'else' para estructurar la clasificación de rango.",
      template: `public class Main {\n    public static void main(String[] args) {\n        int score = 95;\n        {{slot_0}} (score >= 90) {\n            System.out.println("Rango S");\n        } {{slot_1}} (score >= 70) {\n            System.out.println("Rango A");\n        } {{slot_2}} {\n            System.out.println("Rango B");\n        }\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "if" },
        { id: "slot_1", expectedToken: "else if" },
        { id: "slot_2", expectedToken: "else" }
      ],
      tokens: ["else if", "if", "else", "switch"],
      expectedOutput: "Rango S",
      explanation: "El orden de la cascada es if -> else if -> else."
    }
  ],

  6: [
    {
      id: "p_6_fix",
      bossLevel: 6,
      type: "fix_code",
      title: "Detener Fall-Through con break",
      theme: "Sentencia switch, break y default",
      instruction: "El hechicero olvidó la sentencia 'break;' en el case 1, provocando que se ejecute también el case 2. Añade 'break;' para que solo imprima: Espada Magica",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        int opcion = 1;\n        switch (opcion) {\n            case 1:\n                System.out.println("Espada Magica");\n            case 2:\n                System.out.println("Arco Helado");\n                break;\n        }\n    }\n}`,
      expectedOutput: "Espada Magica",
      requiredTokens: ["break;"],
      explanation: "Sin 'break;', la ejecución continúa a los casos inferiores (fall-through)."
    },
    {
      id: "p_6_fill",
      bossLevel: 6,
      type: "fill_blank",
      title: "Estructura switch y default",
      theme: "Sentencia switch, break y default",
      instruction: "Completa la palabra clave 'switch' y el caso por defecto 'default'.",
      template: `public class Main {\n    public static void main(String[] args) {\n        int puerta = 9;\n        {{blank_0}} (puerta) {\n            case 1:\n                System.out.println("Puerta 1");\n                break;\n            {{blank_1}}:\n                System.out.println("Puerta Desconocida");\n                break;\n        }\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "palabra", validAnswers: ["switch"], hint: "Sentencia de selección múltiple" },
        { id: "blank_1", placeholder: "defecto", validAnswers: ["default"], hint: "Caso ejecutado si no coincide ninguno" }
      ],
      expectedOutput: "Puerta Desconocida",
      explanation: "'switch' conmuta casos y 'default' atrapa cualquier valor no previsto."
    },
    {
      id: "p_6_drag",
      bossLevel: 6,
      type: "drag_drop",
      title: "Elementos de un Switch",
      theme: "Sentencia switch, break y default",
      instruction: "Arrastra 'case', 'break' y 'default' a sus posiciones correspondientes.",
      template: `public class Main {\n    public static void main(String[] args) {\n        int sala = 2;\n        switch(sala) {\n            {{slot_0}} 2:\n                System.out.println("Sala Desbloqueada");\n                {{slot_1}};\n            {{slot_2}}:\n                System.out.println("Sala Bloqueada");\n        }\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "case" },
        { id: "slot_1", expectedToken: "break" },
        { id: "slot_2", expectedToken: "default" }
      ],
      tokens: ["break", "case", "default", "continue"],
      expectedOutput: "Sala Desbloqueada",
      explanation: "'case' define la etiqueta, 'break' finaliza el bloque y 'default' maneja alternativas."
    }
  ],

  7: [
    {
      id: "p_7_fix",
      bossLevel: 7,
      type: "fix_code",
      title: "Evitar Bucle Infinito en While",
      theme: "Bucles indeterminados (while, do-while)",
      instruction: "El contador 'paso' no se incrementa, lo que causaría un bucle infinito. Agrega 'paso++;' dentro del cuerpo del while para que cuente 1 y 2, y luego muestre: Salida del Laberinto",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        int paso = 1;\n        while (paso <= 2) {\n            System.out.println("Paso " + paso);\n        }\n        System.out.println("Salida del Laberinto");\n    }\n}`,
      expectedOutput: "Paso 1\nPaso 2\nSalida del Laberinto",
      requiredTokens: ["paso++;"],
      explanation: "Siempre se debe actualizar la variable de control dentro del 'while' para permitir salir del ciclo."
    },
    {
      id: "p_7_fill",
      bossLevel: 7,
      type: "fill_blank",
      title: "Bucle do-while",
      theme: "Bucles indeterminados (while, do-while)",
      instruction: "Completa la estructura 'do-while' que ejecuta su bloque al menos una vez antes de comprobar la condición.",
      template: `public class Main {\n    public static void main(String[] args) {\n        int golpes = 0;\n        {{blank_0}} {\n            System.out.println("Ataque inicial ejecutado");\n        } {{blank_1}} (golpes > 0);\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "haz", validAnswers: ["do"], hint: "Inicia el bloque 'hacer'" },
        { id: "blank_1", placeholder: "mientras", validAnswers: ["while"], hint: "Condición 'mientras'" }
      ],
      expectedOutput: "Ataque inicial ejecutado",
      explanation: "'do { ... } while(condicion);' evalúa la condición al final, garantizando al menos una iteración."
    },
    {
      id: "p_7_drag",
      bossLevel: 7,
      type: "drag_drop",
      title: "Ciclo While Controlado",
      theme: "Bucles indeterminados (while, do-while)",
      instruction: "Arrastra 'while' y el operador de incremento '++' para recorrer 2 iteraciones.",
      template: `public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        {{slot_0}} (i < 2) {\n            System.out.println("Iteracion: " + i);\n            i{{slot_1}};\n        }\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "while" },
        { id: "slot_1", expectedToken: "++" }
      ],
      tokens: ["while", "++", "for", "--"],
      expectedOutput: "Iteracion: 0\nIteracion: 1",
      explanation: "'while' evalúa antes de entrar e 'i++' incrementa el contador."
    }
  ],

  8: [
    {
      id: "p_8_fix",
      bossLevel: 8,
      type: "fix_code",
      title: "Punto y coma fantasma en el For",
      theme: "Estructura for tradicional y for anidado",
      instruction: "Hay un punto y coma ';' al final de 'for (...);' que anula el cuerpo del ciclo. Elimínalo para que imprima: Fuego 0, Fuego 1, Fuego 2",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++); {\n            System.out.println("Fuego " + i);\n        }\n    }\n}`,
      expectedOutput: "Fuego 0\nFuego 1\nFuego 2",
      forbiddenTokens: ["i++); {"],
      requiredTokens: ["i++) {"],
      explanation: "Un punto y coma justo después de la cabecera del for actúa como sentencia vacía y corta la iteración."
    },
    {
      id: "p_8_fill",
      bossLevel: 8,
      type: "fill_blank",
      title: "Cabecera del Bucle For",
      theme: "Estructura for tradicional y for anidado",
      instruction: "Rellena el tipo del contador ('int') y el operador de incremento ('++') para contar de 1 a 3.",
      template: `public class Main {\n    public static void main(String[] args) {\n        for ({{blank_0}} i = 1; i <= 3; i{{blank_1}}) {\n            System.out.println("Ronda: " + i);\n        }\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "tipo", validAnswers: ["int"], hint: "Tipo de dato entero" },
        { id: "blank_1", placeholder: "inc", validAnswers: ["++"], hint: "Operador de incremento" }
      ],
      expectedOutput: "Ronda: 1\nRonda: 2\nRonda: 3",
      explanation: "La cabecera de un bucle for tiene tres partes: inicialización, condición de parada e incremento."
    },
    {
      id: "p_8_drag",
      bossLevel: 8,
      type: "drag_drop",
      title: "Estructura del Ciclo For",
      theme: "Estructura for tradicional y for anidado",
      instruction: "Arrastra 'for', ';' y 'k++' para estructurar la iteración.",
      template: `public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} (int k = 0; k < 2{{slot_1}} {{slot_2}}) {\n            System.out.println("Dragon " + k);\n        }\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "for" },
        { id: "slot_1", expectedToken: ";" },
        { id: "slot_2", expectedToken: "k++" }
      ],
      tokens: ["for", ";", "k++", "while"],
      expectedOutput: "Dragon 0\nDragon 1",
      explanation: "Las secciones del for se separan con punto y coma (;)."
    }
  ],

  9: [
    {
      id: "p_9_fix",
      bossLevel: 9,
      type: "fix_code",
      title: "Evitar ArrayIndexOutOfBoundsException",
      theme: "Vectores, índices, longitud (arr.length)",
      instruction: "El cíclope usó 'numeros.length' como índice (índice 3), que está fuera de rango. Cámbialo por 'numeros.length - 1' o índice 2 para que imprima: Ultimo: 30",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        int[] numeros = {10, 20, 30};\n        int ultimo = numeros[numeros.length];\n        System.out.println("Ultimo: " + ultimo);\n    }\n}`,
      expectedOutput: "Ultimo: 30",
      forbiddenTokens: ["numeros[numeros.length]"],
      explanation: "En Java los arreglos inician en índice 0. El último elemento siempre se ubica en 'length - 1'."
    },
    {
      id: "p_9_fill",
      bossLevel: 9,
      type: "fill_blank",
      title: "Propiedad length de Arreglos",
      theme: "Vectores, índices, longitud (arr.length)",
      instruction: "Completa la propiedad 'length' (sin paréntesis) para consultar el tamaño del arreglo.",
      template: `public class Main {\n    public static void main(String[] args) {\n        int[] gemas = {5, 10, 15, 20};\n        System.out.println("Total gemas: " + gemas.{{blank_0}});\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "propiedad", validAnswers: ["length"], hint: "Atributo de tamaño de arreglos" }
      ],
      expectedOutput: "Total gemas: 4",
      explanation: "En arreglos de Java, 'length' es un campo público final y no lleva paréntesis."
    },
    {
      id: "p_9_drag",
      bossLevel: 9,
      type: "drag_drop",
      title: "Instanciar Arreglo con new",
      theme: "Vectores, índices, longitud (arr.length)",
      instruction: "Arrastra '[]', 'new' y '[0]' para crear un arreglo y asignar su primer valor.",
      template: `public class Main {\n    public static void main(String[] args) {\n        int{{slot_0}} llaves = {{slot_1}} int[3];\n        llaves{{slot_2}} = 7;\n        System.out.println("Primera llave: " + llaves[0]);\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "[]" },
        { id: "slot_1", expectedToken: "new" },
        { id: "slot_2", expectedToken: "[0]" }
      ],
      tokens: ["new", "[]", "[0]", "()"],
      expectedOutput: "Primera llave: 7",
      explanation: "'int[]' declara el arreglo, 'new' reserva memoria y '[0]' accede al primer índice."
    }
  ],

  10: [
    {
      id: "p_10_fix",
      bossLevel: 10,
      type: "fix_code",
      title: "Comparar Cadenas con .equals()",
      theme: "Clase String, métodos length(), charAt(), equals()",
      instruction: "La sirena comparó objetos String con '=='. Modifícalo para usar '.equals(\"Heroe\")' y lograr que imprima: Acceso Autorizado",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        String clave = new String("Heroe");\n        if (clave == "Heroe") {\n            System.out.println("Acceso Autorizado");\n        } else {\n            System.out.println("Bloqueado");\n        }\n    }\n}`,
      expectedOutput: "Acceso Autorizado",
      requiredTokens: ['clave.equals("Heroe")'],
      forbiddenTokens: ['clave == "Heroe"'],
      explanation: "'==' compara referencias en memoria. Para comparar el contenido de texto se debe usar '.equals()'."
    },
    {
      id: "p_10_fill",
      bossLevel: 10,
      type: "fill_blank",
      title: "Métodos length() y charAt()",
      theme: "Clase String, métodos length(), charAt(), equals()",
      instruction: "Completa los métodos 'length' (con paréntesis) y 'charAt' para consultar la longitud y el primer carácter.",
      template: `public class Main {\n    public static void main(String[] args) {\n        String texto = "JAVA";\n        int len = texto.{{blank_0}}();\n        char primero = texto.{{blank_1}}(0);\n        System.out.println("Len: " + len + ", Primero: " + primero);\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "metodo", validAnswers: ["length"], hint: "Método de longitud en String" },
        { id: "blank_1", placeholder: "metodo", validAnswers: ["charAt"], hint: "Obtiene el carácter en una posición" }
      ],
      expectedOutput: "Len: 4, Primero: J",
      explanation: "En String, '.length()' devuelve la cantidad de caracteres y '.charAt(0)' el carácter en la posición 0."
    },
    {
      id: "p_10_drag",
      bossLevel: 10,
      type: "drag_drop",
      title: "Invocación de Métodos de String",
      theme: "Clase String, métodos length(), charAt(), equals()",
      instruction: "Arrastra 'equals' y 'length' a sus posiciones correspondientes en la llamada.",
      template: `public class Main {\n    public static void main(String[] args) {\n        String palabra = "Magia";\n        boolean coincide = palabra.{{slot_0}}("Magia");\n        int total = palabra.{{slot_1}}();\n        System.out.println("Coincide: " + coincide + " Total: " + total);\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "equals" },
        { id: "slot_1", expectedToken: "length" }
      ],
      tokens: ["equals", "length", "charAt", "compare"],
      expectedOutput: "Coincide: true Total: 5",
      explanation: "equals compara contenido y length devuelve la cantidad de caracteres."
    }
  ],

  11: [
    {
      id: "p_11_fix",
      bossLevel: 11,
      type: "fix_code",
      title: "Parámetros en Llamada de Método",
      theme: "Definición e invocación de funciones y parámetros",
      instruction: "El método 'calcularDanio' requiere 2 parámetros enteros (base y bono), pero solo se le envió 1. Añade el segundo argumento (5) en la llamada para que imprima: Daño Total: 25",
      initialCode: `public class Main {\n    public static int calcularDanio(int base, int bono) {\n        return base + bono;\n    }\n    public static void main(String[] args) {\n        int danio = calcularDanio(20);\n        System.out.println("Daño Total: " + danio);\n    }\n}`,
      expectedOutput: "Daño Total: 25",
      requiredTokens: ["calcularDanio(20, 5)"],
      explanation: "Los métodos deben invocarse con el número exacto y tipos de parámetros definidos en su firma."
    },
    {
      id: "p_11_fill",
      bossLevel: 11,
      type: "fill_blank",
      title: "Firma de Método con Parámetros",
      theme: "Definición e invocación de funciones y parámetros",
      instruction: "Define el tipo de retorno ('int') y el tipo del segundo parámetro ('int') en la firma del método.",
      template: `public class Main {\n    public static {{blank_0}} multiplicar(int x, {{blank_1}} y) {\n        return x * y;\n    }\n    public static void main(String[] args) {\n        System.out.println("Resultado: " + multiplicar(4, 5));\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "retorno", validAnswers: ["int"], hint: "Tipo de valor retornado" },
        { id: "blank_1", placeholder: "tipo", validAnswers: ["int"], hint: "Tipo del parámetro y" }
      ],
      expectedOutput: "Resultado: 20",
      explanation: "Cada parámetro en Java debe llevar su tipo explícito, al igual que el tipo de retorno del método."
    },
    {
      id: "p_11_drag",
      bossLevel: 11,
      type: "drag_drop",
      title: "Estructurar Parámetros de Función",
      theme: "Definición e invocación de funciones y parámetros",
      instruction: "Arrastra 'static', 'int' y el nombre de la función 'sumar' a la declaración e invocación.",
      template: `public class Main {\n    public {{slot_0}} {{slot_1}} sumar(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        System.out.println("Suma: " + {{slot_2}}(10, 15));\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "static" },
        { id: "slot_1", expectedToken: "int" },
        { id: "slot_2", expectedToken: "sumar" }
      ],
      tokens: ["static", "int", "sumar", "void"],
      expectedOutput: "Suma: 25",
      explanation: "El método estático devuelve un int y es invocado por su nombre 'sumar'."
    }
  ],

  12: [
    {
      id: "p_12_fix",
      bossLevel: 12,
      type: "fix_code",
      title: "Sentencia Return Faltante",
      theme: "Valores de retorno y métodos void",
      instruction: "El método 'obtenerVida' declara que devuelve 'int', pero olvidó la sentencia 'return'. Agrega 'return vida;' para que compile y muestre: Vida Valquiria: 100",
      initialCode: `public class Main {\n    public static int obtenerVida() {\n        int vida = 100;\n    }\n    public static void main(String[] args) {\n        System.out.println("Vida Valquiria: " + obtenerVida());\n    }\n}`,
      expectedOutput: "Vida Valquiria: 100",
      requiredTokens: ["return vida;"],
      explanation: "Cualquier método que no sea 'void' debe devolver obligatoriamente un valor con 'return'."
    },
    {
      id: "p_12_fill",
      bossLevel: 12,
      type: "fill_blank",
      title: "Método Void vs Retorno",
      theme: "Valores de retorno y métodos void",
      instruction: "Usa 'void' para el método que solo muestra un mensaje y 'return' para devolver el valor numérico.",
      template: `public class Main {\n    public static {{blank_0}} saludar() {\n        System.out.println("Honor y Gloria");\n    }\n    public static int darBono() {\n        {{blank_1}} 50;\n    }\n    public static void main(String[] args) {\n        saludar();\n        System.out.println("Bono: " + darBono());\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "tipo", validAnswers: ["void"], hint: "Indica ausencia de retorno" },
        { id: "blank_1", placeholder: "palabra", validAnswers: ["return"], hint: "Palabra para devolver resultado" }
      ],
      expectedOutput: "Honor y Gloria\nBono: 50",
      explanation: "'void' indica que no se devuelve ningún valor; 'return' devuelve el resultado a quien invocó."
    },
    {
      id: "p_12_drag",
      bossLevel: 12,
      type: "drag_drop",
      title: "Ensamblar Retorno de Función",
      theme: "Valores de retorno y métodos void",
      instruction: "Arrastra 'int', 'return' y ';' para armar la función de cálculo.",
      template: `public class Main {\n    public static {{slot_0}} doblar(int n) {\n        {{slot_1}} n * 2{{slot_2}}\n    }\n    public static void main(String[] args) {\n        System.out.println("Doble: " + doblar(7));\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "int" },
        { id: "slot_1", expectedToken: "return" },
        { id: "slot_2", expectedToken: ";" }
      ],
      tokens: ["int", "return", ";", "void"],
      expectedOutput: "Doble: 14",
      explanation: "El método declara retornar 'int' y devuelve 'n * 2;'."
    }
  ],

  13: [
    {
      id: "p_13_fix",
      bossLevel: 13,
      type: "fix_code",
      title: "Ámbito de Variable Local (Scope)",
      theme: "Scope local, variables de instancia y sombreado",
      instruction: "La variable 'mana' se declaró dentro de las llaves del 'if', por lo que no existe fuera de él. Declárala antes del if ('int mana = 0;') para que imprima: Mana Final: 100",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        boolean activo = true;\n        if (activo) {\n            int mana = 100;\n        }\n        System.out.println("Mana Final: " + mana);\n    }\n}`,
      expectedOutput: "Mana Final: 100",
      requiredTokens: ["int mana = 0;", "mana = 100;"],
      explanation: "Las variables declaradas dentro de un bloque '{ }' tienen alcance local y se destruyen al cerrarse el bloque."
    },
    {
      id: "p_13_fill",
      bossLevel: 13,
      type: "fill_blank",
      title: "Declaración en Ámbito Correcto",
      theme: "Scope local, variables de instancia y sombreado",
      instruction: "Declara la variable de puntuación ('int') en el alcance del método main para que pueda usarse en todo su cuerpo.",
      template: `public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} puntuacion = 0;\n        puntuacion = puntuacion + 50;\n        System.out.println("Score: " + puntuacion);\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "tipo", validAnswers: ["int"], hint: "Tipo para números enteros" }
      ],
      expectedOutput: "Score: 50",
      explanation: "Declarar la variable al inicio del método permite utilizarla en cualquier instrucción posterior de ese método."
    },
    {
      id: "p_13_drag",
      bossLevel: 13,
      type: "drag_drop",
      title: "Delimitar Bloques con Llaves",
      theme: "Scope local, variables de instancia y sombreado",
      instruction: "Arrastra '{' y '}' para encerrar el bloque del método.",
      template: `public class Main {\n    public static void main(String[] args) {{slot_0}}\n        int energia = 80;\n        System.out.println("Energia: " + energia);\n    {{slot_1}}\n}`,
      slots: [
        { id: "slot_0", expectedToken: "{" },
        { id: "slot_1", expectedToken: "}" }
      ],
      tokens: ["{", "}", "(", ")"],
      expectedOutput: "Energia: 80",
      explanation: "Las llaves '{ }' definen el inicio y fin de un bloque de código y su alcance de variables."
    }
  ],

  14: [
    {
      id: "p_14_fix",
      bossLevel: 14,
      type: "fix_code",
      title: "Constructor sin Tipo de Retorno",
      theme: "Constructores, instanciación y operador new",
      instruction: "El constructor de 'Heroe' tiene por error el tipo 'void'. En Java los constructores jamás llevan tipo de retorno. Elimina 'void' para que imprima: Héroe Invocado",
      initialCode: `class Heroe {\n    public void Heroe() {\n        System.out.println("Héroe Invocado");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Heroe h = new Heroe();\n    }\n}`,
      expectedOutput: "Héroe Invocado",
      requiredTokens: ["public Heroe()"],
      forbiddenTokens: ["public void Heroe()"],
      explanation: "Los constructores tienen el mismo nombre de la clase y NUNCA tienen tipo de retorno (ni siquiera void)."
    },
    {
      id: "p_14_fill",
      bossLevel: 14,
      type: "fill_blank",
      title: "Instanciar con Operador new",
      theme: "Constructores, instanciación y operador new",
      instruction: "Usa la palabra clave 'new' para invocar al constructor e instanciar el objeto.",
      template: `class Golem {\n    public Golem() {\n        System.out.println("Golem Creado");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Golem g = {{blank_0}} Golem();\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "operador", validAnswers: ["new"], hint: "Palabra reservada para crear objetos" }
      ],
      expectedOutput: "Golem Creado",
      explanation: "El operador 'new' asigna memoria e invoca al constructor de la clase."
    },
    {
      id: "p_14_drag",
      bossLevel: 14,
      type: "drag_drop",
      title: "Sintaxis de Creación de Objeto",
      theme: "Constructores, instanciación y operador new",
      instruction: "Arrastra el nombre de la clase 'Objeto' y 'new' para instanciar la entidad.",
      template: `class Objeto {\n    public Objeto() {\n        System.out.println("Entidad lista");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        {{slot_0}} obj = {{slot_1}} Objeto();\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "Objeto" },
        { id: "slot_1", expectedToken: "new" }
      ],
      tokens: ["Objeto", "new", "class", "void"],
      expectedOutput: "Entidad lista",
      explanation: "Clase nombre = new Clase(); es la sintaxis estándar de instanciación en Java."
    }
  ],

  15: [
    {
      id: "p_15_fix",
      bossLevel: 15,
      type: "fix_code",
      title: "Acceder a Atributo Private mediante Getter",
      theme: "Modificadores private, public y encapsulamiento",
      instruction: "El paladín declaró 'vida' como private. Acceder directamente con 'p.vida' da error de compilación. Cámbialo por 'p.getVida()' para que imprima: Vida Segura: 100",
      initialCode: `class Paladin {\n    private int vida = 100;\n    public int getVida() {\n        return vida;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Paladin p = new Paladin();\n        System.out.println("Vida Segura: " + p.vida);\n    }\n}`,
      expectedOutput: "Vida Segura: 100",
      requiredTokens: ["p.getVida()"],
      forbiddenTokens: ["p.vida"],
      explanation: "Los campos privados están encapsulados y solo pueden consultarse mediante métodos accesores públicos (getters)."
    },
    {
      id: "p_15_fill",
      bossLevel: 15,
      type: "fill_blank",
      title: "Modificadores private y public",
      theme: "Modificadores private, public y encapsulamiento",
      instruction: "Usa 'private' para ocultar el atributo y 'public' para el getter que lo expone de forma controlada.",
      template: `class Escudo {\n    {{blank_0}} int defensa = 50;\n    {{blank_1}} int getDefensa() {\n        return defensa;\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Escudo e = new Escudo();\n        System.out.println("Defensa: " + e.getDefensa());\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "modificador", validAnswers: ["private"], hint: "Oculto dentro de la clase" },
        { id: "blank_1", placeholder: "modificador", validAnswers: ["public"], hint: "Accesible desde fuera" }
      ],
      expectedOutput: "Defensa: 50",
      explanation: "El encapsulamiento protege el estado interno con 'private' y ofrece acceso a través de métodos 'public'."
    },
    {
      id: "p_15_drag",
      bossLevel: 15,
      type: "drag_drop",
      title: "Estructura de un Setter Encapsulado",
      theme: "Modificadores private, public y encapsulamiento",
      instruction: "Arrastra 'public', 'void' y 'this.nivel' para armar el setter.",
      template: `class Jugador {\n    private int nivel;\n    {{slot_0}} {{slot_1}} setNivel(int nivel) {\n        {{slot_2}} = nivel;\n    }\n    public int getNivel() { return nivel; }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Jugador j = new Jugador();\n        j.setNivel(5);\n        System.out.println("Nivel: " + j.getNivel());\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "public" },
        { id: "slot_1", expectedToken: "void" },
        { id: "slot_2", expectedToken: "this.nivel" }
      ],
      tokens: ["public", "void", "this.nivel", "int"],
      expectedOutput: "Nivel: 5",
      explanation: "Un setter típico es public void setX(tipo x) { this.x = x; }."
    }
  ],

  16: [
    {
      id: "p_16_fix",
      bossLevel: 16,
      type: "fix_code",
      title: "Herencia con palabra clave extends",
      theme: "Herencia con 'extends' y llamada a 'super'",
      instruction: "La clase 'Guerrero' no está heredando de 'Personaje'. Añade 'extends Personaje' para que herede el método 'atacar()' y muestre: ¡Ataque Feroz!",
      initialCode: `class Personaje {\n    public void atacar() {\n        System.out.println("¡Ataque Feroz!");\n    }\n}\nclass Guerrero {\n}\npublic class Main {\n    public static void main(String[] args) {\n        Guerrero g = new Guerrero();\n        g.atacar();\n    }\n}`,
      expectedOutput: "¡Ataque Feroz!",
      requiredTokens: ["class Guerrero extends Personaje"],
      explanation: "En Java, una subclase hereda métodos y atributos de su superclase mediante la palabra clave 'extends'."
    },
    {
      id: "p_16_fill",
      bossLevel: 16,
      type: "fill_blank",
      title: "Invocar al Constructor Padre con super()",
      theme: "Herencia con 'extends' y llamada a 'super'",
      instruction: "Escribe 'extends' en la declaración de clase y 'super' para invocar el constructor de la clase base.",
      template: `class Monstruo {\n    public Monstruo(String tipo) {\n        System.out.println("Monstruo: " + tipo);\n    }\n}\nclass Dragon {{blank_0}} Monstruo {\n    public Dragon() {\n        {{blank_1}}("Dragon de Fuego");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Dragon d = new Dragon();\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "hereda", validAnswers: ["extends"], hint: "Palabra clave de herencia" },
        { id: "blank_1", placeholder: "padre", validAnswers: ["super"], hint: "Llama al constructor de la superclase" }
      ],
      expectedOutput: "Monstruo: Dragon de Fuego",
      explanation: "'extends' define la relación de herencia y 'super()' invoca el constructor de la superclase."
    },
    {
      id: "p_16_drag",
      bossLevel: 16,
      type: "drag_drop",
      title: "Extender Superclase",
      theme: "Herencia con 'extends' y llamada a 'super'",
      instruction: "Arrastra 'extends' y el nombre de la superclase 'Animal'.",
      template: `class Animal {\n    public void rugir() { System.out.println("Rugido salvaje"); }\n}\nclass Leon {{slot_0}} {{slot_1}} {\n}\npublic class Main {\n    public static void main(String[] args) {\n        Leon l = new Leon();\n        l.rugir();\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "extends" },
        { id: "slot_1", expectedToken: "Animal" }
      ],
      tokens: ["extends", "Animal", "implements", "super"],
      expectedOutput: "Rugido salvaje",
      explanation: "class Leon extends Animal permite que Leon adquiera los métodos de Animal."
    }
  ],

  17: [
    {
      id: "p_17_fix",
      bossLevel: 17,
      type: "fix_code",
      title: "Sobreescritura de Método con @Override",
      theme: "Polimorfismo, sobreescritura con @Override",
      instruction: "El método en la subclase tenía un nombre erróneo 'actuar2()' en lugar de 'actuar()'. Corrige el nombre del método para que sobreescriba polimórficamente a la superclase y muestre: Magia Ilusoria",
      initialCode: `class Hechizo {\n    public void actuar() {\n        System.out.println("Magia Basica");\n    }\n}\nclass Ilusion extends Hechizo {\n    @Override\n    public void actuar2() {\n        System.out.println("Magia Ilusoria");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Hechizo h = new Ilusion();\n        h.actuar();\n    }\n}`,
      expectedOutput: "Magia Ilusoria",
      requiredTokens: ["public void actuar()"],
      forbiddenTokens: ["actuar2"],
      explanation: "Para sobreescribir un método (@Override), el nombre y los parámetros deben coincidir exactamente con la superclase."
    },
    {
      id: "p_17_fill",
      bossLevel: 17,
      type: "fill_blank",
      title: "Anotación @Override",
      theme: "Polimorfismo, sobreescritura con @Override",
      instruction: "Escribe la anotación '@Override' antes del método sobreescrito.",
      template: `class Entidad {\n    public void presentarse() { System.out.println("Soy entidad"); }\n}\nclass Mago extends Entidad {\n    {{blank_0}}\n    public void presentarse() {\n        System.out.println("Soy el Gran Ilusionista");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Entidad e = new Mago();\n        e.presentarse();\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "anotacion", validAnswers: ["@Override"], hint: "Anotación para validar sobreescritura" }
      ],
      expectedOutput: "Soy el Gran Ilusionista",
      explanation: "@Override asegura en tiempo de compilación que realmente se está sobreescribiendo un método de la superclase."
    },
    {
      id: "p_17_drag",
      bossLevel: 17,
      type: "drag_drop",
      title: "Referencia Polimórfica",
      theme: "Polimorfismo, sobreescritura con @Override",
      instruction: "Arrastra el tipo de la clase padre 'Forma' y el objeto hijo 'Circulo' para crear la referencia polimórfica.",
      template: `class Forma {\n    public void dibujar() { System.out.println("Forma"); }\n}\nclass Circulo extends Forma {\n    @Override\n    public void dibujar() { System.out.println("Circulo Magico"); }\n}\npublic class Main {\n    public static void main(String[] args) {\n        {{slot_0}} f = new {{slot_1}}();\n        f.dibujar();\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "Forma" },
        { id: "slot_1", expectedToken: "Circulo" }
      ],
      tokens: ["Forma", "Circulo", "Object", "Main"],
      expectedOutput: "Circulo Magico",
      explanation: "Una variable de referencia de tipo superclase (Forma) puede apuntar a cualquier subclase (Circulo)."
    }
  ],

  18: [
    {
      id: "p_18_fix",
      bossLevel: 18,
      type: "fix_code",
      title: "Implementar Interfaz con implements",
      theme: "Palabra clave 'implements' y contratos de métodos",
      instruction: "La clase Titán usó 'extends' con una interfaz. En Java las interfaces se aplican con 'implements'. Cámbialo para que compile y muestre: Golpe Devastador",
      initialCode: `interface Combatiente {\n    void golpear();\n}\nclass Titan extends Combatiente {\n    public void golpear() {\n        System.out.println("Golpe Devastador");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Combatiente c = new Titan();\n        c.golpear();\n    }\n}`,
      expectedOutput: "Golpe Devastador",
      requiredTokens: ["class Titan implements Combatiente"],
      forbiddenTokens: ["class Titan extends Combatiente"],
      explanation: "Las clases usan 'implements' para cumplir el contrato definido por una 'interface'."
    },
    {
      id: "p_18_fill",
      bossLevel: 18,
      type: "fill_blank",
      title: "Declaración de Interface e Implements",
      theme: "Palabra clave 'implements' y contratos de métodos",
      instruction: "Escribe la palabra clave 'interface' para definir el contrato y 'implements' para que la clase lo cumpla.",
      template: `{{blank_0}} Destructible {\n    void destruir();\n}\nclass Muro {{blank_1}} Destructible {\n    public void destruir() {\n        System.out.println("Muro Roto");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Destructible d = new Muro();\n        d.destruir();\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "tipo", validAnswers: ["interface"], hint: "Define un contrato de métodos" },
        { id: "blank_1", placeholder: "palabra", validAnswers: ["implements"], hint: "Aplica el contrato a la clase" }
      ],
      expectedOutput: "Muro Roto",
      explanation: "'interface' declara el conjunto de métodos abstractos e 'implements' los hace obligatorios en la clase."
    },
    {
      id: "p_18_drag",
      bossLevel: 18,
      type: "drag_drop",
      title: "Contrato de Interfaz",
      theme: "Palabra clave 'implements' y contratos de métodos",
      instruction: "Arrastra 'interface' y el modificador 'public' en la implementación del método.",
      template: `{{slot_0}} Poder {\n    void activar();\n}\nclass Reliquia implements Poder {\n    {{slot_1}} void activar() {\n        System.out.println("Poder Activado");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Poder p = new Reliquia();\n        p.activar();\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "interface" },
        { id: "slot_1", expectedToken: "public" }
      ],
      tokens: ["interface", "public", "private", "class"],
      expectedOutput: "Poder Activado",
      explanation: "Los métodos de una interfaz son públicos por defecto; al implementarlos en la clase deben ser 'public'."
    }
  ],

  19: [
    {
      id: "p_19_fix",
      bossLevel: 19,
      type: "fix_code",
      title: "Prevenir NullPointerException",
      theme: "Referencias null, NullPointerException y comprobación",
      instruction: "El demonio invoca 'arma.brillar()' sobre 'arma' cuando esta vale null (provocando NullPointerException). Agrega la verificación 'if (arma != null) { arma.brillar(); } else { System.out.println(\"Arma no equipada\"); }' para manejarlo de forma segura.",
      initialCode: `class Espada {\n    public void brillar() {\n        System.out.println("Luz divina");\n    }\n}\npublic class Main {\n    public static void main(String[] args) {\n        Espada arma = null;\n        arma.brillar();\n    }\n}`,
      expectedOutput: "Arma no equipada",
      requiredTokens: ["if (arma != null)"],
      explanation: "Siempre se debe comprobar que una referencia no sea 'null' antes de invocar métodos sobre ella para evitar NullPointerException."
    },
    {
      id: "p_19_fill",
      bossLevel: 19,
      type: "fill_blank",
      title: "Verificación Anti-Nula",
      theme: "Referencias null, NullPointerException y comprobación",
      instruction: "Completa la condición '!= null' para evaluar que el pergamino no esté vacío.",
      template: `public class Main {\n    public static void main(String[] args) {\n        String pergamino = "Papiro Sagrado";\n        if (pergamino {{blank_0}} {{blank_1}}) {\n            System.out.println("Pergamino encontrado");\n        }\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "op", validAnswers: ["!="], hint: "Operador distinto de" },
        { id: "blank_1", placeholder: "nulo", validAnswers: ["null"], hint: "Referencia vacía en Java" }
      ],
      expectedOutput: "Pergamino encontrado",
      explanation: "'!= null' valida que la variable apunte a una instancia válida en memoria."
    },
    {
      id: "p_19_drag",
      bossLevel: 19,
      type: "drag_drop",
      title: "Manejo de Referencias Nulas",
      theme: "Referencias null, NullPointerException y comprobación",
      instruction: "Arrastra 'null', '!=' y 'else' para estructurar la validación de seguridad.",
      template: `public class Main {\n    public static void main(String[] args) {\n        String gema = {{slot_0}};\n        if (gema {{slot_1}} null) {\n            System.out.println("Gema activa");\n        } {{slot_2}} {\n            System.out.println("Sin gema");\n        }\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "null" },
        { id: "slot_1", expectedToken: "!=" },
        { id: "slot_2", expectedToken: "else" }
      ],
      tokens: ["null", "!=", "else", "=="],
      expectedOutput: "Sin gema",
      explanation: "Si la variable contiene 'null', la rama 'else' se ejecuta evitando excepciones."
    }
  ],

  20: [
    {
      id: "p_20_fix",
      bossLevel: 20,
      type: "fix_code",
      title: "Captura de Excepciones con try-catch",
      theme: "JVM, Bytecode, Garbage Collector y Try-Catch",
      instruction: "El archimago escribió un bloque 'try' pero olvidó el 'catch' correspondiente. Añade 'catch (Exception e) { System.out.println(\"Excepción capturada\"); }' para que el programa maneje el error e imprima: Excepción capturada",
      initialCode: `public class Main {\n    public static void main(String[] args) {\n        try {\n            int resultado = 10 / 0;\n        }\n    }\n}`,
      expectedOutput: "Excepción capturada",
      requiredTokens: ["catch (Exception", "System.out.println(\"Excepción capturada\");"],
      explanation: "Un bloque 'try' debe ir siempre acompañado de al menos un bloque 'catch' o un bloque 'finally'."
    },
    {
      id: "p_20_fill",
      bossLevel: 20,
      type: "fill_blank",
      title: "Bloques try y catch",
      theme: "JVM, Bytecode, Garbage Collector y Try-Catch",
      instruction: "Completa las palabras 'try' para el código vigilado y 'catch' para capturar la excepción.",
      template: `public class Main {\n    public static void main(String[] args) {\n        {{blank_0}} {\n            int x = 50 / 0;\n        } {{blank_1}} (ArithmeticException e) {\n            System.out.println("Error aritmetico controlado");\n        }\n    }\n}`,
      blanks: [
        { id: "blank_0", placeholder: "intenta", validAnswers: ["try"], hint: "Bloque de código protegido" },
        { id: "blank_1", placeholder: "captura", validAnswers: ["catch"], hint: "Bloque que atrapa la excepción" }
      ],
      expectedOutput: "Error aritmetico controlado",
      explanation: "'try' ejecuta el código que puede fallar y 'catch' intercepta la excepción para evitar que el programa se cierre."
    },
    {
      id: "p_20_drag",
      bossLevel: 20,
      type: "drag_drop",
      title: "Estructura try - catch - finally",
      theme: "JVM, Bytecode, Garbage Collector y Try-Catch",
      instruction: "Arrastra 'try', 'catch' y 'finally' en el orden reglamentario de la JVM.",
      template: `public class Main {\n    public static void main(String[] args) {\n        {{slot_0}} {\n            System.out.println("Inicio protegido");\n        } {{slot_1}} (Exception e) {\n            System.out.println("Fallo");\n        } {{slot_2}} {\n            System.out.println("Liberando recursos en JVM");\n        }\n    }\n}`,
      slots: [
        { id: "slot_0", expectedToken: "try" },
        { id: "slot_1", expectedToken: "catch" },
        { id: "slot_2", expectedToken: "finally" }
      ],
      tokens: ["try", "catch", "finally", "throw"],
      expectedOutput: "Inicio protegido\nLiberando recursos en JVM",
      explanation: "try protege la ejecución, catch atrapa errores y finally se ejecuta SIEMPRE para limpiar recursos."
    }
  ]
};
