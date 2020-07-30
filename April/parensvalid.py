def parensvalid(somestring):
    countopen=0
    countclose=0
    temp=0
    for i in range (0,len(somestring)):
        if somestring[i]=="(":
            countopen+=1
            temp+=1
        if somestring[i]==")":
            countclose+=1
            temp-=1
        if temp<0:
            return False
    if countopen == countclose:
        return True
    else:
        return False

print(parensvalid('hkjsahfk9())'))