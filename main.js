var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeenchRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";

    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript

    Textbox.innerHTML = content;
    console.log(content);

    if(content == "tire minha selfie")
    {
        console.log("tirando selfie");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;

         speakData = "tirando sua selfie em 5 segundos"

         var utterThis = new SpeechSynthesisUtterance(speakData);

         synth.speak(utterThis);

         Webcan.attach(camera)
        
         setTimeout(function()
         {
            takeSelfie();
           save();
         },5000);
}

camera = document.getElementById("camera")
Webcan.set({
    width:350,
    height:250,
    image_format : "jpeg",
    jpeg_quality : 90
});
function takeSelfie()
{
    Webcan.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfieImage" src=" '+data_uri+'"/>';
    }
    )
}
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src;
    link.href = image
    link.click();
}
