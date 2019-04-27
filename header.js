var headerDiv = document.createElement('div')
headerDiv.setAttribute('class', 'header')
document.body.appendChild(headerDiv)

var nav = document.createElement('div')
nav.setAttribute('class', 'nav-1')
headerDiv.appendChild(nav)


var logo = document.createElement('a')
logo.setAttribute('href', 'index.html')
nav.appendChild(logo)

var img = document.createElement("img")
img.src = "logo-icon.png"
img.onmouseover= function(){this.src='logo-icon-2.png'}
img.onmouseout= function(){this.src='logo-icon.png'}
logo.appendChild(img)


var title = document.createElement("h2")
title.setAttribute('class', 'title')
var titleLink = document.createElement('a')
titleLink.setAttribute('href', '#home')
var titleText = document.createTextNode('To Do List')
titleLink.appendChild(titleText)
title.appendChild(titleLink)
nav.appendChild(title)