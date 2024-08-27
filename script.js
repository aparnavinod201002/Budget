
function login(){
    let username=document.getElementById('usr').value
console.log(username)
if(
localStorage.getItem('USERNAME',username)==username){
window.location='./reg.html'}
else{
    alert("Invalid Username Or Password..")
}
}