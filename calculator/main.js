class Calculator{

   constructor(previousText, currentText){
      this.previousText = previousText;
      this.currentText = currentText;
      this.clear();
   }

   clear(){
      this.previousTextelement = '';
      this.currentTextelement = '';
      this.operation = undefined;
   }

   delete(){
      this.currentTextelement = this.currentTextelement.toString().slice(0, -1);
   }

   addNumber(num){
      if (num === '.' && this.currentTextelement.includes('.')) return;
      this.currentTextelement = this.currentTextelement.toString() + num.toString();
   }

   chooseOperation(op){
      if (this.currentTextelement === '' ) return
      if (this.previousTextelement !== ''){
            this.compute();
      }
      this.operation = op;
      this.previousTextelement = this.currentTextelement;
      this.currentTextelement = '';
   }

   compute(){
      let result;
      const current = parseFloat(this.currentTextelement);
      const prev = parseFloat(this.previousTextelement);
      if (isNaN(current) || isNaN(prev)) return;
      switch (this.operation){
         case '+':
            result = current + prev;
            break;
         case '-':
            result = prev - current;
            break;
         case '÷':
            result = prev / current;
            break;
         case '*':
            result = current * prev;
            break;
         default:
            break;
      }
      this.currentTextelement = result;
      this.previousTextelement = '';
      this.operation = undefined;
   }

   getDisplayNumber(num) {
      // const stringNumber = num.toString();
      // const integerDigits = parseFloat(stringNumber.split('.')[0])
      // const decimalDigits = parseFloat(stringNumber.split('.')[1])
      // let intgerDisplay;
      // if (isNaN(integerDigits)) {
      //    intgerDisplay = '';
      // }
      // else{
      //    intgerDisplay = integerDigits.toLocaleString('en', {
      //       maximumFractionDigits: 0
      //    })
      // }
      // if (! isNaN(decimalDigits)){
      //    return `${intgerDisplay}.${decimalDigits}`
      // }
      // else{
      // //    return intgerDisplay;
      // }

   }

   updateDisplay(){
      currentText.innerHTML = this.currentTextelement;
      if (this.operation != null){
         previousText.innerHTML = `${this.previousTextelement}${this.operation}`;
      }
      else{
         previousText.innerHTML = '';
      }
   }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const previousText = document.querySelector('[data-previous]');
const currentText = document.querySelector('[data-current]');

const calculator = new Calculator(previousText, currentText);

numberButtons.forEach(button => {
   button.addEventListener('click', () =>{
      calculator.addNumber(button.innerHTML);
      calculator.updateDisplay();
   });
})

operationsButtons.forEach(button => {
   button.addEventListener('click', () =>{
      calculator.chooseOperation(button.innerHTML);
      calculator.updateDisplay();
   })
})

equalButton.addEventListener('click', () => {
   calculator.compute();
   calculator.updateDisplay();
})

allClearButtons.addEventListener('click', () => {
   calculator.clear();
   calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
   calculator.delete();
   calculator.updateDisplay();
})

