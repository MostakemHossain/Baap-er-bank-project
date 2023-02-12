// step-1: add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
//step-2:get the deposit amount in the input field
const depositField=document.getElementById('input-deposit');
const newDepositAmmountString=depositField.value;
const newDepositAmmount=parseFloat(newDepositAmmountString);
    
  //step-3:get the current deposit total

  const depositTotalElement= document.getElementById('deposit-total');
  const currentDepositTotalString= depositTotalElement.innerText;
  const currentDepositTotal=parseFloat(currentDepositTotalString);

  //step-4: add number to the total deposit
  const Total= newDepositAmmount+currentDepositTotal;
  depositTotalElement.innerText=Total;

  //step-5:get balance current total

  const balanceTotalElement= document.getElementById('balance-total');
  const previousBalanceTotalString= balanceTotalElement.innerText;
  const currentBalanceTotal=parseFloat(previousBalanceTotalString);

//step-6: add number to the total balance
const TotalBalance=currentBalanceTotal+newDepositAmmount;
balanceTotalElement.innerText=TotalBalance;



  depositField.value='';
})