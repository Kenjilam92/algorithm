# Let's revisit Generate Coin Change!

# Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents),dimes (10 cents), and quarters (25 cents).

# Instead of a string, we will return an object/dictionary.
# If the amount of cents was 33, you would return:



# There are MANY ways to do this algo! Try more than one! 

def change(cents):
    result={ 
    "Q" : 0,
    "D" : 0,
    "N" : 0,
    "P" : 0
    }
    result['Q']=cents//25
    result['D']=(cents%25)//10
    result['N']=((cents%25)%10)//5
    result['P']=((cents%25)%10)%5

    return result

print(change(33))


