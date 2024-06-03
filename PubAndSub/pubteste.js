const mqtt = require('mqtt');
const client = mqtt.connect('mqtt:18.231.157.55:1883')
const topic = 'temp/sub'
let lastTemp = null

function randomTemp() { //Retorna uma temperatura aleatória baseada na temperatura anterior (pra não variar tanto)
    const minTemp = 0
    const maxTemp = 40
    const variation = 3
    let temp = lastTemp == null ? Math.random() * (maxTemp - minTemp) + minTemp : Math.random() * (2 * variation) - variation + parseFloat(lastTemp);
  
    temp = temp.toFixed(2)
    lastTemp = temp
  
    return temp
}

//Handle dos eventos mqtt abaixo

client.on('connect', () => {
    let message
    setInterval(() => {
        message = randomTemp()
        client.publish(topic, message)
        console.log('Mensagem enviada', message)
    }, 1000)
})
client.on('reconnect', () => {
    console.log('Tentando reconectar...')
})

client.on('error', (error) => {
    console.error('Erro de conexão:', error)
})