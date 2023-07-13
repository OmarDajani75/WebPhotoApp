let counterDisplayElem = document.getElementById("photo-count");

let photoNumb = document.getElementById("product-list").childElementCount;

function buildCardsUsinJSAPI(containter, data) {
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", data.id);
    cardDiv.setAttribute("class", "product-card");
    let imgDiv = document.createElement("img");
    imgDiv.setAttribute("src", data.thumbnailUrl);
    imgDiv.setAttribute("class", "prod-img");
    let infoDiv = document.createElement("div"); //create div element
    infoDiv.setAttribute("class", "prod-info"); //set class HTML attribute
    let titleP = document.createElement("p"); //create p element
    titleP.setAttribute("class", "prod-title"); //set class HTML attribute
    titleP.appendChild(document.createTextNode(data.title)); //adding a text node to the p tag
    infoDiv.appendChild(titleP) // add the p tag to prod-info div
    cardDiv.appendChild(imgDiv) // add the img tag to product-card div
    cardDiv.appendChild(infoDiv); // add the img tag to product-card div
    containter.appendChild(cardDiv); // add product-card div to prdouct list div
    cardDiv.addEventListener("click", () => {FadeOut(data.id)});
  }

  function fetchPhotos() {
	// where we will get products from
	var url = "https://jsonplaceholder.typicode.com/albums/2/photos";
	fetch(url)
	  .then((response) => { 
	    //extract the body from response object.
	    return response.json();
	  })
	  .then((data) => {
	    //get product-list div
	    let containerDiv = document.getElementById("product-list");
	    //get the array of products from data json object
	    //create a document Fragment (https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)
	    let containerFragment = document.createDocumentFragment();
	    //for each product , build a card HTML element
	    data.forEach((photo) => {
	      buildCardsUsinJSAPI(containerFragment, photo);
	    });
	    //add the container fragment to DOM(the product-list div)
	    containerDiv.appendChild(containerFragment);
	    photoNumb = document.getElementById("product-list").childElementCount;
	    counterDisplayElem.innerHTML = photoNumb;
	  })
	  .catch((error) => {
	    console.log(error);
	  });
      }
      fetchPhotos();
      function FadeOut(e){
	var fadeTarget = document.getElementById(e);
	var fadeEffect = setInterval(function () {
	    if (!fadeTarget.style.opacity) {
		fadeTarget.style.opacity = 1;
	    }
	    if (fadeTarget.style.opacity > 0) {
		fadeTarget.style.opacity -= .4;
	    } else {
		fadeTarget.remove();
		photoNumb = document.getElementById("product-list").childElementCount;
		counterDisplayElem.innerHTML = photoNumb;
		clearInterval(fadeEffect);
	    }
	}, 200);
      }