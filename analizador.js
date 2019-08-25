// JavaScript source code
class tipos {
    // se ingresa tipo(String) cont(poscion en renglon) reng(renglon)
    constructor(tipo, lex , cont , reng, col, tok) {
        this.reng = reng;
        this.tipo = tipo;
        this.lexema = lex;
        this.cont =cont;
        this.columna= col;
        this.token = tok;
    }
}
class analis { 
    // datos necesarion para comparacion
    comentarios = ['//', '/*', '*/'];
    comentarios2 = ['//', '/*', '*/'];
    palabrasclaves = ['while', 'for', 'switch', 'var', 'if', 'else', 'try', 'return', 'class', 'throws', 'throw', 'funtion',
     'super', 'new', 'import', 'do', 'finally', 'false', 'true', 'this'];
    palabrasclaves2 = ['while', 'for', 'switch', 'var', 'if', 'else', 'try', 'return', 'class', 'throws', 'throw', 'funtion',
     'super', 'new', 'import', 'do', 'finally', 'false', 'true', 'this'];
    identificadores = ['=', '+', '-', '*', '/', ';', '<', '>'];
    identificadores2 = ['=', '+', '-', '*', '/', ';', '<', '>'];
    tipodato = ['var', 'let', 'long'];
    tipodato2 = ['var', 'let', 'long'];
    separador = [ '(', ')', ';','{', '}' ];
    separador2 = [ '(', ')', ';','{', '}' ];
    constructor(){
        this.data= new Array();
    }
    //imprime el arreglo data en la pantalla 
    imprimirdata(){
        document.write("<table border= '3'>"); //crea la tabla
        document.writeln("<td>" + 'Token #' + "</td>");
        document.writeln("<td>" + 'token' + "</td>");
        document.writeln("<td>" + 'lexema' + "</td>");
        document.writeln("<td>" + 'tipo' + "</td>");
        document.writeln("<td>" + 'renglon' + "</td>");
        document.writeln("<td>" + 'columna' + "</td>");
        for (let index = 0; index < this.data.length; index++) {
            document.write("<tr>");
            document.writeln("<td>" + this.data[index].cont + "</td>");
            document.writeln("<td>" + this.data[index].token + "</td>");
            document.writeln("<td>" + "'" + this.data[index].lexema + "'"  + "</td>");
            document.writeln("<td>" + this.data[index].tipo + "</td>");
            document.writeln("<td>" + this.data[index].reng + "</td>");
            document.writeln("<td>" + this.data[index].columna + "</td>");
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
    bustok(palabra, nume){
	var tok = palabra;
	if(nume == 1){
	   for (let index = 0; index < this.comentarios.length; index++){
	        if(palabra == comentarios[index]){
	           tok = comentarios2[index];
	        }
	   }
	}
	else if(nume == 2){
	   for (let index = 0; index < this.identificadores.length; index++){
	        if(palabra == identificadores[index]){
	           tok = identificadores2[index];
	        }
	   }
	}
	else if(nume == 3){
	   for (let index = 0; index < this.palabrasclaves.length; index++){
	        if(palabra == palabrasclaves[index]){
	           tok = palabrasclaves2[index];
	        }
	   }
	}
	else if(nume == 4){
	   for (let index = 0; index < this.separador.length; index++){
	        if(palabra == separador[index]){
	           tok = separador2[index];
	        }
	   }
	}
	else{
	   for (let index = 0; index < this.tipodato.length; index++){
	        if(palabra == tipodato[index]){
	           tok = tipodato2[index];
	        }
	   }
	}
	return tok;
    }
    // ejecuta los verificadores anteriores y crea el objeto que ingresa al arreglo data y se almacenan ahi
    buscadortipo(palabra, rengaux, contaux, col){
        if(this.escomentario(palabra)){
                var x= new tipos('comentario', palabra, contaux, rengaux, col, /*bustok(*/palabra/*, 1)*/);
        }
        else if(this.esidentificador(palabra)){
                var x= new tipos('identificador', palabra, contaux, rengaux, col,/*bustok(*/palabra/*, 2)*/);
        }
        else if(this.espalabraclave(palabra)){
                var x= new tipos('palabra reservada', palabra, contaux, rengaux, col, /*bustok(*/palabra/*, 3)*/);
        }
        else if(this.esseparador(palabra)){
            var x= new tipos('separador', palabra, contaux, rengaux, col,/*bustok(*/palabra/*, 4)*/);
        }
        else if(this.estipodato(palabra)){
            var x= new tipos('tipo de dato', palabra, contaux, rengaux, col, /*bustok(*/palabra/*, 5)*/);
        }
        else{
                var x= new tipos('variable', palabra, contaux, rengaux, col, palabra);
            }
            this.data.push(x);
        }
    // lee la cadena ingresada y ejecuta el resto del codigo
    lectorcad(cad){
        var arrayaux = cad.split(' ');
        var auxreng = 1;
        var contaux = 1;
        var colaux= 1;
        for (let index = 0; index < arrayaux.length; index++) {
            this.buscadortipo(arrayaux[index],auxreng, contaux, colaux);
            contaux = contaux+1;
            if(arrayaux[index] == ';' || arrayaux[index] == '{' || arrayaux[index] == '}' ){
                auxreng= auxreng+1;
                colaux = 1;
            } 
            else{
                colaux = colaux+1;
            }

        }
    }
   
    }
    var main = new analis();
    main.lectorcad('while ( ) for } } if = hola /* while hola john ; while x y z');
    main.imprimirdata();
    document.writeln(bustok('while', 3));

 
