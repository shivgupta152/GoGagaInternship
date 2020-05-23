
appendHtml()
function appendHtml() {

   fetch('http://localhost:5000/getdata').then(data => data.json()).then(data =>{
       arrays=data
     //append new col
    var x = document.getElementById("rows")
    // var node = document.createTextNode()
    for(var i=0;i<arrays.length;++i) {
        var card = document.createElement('div');
        card.setAttribute('id', 2)
        card.classList.add("card")
        card.classList.add("col-md-3")

        var image = document.createElement("img")
        image.classList.add("card-img-top")
        image.src = "..."

        var cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        var cardHeading = document.createElement("h5")
        cardHeading.classList.add("card-title")
        var cardHeading2 = document.createElement("h5")
        cardHeading2.classList.add("card-title")
        cardHeading.textContent = arrays[i].FirstName
        cardHeading2.textContent = arrays[i].LastName


        var cardText = document.createElement("p")
        var cardText2 = document.createElement("p")
        var cardText3= document.createElement("p")
        cardText.classList.add("card-text")
        cardText2.classList.add("card-text")
        cardText3.classList.add("card-text")
        cardText.textContent ="Age"+ arrays[i].Age
        cardText2.textContent="Gender"+arrays[i].Gender
        cardText3.textContent="Address:"+arrays[i].Address

        x.appendChild(card);
        card.appendChild(image);
        card.appendChild(cardBody)
        cardBody.appendChild(cardHeading)
        cardBody.appendChild(cardHeading2)
        cardBody.appendChild(cardText)
        cardBody.appendChild(document.createElement('hr'))
        cardBody.appendChild(cardText2)
        cardBody.appendChild(cardText3)
    }
    })
}