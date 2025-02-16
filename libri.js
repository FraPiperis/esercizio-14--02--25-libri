//per la funzione cerca 
let TotLibri = []

//per il bottone cerca 
const Cercare = document.getElementById("Cercare")

//
const linkAPI = 'https://striveschool-api.herokuapp.com/books'

function FunzioneLibri() {
        fetch(linkAPI)
        .then(response => response.json())
        .then(books => {
            console.log(books); 
            //inserisco tutti i libri nell'array 
            TotLibri = books; 
            VisCard(TotLibri); 
        })
        .catch(err => console.log(err)); 
    }  
    

    //map 
    function VisCard(books) {
        let contenitore = document.getElementById("contenitore")
        contenitore.classList.add("row", "gap-2", "justify-content-center")
        contenitore.innerHTML=""

        const PaginaLibri = books.map((book) => Libri(book))

        contenitore.append(...PaginaLibri)
     }
    
    //creazione carte
    function Libri({img, title, category, price }) {

             const card = document.createElement("div")
             card.classList.add("card", "col-md-3", "col-6")

             const immagine = document.createElement("img")
             immagine.classList.add("card-img-top")
             immagine.src = img; 
             card.appendChild(immagine); 

             const body = document.createElement("div")
             body.classList.add("card-body"); 
             card.appendChild(body); 

             const titolo = document.createElement("h5")
             titolo.classList.add("card-title")
             titolo.innerText = title; 
             body.appendChild(titolo); 

             const genere = document.createElement("p")
             genere.classList.add("card-text")
             genere.innerText = "Genere" + category; 
             body.appendChild(genere); 

             const prezzo = document.createElement("p")
             prezzo.classList.add("card-text")
             prezzo.innerText = "€" + price; 
             body.appendChild(prezzo);

             
             const CardCarrello = document.createElement("div")
             CardCarrello.classList.add("card-body"); 
             card.appendChild(CardCarrello); 

             const carrello = document.createElement("button")
             carrello.classList.add("btn", "btn-outline-dark")
             carrello.innerText = "Aggiungi al carrello"; 
             CardCarrello.appendChild(carrello); 
            
             const bottone = document.createElement("button")
             bottone.classList.add("btn", "btn-warning")
             bottone.innerText ="Hide"; 
             CardCarrello.addEventListener(bottone); 

             carrello.addEventListener("click", () =>{
                cart.push({img, title, category, price})
                console.log("Libro aggiunto al carrello:", cart)
                
                card.style.border = "2px solid red"
        
               Aggiorna()
                })

             return card; 
        } 

        function Aggiorna(){
            const cartContainer = getElementById("Carrello")
            cartContainer.innerHTML = ""
        }

        FunzioneLibri()
        
          


        //function RICERCA() {
           // const elemento = Cercare.value.toLowerCase()
        
           // const filter = TotLibri.filter((book) => {
            //    return book.title.toLowerCase().includes(elemento); 
        //    })
         //   VisCard(filter); 
       // }
        
        FunzioneLibri(); 
