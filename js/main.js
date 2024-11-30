function calcular() {
    console.clear()
    let x1 = parseFloat(document.getElementById("xA1").value);
    let y1 = parseFloat(document.getElementById("yA1").value);
    let radius1 = parseFloat(document.getElementById('radi1').value);

    let x2 = parseFloat(document.getElementById("xA2").value);
    let y2 = parseFloat(document.getElementById("yA2").value);
    let radius2 = parseFloat(document.getElementById('radi2').value);

    let circle1 = new Circle(new Punt(x1 , y1),radius1);
    let circle2 = new Circle(new Punt(x2 , y2),radius2);
    
    //let distancia = circle1.distanciaCentres(circle2);

    document.getElementById("distance").innerHTML = ((circle1.distanciaCentres(circle2)).toFixed(3));
    document.getElementById("equals").innerHTML = ((circle1.iguales(circle2)) ? "Sí" : "No" ) ;
    document.getElementById("concentric").innerHTML = ((circle1.concentrics(circle2)) ? "Sí" : "No");
    document.getElementById("equalRadius").innerHTML = ((circle1.igualRadius(circle2)) ? "Sí" : "No");
    document.getElementById("tangents").innerHTML = ((circle1.sonTangent(circle2)) ? "Sí" : "No");
    document.getElementById("secants").innerHTML = ((circle1. sonSecants(circle2)) ? "Sí" : "No");
    document.getElementById("notTouch").innerHTML = ((circle1.noEsToquen(circle2)) ? "Si" : "No");
  
  }