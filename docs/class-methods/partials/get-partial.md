---
sidebar_position: 3
---

# 📤 Get Partial

Returns the Partial average result of the requested ID.
Use the ID provided by the creation method to access the partial result.
Requesting an invalid ID will return a 0.

### 📝 Syntax

```cpp
TypeOfArray get_partial(size_t id)
```

### 🔮 Example

```cpp
MovingAveragePlus<unsigned int> intAverage(10);

size_t partial_id = intAverage.create_partial(3);
size_t partial_2_id = intAverage.create_partial(5);

// 10 4 3 2 1 0 0 0 0 0
intAverage.push(1).push(2).push(3).push(4).push(10);

// (10 + 4 + 3) / 3 = 5
intAverage.get_partial(partial_id);
// (10 + 4 + 3 + 2 + 1) / 5 = 4
intAverage.get_partial(partial_2_id);
```

### ⏱Complexity

**Constant (O(1))**.
