
import { useReducer } from 'react';

function ExampleOfUseReducer(){
    
    const [money, bankDispatch] = useReducer(bankReducer, 0);

    function bankReducer(oldMoney, action){
        switch(action){
            case "DEPOSIT":
                return oldMoney +100;
            case "WITHDRAW":
                return oldMoney -100;
            case "RESET":
                return 0;
            default :
                return oldMoney;
        }
    }
    function deposit(){
        bankDispatch("DEPOSIT");
    }
    
    function withdraw(){
        bankDispatch("WITHDRAW");
    }
    
    function reset(){
        bankDispatch("RESET");
    }
    return(
        <>
        <h1 >당신의 현재 자산은 {money} 입니다.</h1>
            <button onClick={deposit}>DEPOSIT</button>
            <button onClick={withdraw}>WITHDRAW</button>
            <button onClick={reset}>RESET</button>
        </>
    );
}

export default ExampleOfUseReducer;