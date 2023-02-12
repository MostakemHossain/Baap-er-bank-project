/*
1.add event handler to the withdraw field
2.get the withdrew ammount in input field
3.get previous withdraw total
4.calculate total withdraw ammount
5.set total withdraw ammount
6.get the previous balance total
*/

//step-1:
document.getElementById('btn-withdraw').addEventListener('click',function(){

    //step-2:
    const withdraw=document.getElementById('withdraw-field');
    const newWithdrawammountString=withdraw.value ;
    const newWithdrawammount=parseFloat(newWithdrawammountString);

    //step-3:
    const withdrawTotalElement= document.getElementById('withdraw-total');
    const previousWithdrawTotalString= withdrawTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousWithdrawTotalString);

    //step-4
    const currentWithdrawTotal= newWithdrawammount+previousBalanceTotal;
    withdrawTotalElement.innerText=currentWithdrawTotal;


    //step 5;
    const balanceTotalElement= document.getElementById('balance-total');
  const previousBalanceTotalString= balanceTotalElement.innerText;
  const currentBalanceTotal=parseFloat(previousBalanceTotalString);

  const TotalBalance=currentBalanceTotal-newWithdrawammount;
balanceTotalElement.innerText=TotalBalance;

////

})