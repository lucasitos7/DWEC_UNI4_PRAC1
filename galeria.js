export default class Galeria{
    constructor(num){
        this.imagenes=[];
        this.indice=this.generaAleatorio(0,num-1);
        for(let i=1;i<=num;i++){
            this.imagenes.push('url(images/foto'+i+'.jpg');
        }
    }

    set Imagenes(imagenes){
        imagenes=imagenes;
    }
    get Imagenes(){
        return this.imagenes;
    }
    set Nombre(nombre){
        this.nombre=nombre;
    }
    get Nombre(){
        return this.nombre;
    }
    set Indice(indice){
        this.indice=indice;
    }
    get Indice(){
        return this.indice;
    }
    set Num(num){
        this.num=num;
    }
    get Num(){
        return this.num;
    }

    generaAleatorio(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    ultima(){
        this.indice=this.imagenes.length-1;
        return this.imagenes[this.indice];
    }
    primera(){
        this.indice=0;
        return this.imagenes[this.indice];
    }

    siguiente(){
        this.indice++;
        return this.imagenes[this.indice]
    }
    anterior(){
        this.indice--;
        return this.imagenes[this.indice]
    }

}