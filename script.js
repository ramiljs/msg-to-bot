const FormMessageSendBot = () => {
  let message = document.querySelector('.message').value;
  const TOKEN = '55555139970119:AAFILbesf38UHeI5f9KFPxoicO3WimdnsmE';
  let url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage?chat_id=818834347&text=';
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url + message, true);
  xhttp.send();
}
