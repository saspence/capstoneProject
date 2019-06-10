$(document).ready(function (){

  $('#sidebarCollapse').on('click', function (){
    $('#sidebar').toggleClass('active');
  });
});

function StickyNote(noteTitle, noteBody)
{
  this.noteTitle = noteTitle;
  this.noteBody = noteBody;
}

StickyNote.prototype.getNoteTitle = function()
{
  return this.noteTitle;
}

StickyNote.prototype.setNoteTitle = function (noteTitle)
{
  this.noteTitle = noteTitle;
}

StickyNote.prototype.getNoteBody = function()
{
  return this.noteBody;
}

StickyNote.prototype.setNoteBody = function (noteBody)
{
  this.noteBody = noteBody;
}

StickyNote.prototype.getStickyNoteOutput = function(note)
{
  var stickyNoteHTML = "<ul>";

  for (x=0; x < note.length; x++){

    stickyNoteHTML += "<li><a href=\"#\"><h2>";
    stickyNoteHTML += note[x].getNoteTitle();
    stickyNoteHTML += "</h2><p>";
    stickyNoteHTML += note[x].getNoteBody();
    stickyNoteHTML += "</p></a></li>";
  }

    stickyNoteHTML += "</ul>";

    return stickyNoteHTML;
}

var noteArray = new Array();

function saveBtn_onclick(){
  var newNote = new StickyNote();

  newNote.setNoteTitle(document.getElementById("noteHead").value);
  newNote.setNoteBody(document.getElementById("noteBody").value);

  noteArray.push(newNote);

  document.getElementById("stickyNote").innerHTML = newNote.getStickyNoteOutput(noteArray);

  clearForm();
}

function clearForm(){
  document.getElementById("noteHead").value = "";
  document.getElementById("noteBody").value = "";
}
