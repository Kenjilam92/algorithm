# Recursive Factorial
# Given num
# 
# return the product of ints from 1 up to num. 
# 
# If less than zero, treat as zero. 
# 
# If not integer, truncate. 
# 
# Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).”

# Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.

def rFact(input):
    number=int(input)
    if number <=0 or number == 1:
        return 1         
    else:
        return number * rFact(input-1)

print(rFact(-123))
    