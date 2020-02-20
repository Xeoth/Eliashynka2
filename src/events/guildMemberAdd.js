module.exports = (client, member) => {
  if (!client.config.announcementsChannel) return;

  const memberCount = member.guild.memberCount;

  if (!client.config.milestones.includes(memberCount)) return;

  const announcementsChannel = member.guild.channels
      .find((c) => c.id === client.config.announcementsChannel);

  const milestoneMessage = client.config.milestoneMessage
      .replace('$1', member.guild.name)
      .split('$2')
      .join(member.guild.memberCount)
      .replace('$3', `<@${member.id}>`);

  announcementsChannel.send(milestoneMessage);
};
