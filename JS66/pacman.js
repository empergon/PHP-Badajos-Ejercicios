


	document.onkeydown=moverPacman;
    var punto = document.getElementById('punto');
    var marcador = document.getElementById('marcador');
    
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;
    var velocidad = 30;
   
    var pacmanSice = 50;
    var pacmanTop = 100;
    var pacmanLeft = 100;

    var puntoSice = 10;
    var puntoTop = 100;
    var puntoLeft = 100;

    var resultado = 0;
    var comida = 10;
    var maximo = 100;

   
inicio();

    function inicio(){
        pacman.style.left = pacmanLeft + 'px';
        pacman.style.top = pacmanTop + 'px';       
        pacman.style.width = pacmanSice + 'px';
        pacman.style.height = pacmanSice + 'px';
        punto.style.width = puntoSice + 'px';
        punto.style.height = puntoSice + 'px';

        moverPunto();

    }

   //  document.getElementById("punto").onclick = moverPunto;



    function moverPacman(evento){
   	
   		var tecla = evento.which;

      
//        var y = document.getElementById("pacman").offsetLeft;
//        var x = document.getElementById("pacman").offsetTop;
      
        switch (tecla){
            case 37:
            if (pacmanLeft > 0) {
                pacmanLeft -= velocidad;
 //             pacman.style.left = y -20 + "px"; 
                }
                break;
            case 38:
            if (pacmanTop > 0) {
            pacmanTop -= velocidad;
//          pacman.style.top = x -20 + "px";
            }
            break;
            case 39: 
            if (pacmanLeft + pacmanSice + velocidad < anchoVentana) {
            pacmanLeft += velocidad;
//    		pacman.style.left = y +20 + "px";
            }
        		break;
            case 40:
            if (pacmanTop + pacmanSice + velocidad < altoVentana) {
            pacmanTop += velocidad;
        }
//          pacman.style.top = x +20 + "px" ;
                break;
// 		default :alert("Se ha equivocado, debe pulsar las flechas del teclado");
        }

            pacman.style.left = pacmanLeft + 'px';
            pacman.style.top = pacmanTop + 'px';
     
     if (chocamiento() == true) {
        moverPunto();
        aumentarMarcador();
     }
    }

function moverPunto() {
        do {
        puntoTop = parseInt(Math.random() * (altoVentana - puntoSice));
        puntoLeft = parseInt(Math.random() * (anchoVentana - puntoSice));
    } while (chocamiento() == true) {

    }
       
       punto.style.left = puntoLeft + 'px';
       punto.style.top = puntoTop + 'px';   
    }

    
    function chocamiento() {
        if ((puntoLeft < (pacmanLeft + pacmanSice)) && ((puntoLeft + puntoSice) > pacmanLeft) && (puntoTop < (pacmanTop + pacmanSice)) && (puntoTop + puntoSice > (pacmanTop)))
        {
            return true;
        }
        return false;
    }

    function aumentarMarcador() {
        resultado += comida;
        marcador.innerHTML = resultado;


        if (resultado >= maximo) {
            if (confirm('¿Nueva partida?')){
                window.location ='pacman.html';
        }
    }
}
    
