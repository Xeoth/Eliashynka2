# Info o `config.json`

## Skąd wziąć template do `config.json`

Template można wziąć z `config.json.EXAMPLE`. Wystarczy usunąć `.EXAMPLE` z nazwy. 


## Jakie wartości wpisać do `config.json`

* `token` - token do bota. Można go otrzymać tworząc aplikację na [panelu developerskim Discorda](https://discordapp.com/developers/applications)
* `prefix` - znak (bądź kilka) którymi chcemy zaczynać komendy.
* `logChannel` - ID specjalnego kanału, na który będą wysyłane wszelkie błędy bądź informacje z bota.
* `ownerID` - ID osoby hostującej bota, czyli najprawdobniej twoje.
* `supporterRoles` - tablica z ID ról które otrzymują osoby które wspierają serwer. Dobrym przykładem jest takiej roli jest Nitro Booster.
* `supporterRolesPos` - pozycja **od dołu listy**, na której mają być dodawane role z kolorami, jeżeli osoba kwalifikuje się na otrzymanie roli z kolorem. Zaleca się wpisanie pozycji nad wszystkimi rolami, które mogą nadpisać kolor.
* `announcementsChannel` - ID kanału z ogłoszeniami. (opcjonalne)
* `milestones` - Ilości członków na serwerze, po osiągnięciu których ma być wysyłana wiadomość.
* `milestoneMessage` - Wiadomość wysyłana z każdym progiem wskazanym w `milestones`. **Uwaga:** Tutaj mamy do dyspozycji 3 zmienne. `$1` zostanie zastąpione nazwą serwera, `$2` zostanie zastąpione ilością członków na serwerze, a `$3` zostanie zastąpione wzmianką użytkownika, po wejściu którego na serwer został osiągnięty próg. Użycie tych zmiennych jest opcjonalne.

# 🇬🇧 Info about `config.json`

## How to get a `config.json` template

You can obtain the template from `config.json.EXAMPLE`. Just remove the `.EXAMPLE` part.

## What values should I fill into `config.json`?

* `token` - the bot's token. You can get yours by creating an app on [Discord's developer panel](https://discordapp.com/developers/applications)
* `prefix` - a symbol (or symbols) that you want to begin the commands with.
* `logChannel` - the ID of a special channel, that all error reports and info will be sent.
* `ownerID` - the ID of the person who's hosting the bot.
* `supporterRoles` - an array with IDs of roles that support the server. A good example of such role is Nitro Booster.
* `supporterRolesPos` - the position **from the bottom of the role list** on which the color roles will be added. It's recommended that this position should be higher than any of roles that can override the color.
* `announcementsChannel` - the ID of the channel with announcements (optional).
* `milestones` - important member milestones. With each milestone specified here, a message will be sent to the announcements channel.
* `milestoneMessage` - The message that will be sent to announcements upon hitting any milestone specified in `milestones`. **Important:** here, you can use 3 variables. `$1` will be replaced with the server's name, `$2` will be replaced with the current member count, and `$3` will be replaced with the mention of the user who joined, triggering the message.