class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


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
    def display(self):
        if self.top== None:
            print('this stack is empty')
        else:
            runner=self.top
            output=""
            while runner.next != None:
                output+= f"{runner.value}-->"
                runner=runner.next
            output+= f"{runner.value}-->"
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
            # print(count)
            return count
    # def putNodeIntoArray(self):
    #     array=[]
    #     runner=self.top
    #     if self.top== None:
    #         return array
    #     else:
    #         while runner.next != None:
    #             array.append(runner.value)
    #             runner=runner.next
    #         array.append(runner.value)
    #     return array

# def comparestack(stack1,stack2):
#     arr1=stack1.putNodeIntoArray()
#     arr2=stack2.putNodeIntoArray()
#     if stack1.size()==stack2.size():
#         for i in range (len(arr1)):
#             if arr1[i] != arr2[i]:
#                 print('same size but value not equal!')
#                 return False
#         print('equal!')
#         return True
#     else:
#         print('not same size!')
#         return False
        
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

s1=Stack()
s2=Stack()

s1.push(1).push(5).push(4).push(3).push(6).push(8)
s2.push(1).push(5).push(4).push(3).push(7).push(8)

comparestack2(s1,s2)    

# newStack=Stack()
# newStack.push(8).push(7).push(9).push(2).push(3).display()
