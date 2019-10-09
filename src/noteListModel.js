NoteListModel = (function() {
  var notes = [];
  function NoteListModel() {
    this.notes = notes
  }
  NoteListModel.prototype.getNotes = function () { return notes; }
  return NoteListModel;
})();