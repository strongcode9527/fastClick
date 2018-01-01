;(function(win){
  function fastClick(el) {
    var touchstartX = 0,
        touchstartY = 0,
        touchendX = 0,
        touchendY = 0


    function touchStart(e) {
      touchstartX = e.touches[0].clientX
      touchstartY = e.touches[0].clientY
    }

    function touchEnd(e) {
      var dom = e.target

      touchendX = e.changedTouches[0].clientX
      touchendY = e.changedTouches[0].clientY
      if(hasMove()) { 
        return
      }
      // dom.click()
      e.preventDefault()
      var event = document.createEvent('Event')
      event.initEvent('click', true, false)
      dom.dispatchEvent(event)
    }

    function hasMove() {
      return Math.abs(touchstartX-touchendX) > 0 || Math.abs(touchstartX - touchendX) > 0
    }

    el.addEventListener('touchstart',touchStart)
    el.addEventListener('touchend',touchEnd)

  }






  win.fastClick = fastClick
})(window)


