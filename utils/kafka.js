const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-kafka-producer2',
    brokers:['localhost:9092']
})

const producer = kafka.producer()

async function sendMessage(topic,message){
    await producer.connect()
    await producer.send({
        topic: topic,
        messages:[
            { value : message},
        ],
    })
}

module.exports = {
    sendMessage
}
