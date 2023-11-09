const notesContainer = document.querySelector(".notes-container");
const button = document.querySelector(".btn");
let inputBox = document.querySelectorAll(".input-box");

let getData =()=>{
    notesContainer.innerHTML = localStorage.getItem('notes')
}

getData();

let saveData = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};
button.addEventListener("click", () => {
  let noteBox = document.createElement("p");
  let image = document.createElement("img");
  noteBox.className = "input-box";
  noteBox.setAttribute("contenteditable", "true");
  image.src = "images/delete.png";
  notesContainer.appendChild(noteBox).appendChild(image);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "P") {
    inputBox = document.querySelectorAll(".input-box");
    inputBox.forEach((nt) => {
        nt.onkeyup = ()=>{
            saveData();
        }
    });
  }
});

document.addEventListener('keydown' , (e)=>{
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak')
        e.preventDefault(); 
    }
})