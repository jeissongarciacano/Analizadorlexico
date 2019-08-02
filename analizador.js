// JavaScript source code
class tipos {
    // se ingresa tipo(String) cualesson(token) cont(poscion en renglon) reng(renglon)
    constructor(tipo, cualesson , cont , reng) {
        this.reng = reng;
        this.tipo = tipo;
        this.cualesson = cualesson;
        this.cont =cont;
    }
    //toString()
    vertipos(){
        return this.tipo + ' se ubica en reglon: ' + this.reng + ' y en pocision: ' + this.cont  + ' y son: ' + this.cualesson;
    }
}
class analis { 
    // datos necesarion para comparacion
    comentarios = ['//', '/*', '*/'];
    palabrasclaves = ['while', 'for', 'switch', 'var', 'if', 'else', 'try', 'return', 'class', 'throws', 'throw', 'funtion',
     'super', 'new', 'import', 'do', 'finally', 'false', 'true', 'this'];
    identificadores = ['=', '(', ')', '+', '-', '*', '/', ';', '<', '>'];
    constructor(){
        this.data= new Array();
    }
    //imprime el arreglo data en consola
    imprimirdata(){
        for (let index = 0; index < this.data.length; index++) {
            console.log(this.data[index].vertipos());
        }
    }
    // verificadores de tipo, devuelven un booleano y se ingresa una palabra que se compara con los 
    // arreglos iniciales
    escomentario(palabra){
        var r = false;
        for (let index = 0; index < this.comentarios.length; index++) {
            if(palabra == this.comentarios[index]){
                r=true;
            }
        }
        return r;
    }
    espalabraclave(palabra){
        var r = false;
        for (let index = 0; index < this.palabrasclaves.length; index++) {
            if(palabra == this.palabrasclaves[index]){
                r=true;
            }
        }
        return r;
    }
    esidentificador(palabra){
        var r = false;
        for (let index = 0; index < this.identificadores.length; index++) {
            if(palabra == this.identificadores[index]){
                r=true;
            }
        }
        return r;
    }
    // ejecuta los verificadores anteriores y crea el objeto que ingresa al arreglo data y se almacenan ahi
    buscadortipo(palabra, rengaux, contaux){
        if(this.escomentario(palabra)){
                var x= new tipos('comentario', palabra, contaux, rengaux);
        }
        else if(this.esidentificador(palabra)){
                var x= new tipos('identificador', palabra, contaux, rengaux);
        }
        else if(this.espalabraclave(palabra)){
                var x= new tipos('palabra reservada', palabra, contaux, rengaux);
        }
        else{
                var x= new tipos('otro', palabra, contaux, rengaux);
            }
            this.data.push(x);
        }
    // lee la cadena ingresada y ejecuta el resto del codigo
    lectorcad(cad){
        var arrayaux = cad.split(' ');
        var auxreng = 1;
        var contaux = 0;
        for (let index = 0; index < arrayaux.length; index++) {
            this.buscadortipo(arrayaux[index],auxreng, contaux);
            contaux = contaux+1;
        }
    }
  /*      readTextS(file){
        var arrayData = new Array();
        var archivoTxt = new XMLHttpREquest();
        var fileRuta = file;
        archivoTXt.open("GET",fileRuta,false);
        archivoTxt.send(null);
        var txt = archivoTxt.responseText;
        
        for(var i = 0; i < txt.length;i++){
            palabra += txt.charAt(i);
            if (txt.charAt(i+1) == espacio){
                arrayData.push(palabra);
            }	
        }
       }*/
    }
    var main = new analis();
    main.lectorcad('while ( ) for if = hola /* while');
    main.imprimirdata();

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


