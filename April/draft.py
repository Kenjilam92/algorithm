class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


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
            # frontToDequeue = self.front
            self.front = self.front.next
            # frontToDequeue.next = None

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



newQueue = Queue()
queue2 = Queue()
queue2.dequeue()
newQueue.enqueue(5).enqueue(8).enqueue(15).enqueue(3253534).size()