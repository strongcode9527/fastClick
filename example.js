fastClick(document.body)

var div = document.getElementById('div')

div.addEventListener('click', function() {
  console.log('div clicked')
})
div.addEventListener('touchstart', function() {
  console.log('div start')
})