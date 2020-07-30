def inOrderSubset(str):
    arr = []
    arr.append('')
    for i in range(len(str)):
        arr.append(str[i])
        temp = ''
        for j in range(i, len(str), 1):
            temp += str[j]
        arr.append(temp)
    print(arr)
    return arr

inOrderSubset('abc')