// js/engine/java_evaluator.js
// Mini Compilador, Validador y Evaluador de Java Seguro para Code Quest

class JavaEvaluator {
  constructor() {
    this.maxLoopIterations = 1500;
  }

  // Análisis y verificación sintáctica de Java previo a la ejecución
  checkSyntax(code) {
    if (!code || typeof code !== 'string') {
      return { valid: false, error: "El código está vacío.", line: 1 };
    }

    const lines = code.split('\n');

    // 1. Balanceo de llaves, paréntesis y corchetes
    let braceCount = 0;
    let parenCount = 0;
    let bracketCount = 0;
    let inBlockComment = false;

    for (let i = 0; i < lines.length; i++) {
      const lineNum = i + 1;
      let line = lines[i].trim();

      // Manejo de comentarios multilínea
      if (inBlockComment) {
        if (line.includes('*/')) {
          inBlockComment = false;
          line = line.substring(line.indexOf('*/') + 2);
        } else {
          continue;
        }
      }

      if (line.includes('/*')) {
        inBlockComment = true;
        line = line.substring(0, line.indexOf('/*'));
      }

      // Quitar comentarios de una línea
      if (line.includes('//')) {
        line = line.substring(0, line.indexOf('//'));
      }

      // Quitar literales de cadena para no contar llaves dentro de strings
      const strippedLine = line.replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, '""');

      // Comprobar mayúsculas de System
      if (/\bsystem\.out\b/.test(strippedLine)) {
        return {
          valid: false,
          error: "Solucion.java:" + lineNum + ": error: cannot find symbol 'system'\n  ¿Quisiste decir 'System'? En Java los nombres de clases inician con mayúscula.",
          line: lineNum
        };
      }

      // Comprobar tipo string en minúscula
      if (/\bstring\s+[a-zA-Z0-9_]+\s*=/.test(strippedLine)) {
        return {
          valid: false,
          error: "Solucion.java:" + lineNum + ": error: cannot find symbol 'string'\n  En Java la clase para texto es 'String' con 'S' mayúscula.",
          line: lineNum
        };
      }

      // Comprobar punto y coma para instrucciones comunes
      const isStatement = /^(int|double|float|boolean|char|String|long|short|byte|[A-Z][a-zA-Z0-9_]*)\s+[a-zA-Z0-9_]+/.test(strippedLine)
        || /^[a-zA-Z0-9_.]+\s*\(.*\)/.test(strippedLine)
        || /^[a-zA-Z0-9_.]+\s*=/.test(strippedLine)
        || /^return\b/.test(strippedLine)
        || /^System\.out\.(println|print)\b/.test(strippedLine);

      const isHeaderOrBlock = /[{};]$/.test(strippedLine)
        || strippedLine.startsWith('if')
        || strippedLine.startsWith('else')
        || strippedLine.startsWith('for')
        || strippedLine.startsWith('while')
        || strippedLine.startsWith('switch')
        || strippedLine.startsWith('case')
        || strippedLine.startsWith('default')
        || strippedLine.startsWith('try')
        || strippedLine.startsWith('catch')
        || strippedLine.startsWith('finally')
        || strippedLine.startsWith('@')
        || strippedLine.startsWith('public class')
        || strippedLine.startsWith('class ')
        || strippedLine.startsWith('interface ')
        || strippedLine === '';

      if (isStatement && !isHeaderOrBlock) {
        return {
          valid: false,
          error: "Solucion.java:" + lineNum + ": error: ';' expected\n  Instrucción: " + lines[i].trim(),
          line: lineNum
        };
      }

      for (let char of strippedLine) {
        if (char === '{') braceCount++;
        else if (char === '}') braceCount--;
        else if (char === '(') parenCount++;
        else if (char === ')') parenCount--;
        else if (char === '[') bracketCount++;
        else if (char === ']') bracketCount--;

        if (braceCount < 0) {
          return { valid: false, error: "Solucion.java:" + lineNum + ": error: '}' inesperada sin llave de apertura correspondiente.", line: lineNum };
        }
        if (parenCount < 0) {
          return { valid: false, error: "Solucion.java:" + lineNum + ": error: ')' inesperado sin paréntesis de apertura correspondiente.", line: lineNum };
        }
        if (bracketCount < 0) {
          return { valid: false, error: "Solucion.java:" + lineNum + ": error: ']' inesperado sin corchete de apertura correspondiente.", line: lineNum };
        }
      }
    }

