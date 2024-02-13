const buttons = document.querySelectorAll("button");



function add_para() {
    const para = document.createElement("p");
    para.textContent = "You have clicked a button !";
    document.body.appendChild(para);
    
}

for (const button in buttons) {
    button.addEventListener("click", add_para);
}