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
})