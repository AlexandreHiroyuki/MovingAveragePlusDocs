---
sidebar_position: 3
---

# 📤 Get By Brute

**Returns** the **average** of the **N** last added data points requested.

_If the number of requested points exceed the array size, it will return the average of points already added._

_⚠ Pay attention to how get_by_brute is significantly **slower** than the pure get function. If you are looking for a more efficient solution, search for the partial average concept in this library._

[📊 Partials](pathname:///docs/class-methods/partials/intro)

### 📝 Syntax

```cpp
TypeOfArray get_by_brute(size_t n_points)
```

### 🔮 Example

```cpp
// This will create an MovingAverage of size 4 and int type
// Array: 0 0 0 0
MovingAveragePlus<int> intAverage(4);

// Array: 8 0 0 0
intAverage.push(8);
// Array: 8 8 0 0
intAverage.push(8);
// Array: 4 8 8 0
intAverage.push(4);
// Array: 4 4 8 8
intAverage.push(4);

// Returns the average
// Value: (8 + 8 + 4 + 4) / 4 = 6
intAverage.get_by_brute(4);

// Value: (8 + 8) / 2 = 8
intAverage.get_by_brute(2);
```

### ⏱ Complexity

**Linear (O(n))** in the **data points requested**.
