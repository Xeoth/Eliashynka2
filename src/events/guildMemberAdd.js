module.exports = (client, member) => {
  if (!client.config.announcementsChannel) return;

  if (!client.config.milestones.includes(member.guild.memberCount)) return;

  const announcementsChannel = member.guild.channels.find(c => c.id === client.config.announcementsChannel);

  let milestoneMessage = client.config.milestoneMessage
      .replace('$1', member.guild.name)
      .split('$2') 
      .join(member.guild.memberCount)
      .replace('$3', `<@${member.id}>`);

  announcementsChannel.send(milestoneMessage);
}