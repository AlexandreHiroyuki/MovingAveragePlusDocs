---
sidebar_position: 2
---

# 🛠 Create Partial

When you create a Partial, the structure will create a reactive variable behind the scenes. The name reactive represents how the variables will automatically update their values without more instructions.
The Partial will keep tracking of the requested sum size.
Requesting a bigger size than the main array will be understood as the maximum array size.

### 📝 Syntax

```cpp
size_t create_partial(size_t sum_size)
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

### ⏱ Complexity

**Constant (O(1))**.
