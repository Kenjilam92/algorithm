class Node:
    def __init__(self, val):
        self.value = val
        self.next = None

class SLL:
    def __init__(self):
        self.head = None

    def append(self,value):
        if self.head == None:
            newnode = Node(value)
            self.head = newnode
        else:
            runner = self.head
            while runner.next != None:
                runner = runner.next
            newnode = Node(value)
            runner.next = newnode
        return self

    def addFront(self,value):
        newnode = Node(value)
        if self.head == None:
            self.head = newnode 
        else:
            #runner is created to have a variable i can use to iterate to singly linked list
            runner = self.head
            #use a while loop to iterate
            print(runner.next) #this would print a node object
            while runner.next != None:
                runner = runner.next
            runner.next = newnode
        return self    

    def display(self):
        runner = self.head
        output = ""
        while (runner != None):
            output += f"{runner.value}-->"
            runner = runner.next
        print (output)
        return self
    
    def removefront(self):
        if self.head==None:
            return self
        else:
            self.head=self.head.next
            return self
    def removeback(self):
        runner=self.head
        while runner.next.next != None: #if this condition match, this will run, if not it breakout
            runner = runner.next
        runner.next= None
        return self
    def movemintofront(self):
        minval = self.head.value
        rnr = self.head
        while rnr.next:
            if rnr.next.value < minval:
                minval = rnr.next.value
                nodeBeforeMin = rnr
                minNode = rnr.next
            rnr = rnr.next
        nodeBeforeMin.next = nodeBeforeMin.next.next
        minNode.next = self.head
        self.head = minNode
        return self




newSLL = SLL()
newSLL.append(5)
newSLL.append(6)
newSLL.append(3)
newSLL.append(8)
newSLL.minToFront()
newSLL.display()
# newSLL.removeback().removefront().append(2).append(5)
newSLL.display()