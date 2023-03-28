const quizData = [
    {
        question: "Un senzor CCD cu transfer interliniar are pentru fiecare pixel:",
        a: "numai un fotodetector",
        b: "numai o zonă de stocare a sarcinii rezultate - formată prin opacizarea unei părţi din zona pixelului",
        c: "numai o zonă de stocare a sarcinii rezultate - formată prin transparentizarea unei părţi din zona pixelului",
        d:"şi un fotodetector şi o zonă de stocare a sarcinii rezultate - formată prin opacizarea unei părţi din zona pixelului",
        correct: "d",
    },
    {
        question: "La senzorii CCD de tip cadru întreg, pe timpul transferului de sarcini se mai poate face acumulare de sarcini prin expunerea la lumină?",
        a: "da",
        b: "nu",
        c: "depinde de timpul de expunere ",
        d:"depinde de deschiderea diafragmei",
        correct: "b",
    },
    {
        question: "Tehnologia CMOS permite includerea în cipul senzorului a unor funcţii suplimentare, inclusiv pentru micşorarea jitterului şi stabilizarea imaginii sau compresia imaginii?",
        a: "da",
        b: "nu",
        c: "depinde de timpul de expunere folosit",
        d:"depinde de deschiderea diafragmei folosită",
        correct: "a",
    },
    {
        question: "Într-un senzor de imagine, prin prezenţa circuitelor suplimentare, fill factor – procentul de acoperire",
        a: "creşte",
        b: "nnu se schimbău",
        c: "scade",
        d:"depinde de tehnologia folosită",
        correct: "c",
    },
    {
        question: "Este preferabil ca un senzor de imagine să ofere o valoare pentru Dark Current",
        a: "cât mai mare",
        b: "cat mai mica",
        c: "depinde de tehnologie",
        d:"nu contează",
        correct: "b",
    },
    {
        question: "Dimensiunea totală a senzorului coincide cu zona activă, aceea care percepe lumina?",
        a: "da, numai la CCD",
        b: "da, numai la CMOS",
        c: "depinde de deschiderea diafragmei",
        d:"da",
        correct: "a",
    },
    {
        question: "La camerele utilizate la laborator, rezoluţia oferită, măsurată în linii TV, a fost de ordinul",
        a: "zecilor",
        b: "sutelor",
        c: "miilor",
        d:"zecilor de mi",
        correct: "b",
    },
    {
        question: "Frecvenţa de linii a semnalului TV oferit de camerele utilizate la laborator a fost de ordinul",
        a: "zecilor",
        b: "sutelor",
        c: "miilor",
        d:"zecilor de mi",
        correct: "d",
    },
    {
        question: "Un senzor de 1 comparat cu un senzor de 1/4 are",
        a: "latura de 4 ori mai mică",
        b: "diagonala de 4 ori mai mică",
        c: "diagonala de 4 ori mai mare",
        d:"latura de 4 ori mai mare",
        correct: "c",
    },
    {
        question: "La un obiectiv, numarul F",
        a: "creşte pe măsură ce deschiderea diafragmei scade",
        b: "scade pe măsură ce deschiderea diafragmei scade",
        c: "nu are legătură cu deschiderea diafragmei ci cu lentila",
        d:"nu există acest parametru",
        correct: "a",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')

const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           currentQuiz++
       }

       currentQuiz++
   
       if(currentQuiz < quizData.length) {
           loadQuiz()

       }else if(score == 10) {
            quiz.innerHTML = `
            <&nbsp>
            <h2 align="center">Congratulations!You answered ${score}/${quizData.length} questions correctly.You're the best! </h2>
            <img src="./images/you_best.jpg" alt="image" width="120" height="120"  class="image-from-quiz-js">
            <&nbsp>
            <button onclick="location.reload()">Reload</button>`

       }else if(score == 9){
        quiz.innerHTML = `
        <&nbsp>
        <h2 align="center">Congratulations!You answered ${score}/${quizData.length} questions correctly.</h2>
        <img src="./images/you-are-close.jpg" alt="image" width="120" height="120"  class="image-from-quiz-js">
        <&nbsp>
        <button onclick="location.reload()">Reload</button>`

        }else if(score == 8){
        quiz.innerHTML = `
        <&nbsp>
        <h2 align="center">Congratulations!You answered ${score}/${quizData.length} questions correctly.</h2>
        <img src="./images/keep-learning-8-answers.jpg" alt="image" width="120" height="120"  class="image-from-quiz-js">
        <&nbsp>
        <button onclick="location.reload()">Reload</button>`

        }else {
            quiz.innerHTML = `
            <&nbsp>
            <h2 align="center">You answered ${score}/${quizData.length} questions correctly</h2>
            <img src="./images/learn-more-7answers.jpg" alt="image" width="120" height="120"  class="image-from-quiz-js">
            <&nbsp>
            <button onclick="location.reload()">Reload</button>`
       }
    }
})

var styles = `
    .image-from-quiz-js{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 35%;
        height: 20%
    }
`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)