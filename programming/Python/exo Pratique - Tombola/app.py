# Tombola

# 3 gagnants
# 10 participants ( tuple de dictionnaires )

# Un participant ( dictionnaire )
# first_name
# sexe
# money

# Liste des prix
# 1 - 10 000€
# 2 -> 5 000 €
# 3 -> 1000 €

# Annoncer chaque gagnant à chaque tour et mettre à jour l'argent sur son compte

# Règles
# 1 joueur ne gagne qu'une seule fois
# Au moins une femme doit gagner à chaque fois



import random


list_players = (
  {'first_name': 'Frantz', 'sexe':'m', 'money':10_000 },
  {'first_name': 'Dylan', 'sexe':'m', 'money':20_000 },
  {'first_name': 'Bev', 'sexe':'f', 'money':30_000 },
  {'first_name': 'Tristan', 'sexe':'m', 'money':50_000 },
  {'first_name': 'Thomas', 'sexe':'m', 'money':100_000 },
  {'first_name': 'Nassim', 'sexe':'m', 'money':120_000 },
  {'first_name': 'Lounes', 'sexe':'m', 'money':130_000 },
  {'first_name': 'Mag', 'sexe':'f', 'money':140_000 },
  {'first_name': 'Lea', 'sexe':'f', 'money':150_000 },
  {'first_name': 'Coralie', 'sexe':'f', 'money':110_000 }
)

list_winners = []
i = 0

while i < 3: 
  winner = random.choice(list_players)

  if winner not in list_winners:
    list_winners.append(winner)
    print(f"The winner of the round n°{i + 1} is {winner['first_name']} he won x € and now he has {winner['money']} € in his/her account !")
  i += 1