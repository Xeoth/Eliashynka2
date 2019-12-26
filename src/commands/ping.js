exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! Opóźnienie to ${msg.createdTimestamp - message.createdTimestamp}ms. Opóźnienie API to ${Math.round(client.ping)}ms`);
};