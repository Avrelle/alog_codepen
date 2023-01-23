
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const style = document.getElementById('style');
const javaS = document.getElementById('javaS')
const result = document.getElementById('resultCode');
html.addEventListener("keyup", recupHtml);
css.addEventListener("keyup", recupStyle);
js.addEventListener("keyup", recupJS);

//recup html et l'afficher + afficher le nombre de caractères
function recupHtml(){
    result.innerHTML = html.value;
    document.getElementById("countHtml").innerText = html.value.length;
    document.getElementById("pb1").style.width = `${html.value.length}%`;
    if(html.value.length >=35 && html.value.length <= 75){
        document.getElementById("pb1").style.backgroundColor = "orange";
    } else if(html.value.length >=76 ) {
        document.getElementById("pb1").style.backgroundColor = "green";
    }
    
}
//recup css et l'afficher + afficher le nombre de caractères
function recupStyle(){
    style.innerText = css.value;
    document.getElementById("countCss").innerText = css.value.length;
    document.getElementById("pb2").style.width = `${css.value.length}%`;
    if(css.value.length >=35 && css.value.length <= 75){
        document.getElementById("pb2").style.backgroundColor = "orange";
    } else if(css.value.length >=76 ) {
        document.getElementById("pb2").style.backgroundColor = "green";
    }
}
//recup js + afficher le nombre de caractères
function recupJS(){
    javaS.innerText = js.value;
    document.getElementById("countJs").innerText = js.value.length;
    document.getElementById("pb3").style.width = `${js.value.length}%`;
    if(js.value.length >=35 && js.value.length <= 75){
        document.getElementById("pb3").style.backgroundColor = "orange";
    } else if(js.value.length >=76 ) {
        document.getElementById("pb3").style.backgroundColor = "green";
    }
}

//fait le js 
document.querySelector('#btn').onclick = function run (){
    eval(js.value)
}

// loader 
html.addEventListener("mouseout", gifLoaderOut)
html.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";
     
}

css.addEventListener("mouseout", gifLoaderOut)
css.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";
     
}

js.addEventListener("mouseout", gifLoaderOut)
js.addEventListener("mouseover", gifLoaderOver);

function gifLoaderOut(){
    document.querySelector(".gif").style.visibility = "hidden";
}

function gifLoaderOver(){
    document.querySelector(".gif").style.visibility = "visible";
     
}
//faire avancer la bar en fonction du nombres caractères

