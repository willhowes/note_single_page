NoteListView = (function() {
  let notes
  function NoteListView(noteList) {
    noteList = noteList;
    notes = noteList.getNotes()
  }
  NoteListView.prototype.printNotes = function () { 
    let final_html = "<ul>"
    notes.forEach(function(note) {
      final_html = final_html.concat(`<li><div>${note}</div></li>`)
    });
    return final_html = final_html.concat('</ul>')

  }
  return NoteListView;
})();