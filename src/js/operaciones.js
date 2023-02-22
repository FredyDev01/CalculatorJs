export class OpeCalc{
    Sum(num1, num2){
        return eval(`${num1} + ${num2}`).toString()
    }

    Res(num1, num2){         
        return eval(`${num1} - ${num2}`).toString()
    }

    Mul(num1, num2){
        return eval(`${num1} * ${num2}`).toString()
    }

    Div(num1, num2){        
        return eval(`${num1} / ${num2}`).toString()
    }

    Pot(num1){        
        return eval(`Math.pow(${num1}, 2)`).toString()
    }

    Rai(num1){         
        return eval(`Math.sqrt(${num1})`).toString()
    }
}