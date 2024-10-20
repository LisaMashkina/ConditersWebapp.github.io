let popup = document.querySelector(".popup-js")

function closePopup(){
    popup.classList.remove('open-popup')
}

async function selfpage(){
    // let response = await fetch('https://osetiaalaniapum.ru/aa')
    // var content = await response.json()
    var content = res
    function openPopup(){
        key = content.cakes[this.id]
        let popupJS = document.querySelector(".popup")
        popup.classList.add('open-popup')
   
        popupJS.innerHTML = `
            <button class="close" type="submit" onclick="closePopup()">Назад</button>
            <div class="popup-header">
                <img src="${key.photo}" alt="..." class="popup-img">
                <div class="main-popap-inf">
                <p>${key.name.slice(0, 20)}</p>
                </div>
            </div>
            <div class="popup-od-inf">
                Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </div>
            <div class="buy-container"><a class="popup-buy" href="#"><b>Заказать</b></a></div>

        `
    }
    let selfBody = document.querySelector(".selfBody")
    selfBody.innerHTML += `
        
        <div><button onclick="window.history.back()" class="back-butt">назад</button></div>
        <div class="main-inf-block">
            <div class="photo-profile">
                <img src="${content.img}" alt="...">
            </div>
            <div class="inf-block">
                <h2>${content.name}</h2>
            </div>
        </div>
        <div class="description">
        ${content.desc}
        </div>
        
    `
    let socialMedia = document.querySelector(".inf-block")
    if (content.youtube){
        socialMedia.innerHTML += `
            <p>YouTube: ${content.youtube} </p>
        `
    }
   
    if (content.vk){
        socialMedia.innerHTML += `
            <p>VK: ${content.vk} </p>
        `
    }

    if (content.inst){
        socialMedia.innerHTML += `
            <p>Опыт работы: ${content.inst} </p>
        `
    }
    let cardCondRight = document.querySelector(".right")
    let cardCondLeft = document.querySelector(".left")
    let key; // условие ? выражение1 : выражение2 cont.cakes: [{}, {}]
    let a = 15;
    for(key = 0; key < content.cakes.length; key += 1){
        if (key%2 == 0){
            cardCondRight.innerHTML += `
            <div id="${key}">
              <div class="card">
                <img src="${content.cakes[key].photo}" class="card-img-top" alt="mew">
                <div class="card-body" style="ttext-align: center;">
                  <p class="card-text">${content.cakes[key].name.length < a? content.cakes[key].name.slice(0,a): content.cakes[key].name.slice(0,a) + '...' }</p>
                </div>
              </div>
            </div>
            `
        }
        
        else { 
            cardCondLeft.innerHTML += `
            <div id="${key}">
              <div class="card">
                <img src="${content.cakes[key].photo}" class="card-img-top" alt="mew">
                <div class="card-body">
                  <p class="card-text">${content.cakes[key].name.length < a? content.cakes[key].name.slice(0,a): content.cakes[key].name.slice(0,a) + '...' }</p>
                </div>
              </div>
            </div>
            `
        }
    }

    for(key = 0; key < content.cakes.length; key += 1){
        elem = document.getElementById(key)
        elem.addEventListener('click', openPopup)
    }
}


res = {
    'img': 'static/img/cat.jpg',
    'name': 'Анна Малюгина',
    'inst': '2 года',
    'desc': 'Кулинария - моё хобби и моя работа, люблю радовать своих заказчиков яркими дизайнами и вкусными тортами!',
    'time': 'dd.mm.yyyy',
    'youtube': 'url',
    'vk': 'url',
    'cakes': [
        {
            'name': 'Месяц',
            'photo': 'static/img/cake1.jpg',
            'desc': 'Декор: месяц на звёздном небе. Начинка: Шоколад-вишня 2000р/кг'
        },
        {
            'name': 'Самолетик',
            'photo': 'static/img/cake2.jpg',
            'desc': 'Описание торт1'
        },
        {
            'name': 'Название торта2',
            'photo': 'https://via.placeholder.com/600/24f355',
            'desc': 'Описание торт2'
        },
        {
            'name': 'Название торта3',
            'photo': 'https://via.placeholder.com/600/d32776',
            'desc': 'Описание торт3'
        },
        {
            'name': 'Название торта4',
            'photo': 'https://via.placeholder.com/600/d32776',
            'desc': 'Описание торт3'
        },
        {
            'name': 'Название торта5',
            'photo': 'https://via.placeholder.com/600/d32776',
            'desc': 'Описание торт3'
        },
    ]
}
selfpage()
