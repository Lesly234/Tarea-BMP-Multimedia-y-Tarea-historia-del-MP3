function listen() {
  let inputArea = document.getElementById('input-area');
  let outputArea = document.getElementById('output-area');
  
  var recognition = new webkitSpeechRecognition();
  recognition.lang = "es-MX";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript.toLowerCase();
    let fechaActual = new Date();
    let hora = fechaActual.toLocaleTimeString();
    
    inputArea.innerHTML = "Escuché: " + transcript;
    
    let respuesta = ""; 

    if (transcript.includes("dame la hora")) {
      respuesta = "La hora es: " + hora;
    } else {
      respuesta = "No entiendo lo que quieres decir";
    }
    
    outputArea.innerHTML = respuesta;
    hablar(respuesta);
  }
}
function hablar(texto) {
  const mensaje = new SpeechSynthesisUtterance(texto);
  mensaje.lang = "es-MX";
  window.speechSynthesis.speak(mensaje);
}