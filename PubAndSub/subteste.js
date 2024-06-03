const mqtt = require('mqtt')
const client = mqtt.connect('mqtt:18.231.157.55:1883')
const topic = 'temp/sub'

client.on('message', (topic, message) => {
    console.log('imprimindo mensagem')
    message = message.toString()
    console.log(message)
})
client.on('connect', () => {
    console.log('conectado')
    client.subscribe(topic)
})

client.on('reconnect', () => {
    console.log('Tentando reconectar...')
})

client.on('error', (error) => {
    console.error('Erro de conexão:', error)
})