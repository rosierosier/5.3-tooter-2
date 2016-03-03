var expect = chai.expect;
var handlebars = require('handlebars');

describe('createPost', function(done){
  it('should trigger a create:post event on the document with the title and body', function(){
    $(document).on('create:post', function(event, posts){
    expect(posts).to.be.an.instanceof(Object);
    done();
  });
});
$('.input-class-name').val("Title");
$('.input-button').click(function(){
  alert('button works');
});
