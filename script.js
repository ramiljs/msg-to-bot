//https://api.telegram.org/bot5139970119:AAFILbesf38UHeI5f9KFPxoicO3WimdnsmE/getUpdates

function BotSendForm() {
    let message = document.querySelector('.message').value;
    const token = '5139970119:AAFILbesf38UHeI5f9KFPxoicO3WimdnsmE';
    let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=818834347&text=';
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + message, true);
    xhttp.send();
}
