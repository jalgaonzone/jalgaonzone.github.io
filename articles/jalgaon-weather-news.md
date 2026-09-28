# जळगाव जिल्ह्यातील हवामान आणि पावसाची माहिती

**दिनांक:** 24 सप्टेंबर 2026

जळगाव जिल्ह्यात मान्सूनच्या परतीच्या काळात पुन्हा पावसाचे वातावरण निर्माण झाले आहे. हवामान विभागाने 24 आणि 25 सप्टेंबर रोजी जळगाव जिल्ह्यासाठी यलो अलर्ट जारी केल्याची माहिती स्थानिक वृत्तमाध्यमांनी दिली आहे.

## जळगावमधील हवामान

PRACTICAL NO. 1

Roll No :- 190

Title :- Write a Python program to demonstrate the conditional statements.

# if Statement

number = int(input("Enter the number:"))
if number > 0:
    print("The number is positive.")

Output :-
Enter the number: 93
The number is positive.


# if else statements

num = int(input("Enter the number"))

if num % 2 == 0:
    print("The number is Even.")
else:
    print("The number is odd.")

Output :-
Enter the number: 13
The number is odd.


# Age example

age = int(input("Enter your age:"))

if age >= 18:
    print("Adult")
else:
    print("Minor")

Output :-
Enter your age: 56
Adult


# Leap year Example

year = int(input("Enter the year:"))

if year % 4 == 0:
    print("This a leap year.")
else:
    print("This not a leap year.")

Output :-
Enter the year: 2025
This not a leap year.


# if-elif-else statement (using AND)

marks = int(input("Enter the marks:"))

if marks > 100:
    print("Error")
elif marks <= 100 and marks >= 90:
    print("Grade A")
elif marks <= 89 and marks >= 60:
    print("Grade B")
elif marks <= 59 and marks >= 40:
    print("Grade C")
else:
    print("Fail")

Output :-
Enter the marks: 45
Grade C


# if-else-else statement (using OR)

marks = int(input("Enter the marks:"))

if marks > 100:
    print("Error")
elif marks <= 100 or marks >= 90:
    print("Grade A")
elif marks <= 89 or marks >= 60:
    print("Grade B")
elif marks <= 59 or marks >= 40:
    print("Grade C")
else:
    print("Fail")

Output :-
Enter the marks: 68
Grade A




-------------------------------------------------

Practical No. 2

Title:- Write a Python to demonstrate the looping statements.

# Using for loop

# print Numbers from 1 to 5 :-

for i in range(1, 6):
    print(i)

Output:-
1
2
3
4
5


# Printing Even Numbers

# print Even numbers from 1 to 20 :-

for i in range(2, 10, 2):
    print(i)

Output:-
2
4
6
8


# Sum of Numbers Using For Loop

sum = 0

for i in range(1, 11):
    sum = sum + i

print("Sum =", sum)

Output:-
Sum = 55


# Multiplication Table Using For Loop

num = 5

print("Table of", num)

for i in range(1, 6):
    print(num, "x", i, "=", num * i)

Output:-
Table of 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25


# Using Break Statement

for i in range(1, 11):
    if i == 3:
        break
    print(i)

Output:-
1
2


# Using Continue Statement

for i in range(1, 6):
    if i == 5:
        continue
    print(i)

Output:-
1
2
3
4


# Nested For Loop

for i in range(1, 3):
    for j in range(1, 3):
        print(i, j)

Output:-
1 1
1 2
2 1
2 2


# Program to Print Fibonacci series

n = int(input("Enter number of terms:"))
a = 0
b = 1

print("Fibonacci Series:")

for i in range(n):
    print(a, end=" ")
    c = a + b
    a = b
    b = c

Output:-
Enter number of terms: 10
Fibonacci Series:
0 1 1 2 3 5 8 13 21 34


# Program to check Armstrong number

num = int(input("Enter a number :"))

original = num
sum = 0
digits = len(str(num))

while num > 0:
    digit = num % 10
    sum = sum + digit ** digits
    num = num // 10

if sum == original:
    print("It is an Armstrong number")
else:
    print("It is not an Armstrong number")

Output:-
Enter a number : 153
It is an Armstrong number


# Factorial

n = int(input("Enter a number:"))

factorial = 1

for i in range(1, n + 1):
    factorial *= i

print("Factorial =", factorial)

Output:-
Enter a number: 5
Factorial = 120


# palindrome

