const AdminForm = document.querySelector("#form"); 

const bookName = document.querySelector("#name");
const bookAuthor = document.querySelector("#author");
const bookPrice = document.querySelector("#price");
const bookPhoto = document.querySelector("#file")
const bookDesc = document.querySelector("#textarea");


AdminForm.addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(bookName.value, bookAuthor.value, bookPrice.value, bookPhoto.value, bookDesc.value);
})

