NoteController = (function () {
  let noteListView; 
  const app = document.getElementById('app');
  function NoteController(noteList) {
    noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.amendApp = function () { 
    app.innerHTML = noteListView.printNotes();
  }
  return NoteController;
}());
