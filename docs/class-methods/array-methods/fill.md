---
sidebar_position: 3
---

# 🌊 Fill

**Fills and overwrites** the array with the received element.

_Methods that **return pointers** allow **chained calls**._

```cpp
MovingAveragePlus<unsigned int> intAverage(10);

unsigned int x = 5, y = 10;
unsigned int result, first, last;

result = intAverage.push(x).push(y).get();
first = intAverage.push(56).front();
last = intAverage.push(8).back();
```

### 📝 Syntax

```cpp
MovingAveragePlus<TypeOfArray> &fill(TypeOfArray fill_value)
```

### 🔮 Example

```cpp
// 0 0 0 0 0
MovingAveragePlus<unsigned int> intAverage(5);

// 4 3 2 1 0
intAverage.push(1).push(2).push(3).push(4)

// 10 10 10 10 10
intAverage.fill(10)
```

### ⏱ Complexity

**Linear (O(n))** in the **array size**.
