// JavaScript source code
class tipos {
    constructor(cont, tipo, cualesson) {
        this.cont = cont;
        this.tipo = tipo;
        this.cualesson = cualesson;
    }
    vertipos(){
        return 'los ' + this.tipo + ' son ' + this.cont + ' ' + this.cualesson;
    }
}
class analis {
    comentarios = ['//', '/*', '*/'];
    palabrasclaves = ['while', 'for', 'switch', 'var', 'if', 'else', 'try', 'return', 'class', 'throws', 'throw', 'funtion',
     'super', 'new', 'import', 'do', 'finally', 'false', 'true', 'this'];
    identificadores = ['=', '(', ')', '+', '-', '*', '/', ';', '<', '>'];
    constructor(){
    }
    leer() {
        res = '';
        longitud = 0;
        ch;
        ind= new BufferedReader();
    }
    // separar una cadena por espacio
   /* separar(){
        var palabra = " ";
        var espacio = " ";
       while(i < cadena.length){
           while(cadena.charAt(i) != espacio){
                palabra += this.cadena.charAt(i);
                i++;
           }
           Aqui iria un if para comparar con lo que se vaya a comparar
           i++;
       }

    }
*/
}


