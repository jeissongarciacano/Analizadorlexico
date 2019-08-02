// JavaScript source code
class tipos {
    constructor(tipo, cualesson) {
        this.cont = 1;
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
       this.data= new Array();
    }
imprimirdata(){
        for (let index = 0; index < this.data.length; index++) {
            console.log(this.data[index].vertipos());
        }
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
//sacado de stack... mire si puede funcionar
    readText(file){
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function (){
            if(rawFile.readyState === 4){
                if(rawFile.status === 200 || rawFile.status == 0){
                    var allText = rawFile.responseText;
                    alert(allText);
                }
            }
        }
        rawFile.send(null);
    }
    // este es el que hice para separar palabras por espacios en un array siguiendo la documentacion de javaScript por que no entendi el metodo de arriba
   readTextS(file){
        var arrayData = new Array():
        var archivoTxt = new XMLHttpREquest();
        var fileRuta = file;
        archivoTXtx.open("GET",fileRuta,false);
        var txtx.send(null);
        var txt = archivoTxt.responseText;
        var palabra =" ";
        var espacio = " ";
        for(var i = 0; i < txt.length;i++){
            palabra += txt.charAt(i);
            if (txt.charAt(i+1) == espacio){
                arrayData.push(palabra);
            }	
        }
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


