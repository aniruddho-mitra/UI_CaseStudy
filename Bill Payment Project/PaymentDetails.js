function calculateTotalAmount(){
    const checkboxes=document.querySelectorAll('.select-checkbox');
    let totalAmount=0;
    
    checkboxes.forEach(checkbox=>{
      if(checkbox.checked){
        const row=checkbox.closest('tr');
        const payableAmount=row.querySelector('td:nth-child(4)').innerText;
        totalAmount+=parseFloat(payableAmount.replace('₹', ''));
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
  
  window.location.href='bill.html';
  }
  
  function logout(){
    alert("Logout Clicked");
  }