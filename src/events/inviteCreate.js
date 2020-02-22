module.exports = (client, invite) => {
  if (invite.maxAge === 0) {
    if (invite.guild.member(invite.inviter).permissions.has('ADMINISTRATOR')) return;
    invite.inviter.send('Nie zezwalamy na permanentne zaproszenia. Stwórz zaproszenie ponownie, ale wybierz skończoną ilość czasu wygaśnięcia.')
        .catch((err) => console.log('[INFO] Nie udało się wysłać wiadomości do ' + invite.inviter.username));
    invite.delete(`Zaproszenie było permanentne (${invite.inviter.username}).`);
  }
};
