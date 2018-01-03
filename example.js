fastClick(document.body)

var div = document.getElementById('div')
var input = document.getElementById('input')


div.addEventListener('click', function() {
  console.log('div clicked')
})

div.addEventListener('touchstart', function() {
  console.log('div start')
})

input.addEventListener('click', function() {
  console.log('input click')
})

input.addEventListener('touchstart', function() {
  console.log('input start')
})




console.log(input.tagName)