let searchBox = document.querySelector(".search-input");
let searchButton = document.querySelector(".btn");
let table = document.querySelector("table"); 
let tbody = document.querySelector("tbody"); 
searchButton.addEventListener("click", function(event){
    kreipinys(searchBox.value);
});
function kreipinys(patiekalas) {
    let manoAjax = new XMLHttpRequest();
      manoAjax.onreadystatechange = function () {
        if (manoAjax.readyState === 4) {
            let rezultatas = JSON.parse(manoAjax.responseText);
            let patiekalai = rezultatas.results;

            tbody.innerHTML = "";
            let patiekalaiHTML = "";

            for(let i=0; i < patiekalai.length; i++) {
                let receptas = patiekalai[i];
                let receptoHTML = '<tr><td>' + receptas.title + '</td><td><img src="' + receptas.thumbnail + '"></td><td>'  + receptas.ingredients +  '</td></tr>';

                patiekalaiHTML = patiekalaiHTML + receptoHTML;
            }

            tbody.innerHTML = patiekalaiHTML;
        }
      };
      manoAjax.open('GET', 'http://www.recipepuppy.com/api/?q='+patiekalas);
      manoAjax.send();
}
