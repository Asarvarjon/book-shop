const AdminForm = document.querySelector("#form"); 

const bookName = document.querySelector("#name");
const bookAuthor = document.querySelector("#author");
const bookPrice = document.querySelector("#price");
const bookPhoto = document.querySelector("#file")
const bookDesc = document.querySelector("#textarea");


AdminForm.addEventListener("submit", async (event) => {
    event.preventDefault()

    const formData = new FormData();

    formData.append("name", bookName.value);
    formData.append("author", bookAuthor.value);
    formData.append("price", bookPrice.value);
    formData.append("content", bookDesc.value);
    formData.append("photo", bookPhoto.files[0])

    let response = await fetch("/admin", {
        method: "POST",
        body: formData,
    });

    response = await response.json();
    console.log(response);

     if(response.ok) {
         bookName.value = "";
         bookAuthor.value = "";
         bookPrice.value = "";
         bookPhoto.value = "";
         bookDesc.value = "";
     }
 
})


//


