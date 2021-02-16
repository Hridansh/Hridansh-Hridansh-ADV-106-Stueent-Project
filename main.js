Webcam.set({
    width:350,
    height:300,
    image_formate:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>";
    });
}

console.log('ml5 version;', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LXhxksHPD/model.json',modelloded);

function modelloded(){
    console.log("Model has loded!!!!!");
}

function speak(){
        var synth = window.speechSynthesis;
        speak_data1 = "The first prediction is " + prediction1;
        speak_data2 = "And the second prediction is"+prediction2;
        var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
        utterThis.rate = 0.5;
        synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotresult);
}

function gotresult(error, result){
if(error){
console.error(error);
}else{
console.log(result);
document.getElementById("result_emotion_name").innerHTML = result[0].label;
document.getElementById("result_emotion_name2").innerHTML = result[1].label;
prediction1 = result[0].label;
prediction2 = result[1].label;
speak()

//prediction1 code start

if(result[0].label=="happy"){
    document.getElementById("update_emoji").innerHTML = "&#128522;";
}
if(result[0].label=="sad"){
    document.getElementById("update_emoji").innerHTML = "&#128532;";
}
if(result[0].label=="angry"){
    document.getElementById("update_emoji").innerHTML = "&#128545;";
}
if(result[0].label=="panic"){
    document.getElementById("update_emoji").innerHTML = "&#128512;";
}
if(result[0].label=="crying"){
    document.getElementById("update_emoji").innerHTML = "&#128546;";
}

//prediction2 code start

if(result[1].label=="happy"){
    document.getElementById("update_emoji2").innerHTML = "&#128522;";
}
if(result[1].label=="sad"){
    document.getElementById("update_emoji2").innerHTML = "&#128532;";
}
if(result[1].label=="angry"){
    document.getElementById("update_emoji2").innerHTML = "&#128545;";
}
if(result[1].label=="panic"){
    document.getElementById("update_emoji2").innerHTML = "&#128512;";
}
if(result[1].label=="crying"){
    document.getElementById("update_emoji2").innerHTML = "&#128546;";
}
}}