
let container = document.getElementById('container')

function gerneratePlant() {
    for (let i = 0; i < data.length; i++) {
        let html = `<div class="item">
                        <img src="${data[i].img}" class="img">
                        <h2 class="text">${data[i].name}</h2>
                    </div>`
        container.insertAdjacentHTML('beforeend', html)
    }
    
}
function gernerateDetail(plant) {
    container.innerHTML = ''
    document.getElementsByTagName('title')[0].textContent = plant.name
    document.getElementById('header-text').textContent = plant.name
    let detailEle = `<div class="detail">
                        <img src="${plant.img}" style="display:none;" class="detail_img">
                        <h1 class="detail_h">${plant.name}</h1>
                        <h2 class="detail_h">Họ:<span>${plant.surname}</span></h2>
                            <div class="information">
                                <p><span style="font-weight:bold;">Đặc điểm nhận dạng:</span>${plant.characteristics}</p>
                                <p><span style="font-weight:bold;">Sinh học - Sinh thái:</span>${plant.ecological}</p>
                                <h3>Phân bố:</h3>
                                <h3><p>${plant.incountry}</p></h3>
                                <h3><p>${plant.onWorld}</p></h3>
                                <p><span style="font-weight:bold;">Giá trị:</span>${plant.value}</p>
                                <p><span style="font-weight:bold;">Tình trạng:</span>${plant.status}</p>
                                <p><span style="font-weight:bold;">Biện pháp bảo vệ:</span>${plant.protect}</p>
                        </div>
                        <div class="btn_seen">
                            <button id="btn_seen_img">Click to see image</button>
                            <button id="btn_seen_infor">Click to see infor</button> 
                        </div>
                    </div>`;
    container.insertAdjacentHTML('beforeend', detailEle)
    // let btn_seen = document.getElementById('btn_seen')
    // btn_seen.addEventListener('click', () => {

    // })
    $('#btn_seen_img').click(function () {
        //block of code that runs when the click event triggers
        $('.information').slideUp(1000);
        $('.detail_h').slideUp(1000);
        $('.detail_img').slideDown(1000);
    });
    $('#btn_seen_infor').click(function () {
        //block of code that runs when the click event triggers
        $('.information').slideDown(1000);
        $('.detail_h').slideDown(1000);
        $('.detail_img').slideUp(1000);
    });


}
function showDetail() {
    let item = document.getElementsByClassName('item')
    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', () => {
            gernerateDetail(data[i])
        })
    }
}
function search_Incountry() {
    let searchTerm = document.getElementById('searchTerm')
    let searchButton = document.getElementById('searchButton')
    searchButton.addEventListener('click', () => {
        container.innerHTML = ''
        let keyword = searchTerm.value
        for (let i = 0; i < data.length; i++) {
            let search_country = data[i].incountry
            if (search_country.includes(keyword)) {
                console.log('1');
                let htmlEle = `<div class="item">
                                    <img src="${data[i].img}" class="img">
                                    <h2 class="text">${data[i].name}</h2>
                                </div>`;
                container.insertAdjacentHTML('beforeend', htmlEle);
            }

            let search_surname = data[i].surname
            if (search_surname.includes(keyword)) {
                let htmlEle = `<div class="item">
                                    <img src="${data[i].img}" class="img">
                                    <h2 class="text">${data[i].name}</h2>
                                </div>`;
                container.insertAdjacentHTML('beforeend', htmlEle);
            }
        }
        let item = document.getElementsByClassName('item')
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', () => {
                let text = document.getElementsByClassName('text')
                for (let j = 0; j < data.length; j++) {
                    if (text[i].textContent == data[j].name) {
                        gernerateDetail(data[j])
                    }
                    if (text[i].textContent == data[j].name) {
                        gernerateDetail(data[j])
                    }
                }
            })
        }
    })
}
// function search_Surname(){
//     let searchTerm = document.getElementById('searchTerm')
//     let searchButton = document.getElementById('searchButton')
//     searchButton.addEventListener('click', () => {
//         container.innerHTML = ''
//         let keyword = searchTerm.value
//         for (let i = 0; i < data.length; i++) {
//             let search_surname = data[i].surname
//             if (search_surname.includes(keyword)) {
//                 let htmlEle = `<div class="item">
//                                     <img src="${data[i].img}" class="img">
//                                     <h2 class="text">${data[i].name}</h2>
//                                 </div>`;
//                 container.insertAdjacentHTML('beforeend', htmlEle);
//             }
//         }
//         let item = document.getElementsByClassName('item')
//         for (let i = 0; i < item.length; i++) {
//             item[i].addEventListener('click', () => {
//                 let text = document.getElementsByClassName('text')
//                 for (let j = 0; j < data.length; j++) {
//                     if (text[i].textContent == data[j].name) {
//                         gernerateDetail(data[j])
//                     }
//                 }
//             })
//         }
//     })
// }





gerneratePlant()
showDetail()
search_Incountry()
// search_Surname()

{/* <script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script> */ }

