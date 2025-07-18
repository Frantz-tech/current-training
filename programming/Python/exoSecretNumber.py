# Faire deviner un chiffre secret à l'utilisateur 
# Générer un chiffre aléatoire entre 1 et 10

# l'utilisateur à 3 chances pour trouver le chiffre secret : 
# - si il trouve le chiffre secret avant d'avoir écoulé ses 3 chances -> la partie s'arrête c'est gagné ! 
# - si il ne trouve pas le chiffre secret avant d'avoir écoulé ses 3 chances -> la partie s'arrête c'est perdu !

# Si le chiffre proposé par l'utilisateur est supérieur au chiffre secret lui indiquer que son 
# chiffre est trop grand et lui indiquer le nombre de points de vie restant

# Si le chiffre proposé par l'utilisateur est inférieur au chiffre secret, lui indiquer que son
# chiffre est trop petit et lui indiquer le nombre de point de vie restant

# Bonus
# Si l'internaute ne nous donne pas un chiffre entre 1 et 10 alors je lui repose la question sans lui faire 
# perdre de point de vie

import random

lower_num = 1
higher_num = 10

secret_number = random.randint(lower_num, higher_num)

def get_guess(max_attempts = 3): 
  while True: 
    try: 
      guess = int(input(f"Guess a number between {lower_num} and {higher_num}:  " ))
      if max_attempts == 1:
        print("No more chances, sorry .. ")
        break

      if guess > higher_num or guess < lower_num: 
        print(f"Wrong, your number must be between 1 and 10")
        continue 

      if guess == secret_number:
        print("Great Job ! You find the right number.")
        break
      
      if guess < secret_number:
        max_attempts -= 1
        print(f" Wrong guess try again you are too low, you have {max_attempts} attemps left " )
        continue
      

      if guess > secret_number:
        max_attempts -= 1
        print(f"Wrong guess Try again you are too high you have {max_attempts} attemps left ")
        continue 
      


    except ValueError:
      print(f'Invalid input, please enter a valid number.')
        
get_guess()