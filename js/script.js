const formElt = document.getElementById("beautyForm");

formElt.addEventListener("submit", function(e) {

  e.preventDefault();

  let result = 0;
  let firstNumber = parseInt(document.getElementById("firstNumber").value);
  let secondNumber = parseInt(document.getElementById("secondNumber").value);

  console.log(firstNumber);
  console.log(secondNumber);

  result = firstNumber + secondNumber;

  document.getElementById("resultTitle").innerHTML = "Le résultat de l'opération " + firstNumber + " + " + secondNumber + " est " + result + " , gros batard!";

});
