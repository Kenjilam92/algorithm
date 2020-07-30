x=[1,2,3,4,5,13,14,15,37,38,70]

def bookindex(li):
    if li[0]==li[1]-1:
       tempindex=f'{li[0]}' 
    else:
        tempindex=''
    for i in range (0,len(li)-1):
        if li[i]==li[i+1]-1:
            if tempindex[len(tempindex)-1]=='-':
                tempindex+=''
            else:
                tempindex+=f'-'
        else:
            tempindex+= f'{li[i]},{li[i+1]}'
    return tempindex
print(bookindex(x))