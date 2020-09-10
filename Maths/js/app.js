window.onload = function () {

  // add

  document.getElementById("add").onclick = function calculatorAdd() {
    var one, two, answer;
    one = prompt("Type first number.");
    if (!(isNaN(one))) {
      two = prompt("Type second number.");
      if (!(isNaN(two))) {
        answer = Number(one) + Number(two);
      } else {
        alert("You didn't enter a number.");
        answer = "You didn't enter two numbers.";
      }
    } else {
      alert("You didn't enter a number.");
      answer = "You didn't enter two numbers.";
    }
    document.getElementById("p1").innerHTML = answer;
    return answer;
  }

  // minus

  document.getElementById("minus").onclick = function calculatorMinus() {
    var one, two, answer;
    one = prompt("Type first number.");
    if (!(isNaN(one))) {
      two = prompt("Type second number.");
      if (!(isNaN(two))) {
        answer = Number(one) - Number(two);
      } else {
        alert("You didn't enter a number.");
        answer = "You didn't enter two numbers.";
      }
    } else {
      alert("You didn't enter a number.");
      answer = "You didn't enter two numbers.";
    }
    document.getElementById("p1").innerHTML = answer;
    return answer;
  }

  // multiply

  document.getElementById("multiply").onclick = function calculatorMultiply() {
    var one, two, answer;
    one = prompt("Type first number.");
    if (!(isNaN(one))) {
      two = prompt("Type second number.");
      if (!(isNaN(two))) {
        answer = Number(one) * Number(two);
      } else {
        alert("You didn't enter a number.");
        answer = "You didn't enter two numbers.";
      }
    } else {
      alert("You didn't enter a number.");
      answer = "You didn't enter two numbers.";
    }
    document.getElementById("p1").innerHTML = answer;
    return answer;
  }

  // divide

  document.getElementById("divide").onclick = function calculatorDivide() {
    var one, two, answer;
    one = prompt("Type first number.");
    if (!(isNaN(one))) {
      two = prompt("Type second number.");
      if (!(isNaN(two))) {
        answer = Number(one) / Number(two);
      } else {
        alert("You didn't enter a number.");
        answer = "You didn't enter two numbers.";
      }
    } else {
      alert("You didn't enter a number.");
      answer = "You didn't enter two numbers.";
    }
    document.getElementById("p1").innerHTML = answer;
    return answer;
  }

  // square

  document.getElementById("square").onclick = function calculatorSquare() {
    var one, two, answer;
    one = prompt("Type first number.");
    if (!(isNaN(one))) {
      answer = Number(one) * Number(one);
    } else {
      alert("You didn't enter a number.");
      answer = "You didn't enter a number.";
    }
    document.getElementById("p1").innerHTML = answer;
    return answer;
  }

  // root

  document.getElementById("root").onclick = function calculatorRoot() {
    var one, two, answer;
    one = prompt("Type first number.");
    if (!(isNaN(one))) {
      answer = Math.sqrt(Number(one));
    } else {
      alert("You didn't enter a number.");
      answer = "You didn't enter a number.";
    }
    document.getElementById("p1").innerHTML = answer;
    return answer;
  }

}