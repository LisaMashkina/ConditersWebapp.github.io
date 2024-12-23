let popup = document.querySelector(".popup-js")

function closePopup(){
    popup.classList.remove('open-popup')
}

async function getResponce(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    var content = await response.json()
    function openPopup(){
        key = content[this.id]
        let popupJS = document.querySelector(".popup")
        popup.classList.add('open-popup')
        
        popupJS.innerHTML = `
            <button class="close" type="submit" onclick="closePopup()">Назад</button>
            <div class="popup-header">
                <img src="${key.url}" alt="..." class="popup-img">
                <div class="main-popap-inf">
                <p>${key.title.slice(0, 20)}</p>
                <a class="bt-to-cond" aria-current="page" href="personal-page.html" ">Кондитер</a>
                </div>
            </div>
            <div class="popup-od-inf">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </div>
            <div class="buy-container"><a class="popup-buy" href="#"><b>Заказать</b></a></div>
        `
    }

    content = content.splice(0, 10)
    let cardCondRight = document.querySelector(".right")
    let cardCondLeft = document.querySelector(".left")
    let a = 12;
    for(let key = 0; key < content.length; key += 1){
        if (key%2 == 0){
            cardCondRight.innerHTML += `
            <div id="${key}">
              <div class="card">
                <img src="${content[key].url}" class="card-img-top" alt="mew">
                <div class="card-body">
                  <p class="card-text">${content[key].title.length < a? content[key].title.slice(0,a): content[key].title.slice(0,a) + '...' }</p>
                </div>
              </div>
            </div>
            `
        }
        
        else { 
            cardCondLeft.innerHTML += `
            <div id="${key}">
              <div class="card">
                <img src="${content[key].url}" class="card-img-top" alt="mew">
                <div class="card-body">
                  <p class="card-text">${content[key].title.length < a? content[key].title.slice(0,a): content[key].title.slice(0,a) + '...' }</p>
                </div>
              </div>
            </div>
            `
        }
    }
    for(key = 0; key < content.length; key += 1){
        elem = document.getElementById(key)
        elem.addEventListener('click', openPopup)
    }

}

getResponce()