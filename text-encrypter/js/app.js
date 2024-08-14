  function encriptar() {
    const inputText = document.getElementById('encryptInput').value;
  
    if (/[A-Z\W]/.test(inputText)) {
      document.getElementById('textoCifrado').innerHTML = "<p>No se permiten mayusculas y caracteres especiales</p>";
      return;
    }
  
    const textoCifrado = inputText.split('').reverse().join('');
    document.getElementById('textoCifrado').textContent = textoCifrado;
  };
  
  function descifrar() {
    const textoCifrado = document.getElementById('encryptInput').value;
  
    if (/[A-Z\W]/.test(textoCifrado)) {
      document.getElementById('textoCifrado').innerHTML = "<p>No se permiten mayusculas y caracteres especiales</p>";
      return;
    }
  
    const textoDescifrado = textoCifrado.split('').reverse().join('');
    document.getElementById('textoCifrado').textContent = textoDescifrado;
  }
  
  function checkButtonClick(buttonId) {
    if (buttonId === 'encryptButton') {
      encriptar();
    } else if (buttonId === 'decryptButton') {
      descifrar();
    }
  }
  