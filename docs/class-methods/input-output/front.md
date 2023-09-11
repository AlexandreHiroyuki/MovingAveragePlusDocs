---
sidebar_position: 4
---

# ➡️ Front

**Returns** the first element of the **array** (the most recent element added).

### 📝 Syntax

```cpp
TypeOfArray front()
```

### 🔮 Example

```cpp
// This will create an MovingAverage of size 4 and int type
MovingAveragePlus<int> intAverage(4);

// Will return 0
intAverage.front();

// Array: 8 0 0 0
intAverage.push(8);

// Will return 8
intAverage.front();
```

### ⏱ Complexity

**Constant (O(1))**.
