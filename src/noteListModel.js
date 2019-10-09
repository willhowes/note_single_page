NoteListModel = (function() {
  var notes = [];
  function NoteListModel() {
    this.notes = notes
  }
  NoteListModel.prototype.getNotes = function () { 
    return notes; 
  }
  NoteListModel.prototype.storeNote = function (text) { 
    this.notes.push(text); 
  }

  return NoteListModel;
})();