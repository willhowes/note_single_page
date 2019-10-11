describe('NoteController', function() {

  xit('takes a note list model and manipulates the app element on the index page to include the notes', function() {
    fakeNoteList = jasmine.createSpyObj('fakeNoteList', ['getNotes']);

    fakeNoteList.getNotes.and.callFake(function() {
      return ["note one",  'note two', "note three"];
    });

    // fakeNoteListView = jasmine.createSpyObj('fakeNoteListView', ['printNotes']);
    
    // fakeNoteListView.printNotes.and.callFake(function() {
    //   return "<ul><li><div>note one</div></li><li><div>note two</div></li><li><div>note three</div></li></ul>";
    // });

    noteController = new NoteController(fakeNoteList);
    expect(noteController.amendApp()).toEqual("<ul><li><div>note one</div></li><li><div>note two</div></li><li><div>note three</div></li></ul>")
  });
})