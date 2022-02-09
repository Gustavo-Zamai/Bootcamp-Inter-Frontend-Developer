/*Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*/
// solução 1
function checkPalindrome(string) {
  if (!string) return;
  console.log(string === string.split("").reverse().join(""));
}
checkPalindrome("cat");

// solução 2

function checkPalindrome2(string) {
  if (!string) return;
  if (!string.length) return;

  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return console.log(false);
    }
  }
  return console.log(true);
}

checkPalindrome2("arara");

/*Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1*/
function replaceEvenNumbers(array) {
  if (!array.length) return console.log(-1);

  const notZero = (num) => num !== 0;
  const evenNum = (num) => num % 2 === 0;

  for (let i = 0; i < array.length; i++) {
    if (evenNum(array[i]) && notZero(array[i])) {
      console.log(`switching ${array[i]} for 0...`);
      array[i] = 0;
    } else if (!notZero(array[i])) {
      console.log("Ops, already 0!");
    }
  }
  console.log(array);
}

replaceEvenNumbers([2, 0, 3, 5]);
