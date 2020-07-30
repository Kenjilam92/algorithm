class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

# ***********************************************************************************************************************

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

# ***********************************************************************************************************************

class Queue:
    def __init__(self):
        self.front = None
        self.back = None

    def enqueue(self, value):
        newnode = Node(value)
        if self.front == None:
            self.front = newnode
            self.back = newnode
        else:
            self.back.next = newnode
            self.back = self.back.next
        return self

    def dequeue(self):
        if self.front == None:
            return None
        else:
            frontToDequeue = self.front.value
            self.front = self.front.next
            # frontToDequeue.next = None
        return frontToDequeue

    def front(self):
        if self.front != None:
            return self.front.value
        else:
            return None

    def contains(self, valueToFind):
        if self.front == None:
            return False
        else:
            runner = self.front
            while runner != None:
                if runner.value == valueToFind:
                    print("true")
                    return True
                else:
                    runner = runner.next
            print("false")
            return False

    def isEmpty(self):
        if self.front == None:
            return True
        else:
            return False

    def size(self):
        count = 0
        if self.front == None:
            return count
        else:
            runner = self.front
            while runner != None:
                count += 1
                runner = runner.next
            print(count)
            return count
    def putNodeIntoArray(self):
        array=[]
        runner=self.front
        if self.front== None:
            return array
        else:
            while runner.next != None:
                array.append(runner.value)
                runner=runner.next
            array.append(runner.value)
        return array
    def display(self):
        if self.front== None:
            print('this stack is empty')
        else:
            runner=self.front
            output=""
            while runner.next != None:
                output+= f"{runner.value}-->"
                runner=runner.next
            output+= f"{runner.value}-->"
            print(output)
        return self

# ***********************************************************************************************************************

class Stack:
    def __init__(self):
        self.top = None

    def push(self,val):
        newnode= Node(val)
        if self.top == None:
            self.top = newnode
        else:
            newnode.next=self.top
            self.top=newnode
        return self
    def pop (self):
        if self.top==None:
            return None
        else:
            popvalue=self.top.value
            self.top=self.top.next
            return popvalue

    def display(self):
        if self.top== None:
            print('this stack is empty')
        else:
            runner=self.top
            output=""
            while runner.next != None:
                output+= f"{runner.value}-->"
                runner=runner.next
            output+= f'{runner.value}-->'
            print(output)
        return self
    def size(self):
        count = 0
        if self.top == None:
            return count
        else:
            runner = self.top
            while runner != None:
                count += 1
                runner = runner.next

# ***********************************************************************************************************************

def comparestack2(s1,s2):
    if s1.size()==s2.size():
        runner1=s1.top
        runner2=s2.top
        while runner1!=None:
            if runner1 != runner2:
                print('same size but value is not equal')
                return False
            else:
                runner1 = runner1.next
                runner2 = runner2.next
        print('yes! they are equal')
        return True       
    else:
        print ('not the same size')
        return False

# def oueuePalimdrom(queue):
#     runner1=queue.front
#     if runner1 == None:
#         return 'this queue is empty'
#     else:
#         while runner1.next != None:
#             runner1=runner1.next
def palimdromes(array):
    for i in range (0,int(len(array)/2),1):
        if array[i]!= array[len(array)-1-i]:
            print('this is not palimdromes')
            return False
        else:
            print('Palimdromes!!!')
            return True

def queuePalimdrom(queue):
    array= queue.putNodeIntoArray()
    a=palimdromes(array)
    return a
        


# newQueue = Queue()
# queue2 = Queue()
# queue2.dequeue()
# newQueue.enqueue(1).enqueue(2).enqueue(3).display()
# # queuePalimdrom(newQueue)

# newStack=Stack()
# newStack.push(1).push(2).push(3).display()
def TwoStackIntoOneQueue(s1,s2):
    q=Queue()
    # q.enqueue(s1).enqueue(s2)
    runner1=s1.top
    runner2=s2.top
    while runner1!=None:
        a=runner1.value
        q.enqueue(a)
        runner1 = runner1.next
    while runner2!=None:
        a=runner2.value
        q.enqueue(a)
        runner2 = runner2.next
    print(q)
    return q       

def TwoStackIntoOneQueue_2(s1,s2):
    q=Queue()
    # q.enqueue(s1).enqueue(s2)
    runner1=s1.top
    runner2=s2.top
    while runner1!=None and runner2!=None:
        a=s1.pop()
        b=s2.pop()
        q.enqueue(a).enqueue(b)
        runner1 = runner1.next
        runner2 = runner2.next
    if runner1!=None:
        the_rest=s1
    elif runner2!=None:
        the_rest=s2
    runner=the_rest.top
    while runner!=None:
        a=the_rest.pop()
        q.enqueue(a)
        runner = runner.next
    return q       
#in the function TwoStackIntoOneQueue_2(), the 2 input stack become empty.Use for loop instead of while loop when you want keep the value of 2 stack.
s1=Stack()
s2=Stack()
s1.push(5).push(4).push(8).push(9).display()
s2.push(1).push(3).push(8).display()

a=TwoStackIntoOneQueue_2(s1,s2)
a.display()
s1.display()
s2.display()

