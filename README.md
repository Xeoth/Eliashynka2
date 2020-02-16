![Eliashynka2](https://i.imgur.com/gfUjWXp.png)
[![DeepScan grade](https://deepscan.io/api/teams/7182/projects/9317/branches/119421/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=7182&pid=9317&bid=119421)

Następnik dosyć słabej pierwszej wersji Eliashynki.

W tej wersji planuję używać jej jako bota, który dodaje funkcje których nie ma w innych botach (bądź są trudne do znalezienia), zamiast bota "do wszystkiego", jak to było w poprzedniej wersji. 

### Jak uruchomić bota

Najpierw, używając `git clone`, klonujemy bota:
`git clone https://github.com/Xeoth/Eliashynka2.git`

Instalujemy moduły za pomocą `npm install`

Następnie, kopiujemy plik config.json.EXAMPLE, zmieniamy nazwę na config.json i wypełniamy go [poprawnymi wartościami](https://github.com/Xeoth/Eliashynka2/blob/master/CONFIG.md).

Na końcu, wpisujemy `npm start`. Jeżeli chcemy uruchomić bota za pomocą PM2, należy wpisać `pm2 start src/main.js --name Eliashynka2`.

# 🇬🇧

The second version of my terrible first bot, Eliashynka.

This time, instead of making a general purpose bot (there are thousands of these already), I'm gonna focus on creating features that are either not available in other bots or hard to find.

### How to launch the bot

Firstly, of course, clone the repo with `git clone https://github.com/Xeoth/Eliashynka2.git`

Then, install the dependencies with `npm install`

Then, copy config.json.EXAMPLE, rename it to config.json, and fill it with [appropriate values](https://github.com/Xeoth/Eliashynka2/blob/master/CONFIG.md).

Finally, launch the bot with `npm start`. If you're using [PM2](https://pm2.io/), launch it with `pm2 start src/main.js --name Eliashynka2`
