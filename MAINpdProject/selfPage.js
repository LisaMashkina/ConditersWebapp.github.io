let popup = document.querySelector(".popup-js")

function closePopup(){
    popup.classList.remove('open-popup')
}

async function selfpage(){
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
                ${key.desc}
            </div>
            <div class="buy-container"><button class="popup-buy" onclick="send()"><b>Заказать</b></button></div>

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

    if (content.exp){
        socialMedia.innerHTML += `
            <p>Опыт работы: ${content.exp} </p>
        `
    }
    let cardCondRight = document.querySelector(".right")
    let cardCondLeft = document.querySelector(".left")
    let key;
    let a = 12;
    for(key = 0; key < content.cakes.length; key += 1){
        if (key%2 == 0){
            cardCondRight.innerHTML += `
            <div id="${key}">
              <div class="card">
                <img src="${content.cakes[key].photo}" class="card-img-top" alt="mew">
                <div class="card-body" style="text-align: center;">
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
                <div class="card-body" style="text-align: center;">
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


res = { //временные константы, чтобы удобней было пока
    'img': 'static/img/cat.jpg',
    'name': 'Анна Малюгина',
    'exp': '2 года',
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
            'desc': 'Начинка:Ваниль-клубника 2000/кг. Декор: круговые мазки, безе-облака и пряничный самолётик'
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