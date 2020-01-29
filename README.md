![Eliashynka2](https://i.imgur.com/gfUjWXp.png)
[![DeepScan grade](https://deepscan.io/api/teams/7182/projects/9317/branches/119421/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=7182&pid=9317&bid=119421)

Następnik dosyć słabej pierwszej wersji, [Eliashynki](https://github.com/Xeoth/Eliashynka).

W tej wersji planuję używać jej jako bota, który dodaje funkcje których nie ma w innych botach (bądź są trudne do znalezienia), zamiast bota "do wszystkiego", jak to było w poprzedniej wersji. 

### Jak uruchomić bota

Najpierw, używając `git clone`, klonujemy bota:
`git clone https://github.com/Xeoth/Eliashynka2.git`

Instalujemy moduły za pomocą `npm install`

Następnie, kopiujemy plik config.json.EXAMPLE, zmieniamy nazwę na config.json i wypełniamy go poprawnymi wartościami.
Wartość `logChannel` powinniśmy wypełnić ID specjalnego kanału, stworzonego wyłącznie na potrzeby logów z bota.

Na końcu, przechodzimy do `src/` i komendą `node main.js` włączamy bota.

# 🇺🇸

The second version of my terrible first bot, [Eliashynka](https://github.com/Xeoth/Eliashynka).

This time, instead of making a general purpose bot (there are thousands of these already), I'm gonna focus on creating features that are either not available in other bots or hard to find.

### How to launch the bot

Firstly, of course, clone the repo with `git clone https://github.com/Xeoth/Eliashynka2.git`

Then, install the dependencies with `npm install`

Then, copy config.json.EXAMPLE, rename it to config.json, and fill it with appropriate values.
`logChannel` should be an ID of a special channel made specifically for error reports/other logs.

Finally, go to `src/` and launch the bot with `node main.js`.