no = int(input("Enter your number:"))

rem = 0
org = 0
rev = 0

while no > 0:
    rem = no % 10
    rev = (rev * 10) + rem
    no = no // 10

print("reverse is :", rev)

if (org == rev):
    print("number is palindrome")
else:
    print("not palindrome")

Output:-
Enter your number: 12
reverse is : 21
not palindrome





--------------------------------------------------

PRACTICAL NO. 3

Roll No :- 190

Title :- Write a Python program to demonstrate the concept of List.

# Create a List using User Input

numbers = []

n = int(input("Enter Numbers: "))

for i in range(n):
    value = int(input("Enter numbers: "))
    numbers.append(value)

print("list :", numbers)

Output :-
Enter Numbers: 4
Enter numbers : 10
Enter numbers : 20
Enter numbers : 30
Enter numbers : 40
list : [10, 20, 30, 40]


# List Slicing

print("First Three Elements:", numbers[:3])

Output :-
First Three Elements: [10, 20, 30]


# Append

value = int(input("Enter a number to append: "))
numbers.append(value)
print("After Append:", numbers)

Output :-
list : [10, 20, 30, 40]
Enter a number to append: 50
After Append: [10, 20, 30, 40, 50]


# Insert

value = int(input("Enter a number to insert: "))
position = int(input("Enter position: "))
numbers.insert(position, value)
print("After Insert:", numbers)

Output :-
list : [10, 20, 30, 40]
Enter a number to insert: 55
Enter position: 3
After Insert: [10, 20, 30, 55, 40]


# Extend

extra = list(map(int, input("Enter numbers to extend: ").split()))
numbers.extend(extra)

print("After Extend:", numbers)

Output :-
list : [10, 20, 30, 40]
Enter numbers to extend: 60
After Extend: [10, 20, 30, 40, 60]


# Remove

value = int(input("Enter value to remove: "))

if value in numbers:
    numbers.remove(value)

print("After Remove:", numbers)

Output :-
list : [10, 20, 30, 40]
Enter value to remove: 20
After Remove: [10, 30, 40]


# Pop

numbers.pop()
print("After Pop:", numbers)

Output :-
list : [10, 20, 30, 40]
After Pop: [10, 20, 30]






--------------------------------------------------

PRACTICAL NO. 4

Roll No :- 190

Title :- Write a Python to demonstrate the concept of Tuple.

#1. Creating Tuples

fruits = ("Apple", "Banana", "Mango", "Orange", "Banana")
single_fruit = ("Apple",)
empty_tuple = ()

print("Fruits Tuple:", fruits)
print("Single Fruit Tuple:", single_fruit)
print("Empty Tuple:", empty_tuple)

Output :-

Fruits Tuple: ('Apple', 'Banana', 'Mango', 'Orange', 'Banana')
Single Fruit Tuple: ('Apple',)
Empty Tuple: ()


# First Fruit and Last Fruit

print("First Fruit:", fruits[0])
print("Last Fruit:", fruits[-1])


# Tuple Slicing

print("Slicing [1:4]:", fruits[1:4])
print("Reverse Tuple:", fruits[::-1])

Output :-

Slicing [1:4]: ('Banana', 'Mango', 'Orange')
Reverse Tuple: ('Banana', 'Orange', 'Mango', 'Banana', 'Apple')


# Repetition

print("Repetition:", fruits * 2)


# Nested Tuple

nested_tuple = (("Apple", "Banana"), ("Mango", "Orange"))

print("Nested Tuple:", nested_tuple)
print("First Nested Fruit:", nested_tuple[0][0])

Output :-

Nested Tuple: (('Apple', 'Banana'), ('Mango', 'Orange'))
First Nested Fruit: Apple


#13. Converting List to Tuple

fruit_list = ["Apple", "Banana", "Mango"]
new_tuple = tuple(fruit_list)

print("List to Tuple:", new_tuple)

Output :-

List to Tuple: ('Apple', 'Banana', 'Mango')


#14. Converting Tuple to List

new_list = list(fruits)

print("Tuple to List:", new_list)

Output :-

Tuple to List: ['Apple', 'Banana', 'Mango', 'Orange', 'Banana']


#15. Adding an Element

new_fruits = fruits + ("Papaya",)

print("After Adding Papaya:", new_fruits)

Output :-

After Adding Papaya:
('Apple', 'Banana', 'Mango', 'Orange', 'Banana', 'Papaya')


