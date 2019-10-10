describe('NoteController', function() {

  beforeEach(function(){
    const dummyElement = document.createElement('app');
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    
  })

  it('takes a note list model and manipulates the app element on the index page to include the notes', function() {
    fakeNoteList = jasmine.createSpyObj('fakeNoteList', ['getNotes']);

    fakeNoteList.getNotes.and.callFake(function() {
      return ["note one",  'note two', "note three"];
    });

    // fakeNoteListView = jasmine.createSpyObj('fakeNoteListView', ['printNotes']);
    
    // fakeNoteListView.printNotes.and.callFake(function() {
    //   return "<ul><li><div>note one</div></li><li><div>note two</div></li><li><div>note three</div></li></ul>";
    // });

    noteController = new NoteController(fakeNoteList);
    noteController.amendApp();
    expect(document.getElementById('app').text()).toEqual("<ul><li><div>note one</div></li><li><div>note two</div></li><li><div>note three</div></li></ul>")
  });
})