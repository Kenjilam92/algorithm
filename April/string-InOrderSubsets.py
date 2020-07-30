def ios(string, sub= "", i=0 ):
    if len(string) == i:
        return [sub]
    else:
        return ios(string, sub + string[i], i+1) + ios(string, sub, i+1)