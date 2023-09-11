---
sidebar_position: 7
---

# 📍 AtIndex

---

**Returns** the requested element at the **absolute** position of the **array**.

_If the requested index exceed the array size, it will return a 0._

### 📝 Syntax

```cpp
TypeOfArray atIndex(size_t index)
```

### 🔮 Example

```cpp
// This will create an MovingAverage of size 4 and int type
MovingAveragePlus<int> intAverage(4);

// Array.atIndex(): 1 0 0 0
intAverage.push(1);
// Array.atIndex(): 1 2 0 0
intAverage.push(2);
// Array.atIndex(): 1 2 3 0
intAverage.push(3);
// Array.atIndex(): 1 2 3 4
intAverage.push(4)

// return 1
intAverage.atIndex(0);
```

### ⏱ Complexity

**Constant (O(1))**.
