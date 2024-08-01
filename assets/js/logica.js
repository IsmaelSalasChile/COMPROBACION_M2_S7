var numero1, numero2;
numero1 = parseInt(prompt("Ingrese el primer número"));
numero2 = parseInt(prompt("Ingrese el segundo número"));
if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2)
  } else if (numero1 < numero2) {
    alert(numero2 + " es mayor que " + numero1)
  } else {
    alert(numero1 + " tiene el mismo valor que " + numero2)
  }