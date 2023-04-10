const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");

window.addEventListener("load",() => centimeter.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value ="";
});

inch.addEventListener("input", ()=>{
    centimeter.value = (inch.value * 2.54).toFixed(4);
    if(!inch.value) inch.value ="";
});