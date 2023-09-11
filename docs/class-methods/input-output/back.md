---
sidebar_position: 5
---

# ⬅️ Back

**Returns** the last element of the **array** (the oldest element added).

### 📝 Syntax

```cpp
TypeOfArray back()
```

### 🔮 Example

```cpp
// This will create an MovingAverage of size 4 and int type
MovingAveragePlus<int> intAverage(4);

// Will return 0
intAverage.back();

// Array: 8 0 0 0
intAverage.push(8);
// Array: 7 8 0 0
intAverage.push(7);
// Array: 12 7 8 0
intAverage.push(12);
// Array: 1 12 7 8
intAverage.push(1);

// Will return 8
intAverage.back();
```

### ⏱ Complexity

**Constant (O(1))**.
