const { createClient } = require('redis');

async function redisCon() {
    try {
        const client = createClient({
            url: 'redis://redis:6379'
        });

        client.on('error', (err) => console.log('Redis Client Error', err));

        // Redis'e bağlan
        await client.connect();

        console.log('Redis’e bağlandık');
        return client;
    } catch (e) {
        console.log(e, 'error');
    }
}

module.exports = { redisCon };
