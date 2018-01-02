# fastClick
自己实现的一个fastClick




在工作用，遇到了一个坑就是fastClick必须使用touchmove去判断是否点击移动了，我觉得这样不太好。最起码我自己就遇到了这样的坑。

在我自己实现的fastclick中，我的设想是使用touchend和touchstart时点击的位置，来判断手指是否移动了。

正好借着这个机会彻底了解fastclick的原理，以及实现。并且巩固一下事件系统的知识。


### 创建事件，并触发

```

var event = document.createEvent('Event')

event.initEvent('click', true, false)
event.forwardedTouchEvent = true
dom.dispatchEvent(event)


```

### 难点：对于input等特殊dom元素的处理。

####难点：

- 点击特殊元素focus或者checked
- 当前特殊input元素focus，点及其他区域blur



```

```