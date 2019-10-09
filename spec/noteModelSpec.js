describe('Note', function(){
  var note
  beforeEach(function(){
    note = new Note("My favourite language is JavaScript.")
  })
  it('takes a note on instantation', function() {
    expect(note.text).toEqual("My favourite language is JavaScript.")
  })

  describe('.getText', function() {
    it('returns the notes text', function(){
      expect(note.getText()).toEqual("My favourite language is JavaScript.")
    })
  })
})