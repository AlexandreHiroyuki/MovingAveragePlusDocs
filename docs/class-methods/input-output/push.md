---
sidebar_position: 1
---

# 📥Push
**Inserts** a **new element** in the internal array and **returns** a pointer.
*Methods that **return pointers** allow **chained calls**.*

```cpp
MovingAveragePlus<unsigned int> intAverage(10);

unsigned int x = 5, y = 10;
unsigned int result, first, last;

result = intAverage.push(x).push(y).get();
first = intAverage.push(56).front();
last = intAverage.push(8).back();
```

### 📝Syntax

```cpp
MovingAveragePlus<TypeOfArray> &push(TypeOfArray input)
```

- **Inserts** the **input** of type **TypeOfArray** at the end of the **array**.

### 🔮Example

```cpp
// This will create an MovingAverage of size 5 and unsigned type
// Array: 0 0 0 0 0
MovingAveragePlus<unsigned int> intAverage(5);

// Array: 6
intAverage.push(6);

// Array: 1 6
// Array: 2 1 6
// Array: 3 
// Array: 4 3 2 1 6
for(int i = 1; i < 5; i++){
    intAverage.push(i);
}

// Array: 21 1 2 3 4
intAverage.push(21);  
```

### ⏱Complexity

**Constant (O(1))**.