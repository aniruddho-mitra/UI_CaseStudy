function handleLogin(){
  const usName=document.querySelector('#username').value;
  const passw=document.querySelector('#password').value;
  
 
  if((usName==sessionStorage.getItem("userid")) && (passw==sessionStorage.getItem("password"))){
    alert("Your are logged in successfully");
  }
  else{
    alert("Login was unsuccessful, please check your username and password");
    return false;
  }
}