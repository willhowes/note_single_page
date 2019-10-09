NoteListModel = (function() {
  var notes = [];
  function NoteListModel() {
    notes = notes
  }
  NoteListModel.prototype.getNotes = function () { 
    return notes; 
  }
  NoteListModel.prototype.storeNote = function (text) { 
    notes.push(text); 
  }

  return NoteListModel;
})();