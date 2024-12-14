const { Kafka } = require('kafkajs')

const kafka = new Kafka({ brokers: [process.env.KAFKA_BROKER] });


const producer = kafka.producer()

async function sendMessage(topic,message){
    await producer.connect()
    await producer.send({
        topic: topic,
        messages:[
            { value : "asd !!"},
        ],
    })
}

module.exports = {
    sendMessage
}
