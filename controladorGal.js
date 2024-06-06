import Galeria from "./galeria.js";

window.addEventListener("load",init);
const galeria1= new Galeria(4);

function init(){
    document.getElementById("primera").addEventListener("click",primeraf);
    document.getElementById("anterior").addEventListener("click",anteriorf);
    document.getElementById("siguiente").addEventListener("click",siguientef);
    document.getElementById("ultima").addEventListener("click",ultimaf);

    //falla alguna vez el aleatorio
    document.querySelector('#imagen').style.backgroundImage= galeria1.imagenes[galeria1.indice];

}

function primeraf(){
    document.querySelector('#imagen').style.backgroundImage= galeria1.primera();
    //DESHABILITAR
    document.querySelector('#primera').classList.add('deshabilitado');
    document.querySelector('#anterior').classList.add('deshabilitado');
    //HABILITAR
    document.querySelector('#siguiente').classList.remove('deshabilitado');
    document.querySelector('#ultima').classList.remove('deshabilitado');
}

function anteriorf(){
    document.querySelector('#imagen').style.backgroundImage= galeria1.anterior();
    if(galeria1.Indice==0){
        document.querySelector('#primera').classList.add('deshabilitado');
        document.querySelector('#anterior').classList.add('deshabilitado');
    }
    else{
        document.querySelector('#siguiente').classList.remove('deshabilitado');
        document.querySelector('#ultima').classList.remove('deshabilitado');
        document.querySelector('#primera').classList.remove('deshabilitado');
        document.querySelector('#anterior').classList.remove('deshabilitado');
    }
}

function siguientef(){
    document.querySelector('#imagen').style.backgroundImage= galeria1.siguiente();
    if(galeria1.indice==galeria1.imagenes.length-1){
        document.querySelector('#ultima').classList.add('deshabilitado');
        document.querySelector('#siguiente').classList.add('deshabilitado');
    }
    else{
        document.querySelector('#siguiente').classList.remove('deshabilitado');
        document.querySelector('#ultima').classList.remove('deshabilitado');
        document.querySelector('#primera').classList.remove('deshabilitado');
        document.querySelector('#anterior').classList.remove('deshabilitado');
    }
}

function ultimaf(){
    document.querySelector('#imagen').style.backgroundImage= galeria1.ultima();
    //DESHABILITAR
    document.querySelector('#ultima').classList.add('deshabilitado');
    document.querySelector('#siguiente').classList.add('deshabilitado');
    //HABILITAR
    document.querySelector('#primera').classList.remove('deshabilitado');
    document.querySelector('#anterior').classList.remove('deshabilitado');

        //OTRA FORMA
    //document.getElementById("siguiente").disabled=true;
    //document.getElementById("ultima").disabled=true;
}