let username=localStorage.getItem('USERNAME')
headd.innerHTML=`Welcome ${username}`
let totalIncome = 0;
let totalExpenses = 0;

function updateBalance() {
    let balance = totalIncome - totalExpenses;
    irs.innerHTML=`Rs${balance}`
}

function addincome() {
    const incomeInput = document.getElementById('iamount');
    const incomeAmount = parseFloat(incomeInput.value);
    
    if (!isNaN(incomeAmount) && incomeAmount > 0) {
        totalIncome += incomeAmount;
        incomeInput.value = ''; // Clear the input field
        updateBalance();
    } else {
        alert('Please enter a valid income amount.');
    }
}

function addexp() {
    const expenseInput = document.getElementById('eamount');
    const expenseAmount = parseFloat(expenseInput.value);
    
    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        totalExpenses += expenseAmount;
        ers.innerHTML=`Rs${totalExpenses}`
        expenseInput.value = ''; // Clear the input field
        updateBalance();
    } else {
        alert('Please enter a valid expense amount.');
    }

}
function clear(){
    const incomeInput = document.getElementById('iamount');
    const expenseInput = document.getElementById('eamount');
    incomeInput.value = '';
    expenseInput.value = '';
    alert("Cleared")
}
