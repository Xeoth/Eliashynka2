exports.run = async (client, message, args) => {
  const msg = await message.channel.send('Ping?');
  const latency = msg.msg.createdTimestamp - message.createdTimestamp;
  const apiLat = Math.round(client.ping);
  msg.edit(`Pong! Opóźnienie to ${latency}ms. Opóźnienie API to ${apiLat}ms`);
};
