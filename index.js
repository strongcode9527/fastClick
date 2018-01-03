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
      var dom = e.target,
          tagName = e.target.tagName,
          type = e.target.type

      touchendX = e.changedTouches[0].clientX
      touchendY = e.changedTouches[0].clientY

      if(hasMove()) {
        return
      }

      if(tagName === 'INPUT' || tagName === 'TEXTAREA') {
        if(tagName === 'INPUT' || tagName === 'TEXTAREA') {
          dom.focus()
        }
      }

      e.preventDefault()

      // 对于点击其他地方后，input框失去焦点
      if (document.activeElement && document.activeElement !== dom) {
        document.activeElement.blur();
      }
      
      var event = document.createEvent('Event')
      event.initEvent('click', true, false)
      event.forwardedTouchEvent = true
      dom.dispatchEvent(event)
    } 

    function onClick(e) {
      console.log('click', e)
    }

    function hasMove() {
      return Math.abs(touchstartX-touchendX) > 0 || Math.abs(touchstartX - touchendX) > 0
    }

    el.addEventListener('touchstart',touchStart)
    el.addEventListener('touchend',touchEnd)
    // el.addEventListener('click', onClick)
  }






  win.fastClick = fastClick
})(window)


