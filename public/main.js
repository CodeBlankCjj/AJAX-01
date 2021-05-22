getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300){
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      } else {
        alert('加载失败')
      }
    }
  }
  request.send()
}
getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onreadystatechange = () => {
    if (request.readyState === 4){
      if (request.status >= 200 && request.status < 300){
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
      } else {
        alert('加载失败')
      }
    }
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300){
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      }else {
        alert('加载失败')
      }
    }
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4){
      if (request.status >= 200 && request.status < 300){
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        const span = document.createElement('span')
        span.innerHTML = text
        document.body.appendChild(span)
      } else {
        console.log('失败')
      }
    }
  }
  request.send()
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {}
      const object = JSON.parse(request.response)
      myName.textContent = object.name
    }
  }
  request.send()
}
let n = 1
getPage.onclick = () => {
  console.log(n)

  const request = new XMLHttpRequest()
  request.open('GET', `/page${n+1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4){
      if (request.status >= 200 && request.status < 300){
        const array = JSON.parse(request.response)
        array.forEach(item => {
          const li = document.createElement('li')
          li.textContent = item.id
          xxx.appendChild(li)
        })
        n += 1
      }
    }
  }
  request.send()
  if (n === 2) {
    getPage.disabled = true
  }
}


