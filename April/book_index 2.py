def bookIndex (listInput):
    stringOutput = str(listInput[0]) + ", "
    consecutiveCount = 0
    for i in range(1, len(listInput)-1, 1):
        if listInput[i+1] == listInput[i] + 1:
            consecutiveCount += 1
        else:
            consecutiveCount = 0
            stringOutput += str(listInput[i]) +", "
        if consecutiveCount == 1:
            stringOutput += str(listInput[i]) + "-"
        if i == len(listInput)-2:
            stringOutput += str(listInput[len(listInput)-1])
    return stringOutput


print(bookIndex([1,13,14,15,37,38,70]))
print(bookIndex([4,5,6,12,14,18,19,20,21,22,56]))