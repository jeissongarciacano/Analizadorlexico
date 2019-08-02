// JavaScript source code
class tipos {
    // se ingresa tipo(String) cualesson(token) cont(poscion en renglon) reng(renglon)
    constructor(tipo, cualesson , cont , reng) {
        this.reng = reng;
        this.tipo = tipo;
        this.cualesson = cualesson;
        this.cont =cont;
    }
}
class analis { 
    // datos necesarion para comparacion
    comentarios = ['//', '/*', '*/'];
    palabrasclaves = ['while', 'for', 'switch', 'var', 'if', 'else', 'try', 'return', 'class', 'throws', 'throw', 'funtion',
     'super', 'new', 'import', 'do', 'finally', 'false', 'true', 'this'];
    identificadores = ['=', '+', '-', '*', '/', ';', '<', '>'];
    tipodato = ['var', 'let', 'long'];
    separador = [ '(', ')', ';','{', '}' ]
    constructor(){
        this.data= new Array();
    }
    //imprime el arreglo data en la pantalla 
    imprimirdata(){
        document.write("<table border= '3'>"); //crea la tabla
        document.writeln("<td>" + 'palabra' + "</td>");
        document.writeln("<td>" + 'tipo' + "</td>");
        document.writeln("<td>" + 'renglon' + "</td>");
        document.writeln("<td>" + 'posicion' + "</td>");
        for (let index = 0; index < this.data.length; index++) {
            document.write("<tr>");
            document.writeln("<td>" + this.data[index].cualesson + "</td>");
            document.writeln("<td>" + this.data[index].tipo + "</td>");
            document.writeln("<td>" + this.data[index].reng + "</td>");
            document.writeln("<td>" + this.data[index].cont + "</td>");
            document.write("</tr>");
        }
    }
    // verificadores de tipo, devuelven un booleano y se ingresa una palabra que se compara con los 
    // arreglos iniciales
    estipodato(palabra){
        var r = false;
        for (let index = 0; index < this.tipodato.length; index++) {
            if(palabra == this.tipodato[index]){
                r=true;
            }
        }
        return r;
    }
    esseparador(palabra){
        var r = false;
        for (let index = 0; index < this.separador.length; index++) {
            if(palabra == this.separador[index]){
                r=true;
            }
        }
        return r;
    }
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
        else if(this.esseparador(palabra)){
            var x= new tipos('separador', palabra, contaux, rengaux);
        }
        else if(this.estipodato(palabra)){
            var x= new tipos('tipo de dato', palabra, contaux, rengaux);
        }
        else{
                var x= new tipos('variable', palabra, contaux, rengaux);
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
    }
    var main = new analis();
    main.lectorcad('while ( ) for if = hola /* while hola john');
    main.imprimirdata();