    if (braceCount !== 0) {
      return { valid: false, error: "Solucion.java: error: Llaves '{ }' desbalanceadas. Falta cerrar " + Math.abs(braceCount) + " llave(s).", line: lines.length };
    }
    if (parenCount !== 0) {
      return { valid: false, error: "Solucion.java: error: Paréntesis '( )' desbalanceados. Falta cerrar " + Math.abs(parenCount) + " paréntesis.", line: lines.length };
    }
    if (bracketCount !== 0) {
      return { valid: false, error: "Solucion.java: error: Corchetes '[ ]' desbalanceados. Falta cerrar " + Math.abs(bracketCount) + " corchete(s).", line: lines.length };
    }

    if (/\btry\s*\{/.test(code) && !/\bcatch\b/.test(code) && !/\bfinally\b/.test(code)) {
      return {
        valid: false,
        error: "Solucion.java: error: 'try' without 'catch', 'finally' or resource declarations",
        line: 1
      };
    }

    return { valid: true };
  }

  normalizeOutput(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .trim();
  }

  // Evaluar código en entorno emulado seguro
  evaluate(code, challenge) {
    const logs = [];
    logs.push("> javac Solucion.java");

    // 1. Verificación sintáctica
    const syntaxCheck = this.checkSyntax(code);
    if (!syntaxCheck.valid) {
      logs.push("❌ Fallo en compilación:");
      logs.push(syntaxCheck.error);
      return {
        success: false,
        errorType: 'compile_error',
        errorMsg: syntaxCheck.error,
        logs: logs,
        output: ''
      };
    }

    // 2. Comprobar tokens requeridos específicos del desafío
    if (challenge && Array.isArray(challenge.requiredTokens)) {
      for (const token of challenge.requiredTokens) {
        if (!code.includes(token)) {
          const msg = "Solucion.java: error: El código debe incluir el elemento requerido: '" + token + "'";
          logs.push("❌ Error de requisitos pedagógicos:");
          logs.push(msg);
          return {
            success: false,
            errorType: 'requirement_missing',
            errorMsg: msg,
            logs: logs,
            output: ''
          };
        }
      }
    }

    // 3. Comprobar tokens prohibidos (ej. bugs iniciales)
    if (challenge && Array.isArray(challenge.forbiddenTokens)) {
      for (const token of challenge.forbiddenTokens) {
        if (code.includes(token)) {
          const msg = "Solucion.java: error: El código aún conserva el error original o elemento inválido: '" + token + "'";
          logs.push("❌ Error de corrección:");
          logs.push(msg);
          return {
            success: false,
            errorType: 'forbidden_token',
            errorMsg: msg,
            logs: logs,
            output: ''
          };
        }
      }
    }

    // 4. Verificación de validación personalizada si el desafío la define
    if (challenge && typeof challenge.customValidator === 'function') {
      const customRes = challenge.customValidator(code);
      if (customRes && !customRes.valid) {
        logs.push("❌ Error en solución:");
        logs.push(customRes.error || "La solución no cumple las condiciones del ejercicio.");
        return {
          success: false,
          errorType: 'custom_validation_error',
          errorMsg: customRes.error,
          logs: logs,
          output: ''
        };
      }
    }

    logs.push("✔ Compilación exitosa (0 errores)");
    logs.push("> java Solucion");

    // 5. Transpilación a entorno de ejecución seguro con emulación de System.out
    let outputBuffer = "";

    try {
      const execResult = this.simulateJavaExecution(code);
      outputBuffer = execResult.output;

      if (execResult.error) {
        logs.push("❌ Excepción en tiempo de ejecución:");
        logs.push(execResult.error);
        return {
          success: false,
          errorType: 'runtime_error',
          errorMsg: execResult.error,
          logs: logs,
          output: outputBuffer
        };
      }
    } catch (err) {
      let errStr = err.message || String(err);
      if (errStr.includes('Cannot read properties of null') || errStr.includes('null is not an object')) {
        errStr = "java.lang.NullPointerException: Cannot invoke method because object reference is null.";
      }
      const runtimeError = "java.lang.Exception: " + errStr;
      logs.push("❌ Excepción en ejecución:");
      logs.push(runtimeError);
      return {
        success: false,
        errorType: 'runtime_error',
        errorMsg: runtimeError,
        logs: logs,
        output: outputBuffer
      };
    }

    // 6. Comparación de salida obtenida contra salida esperada
    const normObtained = this.normalizeOutput(outputBuffer);
    const normExpected = this.normalizeOutput(challenge ? challenge.expectedOutput : '');

    logs.push(outputBuffer ? outputBuffer : "[Sin salida de consola]");

    if (normObtained === normExpected) {
      logs.push("========================================");
      logs.push("✔ ¡SALIDA EXACTA Y CORRECTA!");
      return {
        success: true,
        output: outputBuffer,
        logs: logs
      };
    } else {
      logs.push("========================================");
      logs.push("❌ La salida obtenida no coincide con la esperada.");
      logs.push("  Esperada: \"" + normExpected + "\"");
      logs.push("  Obtenida: \"" + normObtained + "\"");
      return {
        success: false,
        errorType: 'output_mismatch',
        errorMsg: "La salida obtenida no coincide con la esperada.\nEsperada: " + normExpected + "\nObtenida: " + normObtained,
        obtained: normObtained,
        expected: normExpected,
        logs: logs,
        output: outputBuffer
      };
    }
  }

