
function Fibonacci(){

let number =document.getElementById("num").value
let n1 = 0, n2 = 1, nextTerm;
for (let i = 1; i <= number; i++) {
  const para = document.createElement("div");
  para.className="card";
  para.id ="carta";
  para.textContent=n1
  const element = document.getElementById("Fibo");
  element.appendChild(para);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

}