# Joining String Tuple

print("Joined Fruits:", ", ".join(fruits))

Output :-

Joined Fruits: Apple, Banana, Mango, Orange, Banana








--------------------------------------------------

PRACTICAL NO. 5

Roll No :- 190

Title :- Write Python to demonstrate the concept of Dictionary.

student = {
    "name": "Rahul",
    "age": 20,
    "course": "BCA",
    "marks": 85,
    "name": "Sagar"
}

# Display dictionary

print("Original Dictionary:")
print(student)

Output :-

Original Dictionary:
{'name': 'Rahul', 'age': 20, 'course': 'BCA', 'marks': 85}


# Access value

print("Name:", student["name"])
print("Age:", student["age"])

Output :-

Name: Rahul
Age: 20


# keys() method

print("Keys:")
print(student.keys())

Output :-

Keys:
dict_keys(['name', 'age', 'course', 'marks'])


# values() method

print("Values:")
print(student.values())

Output :-

Values:
dict_values(['Rahul', 20, 'BCA', 85])


# items() method

print("Items:")
print(student.items())

Output :-

Items:
dict_items([('name', 'Rahul'), ('age', 20), ('course', 'BCA'), ('marks', 85)])


# get() method

print("Course:")
print(student.get("course"))

Output :-

Course:
BCA


# Adding new item

student["city"] = "Pune"

print("After adding city:")
print(student)

Output :-

After adding city:
{'name': 'Rahul', 'age': 20, 'course': 'BCA', 'marks': 85, 'city': 'Pune'}


# update() method

student.update({"marks": 90})

print("After updating marks:")
print(student)

Output :-

After updating marks:
{'name': 'Rahul', 'age': 20, 'course': 'BCA', 'marks': 90, 'city': 'Pune'}


# pop() method

student.pop("age")

print("After deleting age:")
print(student)

Output :-

After deleting age:
{'name': 'Rahul', 'course': 'BCA', 'marks': 90, 'city': 'Pune'}


# clear() method

student.clear()

print("After clear:")
print(student)

Output :-

After clear:
{}


# Dictionary Length

print(len(student))

Output :-

4


# Delete age using del

del student["name"]

print("After using del:")
print(student)

Output :-

After using del:
{'course': 'BCA', 'marks': 90, 'city': 'Pune'}


# popitem()

student.popitem()
print(student)


# Copy the dictionary

student_copy = student.copy()
print(student_copy)

Output :-

{'course': 'BCA', 'marks': 90}


#fromkeys() method

keys = ("name", "age", "course", "marks")

student = dict.fromkeys(keys, "Not Available")

print("Dictionary:")
print(student)

Output :-

Dictionary:
{'name': 'Not Available', 'age': 'Not Available',
'course': 'Not Available', 'marks': 'Not Available'}


# Key does not exist, so it will be added

student.setdefault("city", "Pune")

print("After adding city:")
print(student)

Output :-

After adding city:
{'name': 'Not Available', 'age': 'Not Available',
'course': 'Not Available', 'marks': 'Not Available',
'city': 'Pune'}







--------------------------------------------------

PRACTICAL NO. 6

Roll No :- 190

Title :- Write a program for insertion and deletion operations in an array.

# Code :-

arr = [10,20,30,40,50]

print("Original Array:", arr)

# Insertion

position = int(input("Enter the position for insertion: "))
element = int(input("Enter element to insert: "))

arr.append(0)

for i in range(len(arr)-1, position, -1):
    arr[i] = arr[i-1]

arr[position] = element

print("Array after insertion:", arr)


# Deletion

position = int(input("Enter position for deletion: "))

for i in range(position, len(arr)-1):
    arr[i] = arr[i+1]

arr.pop()

print("Array after deletion:", arr)


# Output :-

Original Array: [10, 20, 30, 40, 50]

Enter the position for insertion: 2

Enter element to insert: 11

Array after insertion: [10, 20, 11, 30, 40, 50]

Enter position for deletion: 2

Array after deletion: [10, 20, 30, 40, 50]








--------------------------------------------------

# PRACTICAL NO. 7 & 8

Roll No :- 190

Title :- Write A Program to Implement Stack Operations:
Push, Pop, Peep, Change, Display

stack = []
top = -1
max_size = 3