  // Emulación segura de ejecución de construcciones Java en sandbox
  simulateJavaExecution(javaCode) {
    let output = "";

    function __outPrintln(...args) {
      const line = args.map(a => (a === null ? "null" : (a === undefined ? "undefined" : String(a.valueOf ? a.valueOf() : a)))).join('');
      output += line + "\n";
    }

    function __outPrint(...args) {
      const part = args.map(a => (a === null ? "null" : (a === undefined ? "undefined" : String(a.valueOf ? a.valueOf() : a)))).join('');
      output += part;
    }

    let jsCode = javaCode;

    // Detectar ArrayIndexOutOfBounds en inicializaciones típicas:
    const oobMatch = jsCode.match(/([a-zA-Z0-9_]+)\[\s*\1\.length\s*\]/);
    if (oobMatch) {
      return {
        output: output,
        error: "java.lang.ArrayIndexOutOfBoundsException: Index " + oobMatch[1] + ".length is out of bounds for array length."
      };
    }

    // 1. Strings: Java .length() -> JS .length
    jsCode = jsCode.replace(/\.length\s*\(\s*\)/g, '.length');

    // 2. Simulación de ArithmeticException en división por cero entera
    jsCode = jsCode.replace(/\/\s*0(?![.0-9])/g, '/ (function(){ throw new Error("java.lang.ArithmeticException: / by zero"); })()');

    // 3. Literal de arreglos en Java: int[] a = {1, 2, 3}; -> let a = [1, 2, 3];
    jsCode = jsCode.replace(/=\s*\{([^{}]+)\}\s*;/g, '= [$1];');

    // 2. catch (Exception e) o catch (ArithmeticException e) -> catch(e)
    jsCode = jsCode.replace(/catch\s*\(\s*[A-Za-z0-9_]+\s+([a-zA-Z0-9_]+)\s*\)/g, 'catch ($1)');

    // 3. Remover anotaciones como @Override
    jsCode = jsCode.replace(/@Override\s*/g, '');

    // 4. Remover interfaces
    jsCode = jsCode.replace(/interface\s+[A-Za-z0-9_]+\s*\{[^}]*\}/g, '');
    jsCode = jsCode.replace(/\bimplements\s+[A-Za-z0-9_,\s]+/g, '');

