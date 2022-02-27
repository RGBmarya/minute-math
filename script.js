const chooseOperator = operatorList =>{
    const index = Math.floor(Math.random() * operatorList.length);
    return operatorList[index];
}

const generateTerms = () =>{
    const operand1 = Math.floor(Math.random() * 9 + 1);
    const operand2 = Math.floor(Math.random() * 9 + 1);
    const operator = chooseOperator(["+", "-", "x", "÷"]);
    let result = 0;


    if(operator == "+"){
        result = operand1 + operand2;
    }
    else if (operator == "-"){
        result = operand1 - operand2;
    }
    else if (operator == "x"){
        result = operand1 * operand2;
    }
    else if (operator == "÷"){
        result = operand1 / operand2;
    }

    document.getElementById("operand1-text").innerHTML = operand1;
    document.getElementById("operator-text").innerHTML = operator;
    document.getElementById("operand2-text").innerHTML = operand2;
    document.getElementById("result-text").innerHTML = result;

    console.log(`${operand1} ${operator} ${operand2} = ${result} `);
}


const checkOperatorInput = btn =>{
    operator = document.getElementById("operator-text").innerHTML;

    if(btn.id == "plus" && operator == "+" ||
       btn.id == "minus" && operator == "-" ||
       btn.id == "multiply" && operator == "x" ||
       btn.id == "divide" && operator == "÷"){
        console.log("correct");
        document.getElementById("operator-text").style.visibility = "visible";
        document.getElementById("operator").style.backgroundColor = "lawngreen";

        
        setTimeout(() =>{
            document.getElementById("operator").style.backgroundColor = "bisque";
            document.getElementById("operator-text").style.visibility = "hidden";
            generateTerms()
        }, 1000)
    }
    else{
        document.getElementById("operator").style.backgroundColor = "red";
        setTimeout(() =>{
            document.getElementById("operator").style.backgroundColor = "bisque";
        }, 1000)
        console.log("incorrect");
    }
}