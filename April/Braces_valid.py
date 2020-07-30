
def bracesValid(string):
    parens = 0
    brace = 0
    bracket = 0
    arr = []
    for i in range(len(string)):
        if string[i] == "(":
            parens +=1
            arr.append(string[i])
        if string[i] == ")":
            parens -=1
            if arr[len(arr)-1] == "(":
                arr.pop()
        if string[i] == "{":
            brace +=1
            arr.append(string[i])
        if string[i] == "}":
            brace -=1
            if arr[len(arr)-1] == "{":
                arr.pop()
        if string[i] == "[":
            bracket +=1
            arr.append(string[i])
        if string[i] == "]":
            bracket -=1
            if arr[len(arr)-1] == "[":
                arr.pop()

        if parens < 0 or brace < 0 or bracket < 0:
            print("premature closing symbol")
            return False
    if parens != 0 or brace != 0 or bracket !=0:
        print("uneven amount of matching symbols")
        return False
    elif len(arr) > 0:
        print("symbols not in valid order")
        return False
    else:
        return True

print(bracesvalid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
print(bracesvalid('D(i{a}l[ t]o)n{e'))
print(bracesvalid("A(1)s[O(n]0{t) 0}k"))

()
