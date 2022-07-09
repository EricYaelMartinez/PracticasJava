var a1 = parseFloat(prompt("Digite un numero"));
var OP = (prompt("Digite un operador matematico"));
var b2 = parseFloat(prompt("Digite otro numero"));

if(OP == "+"){
    var sum = a1 + b2;
    alert("El resultado es: " + sum);
    
}

else if(OP == "-"){
    var res = a1 - b2;
    alert("El resultado es: " + res);
}

else if(OP == "*"){
    var mul = a1 * b2;
    alert("El resultado es: " + mul);
}

else if(OP == "/"){
    var div = a1 / b2;
    alert("El resultado es: " + div);
}

else if(OP == "%"){
    var resi = a1 % b2;
    alert("El resultado es: " + resi);
}