while True:

    print("\nChoose operation:")
    print("1. Push")
    print("2. Pop")
    print("3. Peep")
    print("4. Change")
    print("5. Display")
    print("6. Exit")

    ch = input("Enter your choice (1-6): ")

    if ch == "1":

        if top >= max_size - 1:
            print("Stack Overflow")
        else:
            item = input("Enter item to push: ")
            stack.append(item)
            top += 1
            print(f"{item} pushed to stack")

    elif ch == "2":

        if top == -1:
            print("Stack Underflow")
        else:
            print(f"Popped item: {stack[top]}")
            stack.pop()
            top -= 1

    elif ch == "3":

        if top == -1:
            print("Stack Underflow")
        else:
            print(f"Top item: {stack[top]}")

    elif ch == "4":

        if top == -1:
            print("Stack Underflow")
        else:
            position = int(input("Enter position to change: "))

            if position < 0 or position > top:
                print("Invalid position")
            else:
                item = input("Enter new item: ")
                stack[position] = item
                print("Stack item changed successfully")

    elif ch == "5":

        if top == -1:
            print("Stack is empty")
        else:
            print("Stack elements:")
            for i in range(top, -1, -1):
                print(stack[i])

    elif ch == "6":

        print("Exiting...")
        break

    else:
        print("Invalid choice! Please try again.")

--------------------------------------------------

PRACTICAL NO. 9

Roll No :- 190

Title :- Write a program to implement Linear Queue operations:
Insert, Delete, Display

CODE :-

class LinearQueue:

    def __init__(self, size):
        self.size = size
        self.queue = [None] * size
        self.front = -1
        self.rear = -1

    def is_empty(self):
        if self.front == -1 or self.front > self.rear:
            return True
        else:
            return False

    def is_full(self):
        if self.rear == self.size - 1:
            return True
        else:
            return False

    def enqueue(self, value):
        if self.is_full():
            print("Queue is full, cannot enqueue.")
        else:
            if self.front == -1:
                self.front = 0

            self.rear += 1
            self.queue[self.rear] = value
            print(f"Inserted: {value}")

    def dequeue(self):

        if self.is_empty():
            print("Queue is empty, cannot dequeue.")

        elif self.front == self.rear:

            value = self.queue[self.front]
            self.front = -1
            self.rear = -1
            print(f"Deleted: {value}")

        else:
            value = self.queue[self.front]
            self.front += 1
            print(f"Deleted: {value}")

    def display(self):

        if self.is_empty():
            print("Queue is empty.")

        else:
            print("Queue elements:", end="")

            for i in range(self.front, self.rear + 1):
                print(self.queue[i], end=" ")

            print()


def main():

    queue = LinearQueue(3)

    while True:

        print("\nSelect operation:")
        print("1. Insert")
        print("2. Delete")
        print("3. Display")
        print("4. Exit")

        choice = input("Enter your choice (1-4): ")


# Output :-

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 1
Enter value to insert: 16

Inserted: 16

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 1
Enter value to insert: 05

Inserted: 05

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 1
Enter value to insert: 24

Queue is full, cannot enqueue.

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 3

Queue elements: 16 05 24


--------------------------------------------------

# Circular Queue

class CircularQueue:

    def __init__(self, size):
        self.size = size
        self.queue = [None] * size
        self.front = -1
        self.rear = -1

    def insert(self, data):

        # Check if queue is full

        if (self.rear + 1) % self.size == self.front:
            print("Queue is full! Cannot insert", data)
            return

        # If queue is empty

        if self.front == -1:
            self.front = 0

        self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = data

        print(f"Inserted {data}")

    def delete(self):

        # Check if queue is empty

        if self.front == -1:
            print("Queue is empty! Cannot delete.")
            return

        data = self.queue[self.front]

        # If only one element was present

        if self.front == self.rear:
            self.front = -1
            self.rear = -1

        else:
            self.front = (self.front + 1) % self.size

        print(f"Deleted {data}")

    def display(self):

        # Check if queue is empty

        if self.front == -1:
            print("Queue is empty!")
            return

        print("Queue elements:", end="")

        i = self.front

        while True:
            print(self.queue[i], end=" ")

            if i == self.rear:
                break

            i = (i + 1) % self.size

        print()


def main():

    queue = CircularQueue(3)

    while True:

        print("\nSelect operation:")
        print("1. Insert")
        print("2. Delete")
        print("3. Display")
        print("4. Exit")

        choice = input("Enter your choice (1-4): ")

        if choice == "1":
            data = input("Enter value to insert: ")
            queue.insert(data)

        elif choice == "2":
            queue.delete()

        elif choice == "3":
            queue.display()

        elif choice == "4":
            print("Exiting...")
            break

        else:
            print("Invalid choice! Please try again.")


