class Punt { 
    constructor(posicionX , posicionY){
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }
    getPosicionX(){
        return this.posicionX;
    }
    getPosicionY(){
        return this.posicionY;
    }
    setPuntA(posicionX){
        this.posicionX = posicionX;
    }
    setPuntBY(posicionY){
        this.posicionY = posicionY;
    }
    toString(){
        return `${this.posicionX},${this.posicionY}`;
    }
}
class Circle {
    constructor(centre , radi){
        this.centre = centre;
        this.radi = radi;
    }
    getCentre(){
        this.centre = centre;
    }
    getRadi(){
        this.radi = radi;
    }
    setPuntCenter(centre){
        this.centre = centre;
    }
    setRadi(radi){
        this.radi = radi;
    }
    toString(){
        let mostrar = `Center: ${this.centre}, Radi: ${this.radi}`;
        return mostrar;
    }

    //Now methods to calculate the 7 metodos:-
    distanciaCentres(alternateCircle){
        let X1 = this.centre.posicionX;
        let Y1 = this.centre.posicionY;
        let X2 = alternateCircle.centre.posicionX;
        let Y2 = alternateCircle.centre.posicionY;
        let distancia = 0;
        let xDif = X2 - X1;
        let yDif = Y2 -Y1;
        distancia = Math.sqrt(Math.pow(xDif , 2) + Math.pow(yDif,2));
        return distancia;
    }
    
    iguales(alternateCircle){
        return (this.centre.posicionX === alternateCircle.centre.posicionX &&
            this.centre.posicionX === alternateCircle.centre.posicionX &&
            this.radi === alternateCircle.radi);        
    }
    concentrics(alternateCircle){
       return (
        this.centre.posicionX === alternateCircle.posicionX &&
        this.centre.posicionY === alternateCircle.posicionY
        );
    }
    igualRadius(alternateCircle){
        return this.radi === alternateCircle.radi;
    }
    sonTangent(alternateCircle){
        let distanciaCentres = this.distanciaCentres(alternateCircle);
        return distanciaCentres === this.radi + alternateCircle.radi;
    }
    sonSecants(alternateCircle){
        let distanciaCentres = this.distanciaCentres(alternateCircle);
        return distanciaCentres < this.radi + alternateCircle.radi;
    }
    noEsToquen(alternateCircle){
        let distanciaCentres = this.distanciaCentres(alternateCircle);
        return distanciaCentres > this.radi + alternateCircle.radi;
    }
}