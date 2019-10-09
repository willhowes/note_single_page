describe('NoteListModel', function() {
  var noteListModel
  
  beforeEach(function() {
    noteListModel = new NoteListModel()    
  })

  describe('.getNotes', function() {
    it('returns a empty list before any notes have been added', function() {
      expect(noteListModel.getNotes()).toEqual([])
    })
  })

  describe('.storeNote', function(){
    it('takes a string as an argument and this is stores in the note list', function() {
      noteListModel.storeNote('Test note')
      expect(noteListModel.getNotes()).toEqual(['Test note'])
    })

  })
})