if __name__ == "__main__":
    main()


# OUTPUT :-

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 2

Queue is empty! Cannot delete.

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 1

Enter value to insert: 16

Inserted 16

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 1

Enter value to insert: 05

Inserted 05

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 1

Enter value to insert: 24

Inserted 24

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 1

Enter value to insert: 14

Queue is full! Cannot insert 14

Select operation:

1. Insert
2. Delete
3. Display
4. Exit

Enter your choice (1-4): 3

Queue elements: 16 05 24











Practical No :- 10
Title:-(Write a program to implement Circular queue with its operations: Insert, Delete, Display)

CODE :-

class CircularQueue:
    def __init__(self, size):
        self.size = size
        self.queue = [None] * size
        self.front = -1
        self.rear = -1

    def insert(self, data):
        # Check if queue is full
        if (self.rear + 1) % self.size == self.front:
            print("Queue is full! Cannot insert", data)
            return

        # If queue is empty
        if self.front == -1:
            self.front = 0

        self.rear = (self.rear + 1) % self.size
        self.queue[self.rear] = data
        print(f"Inserted {data}")

    def delete(self):
        # Check if queue is empty
        if self.front == -1:
            print("Queue is empty! Cannot delete.")
            return

        data = self.queue[self.front]

        # If only one element was present
        if self.front == self.rear:
            self.front = -1
            self.rear = -1
        else:
            self.front = (self.front + 1) % self.size

        print(f"Deleted {data}")

    def display(self):
        # Check if queue is empty
        if self.front == -1:
            print("Queue is empty!")
            return

        print("Queue elements:", end=" ")
        i = self.front

        while True:
            print(self.queue[i], end=" ")
            if i == self.rear:
                break
            i = (i + 1) % self.size

        print()

def main():
    queue = CircularQueue(3)

    while True:
        print("\nSelect operation:")
        print("1. Insert")
        print("2. Delete")
        print("3. Display")
        print("4. Exit")

        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            data = input("Enter value to insert: ")
            queue.insert(data)
        elif choice == '2':
            queue.delete()
        elif choice == '3':
            queue.display()
        elif choice == '4':
            print("Exiting...")
            break
        else:
            print("Invalid choice! Please try again.")

if __name__ == "__main__":
    main()


OUT PUT :-

Select operation:
1. Insert
2. Delete
3. Display
4. Exit
Enter your choice (1-4): 2
Queue is empty! Cannot delete.

Select operation:
1. Insert
2. Delete
3. Display
4. Exit
Enter your choice (1-4): 1
Enter value to insert: 16
Inserted 16

Select operation:
1. Insert
2. Delete
3. Display
4. Exit
Enter your choice (1-4): 1
Enter value to insert: 05
Inserted 05

Select operation:
1. Insert
2. Delete
3. Display
4. Exit
Enter your choice (1-4): 1
Enter value to insert: 24
Inserted 24

Select operation:
1. Insert
2. Delete
3. Display
4. Exit
Enter your choice (1-4): 1
Enter value to insert: 14
Queue is full! Cannot insert 14

Select operation:
1. Insert
2. Delete
3. Display
4. Exit
Enter your choice (1-4): 3
Queue elements: 16 05 24










practical 12


# 12.Program to Implement Singly Linked List with Operations

# Singly Linked List

linked_list = []

# Insert at beginning
def insert_at_beginning(value):
    linked_list.insert(0, value)
    print(f"{value} inserted at the beginning.")


# Delete from beginning
def delete_from_beginning():
    if not linked_list:
        print("Linked List is empty.")
    else:
        remove_ele = linked_list.pop(0)
        print(f"{remove_ele} removed from the beginning.")


# Display the linked list
def display():
    if not linked_list:
        print("The list is empty.")
    else:
        print("Linked List:", " -> ".join(map(str, linked_list)), "-> None")


# Create the linked list
def create():
    n = int(input("Enter number of elements: "))

    for i in range(n):
        value = input(f"Enter element {i + 1}: ")
        linked_list.append(value)

    print("Linked List created successfully.")


