module.exports = (client, invite) => {
  if (invite.maxAge === 0) {
    if (invite.guild.member(invite.inviter).permissions.has('ADMINISTRATOR')) return;
    invite.inviter.send('Nie zezwalamy na permanentne zaproszenia. Stwórz zaproszenie ponownie, ale wybierz skończoną ilość czasu wygaśnięcia.');
    invite.delete(`Zaproszenie było permanentne (${invite.inviter.username}).`);
  }
};
