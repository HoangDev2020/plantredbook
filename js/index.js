
let container = document.getElementById('container')

function gerneratePlant() {
    for (let i = 0; i < data.length; i++) {
        let html = `<div class="item">
       
        <img src="${data[i].img}" class="img">
        <h2 class="text" >${data[i].name}</h2>
        
                    </div>    `;
        container.insertAdjacentHTML('beforeend', html);
    };

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
                        <button id="btn_seen_img">Click to see image</button>
                        <button id="btn_seen_infor">Click to see infor</button> 
                    </div>`;
    container.insertAdjacentHTML('beforeend', detailEle)
    // let btn_seen = document.getElementById('btn_seen')
    // btn_seen.addEventListener('click', () => {
        
    // })
    $('#btn_seen').click(function(){
        //block of code that runs when the click event triggers
        $('.information').slideUp('slow');
        $('.detail_h').slideUp('slow');
        $('.detail_img').slideDown('slow');
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


gerneratePlant()
showDetail()

{/* <script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script> */}

