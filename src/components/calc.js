'use client'
import React, {useState, useEffect } from 'react'
import DisplayBox from './display.js'
import ButtonPanel from './buttonpanel.js'


const operation = (operation, num1, num2) =>{
    const operand1 = parseFloat(num1)
    const operand2 = parseFloat(num2)
    console.log(operand1)
    console.log(operand2)

    let result= 0;

    switch (operation) {
        case '+':
            result = operand1 + operand2
            break;
        case '-':
            result = operand1 - operand2
            break;
        case '*':
            result = operand1 * operand2
            break;
        case '/':
            if (operand2 === 0){
                return "ERROR"
            }
            else{
                result = operand1 / operand2
            }
            break;       
        default:
            throw new Error('Operación no válida')
    }

    const roundedResult = parseFloat(result.toFixed(2))

    if (Math.abs(result) > 1e7 || Math.abs(result) < 1e-7) {
        return roundedResult.toExponential(2).toString()
    }

    return roundedResult.toString()
    
}

const turnnegative = (num) =>{
    const operand = parseFloat(num)
    const result = operand * -1
    return result.toString()
}

const turnpercent = (num) =>{
    const operand = parseFloat(num)
    const result = operand / 100
    return result.toString()
}

const Calc = () => {

    const [displayValue, setDisplayValue] = useState('0')
    const [firstNumber, setFirstNumber] = useState('')
    const [operator, setOperator] = useState('')
    const [isLooping, setIsLooping] = useState(false)


    useEffect(() => {
        if (displayValue === 'ERROR') {
            setTimeout(() => {
                setDisplayValue('0');
                setFirstNumber('');
                setIsLooping(false);
            }, 2000);
        }
    }, [displayValue]);

    
    const handleButtonClick = (value) => {

        if (value === '<-') {
            setDisplayValue(prevValue => prevValue.length > 1 ? prevValue.slice(0, -1) : '0');
            if (displayValue.includes('e')) {
                setDisplayValue('0');
                setFirstNumber('');
                setIsLooping(false);
            }
            return;
        }
      
        if (value === '=') {
          if (firstNumber !== '' && operator !== '') {
            const result = operation(operator, firstNumber, displayValue)
            setDisplayValue(result)
            setFirstNumber('')
            setOperator('')
            setIsLooping(false)
          }
          return; 
        }
      
        if (['+', '-', '*', '/'].includes(value)) {
          if (firstNumber !== '') {
            const result = operation(operator, firstNumber, displayValue)
            setDisplayValue(result)
            setFirstNumber(result)
            setOperator(value)
            setIsLooping(true)
          } else {
            setFirstNumber(displayValue)
            setOperator(value)
            setIsLooping(true)
          }
          return; 
        }

        if (value === '+/-'){
            const result = turnnegative(displayValue)
            setDisplayValue(result)
            return;
        }

        if (value === '%'){
            const result = turnpercent(displayValue)
            setDisplayValue(result)
            return;
        }
      
        if (isLooping) {
          setDisplayValue(value)
          setIsLooping(false)
        } else {
          setDisplayValue(prevValue => prevValue === '0' ? value : prevValue + value)
        }

        if(value === 'C'){
            setDisplayValue('0')
            setFirstNumber('')
            setIsLooping(false)
        }

        if (displayValue.length >= 9){
            setDisplayValue('ERROR')
        }

      };

    const buttons = [
        'C', '<-','%', '+/-',
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
      ];

    return(
        <div className="calculator">
            <DisplayBox value={displayValue} />
            <ButtonPanel buttons={buttons} onClick={handleButtonClick} />
        </div>
    );
}

export { operation, turnnegative, turnpercent };
export default Calc