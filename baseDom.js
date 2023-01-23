//alert("dd")
//console.warn("error")

// // document.getElementById("title");
// // document.getElementById("title").style.color = "red";

 document.querySelector("h2").style.color = "purple";
// console.log(document.querySelector("#title"));
//document.getElementsByTagName("h1").style.color = "red";

console.log(document.querySelectorAll("#title"));
const array = document.querySelectorAll("#title");
array.forEach(element => {
    console.log(element);
    element.style.color = "red";
});

 document.querySelector("#btn").onclick = function(){
    document.querySelector("#forme").classList.add("active")
    document.getElementById("forme").style.backgroundColor = "green";
    document.getElementById("forme").style.borderRadius = "100px";
    document.getElementById("forme").style.transition = "2s";
    document.getElementById("forme").style.transform= "translate(100px, 200px)";

};

let age = prompt('quel est ton age ?');
let name = prompt('quel est ton nom ?')

switch(true){
    case age >= 18 && age < 60:
        document.querySelector("#welcome").innerHTML= 
        `<h1> Bienvenu ${name}</h1>`;
        break;
    case age >= 60:
        console.log("vieux");
        break;
    default:
        document.querySelector("body").innerHTML= 
        `<h1> C'est non revient dans ${18 - age} ans ${name}</h1>`;
}
