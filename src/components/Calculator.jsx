import { useState } from "react";
import Button from "./Button";
const Calculator = () => {
     const [result,setResult] = useState('');
 
  const sumValue = (value) =>{
setResult((num)=> num + value)
  }
  const deleteResult = () =>{
   setResult('')
  }  
  const amountInpust= () =>{
    try {
      const result = eval(result);
      if (isNaN(result)) {
        setResult('Error');
      } else {
        setResult(result.toString());
      }
    } catch (error) {
      setResult('Error');
    }
  }
  return (
    <>
    <input type="text" value={result} readOnly/>
    <Button onclick={()=>sumValue('1')}>1</Button>
    <Button onclick={()=>sumValue('2')}>2</Button>
    <Button onclick={()=>sumValue('3')}>3</Button>
    <Button onclick={()=>sumValue('4')}>4</Button>
    <Button onclick={()=>sumValue('5')}>5</Button>
    <Button onclick={()=>sumValue('6')}>6</Button>
    <Button onclick={()=>sumValue('7')}>7</Button>
    <Button onclick={()=>sumValue('8')}>8</Button>
    <Button onclick={()=>sumValue('9')}>9</Button>
    <Button onclick={()=>sumValue('0')}>0</Button>
    <Button onclick={()=>deleteResult()}>C</Button>
    <Button onclick={()=>sumValue('*')}>*</Button>
    <Button onclick={()=>sumValue('-')}>-</Button>
    <Button  onclick={()=>sumValue('/')}>/</Button>
    <Button  onclick={()=>sumValue('+')}>+</Button>
    <Button onclick={()=>amountInpust()} >=</Button>
    </>
   

  )
}
export default Calculator;