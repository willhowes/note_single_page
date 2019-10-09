describe('NoteListView', function() {
  beforeEach(function(){
    fakeNoteList = jasmine.createSpyObj('fakeNoteList', ['getNotes']);
    fakeNoteList.getNotes.and.callFake(function() {
      return ['note one', 'note two'];
    })
    noteListView = new NoteListView(fakeNoteList)
  });

  it('returns a string with the notes texts', function() {
    expect(noteListView.printNotes()).toEqual("<ul><li><div>note one</div></li><li><div>note two</div></li></ul>")
  })
})

