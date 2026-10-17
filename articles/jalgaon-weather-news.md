
# जळगाव जिल्ह्यातील हवामान आणि पावसाची माहिती

**दिनांक:** 24 सप्टेंबर 2026

जळगाव जिल्ह्यात मान्सूनच्या परतीच्या काळात पुन्हा पावसाचे वातावरण निर्माण झाले आहे. हवामान विभागाने 24 आणि 25 सप्टेंबर रोजी जळगाव जिल्ह्यासाठी यलो अलर्ट जारी केल्याची माहिती स्थानिक वृत्तमाध्यमांनी दिली आहे.

## जळगावमधील हवामान


1# Demonstration of Conditional Statement

num = int(input("Enter a number: "))

if num > 0:
    print("Number is positive")
elif num < 0:
    print("Number is negative")
else:
    print("Number is zero")

Output:

Enter a number: 5
Number is positive

Result: The Python program demonstrates conditional statements using "if", "elif", and "else".



2.# Conditional Statements

num = int(input("Enter a number: "))

if num > 0:
    print("Number is Positive")
elif num < 0:
    print("Number is Negative")
else:
    print("Number is Zero")



3.# Demonstration of List

numbers = [10, 20, 30, 40, 50]

print("List:", numbers)
print("First element:", numbers[0])
print("Second element:", numbers[1])

numbers.append(60)
print("After adding an element:", numbers)

numbers.remove(30)
print("After removing an element:", numbers)



4.# Demonstration of Tuple

numbers = (10, 20, 30, 40, 50)

print("Tuple:", numbers)
print("First element:", numbers[0])
print("Second element:", numbers[1])
print("Length of tuple:", len(numbers))

print("Element 30 exists:", 30 in numbers)

5.# Demonstration of Dictionary

student = {
    "name": "Ram",
    "age": 19,
    "course": "Data Science"
}

print("Dictionary:", student)
print("Student Name:", student["name"])
print("Age:", student["age"])

student["city"] = "Jalgaon"
print("After adding an element:", student)

student.pop("age")
print("After deleting an element:", student)


6.# Array Insertion and Deletion

from array import array

arr = array('i', [10, 20, 30, 40, 50])

print("Original Array:", arr)

arr.insert(2, 25)
print("After Insertion:", arr)


7.# Stack Operations

stack = []

stack.append(10)
stack.append(20)
stack.append(30)

print("Stack:", stack)

print("Popped element:", stack.pop())

print("Stack after Pop:", stack)

8.# Stack: Peep, Change and Display

stack = [10, 20, 30, 40, 50]

print("Stack:", stack)

print("Peep element:", stack[-1])

stack[-1] = 60
print("After Change:", stack)

print("Display Stack:", stack)

9.# Linear Queue

queue = []

queue.append(10)
queue.append(20)
queue.append(30)

print("Queue:", queue)

print("Deleted element:", queue.pop(0))

print("Queue after deletion:", queue)



10.# Circular Queue

size = 5
queue = [None] * size
front = -1
rear = -1

def insert(value):
    global front, rear

    if (rear + 1) % size == front:
        print("Queue is Full")
    elif front == -1:
        front = rear = 0
        queue[rear] = value
    else:
        rear = (rear + 1) % size
        queue[rear] = value

def delete():
    global front, rear

    if front == -1:
        print("Queue is Empty")
    else:
        print("Deleted:", queue[front])

        if front == rear:
            front = rear = -1
        else:
            front = (front + 1) % size

def display():
    if front == -1:
        print("Queue is Empty")
        return

    i = front
    print("Queue:", end=" ")

    while True:
        print(queue[i], end=" ")
        if i == rear:
            break
        i = (i + 1) % size

    print()

insert(10)
insert(20)
insert(30)

display()

delete()

display()

11.# Deque Operations

from collections import deque

dq = deque()

dq.append(10)
dq.append(20)
dq.append(30)

print("Deque:", dq)

dq.appendleft(5)
print("After Insertion at Front:", dq)

dq.pop()
print("After Deletion from Rear:", dq)

dq.popleft()
print("After Deletion from Front:", dq)

12.# Singly Linked List - Insertion at Beginning

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

ll = LinkedList()

ll.insert_beginning(30)
ll.insert_beginning(20)
ll.insert_beginning(10)

print("Linked List:")
ll.display()

13.# Singly Linked List - Insertion at End

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_end(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        temp = self.head
        while temp.next:
            temp = temp.next

        temp.next = new_node

    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

ll = LinkedList()

ll.insert_end(10)
ll.insert_end(20)
ll.insert_end(30)

print("Linked List:")
ll.display()


14.# Singly Linked List - Insertion at Given Position

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert_end(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        temp = self.head
        while temp.next:
            temp = temp.next

        temp.next = new_node

    def insert_position(self, data, position):
        new_node = Node(data)

        if position == 1:
            new_node.next = self.head
            self.head = new_node
            return

        temp = self.head

        for i in range(position - 2):
            if temp is None:
                print("Invalid Position")
                return
            temp = temp.next

        if temp is None:
            print("Invalid Position")
            return

        new_node.next = temp.next
        temp.next = new_node

    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")

ll = LinkedList()

ll.insert_end(10)
ll.insert_end(20)
ll.insert_end(40)

print("Original Linked List:")
ll.display()

ll.insert_position(30, 3)

print("After Insertion:")
ll.display()


15.# Linear Search and Binary Search

# Linear Search
arr = [10, 20, 30, 40, 50]
key = 30

print("Array:", arr)

for i in range(len(arr)):
    if arr[i] == key:
        print("Linear Search: Element found at position", i + 1)
        break
else:
    print("Element not found")

# Binary Search
arr.sort()
low = 0
high = len(arr) - 1
key = 40

while low <= high:
    mid = (low + high) // 2

    if arr[mid] == key:
        print("Binary Search: Element found at position", mid + 1)
        break
    elif arr[mid] < key:
        low = mid + 1
    else:
        high = mid - 1
else:
    print("Element not found")
## नागरिकांनी खबरदारी घ्यावी

पावसाच्या काळात नागरिकांनी आवश्यक खबरदारी घ्यावी. शेतकऱ्यांनी पिकांची स्थिती लक्षात घेऊन स्थानिक कृषी विभागाच्या सूचनांचे पालन करावे.

वीजांच्या कडकडाटासह पाऊस असल्यास मोकळ्या मैदानात किंवा झाडाखाली थांबणे टाळावे.

## जळगाव हवामान अपडेट्स

जळगाव जिल्ह्यातील आजचे हवामान, पावसाचा अंदाज आणि हवामान विभागाच्या अलर्टसाठी Jalgaon Zone वरील अपडेट्स पाहत रहा.

**टीप:** हवामानाची माहिती वेळेनुसार बदलू शकते. महत्त्वाच्या निर्णयांसाठी अधिकृत हवामान विभागाच्या ताज्या सूचनांचा आधार घ्या.
