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
    if((triangleSides[0] + triangleSides[1]) <= triangleSides[2]){
       text = "Ooops!" + " " + triangleSides + " " + "is NOT a triangle! <br><br><br><br>For a triangle to be formed, the sum of the two smaller side must be  greater than the largest side";     
    }
    else if(triangleSides[0] % triangleSides[1] === 0 && triangleSides[0] % triangleSides[2] === 0 ){
        text = triangleSides + " " + "is an EQUILATERAL Triangle! <br><br><br><br>For an Equilateral Triangle all the three sides are of Equal Length and the three angles are all 60 degrees.";
    
    }
    else if((triangleSides[0] - triangleSides[1] === 0 && triangleSides[0] - triangleSides[2] !== 0) && (triangleSides[0] + triangleSides[1] > triangleSides[2])){
        text = triangleSides + " " + "is an ISOSCELES Triangle ! <br><br><br><br> Isosceles triangle has two equal sides, and the sum of the two sides must always be greater than the largest side." ;
    
    }
    else if(triangleSides[0] - triangleSides[1] - triangleSides[2] !== 0 && triangleSides[0] + triangleSides[1] > triangleSides[2]){
        text = triangleSides + " " + "is a SCALENE Triangle ! <br><br><br><br> For a scalene, all the sides are different and so are the angles.";

    }
    else{text = "Ooops!!! Check whether the sum of the angles is equal to 180!";
}
/** display the content on html page */
    document.getElementById("display").innerHTML=text;
}