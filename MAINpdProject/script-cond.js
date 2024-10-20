let popup = document.querySelector(".popup-js")

function closePopup(){
    popup.classList.remove('open-popup')
}

async function getResponce(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    var content = await response.json()
    // var content = result
    function openPopup(){
        key = content[this.id]
        let popupJS = document.querySelector(".popup")
        popup.classList.add('open-popup')
        console.log(key)
        
        popupJS.innerHTML = `
            <button class="close" type="submit" onclick="closePopup()">Назад</button>
            <div class="popup-header">
                <img src="${key.url}" alt="..." class="popup-img">
                <div class="main-popap-inf">
                <p>${key.title.slice(0, 20)}</p>
                <a class="bt-to-cond" aria-current="page" href = "personal-page.html" ">Кондитер</a>
                </div>
            </div>
            <div class="popup-od-inf">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, itaque  iusto quisquam!
            </div>
        `
    }

    
    console.log(content[0])
    content = content.splice(0, 20)
    let cardCondRight = document.querySelector(".right")
    let cardCondLeft = document.querySelector(".left")
    
    let key; // условие ? выражение1 : выражение2
    let a = 15;
    for(key = 0; key < content.length; key += 1){
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


result = [
  {
    "albumId": 1,
    "id": 1,
    "title": "Анна Малюгина",
    "url": "cat.jpg",
    "thumbnailUrl": "cat.jpg"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "Вика Петрова",
    "url": "cat2.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "Марина Тим",
    "url": "cat3.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "Катя Кривоуз",
    "url": "cat4.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "",
    "url": "https://via.placeholder.com/600/f66b97",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "albumId": 1,
    "id": 6,
    "title": "accusamus ea aliquid et amet sequi nemo",
    "url": "https://via.placeholder.com/600/56a8c2",
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  },
  {
    "albumId": 1,
    "id": 7,
    "title": "officia delectus consequatur vero aut veniam explicabo molestias",
    "url": "https://via.placeholder.com/600/b0f7cc",
    "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  },
  {
    "albumId": 1,
    "id": 8,
    "title": "aut porro officiis laborum odit ea laudantium corporis",
    "url": "https://via.placeholder.com/600/54176f",
    "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  },
  {
    "albumId": 1,
    "id": 9,
    "title": "qui eius qui autem sed",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  },
  {
    "albumId": 1,
    "id": 10,
    "title": "beatae et provident et ut vel",
    "url": "https://via.placeholder.com/600/810b14",
    "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  },
  {
    "albumId": 1,
    "id": 11,
    "title": "nihil at amet non hic quia qui",
    "url": "https://via.placeholder.com/600/1ee8a4",
    "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
  },
  {
    "albumId": 1,
    "id": 12,
    "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    "url": "https://via.placeholder.com/600/66b7d2",
    "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
  },
  {
    "albumId": 1,
    "id": 13,
    "title": "repudiandae iusto deleniti rerum",
    "url": "https://via.placeholder.com/600/197d29",
    "thumbnailUrl": "https://via.placeholder.com/150/197d29"
  },
  {
    "albumId": 1,
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "url": "https://via.placeholder.com/600/61a65",
    "thumbnailUrl": "https://via.placeholder.com/150/61a65"
  }
]

getResponce()

