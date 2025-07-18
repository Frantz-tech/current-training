# Exercice sur les dictionnaires

# 1234 => A transformer en one two three four

dict = {
  "1":"one",
  "2":"two",
  "3": "three",
  "4":"four",
  "5":"five",
  "6":"six",
  "7":"seven",
  "8":"eigth",
  "9":"nine"
}
output = ""
numbers = input('Insert an number : ')

for number in numbers:
  output += dict.get(number, '!') + " "
print(output)

