exports.run = async (client, message, args) => {
  const msg = await message.channel.send('Ping?');
  const apiLat = Math.round(client.ping);
  msg.edit(`:ping_pong: API: ${apiLat}`);
};
