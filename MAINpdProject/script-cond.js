let popup = document.querySelector(".popup-js")

function closePopup(){
    popup.classList.remove('open-popup')
}

async function getResponce(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    var content = await response.json()    
    content = content.splice(0, 20)
    let cardCondRight = document.querySelector(".right")
    let cardCondLeft = document.querySelector(".left")
    let a = 12;
    for(let key = 0; key < content.length; key += 1){
        if (key%2 == 0){
            cardCondRight.innerHTML += `
              <a aria-current="page" href="personal-page.html">
                <div id="${key}">
                  <div class="card">
                    <img src="${content[key].url}" class="card-img-top" alt="mew">
                    <div class="card-body">
                      <p class="card-text">${content[key].title.length < a? content[key].title.slice(0,a): content[key].title.slice(0,a) + '...' }</p>
                    </div>
                  </div>
                </div>
              </a>
            `
        }
        else { 
            cardCondLeft.innerHTML += `
              <a aria-current="page" href="personal-page.html">
                <div id="${key}">
                  <div class="card">
                    <img src="${content[key].url}" class="card-img-top" alt="mew">
                    <div class="card-body">
                      <p class="card-text">${content[key].title.length < a? content[key].title.slice(0,a): content[key].title.slice(0,a) + '...' }</p>
                    </div>
                  </div>
                </div>
              </a>
            `
        }
    }
}

getResponce()