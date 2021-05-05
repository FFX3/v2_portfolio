let navgationWidth = null
let windowWidth = null
let targetMargin = null

let dynamicNavBarCSS = {}
let hideOnScrollCSS = {}
let centerOnScrollCSS = {}
let removeMarginOnScrollCSS = {}
let mainCSS = {}


$(document).ready(()=>{
    navgationWidth = $('#centerOnScroll').width()
    windowWidth = $(window).width()
    targetMargin = Math.floor((windowWidth - navgationWidth) / 2)

    dynamicNavBarCSS = {
        height: $('#dynamicNavBar').css('height'),
        padding: {
            top:$('#dynamicNavBar').css('padding-top'),
            right:$('#dynamicNavBar').css('padding-right'),
            bottom:$('#dynamicNavBar').css('padding-bottom'),
            left:$('#dynamicNavBar').css('padding-left'),
        },
    }

    hideOnScrollCSS = {
        opacity: $('#hideOnScroll').css('opacity'),
        width: $('#hideOnScroll').css('width'),
        height: $('#hideOnScroll').css('height'),
        top: $('#hideOnScroll').css('top')
    }

    centerOnScrollCSS = {
        margin: {
            top: $('#centerOnScroll').css('margin-top'),
            right: $('#centerOnScroll').css('margin-right'),
            bottom: $('#centerOnScroll').css('margin-bottom'),
            left: $('#centerOnScroll').css('margin-left'),
        },
        paddingTop: $('#centerOnScroll').css('padding-top')
    }

    removeMarginOnScrollCSS = {
        margin: {
            top: $('#removeMarginOnScroll').css('margin-top'),
            right: $('#removeMarginOnScroll').css('margin-right'),
            bottom: $('#removeMarginOnScroll').css('margin-bottom'),
            left: $('#removeMarginOnScroll').css('margin-left'),
        },
    }

    mainCSS = {
        paddingTop: $('main').css('padding-top'),
    }

    const distanceFromTopOnLoad = $(document).scrollTop();

    let isBigBar = true
    if(distanceFromTopOnLoad > 200){
        setShortBar()
        isBigBar = false
    }
    $(window).scroll(()=>{
        const distanceFromTop = $(document).scrollTop();
        if(distanceFromTop > 200 && isBigBar){
            stopAnimations()
            shrinkBar()
            isBigBar = false
        }
        if(distanceFromTop < 200 && !isBigBar){
            stopAnimations()
            unShrinkBar()
            isBigBar = true
        }
    })
})

function unShrinkBar(){
    const time = 2000
    $('#dynamicNavBar').animate({
        height: dynamicNavBarCSS.height,
        padding: `${dynamicNavBarCSS.padding.top} ${dynamicNavBarCSS.padding.right} ${dynamicNavBarCSS.padding.bottom} ${dynamicNavBarCSS.padding.left}`,
    }, time+500)

    $('#hideOnScroll').animate({
        opacity: hideOnScrollCSS.opacity,
        width: hideOnScrollCSS.width,
        height: hideOnScrollCSS.height,
        top: hideOnScrollCSS.top
    }, time)

    $('#centerOnScroll').animate({
        marginTop: centerOnScrollCSS.margin.top,
        marginRight: centerOnScrollCSS.margin.right,
        marginBottom: centerOnScrollCSS.margin.bottom,
        marginLeft: centerOnScrollCSS.margin.left,
        paddingTop: centerOnScrollCSS.paddingTop,

    }, time+500)

    $('#removeMarginOnScroll').animate({
        marginTop: removeMarginOnScrollCSS.marginTop,
        marginRight: removeMarginOnScrollCSS.marginRight,
        marginBottom: removeMarginOnScrollCSS.marginBottom,
        marginLeft: removeMarginOnScrollCSS.marginLeft,
    }, time+500)

    $('main').animate({
        paddingTop: mainCSS.paddingTop,
    }, time+500)
}

function shrinkBar(){
    const time = 2000
    $('#dynamicNavBar').animate({
        height: '60px',
        padding: '0px 0px 0px 0px'
    }, time+500)

    $('#hideOnScroll').animate({
        opacity: '0',
        width: '1px',
        height: '0px',
        top: '50px'
    }, time)

    $('#centerOnScroll').animate({
        margin: `0px ${targetMargin}px`,
        paddingTop: '6px',

    }, time+500)

    $('#removeMarginOnScroll').animate({
        margin: '0px',
    }, time+500)

    $('main').animate({
        paddingTop: '60px',
    }, time+500)
}

function setShortBar(){

    $('#dynamicNavBar').css('height', '60px') 
    $('#dynamicNavBar').css('padding', '0px 0px 0px 0px')

    $('#hideOnScroll').css('opacity', '0')
    $('#hideOnScroll').css('width', '1px')
    $('#hideOnScroll').css('height', '0px')
    $('#hideOnScroll').css('top', '50px')

    $('#centerOnScroll').css('margin', `0px ${targetMargin}px`)
    $('#centerOnScroll').css('padding-top', '6px')

    $('#removeMarginOnScroll').css('margin', '0px')

    $('main').css('padding-top', '60px')
}

function stopAnimations(){
    $('#dynamicNavBar').stop()
    $('#hideOnScroll').stop()
    $('#centerOnScroll').stop()
    $('#removeMarginOnScroll').stop()
    $('main').stop()
}

