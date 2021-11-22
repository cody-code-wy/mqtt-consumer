import mqtt from 'mqtt';

var client = mqtt.connect('mqtt://rabbitmq-service',{clientId:'mqttjs01'});
client.on("connect", () => { console.log('connected') });
client.on("error", (e) => { console.log(`Can't connect ${e}`) });
