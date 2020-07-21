console.log("Raushan kumar");
// localStorage.clear

showNotes();

let addbtn = document.getElementById('addBtn');
addbtn.addEventListener('click', function(e) {
    let addtext = document.getElementById('addText');

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    if (addtext.value.length != 0) {
        notesObj.push(addtext.value);
        localStorage.setItem('notes', JSON.stringify(notesObj));
    }

    addtext.value = '';
    showNotes();
});

function showNotes() {
    let addtext = document.getElementById('addText');

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {

        html += `
        <div class="card noteCard my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index +1}</h5>
                  <p class= "card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;

    });

    let noteselm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteselm.innerHTML = html;
    } else {
        noteselm.innerHTML = `Nothing to show ! "add a note" section above to add notes`;
    }
};

function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let delbtn = document.getElementById('delBtn');
delbtn.addEventListener('click', function(e) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(0, notesObj.length);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
})

let search = document.getElementById('searchTxt');

search.addEventListener("input", function() {
    let inputval = search.value;
    let notecards = document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(elemen) {
        let cardTxt = elemen.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputval)) {
            elemen.style.display = "block";
        } else {
            elemen.style.display = "none";
        }
    })

})