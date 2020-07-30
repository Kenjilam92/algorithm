y = [4,5,6,12,14,18,19,20,21,22,56]


#we need a string to put things into
#need to loop through array at some point
    #as im looping, im checking IF the value at the next index is one greater than the value at the current index
        #if it is, then im adding a dash. 
        # IF the number is at the end of a sequence, then im adding the number to the dash, then a comma 


def bookindex(listInput):
    output = ""
    counter = 0
    for i in range(0,len(listInput)-1,1):
        if listInput[i+1] == listInput[i] +1:
            if counter == 0:
                output += f"{listInput[i]} - "
                counter += 1

        else:
            output += f"{listInput[i]}, "
            counter = 0

    output += f"{listInput[i+1]}" 
    return output


print(bookindex(y))