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
    ab2= ['palabraclave', 'ciclo'];
    a4= new tab(this.ab2,'do', 'hacer' );
    a5= new tab(this.ab2,'while', 'mientras' );
    a6= new tab(this.ab2,'for', 'ciclofor' );
    a7= new tab(this.ab2,'switch', 'switch' );
    //
    ab3= ['palabraclave', 'condicional'];
    a8= new tab(this.ab3,'if', 'si' );
    a9= new tab(this.ab3,'else', 'sino' );
    ab4= ['palabraclave', 'tipo dato'];
    a10= new tab(this.ab4,'var', 'var' );
    a11= new tab('comentario','long', 'long' );
    a12= new tab(this.ab5  ,'let', 'let' );
    //
    ab5 = ['palabraclave']
    a13= new tab(this.ab5,'try', 'tratar' );
    a14= new tab(this.ab5,'return', 'retornar' );
    a15= new tab(this.ab5 ,'class', 'clase' );
    a16= new tab(this.ab5 ,'throw', 'throw' );
    a17= new tab(this.ab5 ,'throws', 'throws' );
    a18= new tab(this.ab5 ,'super', 'super' );
    a19= new tab(this.ab5 ,'new', 'nuevo' );
    a20= new tab(this.ab5 ,'import', 'importar' );
    a21= new tab(this.ab5 ,'finally', 'final' );
    a22= new tab(this.ab5 ,'this', 'this' );
    a23= new tab(this.ab5,'funtion', 'funcion' );
    a24= new tab(this.ab5 ,'false', 'falso' );
    a25= new tab(this.ab5 ,'true', 'verdadero' );
    // '=', '+', '-', '*', '/',  '<', '>' , '<=' , '>=' , '~' , '¬' , '&' , '|',
    ab6=['operadorlogico', 'separador'];
    a26= new tab(this.ab6,'=', 'asignacion' );
    a27= new tab(this.ab6,'+', 'mas' );
    a28= new tab(this.ab6,'-', 'resta' );
    a29= new tab(this.ab6,'/', 'backslash' );
    a30= new tab(this.ab6,'<', 'menorque' );
    a31= new tab(this.ab6,'>', 'mayorque' );
    a32= new tab(this.ab6,'>=', 'mayorIgualQue' );
    a33= new tab(this.ab6,'<=', 'menorIgualQue' );
    a34= new tab(this.ab6,'==', 'comparadorIgual' );
    a35= new tab(this.ab6,'~', 'nagacion1' );
    a36= new tab(this.ab6,'¬', 'negacion2' );
    a37= new tab(this.ab6,'&&', 'and' );
    a38= new tab(this.ab6,'||', 'or' );
    a39= new tab(this.ab6,'*', 'miltiplicar' );
    a40= new tab(this.ab6,'/', 'division' );
    a41= new tab(this.ab6,'%', 'modulo' );
    a42= new tab(this.ab6,'**', 'potencador1' );
    a43= new tab(this.ab6,'^', 'potencador2' );
    a44= new tab(this.ab6,'~=', 'comparadorNegacion1' );
    a45= new tab(this.ab6,'¬=', 'comparadorNegacion2' );
    a46= new tab(this.ab6,'++', 'incremento' );
    a47= new tab(this.ab6,'--', 'decremento' );
    a48= new tab(this.ab6,'+=', 'masIgual' );
    a49= new tab(this.ab6,'-=', 'menosIgual' );
    a50= new tab(this.ab6,'*=', 'porIgual' );
    a51= new tab(this.ab6,'/=', 'entreIgual' );
    //',' ,  ';' , ''' , ' '
    ab7=['separador']
    a52= new tab(this.ab7,',', 'coma' );
    a53= new tab(this.ab7,';', 'cpuntocoma' );
    // '(' , ')' , '{' , '}' 
    ab8=['separador', 'agrupador'];
    a54= new tab(this.ab8,'(', 'parentIzq' );
    a55= new tab(this.ab8,')', 'parentDer' );
    a56= new tab(this.ab8,'{', 'corcheteIzq' );
    a57= new tab(this.ab8,'}', 'corcheteDer');

    lexemas = [this.a1,this.a2,this.a3,this.a4,this.a5,this.a6,this.a7,this.a8,this.a9, this.a10, this.a11,this.a12, this.a13, this.a14,this.a15, this.a16,this.a17,this.a18,this.a19,
     this.a20,this.a21,this.a22,this.a23,this.a24,this.a26,this.a27,this.a28,this.a29,this.a30,this.a31,this.a32,this.a33,this.a34, this.a35,this.a36,this.a37,this.a38,this.a39,
    this.a40,this.a41, this.a42,this.a43,this.a44,this.a45,this.a46,this.a47,this.a48,this.a49,this.a50,this.a51,this.a52,this.a53,this.a54,this.a55,this.a56,this.a57];
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
    // ejecuta los verificadores anteriores y crea el objeto que ingresa al arreglo data y se almacenan ahi
  crear(palabra, rengaux, contaux, col){
        var x=null;
        var y= ['variable']; //aux por dato no registrado en la base
        for (let i = 0; i < this.lexemas.length; i++) {
            if (this.lexemas[i].lexema== palabra) {
                x= new tipos(this.lexemas[i].tipodato, palabra, i+1, rengaux, col, this.lexemas[i].token);
            }    
        }
        if(x==null){
            x= new tipos('variable', palabra, contaux + this.lexemas.length, rengaux, col, palabra);
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
            this.crear(arrayaux[index], auxreng,contaux, colaux);
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
