const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons = document.querySelectorAll(`[data-operation]`);
const equalsButton = document.querySelector(`[data-equals]`);
const deletebutton = document.querySelector(`[data-delete]`);
const allclearButton = document.querySelector('[data-allClear]');
const expressionText = document.querySelector(`[data-expression]`);
const currentText = document.querySelector(`[data-current]`);

let foundAnswer = false;

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
         let computation;
         const exp = parseFloat(this.expression);
         const curr = parseFloat(this.current);        
         if(isNaN(exp) || isNaN(curr)) return;
         switch (this.operation){
            case '+':
                computation = exp + curr;
                break;
            case '-':
                computation = exp - curr;
                break;
            case '*':
                computation = exp * curr;
                break;
            case '/':
                if(curr===0){
                    computation = 'undefined';
                }
                else{
                    computation = exp / curr;
                }
         }
         this.current = computation.toString();
         this.expression = '';
    }


    appendNumber(number){
        if(number === '.' && this.current.includes('.')) return;
        if(foundAnswer == true){
            this.current = '';
            foundAnswer = false;
        }
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
        this.current = this.current.toString().slice(0,-1);  
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
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
    foundAnswer = true;
});

deletebutton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

