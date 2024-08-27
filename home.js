function reg(){
    let username=document.getElementById('usr').value
    let mail=document.getElementById('email').value
    let pass=document.getElementById('psw').value
console.log(username)

localStorage.setItem('EMAIL',mail)
localStorage.setItem('USERNAME',username)
localStorage.setItem('PASSWORD',pass)
alert("Registration Successfull")
}