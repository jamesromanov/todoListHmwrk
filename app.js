let inputVal = document.querySelector("#inp");
let ad = document.getElementById("add");
n = 0;
b = 0;
m = 0;
ad.addEventListener("click", () => {
  b++;
  n++;
  if (inputVal.value !== "") {
    let oldDiv = document.querySelector(".main");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `d${m}`);
    let txt = document.createElement("h4");
    txt.setAttribute("id", `h${n}`);
    document.querySelector("#show").innerHTML = "List added succesfully!";
    let txt2 = document.createElement("button");
    txt2.setAttribute("id", `b${b}`);
    newDiv.setAttribute("id", "list");
    oldDiv.appendChild(newDiv);
    newDiv.appendChild(txt);
    newDiv.appendChild(txt2);
    document.querySelector(`#h${n}`).textContent = "🔻" + inputVal.value;
    document.querySelector(`#b${b}`).innerHTML = "🗑️";
    document.querySelector(`#b${b}`).style.background = "transparent";
    document.querySelector(`#b${b}`).style.fontWeight = "light";
    document.querySelector(`#b${b}`).style.border = "none";
    document.querySelector(`#b${b}`).style.marginRight = "7px";
  }
  if (inputVal.value !== "") {
    document.querySelector("#show").style.color = "green";
  } else {
    document.querySelector("#show").innerHTML = "Invalid input value!!";
    document.querySelector("#show").style.color = "red";
  }
  m++;
});
