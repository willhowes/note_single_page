describe('NoteListView', function() {
  'use strict';
  
  beforeEach(function(){
    this.noteListView
    this.fakeNoteList = jasmine.createSpyObj('fakeNoteList', ['getNotes']);
  })

  describe('when the fakeNoteList has several notes', function(){

    beforeEach(function(){
      this.fakeNoteList.getNotes.and.callFake(function() {
        return ['note one', 'note two', 'note three'];
      })
      this.noteListView = new NoteListView(this.fakeNoteList)
    });
  
    it('returns a string with the notes texts', function() {
      expect(this.noteListView.printNotes()).toEqual("<ul><li><div>note one</div></li><li><div>note two</div></li><li><div>note three</div></li></ul>")
    })
  })

  describe('when the fakeNoteList has one note', function(){

    beforeEach(function(){
      this.fakeNoteList.getNotes.and.callFake(function() {
        return ['note one'];
      })
      this.noteListView = new NoteListView(this.fakeNoteList)
    });
  
    it('returns a string with the notes texts', function() {
      expect(this.noteListView.printNotes()).toEqual("<ul><li><div>note one</div></li></ul>")
    })
  })
})

