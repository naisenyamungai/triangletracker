function scanInput(){var triangleSides = [];
    var sideA = parseInt(document.getElementsByName("sideA")[0].value);
    var sideB = parseInt(document.getElementsByName("sideB")[0].value);
    var sideC = parseInt(document.getElementsByName("sideC")[0].value);
    var text = '';
    
    triangleSides.push(sideA,sideB, sideC);
    triangleSides.sort((a,b) => a - b);
    
    if(triangleSides[0] + triangleSides[1] < triangleSides[2]){
       text = triangleSides + " " + "is NOT a triangle";
    }
    else if(triangleSides[0] % triangleSides[1] === 0 && triangleSides[0] % triangleSides[2] === 0 ){text = triangleSides + " " + "is an EQUILATERAL Triangle";
    }
    else if((triangleSides[0] - triangleSides[1] === 0 && triangleSides[0] - triangleSides[2] !== 0) && (triangleSides[0] + triangleSides[1] > triangleSides[2])){text = triangleSides + " " + "is an ISOSCELES Triangle";
    }
    else if(triangleSides[0] - triangleSides[1] - triangleSides[2] !== 0 && triangleSides[0] + triangleSides[1] > triangleSides[2]){text = triangleSides + " " + "is a SCALENE Triangle";
    }
    else{text = "Check on special Triangles like Right Angled Triangle & Obtuse Triangle";
}
    document.getElementById("display").innerHTML=text;
}