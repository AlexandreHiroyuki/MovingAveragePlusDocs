---
sidebar_position: 6
---

# 📍 Operator[]

---

**Returns** the requested element at the **relative** position of the **array** (the first index is aways the most recent element added).

_If the requested index exceed the array size, it will return a 0._

### 📝 Syntax

```cpp
TypeOfArray operator[](int index)
```

### 🔮 Example

```cpp
// This will create an MovingAverage of size 4 and int type
MovingAveragePlus<int> intAverage(4);

// Array[]: 1 0 0 0
intAverage.push(1);
// Array[]: 2 1 0 0
intAverage.push(2);
// Array[]: 3 2 1 0
intAverage.push(3);
// Array[]: 4 3 2 1
intAverage.push(4);

// Return 4
intAverage[0];
```

### ⏱ Complexity

**Constant (O(1))**.
