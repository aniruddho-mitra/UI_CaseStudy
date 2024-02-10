window.onload = function() {
var minm = 1000000000000; 
            var maxm = 9999999999999;
const uniqcnum=Math.floor(Math.random() * (maxm - minm + 1)) + minm;
document.querySelector("#consumerid2").innerHTML=uniqcnum;
  document.querySelector("#consumerid").innerHTML=sessionStorage.getItem("connum");
  document.querySelector("#custname").innerHTML=sessionStorage.getItem("name");
};
function calculateTotalAmount(){
    const checkboxes=document.querySelectorAll('.select-checkbox');
    let totalAmount=0;
    
    checkboxes.forEach(checkbox=>{
      if(checkbox.checked){
        const row=checkbox.closest('tr');
        const payableAmount=row.querySelector('td:nth-child(4)').innerText;
        totalAmount+=parseFloat(payableAmount.replace('₹', ''));
        sessionStorage.setItem("totalamtpayable",totalAmount);
      }
    });
    document.getElementById('totalAmountPayable').innerText=`Total Amount Payable: ₹${totalAmount}`;
  }
  const checkboxes=document.querySelectorAll('.select-checkbox');
  checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('change',calculateTotalAmount);
  });
  function proceedToPay(){
  const checkboxes=document.querySelectorAll('.select-checkbox');
  let totalAmount=0;
  
  checkboxes.forEach(checkbox=>{
    if(checkbox.checked){
      const row=checkbox.closest('tr');
      const payableAmount=row.querySelector('td:nth-child(4)').innerText;
      totalAmount+=parseFloat(payableAmount.replace('₹', ''));
    }
  });
  
  localStorage.setItem('totalPayableAmount',totalAmount);
  
  window.location.href='PayBill.html';
  }
  
  function logout(){
    alert("Logout Clicked");
  }