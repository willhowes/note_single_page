describe('NoteListModel', function() {
  var noteListModel
  
  beforeEach(function() {
    noteListModel = new NoteListModel()    
  })

  it('the notes variable cannot be accessed from outside the function', function() {
    expect(noteListModel.notes).toBeUndefined
  })

  describe('.storeNote', function(){
    it('takes a string as an argument and this is stores in the note list', function() {
      noteListModel.storeNote('Test note')
      expect(noteListModel.getNotes()).toEqual(['Test note'])
    })

  })
})