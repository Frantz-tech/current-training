# Functions

number = 3 

print(number  * number)
print('______________')

list_numbers = [2,4,8,9]

for number in list_numbers:
  print(number * number)
print('______________')

list_numbers = [29,49,18,999]
for number in list_numbers:
  print(number * number)
print('______________')


# Définition 

def square_number(number_to_square):  # argument dans les parenthèse
  # Code de la fonction
  print(number_to_square * number_to_square)
print('______________')

# call 

square_number(2)

list_numbers = [ 123, 125, 155, 200]

for number in list_numbers:
  square_number(number)


def greeting(first_name, name=''): 
  print(f'Hi {first_name} {name} !')

greeting('Samih', 'Habbani')

greeting('Tom')

def square_numb(number_square):
  result = number_square * number_square
  # print(result)
  return result

list_numb = [828, 839, 938]
list_squared_numb = []

for numb in list_numb:
  list_squared_numb.append(square_numb(numb))

print('______________')

print(list_squared_numb)

print('______________')
# Exercice 

list_kilos = [871, 922, 2982] # - pounds
list_pounds = [9822, 2282, 223] # -> kgs

def converter(list_to_convert, unit):

  for weigth in list_to_convert:
    if unit == 'k':
      # list_to_convert -> lbs
      print(f'{weigth} kgs = {round(weigth * 2.2 )} lbs')
    elif unit == 'l':
      # list_to_convert -> kgs
      print(f'{weigth} lbs = {round(weigth * 0.45 )} kgs')

converter(list_kilos, 'k')

print('______________')

converter(list_pounds, 'l')