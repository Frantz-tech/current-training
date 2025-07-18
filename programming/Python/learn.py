# amount = int(input("Amount > "))
# currency = input("Currency (€ > $)> ")

# if currency == "€" or "eur" in currency.lower():
#   converted_amount = amount * 1.22
#   print(f'You had {amount} € and now you have {converted_amount} $ ')
# else: 
#   converted_amount = amount * 0.82
#   print(f'You had {amount} $ and now you have {converted_amount} € ')


# my_text = "this is my text"
# print(type(my_text))


# print(my_text.replace("text", "paragraphe"))

# x = my_text.find("text")

# print(x)


# i = 1
# while i <= 5:
#   print (f"Hi there {i}")
#   i +=1

# i = 0
# while i <= 500:
#   print (f"Count {i}")
#   i += 2

# x = range(6)
# for n in x:
#   print(n)

# for x in range(10):
#   print(x)

# my_list = ['Sam', 'Loic', 'Jon']

# for x in my_list:
#   print('Hello '+ x)

# i = 0

# while i < len(my_list):
#   print('Hi ' + my_list[i])
#   i += 1

# nested Loops

# for x in range(4):
#   for y in range(3):
#     print(f'{x},{y}')

# my_list = [['Paris', 'Londres','Singapour'], [52_000_000, 50_000_000, 430_000_000]]


# i = 0
# j = 0
# while i < len(my_list):
#   while j < len(my_list[i]):
#     print(f'A {my_list[i][j]}, il y à {my_list[i+1][j]} habitants')
#     # print(my_list[i+1][j])
#     j+= 1
# i += 1

#Matrix



# numbers = [3,12,76,8]

# max_value = None

# for num in numbers: 
#   if max_value is None or num > max_value:
#     max_value = num

# print("Maximum value = ", max_value)

# list_kilos = [234, 88, 91, 344]

# # weigth  * 2.2

# list_converted_weigth = []

# for kilos in list_kilos:
#   converted_weigth = round(kilos * 2.2)
#   list_converted_weigth.append(converted_weigth)
#   print(list_converted_weigth)

# my_list = ['text', 27, True, ['elem1', 'elem2','elem3']]

# print(my_list[0])
# my_list[0] = 'nvx text'
# print(my_list[0])

# print(my_list[-1])
# print(my_list[-2])
# print(my_list[0:3])

# #append

# my_list.append('Salut')
# print(my_list)

# #Insert 2 paramètres

# my_list.insert(2, ' Je cherche a ajouter ca')
# print(my_list)

# names = ['Alex', 'Sam', 'Tom', 'Julia']
# names.sort()

# # print(names)

# my_new_list = names.copy()
# names[0]= 'Adrian'
# print(my_new_list)
# print(names)

# numbers = [2,3,3,4,5,6,6]

# new_numbers = []

# for doublons in numbers:
#   if doublons not in new_numbers:
#     new_numbers.append(doublons)

# print(new_numbers)

# Tulpes liste non modifiable

# my_tuple = ('text', 27, True, ['elem1', 'elem2', 'elem3'])

# print(my_tuple[3])

# my_tuple[3][1] = 'element'

# print(my_tuple[3])

# my_tuple[3] = 'new' # Error

# Matrix 

# matrix = [[1,2,3], [4,5,6]]

# for row in matrix:
#   for item in row: 
#     print(item)

# Unpacking

# coordinates = ( 1, 2 ,3)
# # x = coordinates[0]
# # y = coordinates[1]
# # z = coordinates[2]

# x, y, z = coordinates

# print(x, y , z)


# my_list = ['elem1', 'elem2', 'elem3']
# a, b, c = my_list
# print(a,b,c)

# d, e, f = '123'
# print(d, e, f)

# u, v, w = range(3)
# print(u, v, w)



# *j, = (1, 2)
# print(j)

# *h, i = (1, 2, 3, 5, 6)
# print(h, i)

# # Range 

# numbers = range(5, 10)
# for number in numbers:
#   print(number)

# print('----------------')


# for number in range(0, 100, 5):
#   print(number)