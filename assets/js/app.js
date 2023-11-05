console.log("carrregou...");

function soma() {
  const num1 = document.getElementById("soma1").value;
  const num2 = document.getElementById("soma2").value;
  const resultado = document.getElementById("valor-ig-soma");

  // console.log(parseInt(num1) + parseInt(num2));
  const total = parseInt(num1) + parseInt(num2);
  resultado.value = total;
}

function sub() {
  const num1 = document.getElementById("sub1").value;
  const num2 = document.getElementById("sub2").value;
  const resultado = document.getElementById("valor-ig-sub");

  const total = parseInt(num1) - parseInt(num2);
  resultado.value = total;
}

function divi() {
  const num1 = document.getElementById("divi1").value;
  const num2 = document.getElementById("divi2").value;
  const resultado = document.getElementById("valor-ig-divi");

  const total = parseInt(num1) / parseInt(num2);
  resultado.value = total;
}

function mult() {
  const num1 = document.getElementById("mult1").value;
  const num2 = document.getElementById("mult2").value;
  const resultado = document.getElementById("valor-ig-mult");

  const total = parseInt(num1) * parseInt(num2);
  resultado.value = total;
}
