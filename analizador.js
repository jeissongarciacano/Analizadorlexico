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
    identificadores = ['=', '(', ')', '+', '-', '*', '/', ';', '<', '>', '&&', '||', '!'];
    constructor(){
    }
    leer() {
        res = '';
        longitud = 0;
        ch;
        ind= new BufferedReader();
    }
  escomentario(palabra){
        r = false;
        for (let index = 0; index < this.comentarios.length; index++) {
            if(palabra == this.comentarios[index]){
                r=true;
            }
        }
        return r;
    }
    espalabraclave(palabra){
        r = false;
        for (let index = 0; index < this.palabrasclaves.length; index++) {
            if(palabra == this.palabrasclaves[index]){
                r=true;
            }
        }
        return r;
    }
    esidentificador(palabra){
        r = false;
        for (let index = 0; index < this.identificadores.length; index++) {
            if(palabra == this.identificadores[index]){
                r=true;
            }
        }
        return r;
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


