const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons = document.querySelectorAll(`[data-operation]`);
const equalsButton = document.querySelector(`[data-equals]`);
const deletebutton = document.querySelector(`[data-delete]`);
const allclearButton = document.querySelector('[data-allClear]');
const expressionText = document.querySelector(`[data-expression]`);
const currentText = document.querySelector(`[data-current]`);


class Calculator {
    constructor(expressionText, currentText){
        this.expressionText = expressionText;
        this.currentText = currentText;
        this.clear();
    }

    clear(){
        this.expression = '';
        this.current = '';
        this.operation = undefined;
    }

    compute(){
        
    }
    appendNumber(number){
        if(number === '.' && this.current.includes('.')) return;
        this.current = this.current.toString() + number.toString();
    }

    chooseOperation(operation){
        if(this.current === '') return
        else{
            this.compute();
        }
        this.operation = operation;
        this.expression = this.current + this.operation.toString();
        this.current = ''
    }

    delete(){

    }

    updateDisplay(){
        if(this.current === '' && this.expression===''){
            this.currentText.innerText = '';
            this.expressionText.innerText = '';
        }
        this.currentText.innerText = this.current;
        this.expressionText.innerText = this.expression;
    }

}

const calculator = new Calculator(expressionText,currentText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
       calculator.appendNumber(button.innerText);
       calculator.updateDisplay();       
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();     
    })
});


allclearButton.addEventListener('click', () =>{
    calculator.clear();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})