import { useReducer } from 'react'
import './calculator.css'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'

export const ACTIONS = {
    ADD_DIGIT : 'add-digit',
    CHOOSE_OPERATOR: 'choose-operator',
    CLEAR: 'clear',
    DEELTE: 'delete',
    EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            if(payload.digit === '0' && state.currentOperand === "0") return state
            if(payload.digit === '.' && state.currentOperand.includes('.')) return state
            return {
                ...state,
                currentOperand: `${state.currentOperand}${payload.digit}`
            }
        case ACTIONS.CLEAR: 
            return {}
        case ACTIONS.CHOOSE_OPERATOR: 
            if(state.previousOperand == null && state.currentOperand == null) return state
            if(state.currentOperand == null){
                return {
                    ...state,
                    operation: payload.operation
                }
            }
            if(state.previousOperand == null){
                return {
                    ...state,
                    previousOperand: state.currentOperand,
                    operation: payload.operation,
                    currentOperand: null
                }
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null
            }
        default: 
            return state
    }
}

function evaluate({previousOperand, currentOperand, operation}){
    let prev = parseFloat(previousOperand)
    let current = parseFloat(currentOperand)

    if(isNaN(prev) || isNaN(current)) return "";
    let computation;

    switch(operation){
        case '+': 
            computation = prev + current;
            break;
        case '-': 
            computation = prev - current;
            break;
        case '*': 
            computation = prev * current;
            break;
        case '/': 
            computation = prev / current;
            break;
        default:  
            computation  = ''
    }

    return computation
}

const Calculator = () => {
    let [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
    return (
        <div class='calculator-grid'>
            <div class='output'>
                <div class='previous-operand'>{previousOperand} {operation}</div>
                <div class='current-operand'>{currentOperand}</div>
            </div>

            <button class="span-two" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
            <button data-delete>DEL</button>
            <OperationButton operation='%' dispatch={dispatch}/>
            <DigitButton digit='1' dispatch={dispatch}/>
            <DigitButton digit='2' dispatch={dispatch}/>
            <DigitButton digit='3' dispatch={dispatch}/>
            <OperationButton operation='*' dispatch={dispatch}/>
            <DigitButton digit='4' dispatch={dispatch}/>
            <DigitButton digit='5' dispatch={dispatch}/>
            <DigitButton digit='6' dispatch={dispatch}/>
            <OperationButton operation='+' dispatch={dispatch}/>
            <DigitButton digit='7' dispatch={dispatch}/>
            <DigitButton digit='8' dispatch={dispatch}/>
            <DigitButton digit='9' dispatch={dispatch}/>
            <OperationButton operation='-' dispatch={dispatch}/>
            <DigitButton digit='.' dispatch={dispatch}/>
            <DigitButton digit='0' dispatch={dispatch}/>
            <button data-equal class="span-two">=</button>
        </div>
    )
}

export default Calculator