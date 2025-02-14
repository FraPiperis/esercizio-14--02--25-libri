
function FunzioneLibri(books) {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(books => {
        FunzioneLibri(books); 
        return books; 
    })
    .catch(error => console.error('Error:', error));





    
    let contenitore = document.getElementById("contenitore")
    contenitore.classList.remove("d-none"); 

    books.data.forEach(books => {
        const card = document.createElement("div")
        card.classList.add("card", "mb-2", "bg-transparent" , "border-0")

        const img = document.createElement("img")
        img.src = books.
        img.classList.add("card-img-top")
        
        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body", "px-0")

        const cardTitle = document.createElement("h4")
        cardTitle.classList.add("card-body", "px-0")
        cardTitle.innerText = song.title

        const cantanti = document.createElement("h6")
        cantanti.classList.add("card-text", "fw-light", "fs-small")
        cantanti.innerText = song.artist.name

        cardBody.appendChild(cardTitle); 
        cardBody.appendChild(cantanti); 

        card.appendChild(img); 
        showcards.appendChild(card)
});
}
FunzioneLibri(); 
