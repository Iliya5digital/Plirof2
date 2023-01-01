## Online tester https://www.online-python.com/
#https://www.learnpython.org/en/Lists
#https://docs.python.org/3/library/
# https://www.learnpython.org/en/Numpy_Arrays  ??
#INPUT : a = int(input('Enter 1st number: '))
===============Aligned text in columns===================
    for i in range(totalitems):
     line_new = '{:<12}  {:>12}  {:>12}'.format(myproductslist[i], inventory[i], currentprices[i])
     #print (i,')',myproductslist[i],' | owned: ',inventory[i]," | price: ",currentprices[i])
     print (i,')',line_new)	 	 	 	 
________________________________________________	 	 	 	 	 	 

     for i in range(totalitems):
           print (i,')',city[i])

def positive_or_negative():
    return 1 if random.random() < 0.5 else -1
 
def random_event_happened():
    return 1 if random.random() < special_event_chance else 0 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 

def traveling(a):
       global daycount,cash,debt,currentcity 

########################################
#print( "hello" + " " + "world")
#print ("hello" * 10)
#print([1,2,3] * 3) # lists can be multiplied (NOTE just like joining them 3 times)
#LIST can be JOINED (concaterated) :all_numbers = odd_numbers + even_numbers
# String formatting : https://www.learnpython.org/en/String_Formatting
#%s - String (or any object with a string representation, like numbers)
#%d - Integers
#%f - Floating point numbers
#%.<number of digits>f - Floating point numbers with a fixed amount of digits to the right of the dot.
#%x/%X - Integers in hex representation (lowercase/uppercase)
#print(len(astring))
#astring = "Hello world!"
# print(astring.index("o")) ;printe 4
# print(astring[3:7]) #This prints a slice of the string, starting at index 3, and ending at index 6
#print(astring[3:7:2]) # This prints the characters of string from 3 to 7 skipping one character. This is extended slice syntax. The general form is [start:stop:step].
#print(astring[::-1]) #reverse string
#print(astring.upper())
#print(astring.lower())
#String checks
#print(astring.startswith("Hello")) #TRUE
#print(astring.endswith("asdfasdfasdf")) #FALSE
# afewwords = astring.split(" ") # Split string by space (like php explode!!!) for x in afewwords: print(x)
# if name == "John" and age == 23:
#    print("Your name is John, and you are also 23 years old.")
#if name in ["John", "Rick"]:
# --------IF---------------
#statement = False
#another_statement = True
#if statement is True:
#    # do something
#    pass
#elif another_statement is True: # else if
#    # do something else
#    pass
#else:
#    # do another thing
#    pass
#
#x = [1,2,3]
#y = [1,2,3]
#print(x == y) # Prints out True
#print(x is y) # Prints out False # Unlike the double equals operator "==", the "is" operator does not match the values of the variables, but the instances themselves. For example:
# ----------LOOPS FOR
## Prints out the numbers 0,1,2,3,4
for x in range(5):
    print(x)

# Prints out 3,4,5
for x in range(3, 6):
    print(x)

# Prints out 3,5,7
for x in range(3, 8, 2):
    print(x)
#----_WHILE LOOP
## Prints out 0,1,2,3,4

count = 0
while count < 5:
    print(count)
    count += 1  # This is the same as count = count + 1
# break is used to exit a for loop or a while loop, whereas continue is used to skip the current block, and return to the "for" or "while" statement. A few examples:
#
## Prints out 0,1,2,3,4

count = 0
while True:
    print(count)
    count += 1
    if count >= 5:
        break

# Prints out only odd numbers - 1,3,5,7,9
for x in range(10):
    # Check if x is even
    if x % 2 == 0:
        continue
    print(x)
#
# FUNCTIONS:
#def sum_two_numbers(a, b):
    return a + b
#
#
#
#Classes ---------------------------
class MyClass:
    variable = "blah"

    def function(self):
        print("This is a message inside the class.")

myobjectx = MyClass()

myobjectx.variable
myobjectx.function()
#------------------------------
## Dictionary arrays
#phonebook = {
    "John" : 938477566,
    "Jack" : 938377264,
    "Jill" : 947662781
}
print(phonebook)
##-----------Iterating over dictionaries--------------------
#phonebook = {"John" : 938477566,"Jack" : 938377264,"Jill" : 947662781}
for name, number in phonebook.items():
    print("Phone number of %s is %d" % (name, number))
#--------------
# Del a value fron dictionary
phonebook = {
   "John" : 938477566,
   "Jack" : 938377264,
   "Jill" : 947662781
}
del phonebook["John"]
print(phonebook)
#------------------------------
#import
#You can use the import * command to import all the objects in a module like this:
## game.py
# import the draw module
from draw import *

def main():
    result = play_game()
    draw_game(result)
#
#
#
#
#
#
#
#
#
#
#
#
#