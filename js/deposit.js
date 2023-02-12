// step-1: add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
//step-2:get the deposit amount in the input field
const depositField=document.getElementById('input-deposit');
const depositAmmount=depositField.value;
    
  //step-3:get the current deposit total

  const depositTotalElement= document.getElementById('deposit-total');
  const depositTotal= depositTotalElement.innerText;
  depositTotalElement.innerText=depositAmmount;
})