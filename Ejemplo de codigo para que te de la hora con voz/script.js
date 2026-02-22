function listen() {
  let inputArea = document.getElementById('input-area')
  let outputArea = document.getElementById('output-area')
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "es-MX";
  recognition.start();/*Para activar el microfono */


  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript.toLowerCase();
    let fechaActual = new Date();
    let Hora = fechaActual.toLocaleTimeString();
    inputArea.innerHTML = "Escuché: " + transcript;
    if (transcript.includes("dame la hora")) {
      outputArea.innerHTML = "la hora es: " + Hora;
    } else if (transcript.includes("dame la hora")) {
      outputArea.innerHTML = "la hora es: " + Hora;
    }  else {
      outputArea.innerHTML = "I don't know what you mean."
    }
  }
}