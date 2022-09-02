let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
    document.getElementById("loader").classList.add('loader');
    document.getElementById("search-btn").style.display = 'none';
;
  let countryName = countryInp.value.toUpperCase();
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';

      result.innerHTML = `
    
   <tr>
        <img src="${data[0].flags.svg}" class="flag-img">
      </tr>
      
        <tr>
        <td class="text-center" colspan="2"><button id="addFav" class="btn btn-sm btn-success rounded-0">Add Favourite</button></td>
      </tr>
   `;

  let  addFav =document.getElementById('addFav')
 

  addFav.addEventListener("click", () => {
    addFavourite(countryName)
  })


    })
    .catch(() => {
      if (countryName.length == 0) {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';
      result.innerHTML = `<div class="alert alert-danger">The input field cannot be empty</div>`;
      setTimeout(function() {result.close();}, 5000)

      } else {
        document.getElementById("loader").classList.remove('loader');
        document.getElementById("search-btn").style.display = 'block';
        result.innerHTML = `<div class="alert alert-danger">Please enter a valid country name or check your internet connection<div>`;
      }
    });

});

function addFavourite(countryName){
let favContainer =  document.getElementById('favList')
const node = document.createElement("li");
const span = document.createElement("span");

const textnode = document.createTextNode(countryName);

node.appendChild(textnode);
node.appendChild(span);
  favContainer.appendChild(node);
  
  }
