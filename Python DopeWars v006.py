import random

#
#
#To Do
#- Check city  option is valid number
#- Check city  Don't change values for same city
#


debug=1
totalitems=3
gamedaysduration=30
counter=0
cash=1000
debt=1000
daycount=0
myproductslist = ["Acid","Mushrooms","Peyote"]
inventory=       [     0,           0,     0]
myproductprices =[    10,          20,    30]
flux_price_global=0.3
special_event_chance=0.05
special_event_flux=0.9
#flux_price_special      =[     0.5, 1 ,0.3         ]
currentprices=myproductprices.copy()
city=["Chicago","Athens","Rome"]
currentcity=0

#print(mylist[2]) # prints 3
 
def travel_to_city(a):
     global daycount,cash,debt,currentcity
     print ("------------------------------")
     print ("Please select city to travel :")
     for i in range(totalitems):
           print (i,')',city[i])
           
     #print("Please select option :")
     traveloption=999
     while not (traveloption in range(totalitems)):
        traveloption = int(input('please select city number : '))
     traveling(traveloption)     
     daycount=daycount+1
     return 0                                                        

def positive_or_negative():
    return 1 if random.random() < 0.5 else -1

def random_event_happened():
    return 1 if random.random() < special_event_chance else 0    

def reroll_prices(a):
    #if(debug) : print("DEBUG reroll prices : ",a)
    #global daycount,cash,debt,currentcity                             
    #currentcity=a
    #print("Your Current City is : ",city[currentcity])
    
    for i in range(totalitems):
      flux_tmp=flux_price_global*random.random()
      s=positive_or_negative()
    #currentprices[i]: 

      tmp=int(currentprices[i]+s*flux_tmp*currentprices[i])
      if(debug) : print("DEBUG reroll prices tmp: ",tmp," s=",s , "  flux_tmp=",flux_tmp)
      if (tmp>0) : currentprices[i]=tmp  
      if(random_event_happened()): 
        if(debug) : print ("RANDOm EVENT for ",myproductslist[i])
        s=positive_or_negative()
        if(s>0): print ("*** POLICE Bust!!!*** Prices are high for ",myproductslist[i])
        else : print ("*** PRICE DROP *** Prices have dropped for ",myproductslist[i])
        flux_tmp=special_event_flux*random.random()
        tmp=int(currentprices[i]+s*flux_tmp*currentprices[i])
        if (tmp>0) : currentprices[i]=tmp

    return 0
 
                                     
def traveling(a):
       global daycount,cash,debt,currentcity                             
       currentcity=a
       print("Your Current City is : ",city[currentcity])
       reroll_prices(a)    
       return 0
 
 
def selectproduct(b_or_c):
    if(debug) : print("DEBUG selectproduct b_or_c : ",b_or_c)
    id = int(input('Please select item number: '))
    q=int(input('Please select item quantity: '))
    if(b_or_c.upper()=='B'): buy(id,q)
    if(b_or_c.upper()=='S'): sell(id,q)
    return 0
    
 
def buy(id,q):
    if(debug) : print("DEBUG buy id= ",id,' , q=',q)
    global daycount,cash,debt,currentcity
    #p = int(input('Please enter : ') )  
    payprice=currentprices[id]*q
    print(payprice)
    if payprice<=cash : 
        if(debug) : print("====can BUY=====")
        cash=cash-payprice
        inventory[id]=inventory[id]+q

    return 0


def sell(id,q):
    if(debug) : print("DEBUG sell id= ",id,' , q=',q)
    global daycount,cash,debt,currentcity
    #p = int(input('Please enter : ') )  
    if q<=inventory[id] : 
        if(debug) : print ("====can SELL=====")
        payprice=currentprices[id]*q
        cash=cash+payprice
        inventory[id]=inventory[id]-q
    return 0

     
#for x in myproductslist:
# print(" ",counter,')',x,end="")
# counter=counter+1
#for y in myproductprices: 
# print(y)
 
 
 
def mainpage(a):
    global daycount,cash,debt,currentcity
    print("=========================================")
    print("You are in city : ",city[currentcity], end="")
    print ( "  | Day:",daycount ," | Cash : " , cash, " | Debt:",debt)
    labels = '##){:<12}  {:>12}  {:>12}'.format ("Product", "Owned", "Price")
    labels2 = '---{:<12}  {:>12}  {:>12}'.format("--------", "------", "------")
    print (labels)
    print (labels2)
    for i in range(totalitems):
     line_new = '{:<12}  {:>12}  {:>12}'.format(myproductslist[i], inventory[i], currentprices[i])
     #print (i,')',myproductslist[i],' | owned: ',inventory[i]," | price: ",currentprices[i])
     print (i,')',line_new)
    print("Please select option :")
    option = (input('(B)uy , (S)ell , (T)ravel: '))
    print ("You selected : ",option)
    #a = int(input('(B)uy , (S)ell , (T)ravel: ')
    
    #if 4==3 or 3==3 : print ("ok")
    
    if option=='b' or option=='B'  :
         print ("Buy")
         selectproduct('b')
         
         
    if option.upper()=='S'  :
         print ("Sell")
         selectproduct('s')
    
         
    if option=='T' or option=='t'  :
         print ("Travel")
         travel_to_city('t')         
         
 
while daycount<=gamedaysduration:
    mainpage(1)  


print ("Game Ended!!!")
print("You are in city : ",city[currentcity])
print ( "  | Day:",daycount ," | Cash : " , cash, " | Debt:",debt)