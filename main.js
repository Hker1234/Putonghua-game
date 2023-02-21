var chiWord = ["八","拔","把","爸","趴","爬","怕","媽","麻","馬","罵","發","罰","法","髮",
               "波","伯","跛","薄","潑","婆","破","摸","魔","抹","末","佛",
               "誧","醭","補","不","仆","葡","普","瀑","譕","母","木","夫","芙","斧","父",
               "逼","鼻","比","必","批","皮","匹","屁","咪","迷","靡","祕"]

var puCom = ["ba1","ba2","ba3","ba4","pa1","pa2","pa4","ma1","ma2","ma3","ma4","fa1","fa2","fa3","fa4",
             "bo1","bo2","bo3","bo4","po1","po2","po4","mo1","mo2","mo3","mo4","fo2",
             "bu1","bu2","bu3","bu4","pu1","pu2","pu3","pu4","mu2","mu3","mu4","fu1","fu2","fu3","fu4",
             "bi1","bi2","bi3","bi4","pi1","pi2","pi3","pi4","mi1","mi2","mi3","mi4"]


const MAX_QUESTIONS = 10
var correctScore=100

var targetWord = String()
var correctAnswerIndex = 0

let acceptingAnswers = true
var score = 0
let questionCounter = 0

window.onload=function(){
    questionCounter = 1
    score = 0
    getQuestion()
}

function getQuestion(){
    getWord()

    document.getElementById("answerBt1").value="A: "
    document.getElementById("answerBt2").value="B: "
    document.getElementById("answerBt3").value="C: "
    document.getElementById("answerBt4").value="D: "
    document.getElementById("outputBox").value = ""
    correctAnswerIndex = Math.floor(Math.random()*4)+1
    var tempIdholder = "answerBt"+correctAnswerIndex
    document.getElementById(tempIdholder).value += targetWord
    
    for(var a=1;a<5;a++){
        var tempWordHolder=targetWord 
        var targetIndexInList =0 
        while(tempWordHolder==targetWord){
            targetIndexInList = Math.floor(Math.random()*puCom.length)
            tempWordHolder = puCom[targetIndexInList]
        }
        if(a!=correctAnswerIndex){
            a = String(a)
            tempIdholder = "answerBt"+a
            document.getElementById(tempIdholder).value+=tempWordHolder
            a = parseFloat(a)
        }
    }
}

function getWord(){
    var targetIndexInList = Math.floor(Math.random()*chiWord.length)
    document.getElementById("targetText").value = chiWord[targetIndexInList]
    targetWord = puCom[targetIndexInList]
}

function readtheword(){
    var first = targetWord[0]
    var second = targetWord[1]
    var tone = targetWord[2]
    readInput(first,second,tone)
}

function letterToChiWord(first, second, tone){
    var tone = String(tone)
    var pu = first+second+tone
    var indexOfWord =0
    var chi = String()
    for(var i=0;i<puCom.length;i++){
        if(pu==puCom[i]){
            indexOfWord = i
        }
    }
    if(puCom.includes(pu))
        outputChineseWord = "正在閱讀"
    else{
        outputChineseWord="沒有此字"
        document.getElementById("outputBox").value = outputChineseWord
        return
    }
    document.getElementById("outputBox").value = outputChineseWord
    var comWord = String()
    comWord = first+second+tone
    readInput(first,second,tone)
}

function readTable(clickID){
    var link = "https://www.mers.hk/platform/prichin2012/tools/vowel_table/snd/"
    link = link+clickID+".mp3"
    document.getElementById("audio").src =link
    var audio = document.getElementById("audio")
    audio.play()
}

function readInput(first, second, tone){
    var link = "https://www.putonghuaweb.com/static/mp3/"
    link = link+first+second+tone+".mp3"
    document.getElementById("audio").src =link
    var audio = document.getElementById("audio")
    audio.play()
}

function check(theid){
    var tempStringHolder = theid[8]
    
    if(tempStringHolder==correctAnswerIndex){
        updateScore(100)
    }
    setTimeout(()=>{
        getQuestion()

        if(questionCounter == MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html')/*need to change this to presenter pc file location*/
        }
        questionCounter++
        document.getElementById("progressText").innerText = `問題 ${questionCounter} `
    },1000)
 
    document.getElementById("progressBarFull").style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
}

function updateScore(num){
    score += num
    document.getElementById("score").innerHTML=score
}