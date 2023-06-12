const modal = document.getElementById("addBookModal")
const addBtnModal = document.getElementById("btnAdd")
const closeModalBtn = document.getElementById("closeModalBtn")
const form = document.getElementById("addBookForm")




    // show modal
addBtnModal.addEventListener("click", function() {
    modal.classList.add("active")
})
    // close modal button
closeModalBtn.addEventListener("click", function() {
    modal.classList.remove("active")
})

// 

// get input from book

let myLibrary = []

function Book(title, author, pages, isRead) { 
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary() {
    let title = document.getElementById("titleInput").value
    let author = document.getElementById("authorInput").value
    let pages = document.getElementById("pagesInput").value
    let isRead = document.getElementById("isReadInput").checked

    const newBook = new Book(title, author, pages, isRead)
   
    // check if the book already existing in the library
    const existingBook = myLibrary.find(book => book.title === title && book.author === author)
    if(existingBook) {
        alert("book already exist")
        return
    }

    myLibrary.push(newBook)
    console.log(newBook)
}

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("hello world")
    addBookToLibrary()
    render()
    modal.classList.remove("active")
})

function render() {
    const booksGrid = document.getElementById("booksGrid")
    booksGrid.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        
        const card = document.createElement("div")
        const title = document.createElement("h1")
        const author = document.createElement("h2")
        const pages = document.createElement("p")
        const isRead = document.createElement("button")
        const btnGroup = document.createElement("div")
        const removeBtn = document.createElement("button")

        
        title.textContent = `${book.title}`
        author.textContent = book.author
        pages.textContent = `${book.pages} pages`
        isRead.textContent = `${book.isRead ? "Read" : "Not read"}`
        removeBtn.innerHTML = "Remove"
        isRead.id = `isReadButton${i}`
        
        removeBtn.onclick = () => removeBook(i)
        isRead.onclick = () => toggleReadStatus(i)

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(isRead)
        card.appendChild(btnGroup)
        btnGroup.appendChild(removeBtn)
        booksGrid.appendChild(card)
        
        btnGroup.classList.add("button-group")
        card.classList.add("book-card")
        removeBtn.classList.add("btn")
        isRead.classList.add("btn-light-green", "btn")

        
         if (book.isRead) {
            isRead.classList.add("btn-light-green");
        } else {
            isRead.classList.add("btn-light-red");
        }
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    render()
}

function toggleReadStatus(index) {
    const book = myLibrary[index]
    book.isRead = !book.isRead
    
    const isReadButton = document.getElementById(`isReadButton${index}`)
    isReadButton.innerHTML = book.isRead ? "Read" : "Not read"

    if(book.isRead) {
        isReadButton.classList.remove("btn-light-red");
        isReadButton.classList.add("btn-light-green");
    } else {
        isReadButton.classList.remove("btn-light-green");
        isReadButton.classList.add("btn-light-red");
    }
}

function editBook(index) {
    
}


