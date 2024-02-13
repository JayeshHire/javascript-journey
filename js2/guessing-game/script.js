

//check if the number of trial the user is performing
//create a function for taking the guessed number from the input
//then store the guessed number into the array of numbers


let turns = 10;
let guesses = [];

const para = document.createElement("p");
const para2 = document.createElement("p");
const attr = document.createAttribute("id");
attr.value = "result";
para2.setAttributeNode(attr);

para2.textContent = "";

document.body.appendChild(para);
document.body.appendChild(para2);
para.textContent = "";

let randnum = Math.floor(Math.random()*100 - 1);


const button = document.querySelector("button");
button.addEventListener("click", main)

const resetbtn = document.getElementById("reset-btn")
resetbtn.addEventListener("click", reset);

let d = 15;

//trial function 
function main(){
    turns -= 1;
    

    if (turns >0 ){
         
        if (turns < 9){
            const t = document.getElementById("message");
            document.body.removeChild(t);
        
        }
        const para = document.createElement("p");
        const attr = document.createAttribute("id");
        attr.value = "message";
        para.setAttributeNode(attr);
        const field = document.querySelector("input#entered-val");
        let num = field.value ;
        guesses.push(num);
        para.textContent = `Your entered number is `;
        for (guess of guesses){
            para.textContent += ` ${guess} `;
        }
        
        document.body.appendChild(para);
        check_ans();
        
    } else if (turns == 0) {
        const inputField = document.querySelector("input#entered-val");
        const resetbtn = document.querySelector("button#reset-btn");
        const para = document.querySelector("p#message");
        let num = document.querySelector("input#entered-val").value ;
        guesses.push(num);
        
        para.textContent += ` ${num} `;
        resetbtn.removeAttribute("hidden");
        const attr = document.createAttribute("disabled");
        inputField.setAttributeNode(attr);
        
    } else {

    }

    if( turns == 5){
        console.log(randnum);
    }
}


//reset function
function reset(){
    turns = 10;
    guesses = [];
    const para = document.querySelector("p#message");
    const resetbtn = document.querySelector("button#reset-btn");
    const para2 = document.querySelector("p#result");
    const attr = document.createAttribute("hidden");
    resetbtn.setAttributeNode(attr);
    para.textContent = "";
    const inputField = document.querySelector("input#entered-val");
    inputField.removeAttribute("disabled");
    document.body.removeChild(para);

    para2.style.backgroundColor = "white";
    para2.style.color = "black";
    para2.textContent = "";
    randnum = Math.floor(Math.random()*100 - 1)
}

//created function for the actual purpose but it is not working now
function check_ans(){
    let current_ind = 10 - turns -1 ;
    let num = guesses[current_ind];
    const para = document.querySelector("p#result");
    
    if (num > randnum) {
        para.style.backgroundColor = "lightred";
        para.style.color = "red"
        para.textContent = "Your answer is greater than the actual number";
    } else if (num < randnum){
        para.style.backgroundColor = "lightyellow";
        para.style.color = "orange";
        para.textContent = "Your answer is smaller than the acual number";
    } else {
        const resetbtn = document.querySelector("button#reset-btn");
        const inputField = document.querySelector("input#entered-val");
        const attr = document.createAttribute("disabled");
        inputField.setAttributeNode(attr);
        resetbtn.removeAttribute("hidden");

        para.style.backgroundColor = "lightgreen";
        para.style.color = "green";
        para.textContent = "Your answer is CORRECT";

    }
}