// Codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

console.group("Triangulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo

console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro

function diametroCirculo(radio) {
    return radio * 2;
}


// Pi
const pi = Math.PI;
console.log("PI es: " + pi);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}


// Area

function areaCirculo(radio) {
    return (radio * radio) * pi;
}


console.groupEnd();




// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}




function calcularPerimetroTriangulo() {
    const Lado1 = document.getElementById("Lado1");
    const lado1 = parseInt(Lado1.value);
    const Lado2 = document.getElementById("Lado2");
    const lado2 = parseInt(Lado2.value);
    const Base = document.getElementById("Base");
    const base = parseInt(Base.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const Base = document.getElementById("Base");
    const base = parseInt(Base.value);
    const Altura = document.getElementById("Altura");
    const altura = parseInt(Altura.value);

    const area = areaTriangulo(base, altura);
    alert(area);
}




function calcularPerimetroCirculo() {
    const Radio = document.getElementById("Radio");
    const radio = parseInt(Radio.value);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const Radio = document.getElementById("Radio");
    const radio = parseInt(Radio.value);

    const area = areaCirculo(radio);
    alert(area);
}




function CalcularAreaIsosceles() {
    const Margen1 = document.getElementById("Margen1");
    const Margen2 = document.getElementById("Margen2");
    const Margen3 = document.getElementById("Margen3");
    const margen1 = parseInt(Margen1.value);
    const margen2 = parseInt(Margen2.value);
    const margen3 = parseInt(Margen3.value);

    if (margen1 === margen2 && margen1 != margen3) {
        const alto = Math.sqrt(Math.abs(margen1**2 - (margen3 / 2)**2))
        const area = (alto * margen3) / 2;
        alert(area);
    }
    else if (margen2 === margen3 && margen2 != margen1) {
        const alto = Math.sqrt(Math.abs(margen2**2 - (margen1 / 2)**2))
        const area = (alto * margen1) / 2;
        alert(area);
    }
    else if (margen1 === margen3 && margen1 != margen2) {
        const alto = Math.sqrt(Math.abs(margen1**2 - (margen2 / 2)**2))
        const area = (alto * margen2) / 2;
        alert(area);
    } else {
        alert("Tu triangulo NO es un isosceles");
    }
}