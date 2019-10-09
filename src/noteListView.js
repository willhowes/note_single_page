NoteListView = (function() {
  var notes
  function NoteListView(noteList) {
    noteList = noteList;
    notes = noteList.getNotes
  }
  NoteListView.prototype.printNotes = function () { 
    var final_html = "<ul>"

    notes.forEach(function(note) {
      final_html.concat(`<li><div>${note}</div></li>`)
    });

    final_html.contact('</ul>')
    return final_html 
  }
  return NoteListView;
})();