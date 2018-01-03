# fastClick
自己实现的一个fastClick




在工作用，遇到了一个坑就是fastClick必须使用touchmove去判断是否点击移动了，但是这有一个问题，那就是可能此dom元素禁止了touchmove的冒泡，这就有可能发生滑动变点击的bug，我在新的项目中就遇到了这个问题。

**所以本项目主要是模仿fastclick实现自己的一个fastclick，主要是学习fastclick的原理以及实现细节**

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


#### 点击特殊元素focus或者checked


```
  if(tagName === 'INPUT' || tagName === 'TEXTAREA') {
     if(tagName === 'INPUT' || tagName === 'TEXTAREA') {
       dom.focus()
     }
   }

```


#### 当前特殊input元素focus，点及其他区域blur

```
// document.activeElement获取当前页面focus的元素，一般是input或textarea

if (document.activeElement && document.activeElement !== dom) {
   document.activeElement.blur();
}

```