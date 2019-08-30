// JavaScript source code
class tab{
    constructor(tipodato, lexema, token){
        this.tipodato=tipodato;
        this.lexema= lexema;
        this.token=token;
    }
}
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
    // // , /* , */
    ab1= ['comentario'];
    a1= new tab(this.ab1,'//', 'comentariolinea' );
    a2= new tab(this.ab1,'/*', 'iniciocomentario' );
    a3= new tab(this.ab1,'*/', 'fincomentario' );
    // 'while', 'for', 'switch', 'var', 'if', 'else', 'try', 'return', 'class', 'throws', 'throw', 'funtion',
    // 'super', 'new', 'import', 'do', 'finally', 'false', 'true', 'this', 'let', 'long'
    ab2= ['palabraclave'];
    a4= new tab(this.ab2,'while', 'mientras' );
    a5= new tab(this.ab2,'for', 'ciclofor' );
    a6= new tab(this.ab2,'switch', 'switch' );
    ab3= ['palabraclave'];
    a7= new tab(this.ab3,'if', 'si' );
    ab4= ['palabraclave', 'tipo dato'];
    a8= new tab(this.ab4,'var', 'var' );
    a9= new tab(this.ab3,'else', 'sino' );
    a10= new tab('comentario','try', 'tratar' );
    a11= new tab('comentario','return', 'retornar' );
    a12= new tab('comentario','class', 'clase' );
    a13= new tab('comentario','throw', 'throw' );
    a14= new tab('comentario','throws', 'throws' );
    a15= new tab('comentario','funtion', 'funcion' );
    a16= new tab('comentario','super', 'super' );
    a17= new tab('comentario','new', 'nuevo' );
    a18= new tab('comentario','import', 'importar' );
    a19= new tab('comentario','do', 'hacer' );
    a20= new tab('comentario','finally', 'final' );
    a21= new tab('comentario','false', 'falso' );
    a22= new tab('comentario','true', 'verdadero' );
    a23= new tab('comentario','this', 'this' );
    a24= new tab('comentario','let', 'let' );
    a25= new tab('comentario','long', 'long' );
    // '=', '+', '-', '*', '/',  '<', '>' , '<=' , '>='
    a26= new tab('comentario','=', 'igual' );
    a27= new tab('comentario','+', 'mas' );
    a28= new tab('comentario','-', 'resta' );
    a29= new tab('comentario','/', 'backslash' );
    a30= new tab('comentario','<', 'menorque' );
    a31= new tab('comentario','>', 'mayorque' );
    a32= new tab('comentario','>=', 'mayorigualque' );
    a33= new tab('comentario','<=', 'menorigualque' );
    a35= new tab('comentario','==', 'igualigual' );
    // '(', ')', ';','{', '}' , ','
    a36= new tab('comentario','(', 'parentIzq' );
    a37= new tab('comentario',')', 'parentDer' );
    a38= new tab('comentario',';', 'cpuntocoma' );
    a39= new tab('comentario','{', 'corcheteIzq' );
    a40= new tab('comentario','}', 'corcheteDer' );
    a41= new tab('comentario',',', 'coma' );
   
    lexemas = [this.a1,this.a2,this.a3,this.a4,this.a5,this.a6,this.a7,this.a8,this.a9, this.a10, this.a11,this.a12, this.a13, this.a14,this.a15, this.a16,this.a17,this.a18,this.a19,
    this.a20,this.a21,this.a22,this.a23,this.a24,this.a26,this.a27,this.a28,this.a29,this.a30,this.a31,this.a32,this.a33,this.a35,this.a36,this.a37,this.a38,this.a39,
    this.a40,this.a41];
    comentarios2 = ['comentariolinea', 'iniciocomentario', 'fincomentario']; 
    comentarios = ['//', '/*', '*/'];
    palabrasclaves = ['while', 'for', 'switch', 'var', 'if', 'else', 'try', 'return', 'class', 'throws', 'throw', 'funtion',
     'super', 'new', 'import', 'do', 'finally', 'false', 'true', 'this'];
    palabrasclaves2 = ['mientras', 'ciclofor', 'switch', 'var', 'si', 'sino', 'tratar', 'devolver', 'clase', 'throws', 'throw', 'funtion',
     'super', 'nuevo', 'importar', 'hacer', 'final', 'false', 'true', 'this'];
    identificadores = ['=', '+', '-', '*', '/',  '<', '>'];
    identificadores2 = ['igual', 'suma', 'menos', 'mult', 'backslash', 'menorque', 'mayorque'];
    tipodato = ['var', 'let', 'long'];
    tipodato2 = ['variable', 'numero', 'numerolong'];
    separador = [ '(', ')', ';','{', '}' , ','];
    separador2 = [ 'parentIzq', 'parenteDer', 'puntocoma','corcheteIzq', 'corcheDer' , 'coma' ];
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
        var aux32= 1;
        for (let index = 0; index < this.data.length; index++) {
            document.write("<tr>");
            document.writeln("<td>" + this.data[index].cont + "</td>");
            document.writeln("<td>" + this.data[index].token + "</td>");
            document.writeln("<td>" + "'" + this.data[index].lexema + "'"  + "</td>");
            document.writeln("<td>" + this.data[index].tipo + "</td>");
            document.writeln("<td>" + this.data[index].reng + "</td>");
            document.writeln("<td>" + this.data[index].columna + "</td>");
            document.write("</tr>");
            aux32=aux32+1;
        }
       /* document.write("<tr>");
        document.writeln("<td>" + aux32 + "</td>");
        document.writeln("<td>" + 'espacio' + "</td>");
        document.writeln("<td>" + "' '"  + "</td>");
        document.writeln("<td>" + 'separador' + "</td>");
        document.writeln("<td>" + 'vecepresente: ->' + "</td>");
        document.writeln("<td>" + aux32 + "</td>");
        document.write("</tr>");*/
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
    buscadortipo(palabra, rengaux, contaux, col){
        if(this.escomentario(palabra)){
                var x= new tipos('comentario', palabra, contaux, rengaux, col, null);
        }
        else if(this.esidentificador(palabra)){
                var x= new tipos('identificador', palabra, contaux, rengaux, col, null);
        }
        else if(this.espalabraclave(palabra)){
                var x= new tipos('palabra reservada', palabra, contaux, rengaux, col, null);
        }
        else if(this.esseparador(palabra)){
            var x= new tipos('separador', palabra, contaux, rengaux, col,null);
        }
        else if(this.estipodato(palabra)){
            var x= new tipos('tipo de dato', palabra, contaux, rengaux, col, null);
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
