function scanInput(){var triangleSides = [];
    /**The below and above lines will declare the array and variables to be used as inputs */
    var sideA = parseInt(document.getElementsByName("sideA")[0].value);
    var sideB = parseInt(document.getElementsByName("sideB")[0].value);
    var sideC = parseInt(document.getElementsByName("sideC")[0].value);
    var text = '';

    /**These commands will push the inputs into the array then sort the array in ascending order */
    triangleSides.push(sideA,sideB, sideC);
    triangleSides.sort((a,b) => a - b);
    
    /**The algorithm below will check the type of triangle based on the conditions using if, else if and else statements */
    if(triangleSides[0] + triangleSides[1] < triangleSides[2]){
       text = triangleSides + " " + "is NOT a triangle";
    }
    else if(triangleSides[0] % triangleSides[1] === 0 && triangleSides[0] % triangleSides[2] === 0 ){
        text = triangleSides + " " + "is an EQUILATERAL Triangle";
        document.getElementById("image").innerHTML="<img src='images/equilateral.jpg' alt='Equilateral'>";
    }
    else if((triangleSides[0] - triangleSides[1] === 0 && triangleSides[0] - triangleSides[2] !== 0) && (triangleSides[0] + triangleSides[1] > triangleSides[2])){
        text = triangleSides + " " + "is an ISOSCELES Triangle";
        document.getElementById("image").innerHTML="<img src='images/isosceles.jpg' alt='Isosceles'>";
    }
    else if(triangleSides[0] - triangleSides[1] - triangleSides[2] !== 0 && triangleSides[0] + triangleSides[1] > triangleSides[2]){
        text = triangleSides + " " + "is a SCALENE Triangle";
        document.getElementById("image").innerHTML="<img src='images/scalene.jpg' alt='Scalene'>";
    }
    else{text = "Check on special Triangles like Right Angled Triangle & Obtuse Triangle";
}
/** display the content on html page */
    document.getElementById("display").innerHTML=text;
}