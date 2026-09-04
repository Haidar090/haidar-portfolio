const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const notesContainer = document.querySelector('.notes-container');
const emptyMessage = document.getElementById('emptyMessage');

loadNotes();
checkEmpty();

addBtn.addEventListener('click', function() {
  const noteText = taskInput.value;

  if (noteText === '') {
    return;
  }

  createNoteElement(noteText);
  saveNotes();
  checkEmpty();

  taskInput.value = '';
});

function createNoteElement(noteText) {
  const note = document.createElement('div');
  note.textContent = noteText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  deleteBtn.addEventListener('click', function() {
    note.remove();
    saveNotes();
    checkEmpty();
  });

  note.appendChild(deleteBtn);
  notesContainer.appendChild(note);
}

function saveNotes() {
  const noteDivs = notesContainer.querySelectorAll('div');
  const notesArray = [];

  noteDivs.forEach(function(div) {
    notesArray.push(div.firstChild.textContent);
  });

  localStorage.setItem('notes', JSON.stringify(notesArray));
}

function loadNotes() {
  const savedNotes = localStorage.getItem('notes');

  if (savedNotes === null) {
    return;
  }

  const notesArray = JSON.parse(savedNotes);

  notesArray.forEach(function(noteText) {
    createNoteElement(noteText);
  });
}

function checkEmpty() {
  const noteDivs = notesContainer.querySelectorAll('div');

  if (noteDivs.length === 0) {
    emptyMessage.style.display = 'block';
  } else {
    emptyMessage.style.display = 'none';
  }
}