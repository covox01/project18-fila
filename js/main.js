
function start(){
    var t = 2
    var ease = Power1.easeOut
    var la = new TimelineMax()
    var tl = new TimelineMax()
    var tl2 = new TimelineMax()
    var tl3 = new TimelineMax()
    var tl4 = new TimelineMax()
    tl
        .to("#f-path2", 3, {opacity: 1, drawSVG: "0% 40%", ease: ease})
        TweenMax.to("#f-path2", 2, {strokeWidth: 40, delay: 1})

    tl2
        .to("#i-path", 2, {opacity: 1, drawSVG: "0% 100%", ease: ease, delay: .2})

    tl3
        .to("#la-path", 4, {opacity: 1, drawSVG: "0% 100%", ease: ease, delay: .4})

    tl4 
        .to("#f-path1", 2, {opacity: 1, drawSVG: "0% 100%", ease: ease, delay: 2.35}, "sync")
        .to("#f-path2", 2.1, {opacity: 1, drawSVG: "0% 100%", ease: ease, delay: 2.35}, "sync+=.2")

    la.to("#la-path", 1, {strokeWidth: 40, delay: 2.5})

    tl.timeScale(1.5)
    tl2.timeScale(1.5)
    tl3.timeScale(1.5)
    tl4.timeScale(1.5)
    la.timeScale(1.5)

    TweenMax.delayedCall(2.5, exit)
}


function exit(){
    var ease = Power3.easeInOut
    var la = new TimelineMax()
    var tl = new TimelineMax()
    var tl2 = new TimelineMax()
    var tl3 = new TimelineMax()
    var tl4 = new TimelineMax()

    tl
        .to("#f-path2", 4, {opacity: .9, drawSVG: "75% 100%", ease: ease})
        TweenMax.to("#f-path2", 2, {strokeWidth: 36, delay: 1})

    tl4 
        .to("#f-path1", 3, {opacity: .9, drawSVG: "75% 100%", ease: ease, delay: .8})

    tl2
        .to("#i-path", 3, {opacity: .9, drawSVG: "79% 100%", ease: ease, delay: .8})

    tl3
        .to("#la-path", 3, {opacity: .95, drawSVG: "0% 8%", ease: ease, delay: .4})

        TweenMax.to("#la-path", 1, {strokeWidth: 36, delay: 1.2})
        TweenMax.to("#la-path, #f-path1, #f-path2, #i-path", 1, {opacity: 0, delay: 2.2, onComplete: clearProps})

  

    tl.timeScale(1)
    tl2.timeScale(1)
    tl3.timeScale(1)
    tl4.timeScale(1)
    la.timeScale(1)
}

function clearProps(){
    TweenMax.set("#f-path1, #f-path2, #i-path, #la-path", {clearProps: "transform", onComplete: set})
}

function init(){
    TweenMax.set("#logo", {xPercent: -50, yPercent: -50, onComplete: set})
    
}

function set(){
    TweenMax.set("#f-path1, #f-path2, #i-path, #la-path", {opacity: .7, drawSVG: "0 0"})
    TweenMax.set("#i-path", {opacity: .7, drawSVG: "0 0"})
    TweenMax.set("#la-path", {opacity: .75, drawSVG: "0% 0%", onComplete: start})
}

init()