# Main menu
def main():
    while True:
        print("\n--- Singly Linked List Menu ---")
        print("1. Create List")
        print("2. Insert at Beginning")
        print("3. Delete from Beginning")
        print("4. Display List")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == "1":
            create()

        elif choice == "2":
            value = input("Enter value to insert at beginning: ")
            insert_at_beginning(value)

        elif choice == "3":
            delete_from_beginning()

        elif choice == "4":
            display()

        elif choice == "5":
            print("Exiting program.")
            break

        else:
            print("Invalid choice. Try again.")


if __name__ == "__main__":
    main()









practical 13

#13 Write a program to implement singly linked list with operations : i)Create 
#ii) insert at the end position 
#ii)delete element from last position

# Singly Linked List – Insert and Delete at End

linked_list = []


# Insert at End
def insert_at_end(value):
    linked_list.append(value)
    print(f"{value} inserted at the end.")


# Delete from End
def delete_from_end():
    if not linked_list:
        print("Linked List is empty.")
    else:
        remove_ele = linked_list.pop()
        print(f"{remove_ele} removed from the list.")


# Display List
def display():
    if not linked_list:
        print("The list is empty.")
    else:
        print("Linked List:", " -> ".join(map(str, linked_list)), "-> None")


# Menu
def main():
    while True:
        print("\n--- Singly Linked List Menu ---")
        print("1. Insert at End")
        print("2. Delete from End")
        print("3. Display List")
        print("4. Exit")

        choice = input("Enter your choice (1-4): ")

        if choice == "1":
            value = input("Enter value to insert at end: ")
            insert_at_end(value)

        elif choice == "2":
            delete_from_end()

        elif choice == "3":
            display()

        elif choice == "4":
            print("Exiting program.")
            break

        else:
            print("Invalid choice. Try again.")


if __name__ == "__main__":
    main()



practical 14

# 14.Singly Linked List Using List Methods

# Singly linked list using list methods
# Operations:
# i) Create
# ii) Insert at any position
# iii) Delete element from given position
# iv) Display

linked_list = []


# Create List
def create_list(value):
    linked_list.append(value)
    print(f"{value} inserted.")


# Insert at Any Position
def insert_at_position(value):
    pos = int(input("Enter position to insert element: "))

    if pos < 1 or pos > len(linked_list) + 1:
        print("Invalid position.")
    else:
        linked_list.insert(pos - 1, value)
        print(f"{value} inserted at position {pos}.")


# Delete from Given Position
def delete_by_position():
    if not linked_list:
        print("Linked List is empty.")
    else:
        pos = int(input("Enter position to delete element: "))

        if pos < 1 or pos > len(linked_list):
            print("Invalid position.")
        else:
            remove_ele = linked_list.pop(pos - 1)
            print(f"{remove_ele} removed from the list.")


# Display List
def display():
    if not linked_list:
        print("The list is empty.")
    else:
        print("Linked List:", " -> ".join(map(str, linked_list)), "-> None")


# Main Menu
def main():
    while True:
        print("\n--- Singly Linked List Menu ---")
        print("1. Create")
        print("2. Insert at Position")
        print("3. Delete a Node by Position")
        print("4. Display List")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        match choice:
            case "1":
                value = input("Enter value: ")
                create_list(value)

            case "2":
                value = input("Enter value to insert at position: ")
                insert_at_position(value)

            case "3":
                delete_by_position()

            case "4":
                display()

            case "5":
                print("Exiting program.")
                break

            case _:
                print("Invalid choice. Try again.")


if __name__ == "__main__":
    main()




## नागरिकांनी खबरदारी घ्यावी

पावसाच्या काळात नागरिकांनी आवश्यक खबरदारी घ्यावी. शेतकऱ्यांनी पिकांची स्थिती लक्षात घेऊन स्थानिक कृषी विभागाच्या सूचनांचे पालन करावे.

वीजांच्या कडकडाटासह पाऊस असल्यास मोकळ्या मैदानात किंवा झाडाखाली थांबणे टाळावे.

## जळगाव हवामान अपडेट्स

जळगाव जिल्ह्यातील आजचे हवामान, पावसाचा अंदाज आणि हवामान विभागाच्या अलर्टसाठी Jalgaon Zone वरील अपडेट्स पाहत रहा.

**टीप:** हवामानाची माहिती वेळेनुसार बदलू शकते. महत्त्वाच्या निर्णयांसाठी अधिकृत हवामान विभागाच्या ताज्या सूचनांचा आधार घ्या.
