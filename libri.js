const linkAPI = 'https://striveschool-api.herokuapp.com/books'

const ImputCerca = document.getElementById("ImputCerca")
let TotaleLibri = []

function dati () {
    return fetch(linkAPI)
    .then(Response => Response.json())
    .then(books => {
        console.log(books)
        TotaleLibri = books; 
        VisLibri(TotaleLibri)
    })
    .catch(err => console.log(err)); 
}

function VisLibri(books) {
    let risultato = document.getElementById("contenitore")
    risultato.classList.add("row", "gap-2", "justify-content-center")
    risultato.innerHTML=""

    const Libreria = books.map((book) => creacard(book))
    risultato.append(...Libreria); 
}

function creacard({img, title, category, price}) {
    const Card = document.createElement("div")
    Card.classList.add("card", "col-6", "col-md-4", "col-lg-3"); 

    const CardImage = document.createElement("img")
    CardImage.classList.add("card-img-top")
    CardImage.src = img
    Card.appendChild(CardImage); 

    const CardBody = document.createElement("div")
    CardBody.classList.add("card-body")
    Card.appendChild(CardBody); 

    const CardTitle = document.createElement("h3")
    CardTitle.classList.add("card-title",)
    CardTitle.innerText = title
    CardBody.appendChild(CardTitle); 

    const CardGenre = document.createElement("p")
    CardGenre.classList.add("card-text")
    CardGenre.innerText = "Genre: " + category
    Card.appendChild(CardGenre); 

    const CardPrice = document.createElement("h5")
    CardPrice.classList.add("card-text")
    CardPrice.innerText = "€ " + price
    Card.appendChild(CardPrice); 

    const CardBottone = document.createElement("div")
    CardBottone.classList.add("card-body")
    Card.appendChild(CardBottone); 

    const Carrello = document.createElement("button")
    Carrello.classList.add("btn", "btn-success")
    Carrello.innerText = "Aggiungi al carrello"
    CardBottone.appendChild(Carrello)
   
    const CardHide = document.createElement("button")
    CardHide.classList.add("btn", "btn-warning")
    CardHide.innerText = "Hide"
    CardBottone.appendChild(CardHide); 

    Carrello.addEventListener("click", () =>{
        cart.push({img, title, category, price})
        console.log("Libro aggiunto al carrello:", cart)
        
        Card.style.border = "2px solid red"

        CarrelloUp()
        })

    return Card; 
}

function CarrelloUp(){
    const cartContainer = getElementById("Carrello")
    cartContainer.innerHTML = ""

   
}




