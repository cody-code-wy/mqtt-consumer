import mqtt from 'mqtt';

const topic = `openflowx/${ process.env.EVENT_NAME || "end" }`

var client = mqtt.connect('mqtt://rabbitmq-service:1883',{clientId:'mqttjs02'});
client.on("connect", () => {
  console.log('connected')
  client.subscribe(topic,{qos: 1})
});
client.on("error", (e) => { console.log(`Can't connect ${e}`) });
client.on("message", (topic, message, packet) => {
  console.log(`topic is ${topic}`);
  console.log(`message is ${message}`);
})

