let catalogList = 1;
showDivs(catalogList);

function currentDiv(n) {
    showDivs(catalogList = n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("product");
    let dots = document.getElementsByClassName("buttonCatalog");
    if (n > x.length) { catalogList = 1 }
    if (n < 1) { catalogList = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[catalogList - 1].style.display = "flex";
}