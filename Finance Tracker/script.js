let description_input = document.querySelector(".Description_input");
let amount_input = document.querySelector(".amount_input");
let options = document.querySelector(".options");
let Add_btn = document.querySelector(".Add_btn");
let Balance = document.querySelector(".Balance");

let balance;

function validation_input() {
    let text = description_input.value.trim();
    if(text === ""){
       description_input.setCustomValidity("please enter a valid input");//set validation
       description_input.reportValidity();//show validation
       return false;
    }
    else{
        description_input.setCustomValidity("");//clear any previous validation message
        return text;
    }
}

function validation_amount() {
    let amount = parseFloat(amount_input.value);
    if(amount <= 0 || isNaN(amount)){
        amount_input.setCustomValidity("please enter a valid amount");
        amount_input.reportValidity();
        return false;
    }
    else{
        amount_input.setCustomValidity("");
        return amount;
    }
}

Add_btn.addEventListener("click", function(event) {

    event.preventDefault();// Prevents default form submission (important for form elements)

    let text = validation_input();
    let amount = validation_amount();
    let type = options.value;

    if(!(text)|| !(amount)){
        return;
    }
   
    description_input.value = "";
    amount_input.value = "";

    let container = document.createElement("div");
    container.classList.add("last_container");

    let amount_res = document.createElement("p");
    amount_res.classList.add("amount_res");

    let description_res = document.createElement("p");
    description_res.classList.add("description_res");

    description_res.textContent = text;
    amount_res.textContent = `$ ${parseFloat(amount).toFixed(2)}`; 

    container.appendChild(description_res);
    container.appendChild(amount_res);
    document.body.appendChild(container);

    balance = parseFloat(Balance.textContent.replace("$","").trim());
    if(type === "Expense"){
        description_res.style.color = "red";
        amount_res.style.color = "red";
        balance -= amount;
    }
    else{
        description_res.style.color = "#28A745";
        amount_res.style.color = "#28A745";
        balance += amount;
    }
    Balance.textContent = `$ ${balance.toFixed(2)}`;
});

description_input.addEventListener("input", validation_input);
amount_input.addEventListener("input",  validation_amount);