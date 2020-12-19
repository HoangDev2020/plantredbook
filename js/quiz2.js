
const DATA = [
    {
        question: 'MẠO ĐÀI THOREL có họ là gì??',
        answer1: 'A.Na',
        answer2: 'B.Ngọc Lan',
        answer3: 'C.Xoan',
        answer4: 'D.Trúc Đào',
        correct: 'A.Na'
    },
    {
        question: 'NGŨ GIA BÌ GAI cao bao nhiêu??',
        answer1: 'A.10-12m',
        answer2: 'B.5-6m',
        answer3: 'C.2-7m',
        answer4: 'D.100m',
        correct: 'C.2-7m'
    },
    {
        question: 'QUẢ ĐẦU NGỖNG thuộc tỉnh nào dưới đây?',
        answer1: 'A.Quảng Bình',
        answer2: 'B.Hà Nội',
        answer3: 'C.Hưng Yên',
        answer4: 'D.Đăk Lăk',
        correct: 'A.Quảng Bình'
    },
    {
        question: 'PHONG BA chín vào tháng mấy?',
        answer1: 'A.1-2',
        answer2: 'B.4-5',
        answer3: 'C.7-8',
        answer4: 'D.9-10',
        correct: 'D.9-10'
    },
    {
        question: 'Admin Nguyễn Huy Hoàng cao bao nhiêu?',
        answer1: 'A.1m72',
        answer2: 'B.1m60',
        answer3: 'C.1m89',
        answer4: 'D.2m',
        correct: 'A.1m72'
    }
]
let questions = document.getElementById('question')
let question_container = document.getElementById('question_container')
let scores = document.getElementById('score')
let score = 0
let indexOfQuestion = 0
let newIndexOfQuestion = 0
let count = 0;
let answer = document.getElementsByClassName('answer')
let annswer1 = document.getElementById('answer1')
let annswer2 = document.getElementById('answer2')
let annswer3 = document.getElementById('answer3')
let annswer4 = document.getElementById('answer4')
let container = document.getElementById('container')
let btn_clickToBegin = document.getElementById('btn_clickToBegin')

function gernerateQuestion() {
    btn_clickToBegin.addEventListener('click', () => {
        container.innerHTML = ''
        container.style.backgroundImage = "url('')"
        container.style.height = '0px'
        container.style.width = '0px'
        question_container.style.display = 'block'
        // question_container.style.transition = '1.3s all ease'
        questions.innerHTML += DATA[indexOfQuestion].question
        scores.innerHTML = 'Score: ' + score
        answer1.innerHTML += DATA[indexOfQuestion].answer1
        answer2.innerHTML += DATA[indexOfQuestion].answer2
        answer3.innerHTML += DATA[indexOfQuestion].answer3
        answer4.innerHTML += DATA[indexOfQuestion].answer4
    })
}
function setAction() {
    for (let i = 0; i < answer.length; i++) {
        answer[i].addEventListener('click', () => {

            if (answer[i].textContent == DATA[indexOfQuestion].correct) {
                score++
                // console.log(score);
                scores.innerHTML = 'Score:' + score
                let correct = document.getElementById('correct_sound')
                correct.play()
                //đổi src nhạc đúng
            } else {
                let wrong = document.getElementById('wrong_sound')
                wrong.play()
            }
            if (indexOfQuestion < DATA.length - 1) {
                questions.textContent = ''
                answer1.innerHTML = ''
                answer2.innerHTML = ''
                answer3.innerHTML = ''
                answer4.innerHTML = ''
                indexOfQuestion++
                questions.innerHTML += DATA[indexOfQuestion].question
                answer1.innerHTML += DATA[indexOfQuestion].answer1
                answer2.innerHTML += DATA[indexOfQuestion].answer2
                answer3.innerHTML += DATA[indexOfQuestion].answer3
                answer4.innerHTML += DATA[indexOfQuestion].answer4

            }
            count++;
            // console.log(count);
            if (count == DATA.length) {
                console.log('DONE')
                // question_container.style.filter = 'blur(10px)'
                let finish = document.getElementById('finish')
                if (score > 3) {
                    let finish_content = document.getElementById('finished_content')
                    finish_content.textContent = 'Winner!!!!!'
                } else {
                    let finish_content = document.getElementById('finished_content')
                    finish_content.textContent = 'Loser:(('
                }
                finish.style.display = 'block'
                let btn_close = document.getElementsByClassName('close')
                btn_close[0].addEventListener('click', () => {
                    finish.style.display = 'none'
                })
                console.log(score)
                let btn_tryAgain = document.getElementById('btn_tryAgain')
                btn_tryAgain.addEventListener('click', () => {
                    location.reload()
                })
            }
        })
    }
}
gernerateQuestion()
setAction()

