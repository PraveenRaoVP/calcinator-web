const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons = document.querySelectorAll(`[data-operation]`);
const equalsButton = document.querySelector(`[data-equals]`);
const deletebutton = document.querySelector(`[data-delete]`);
const allclearButton = document.querySelector(`[data-allclear]`);
const expressionText = document.querySelector(`[data-expression]`);
const currentText = document.querySelector(`[data-current]`);


class Calculator{
    constructor(expressionText,currentText){
        this.expressionText=expressionText;
        this.currentText=currentText;
        this.clear();
    }

    clear(){
        this.current = '';
        this.expression = '';
        this.operation = undefined;
        this.updateDisplay();
    }

    delete(){

    }

    appendNum(number){
        if(number==='.' && this.current.includes('.')){
            return ;
        }

        this.current = this.current.toString() + number.toString(); 
    }

    clickOperation(operation){
        if(this.current === '') return;

        this.operation = operation;
        this.expression = this.expression + this.current + this.operation.toString();
        this.current = '';
    }

    compute(){

    }

    updateDisplay(){
        this.currentText.innerText = this.current;
        this.expressionText.innerText = this.expression;
    }
}

const calculator = new Calculator(expressionText,currentText);

numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();
    })
}); 

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.clickOperation(button.innerText);
        calculator.updateDisplay();
    })
})



allclearButton.forEach(button =>{
    button.addEventListener('click',() => {
        calculator.clear();
        calculator.updateDisplay();
    })
});