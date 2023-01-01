#https://stackoverflow.com/questions/39473297/how-do-i-print-colored-output-with-python-3
import random

class color:
   BLUE = '\033[1;34;48m'
   RED = '\033[1;31;48m'
   PURPLE = '\033[1;35;48m'
   GREEN = '\033[1;32;48m'
   CYAN = '\033[1;36;48m'
   YELLOW = '\033[1;33;48m'
   WHITE= '\033[1;37;0m'
   BLACK = '\033[1;30;48m'
   END = '\033[1;37;0m'

   BOLD = '\033[1;37;48m'

   UNDERLINE = '\033[4;37;48m'


my_color = [color.BLACK,color.BLUE, color.RED ,color.PURPLE, color.GREEN, color.CYAN, color.YELLOW, color.WHITE]
INK=[color.BLACK,color.BLUE, color.RED ,color.PURPLE, color.GREEN, color.CYAN, color.YELLOW, color.WHITE]
PAPER=INK.copy()
#print(color.BLUE + "hello friends" + color.END)
#https://gist.github.com/RabaDabaDoba/145049536f815903c79944599c6f952a
def rnd(myarray) : return random.choice(myarray)

times=10


a = input("Enter your text to be colourful: ")
new_text =""
for x in a:
    new_text += x + rnd(INK)

#print (new_text + color.END)
print (new_text + INK[7])