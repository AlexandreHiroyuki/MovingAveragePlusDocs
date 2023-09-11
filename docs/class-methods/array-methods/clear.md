---
sidebar_position: 2
---

# 🧹 Clear

**Clears** the **average** back to **0**, \***\*including its **initial size\*\*.

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
MovingAveragePlus<TypeOfArray> &clear()
```

### 🔮 Example

```cpp
MovingAveragePlus<unsigned int> intAverage(5);

// 4 3 2 1 0
intAverage.push(1).push(2).push(3).push(4)

// will return 0
intAverage.clear().get()
```

### ⏱ Complexity

**Linear (O(n))** in the **array size**.
