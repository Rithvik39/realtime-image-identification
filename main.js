function preload(){

}

function setup(){
    canvas = createCanvas(500 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/O6h6NdHpt/model.json" , modelLoaded);
}

function draw(){
    image(video , 0 , 0 , 500 , 500);
    classifier.classify(video , gotResults);
}

function modelLoaded(){
    console.log("Model is loaded !!!");
}

function gotResults(error , result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("object_accuracy").innerHTML = result[0].confidence.toFixed(2);
    }
}