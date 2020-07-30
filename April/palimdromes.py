def palimdromes(st):
    for i in range (0,int(len(st)/2),1):
        if st[i]!= st[len(st)-1-i]:
            print('this is not palimdromes')
            return False
        else:
            print('Palimdromes!!!')
            return True

x='tacocat'
y='apple'

print(palimdromes(x))
print(palimdromes(y))