    // 5. System.out
    jsCode = jsCode.replace(/System\.out\.println\s*\(/g, '__outPrintln(');
    jsCode = jsCode.replace(/System\.out\.print\s*\(/g, '__outPrint(');

    // 6. Constructores en clases Java (limpiando tipos de parámetros): public Nombre(...) { -> constructor(...) {
    jsCode = jsCode.replace(/public\s+([A-Z][a-zA-Z0-9_]*)\s*\(([^)]*)\)\s*\{/g, (match, className, params) => {
      const cleanP = params.replace(/\b(int|double|float|boolean|char|String|long|short|byte|[A-Z][a-zA-Z0-9_]*)\s+/g, '');
      return `constructor(${cleanP}) {`;
    });

    // 7. Métodos y atributos dentro de clases
    jsCode = jsCode.replace(/\b(public|private|protected)\s+(void|int|double|boolean|String|char|[A-Z][a-zA-Z0-9_]*)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{/g, (match, acc, ret, mName, params) => {
      const cleanP = params.replace(/\b(int|double|float|boolean|char|String|long|short|byte|[A-Z][a-zA-Z0-9_]*)\s+/g, '');
      return `${mName}(${cleanP}) {`;
    });
    jsCode = jsCode.replace(/\b(public|private|protected)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{/g, (match, acc, mName, params) => {
      const cleanP = params.replace(/\b(int|double|float|boolean|char|String|long|short|byte|[A-Z][a-zA-Z0-9_]*)\s+/g, '');
      return `${mName}(${cleanP}) {`;
    });

    // 7b. Soporte de campos de clase y enlace con this (mediante conteo de llaves anidadas).
    let classIdx = 0;
    while (true) {
      const match = jsCode.substring(classIdx).match(/\bclass\s+(?!Main\b)([A-Z][a-zA-Z0-9_]*)[^{]*\{/);
      if (!match) break;
      const startBrace = classIdx + match.index + match[0].length - 1;
      let depth = 1, endBrace = -1;
      for (let i = startBrace + 1; i < jsCode.length; i++) {
        if (jsCode[i] === '{') depth++;
        else if (jsCode[i] === '}') {
          depth--;
          if (depth === 0) { endBrace = i; break; }
        }
      }
      if (endBrace === -1) break;

      let classBody = jsCode.substring(startBrace + 1, endBrace);
      const fieldMatches = [...classBody.matchAll(/(?:private|public|protected)?\s*(?:int|double|float|boolean|char|String|[A-Z][a-zA-Z0-9_]*)\s+([a-zA-Z0-9_]+)\s*(?:=|;)/g)];
      for (const fMatch of fieldMatches) {
        const fieldName = fMatch[1];
        if (fieldName === 'class' || fieldName === 'return') continue;
        const returnRegex = new RegExp('\\breturn\\s+' + fieldName + '\\s*;', 'g');
        classBody = classBody.replace(returnRegex, 'return this.' + fieldName + ';');
      }

      jsCode = jsCode.substring(0, startBrace + 1) + classBody + jsCode.substring(endBrace);
      classIdx = startBrace + 1 + classBody.length + 1;
    }

    jsCode = jsCode.replace(/\b(private|public|protected)\s+(int|double|boolean|String|char|[A-Z][a-zA-Z0-9_]*)\s+/g, '');
    jsCode = jsCode.replace(/\b(private|public|protected)\s+/g, '');

    // 8. Extraer main y clase Main ANTES de convertir tipos
    let mainBody = '';
    const mainMatch = jsCode.match(/(?:public\s+)?(?:static\s+)?void\s+main\s*\([^)]*\)\s*\{/);
    if (mainMatch) {
      const braceIdx = jsCode.indexOf('{', mainMatch.index);
      let depth = 1, endIdx = -1;
      for (let i = braceIdx + 1; i < jsCode.length; i++) {
        if (jsCode[i] === '{') depth++;
        else if (jsCode[i] === '}') {
          depth--;
          if (depth === 0) { endIdx = i; break; }
        }
      }
      if (endIdx !== -1) {
        mainBody = jsCode.substring(braceIdx + 1, endIdx);
        const before = jsCode.substring(0, mainMatch.index);
        const after = jsCode.substring(endIdx + 1);
        jsCode = before + '\n' + after;
        jsCode = jsCode.replace(/(?:public\s+)?class\s+Main\s*\{/g, '');
        const lastBrace = jsCode.lastIndexOf('}');
        if (lastBrace !== -1) {
          jsCode = jsCode.substring(0, lastBrace) + jsCode.substring(lastBrace + 1);
        }
      }
    }

    // 9. Métodos estáticos auxiliares
    jsCode = jsCode.replace(/(?:public\s+)?(?:static\s+)?(void|int|double|boolean|String|[A-Z][a-zA-Z0-9_]*)\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*\{/g, (match, ret, fnName, params) => {
      const cleanP = params.replace(/\b(int|double|boolean|String|char|[A-Z][a-zA-Z0-9_]*)\s+/g, '');
      return `function ${fnName}(${cleanP}) {`;
    });

    // 10. Unir clases/funciones externas con mainBody
    let finalCode = jsCode + '\n;(function() {\n' + mainBody + '\n})();';

    // 11. Declaración e instanciación de arrays: int[] arr = new int[N]; -> let arr = new Array(N).fill(0);
    finalCode = finalCode.replace(/new\s+(int|double|float|boolean|char|String)\s*\[\s*([^\]]+)\s*\]/g, 'new Array($2).fill(0)');

    // 12. Reemplazar declaraciones de tipos primitivos por let
    finalCode = finalCode.replace(/\b(int|double|float|boolean|char|String|long|short|byte)\s*\[\s*\]\s+/g, 'let ');
    finalCode = finalCode.replace(/\b(int|double|float|boolean|char|String|long|short|byte)\s+/g, 'let ');

    // 13. Reemplazar declaraciones de tipos de objeto personalizados: NombreClase obj = ... -> let obj = ...
    finalCode = finalCode.replace(/\b([A-Z][a-zA-Z0-9_]*)\s+([a-zA-Z0-9_]+)\s*=/g, (match, className, varName) => {
      if (className === 'System' || className === 'Main' || className === 'Math') return match;
      return `let ${varName} =`;
    });

    let jsTranspiled = finalCode;

    // Inyectar guardia de bucle infinito en for y while
    let loopGuardCounter = 0;
    jsTranspiled = jsTranspiled.replace(/(\bfor\s*\([^)]*\)\s*\{)/g, `$1 let __guard_${++loopGuardCounter} = 0; if (++__guard_${loopGuardCounter} > 1200) throw new Error("Tiempo de ejecución excedido: Posible bucle infinito"); `);
    jsTranspiled = jsTranspiled.replace(/(\bwhile\s*\([^)]*\)\s*\{)/g, `$1 let __guard_${++loopGuardCounter} = 0; if (++__guard_${loopGuardCounter} > 1200) throw new Error("Tiempo de ejecución excedido: Posible bucle infinito"); `);

    // Preparar polyfill de String para simular .equals() en objetos creados con new String()
    const stringPolyfill = `
      if (!String.prototype.equals) {
        String.prototype.equals = function(other) {
          if (other === null || other === undefined) return false;
          return this.valueOf() === (other.valueOf ? other.valueOf() : other);
        };
      }
    `;

    // Ejecutar de forma segura con Function
    const sandboxFn = new Function('__outPrintln', '__outPrint', `
      "use strict";
      ${stringPolyfill}
      try {
        ${jsTranspiled}
      } catch (e) {
        throw e;
      }
    `);

    sandboxFn(__outPrintln, __outPrint);

    return { output: output, error: null };
  }
}

// Instancia global del evaluador
const javaEvaluator = new JavaEvaluator();
