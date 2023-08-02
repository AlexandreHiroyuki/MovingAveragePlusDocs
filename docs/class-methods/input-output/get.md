---
sidebar_position: 1
---

# 📤Get

**Returns** the **current** moving average **value**.

📊[Partials](pathname:///docs/class-methods/partials/intro)

### 📝Syntax

```cpp
TypeOfArray get()

// Passing the number of points you want to calculate the average as an parameter is an alias to ge_by_brute function.
//⚠Pay attention to how get_by_brute is significantly slower than the pure get function.
//If you are looking for a more efficient solution, search for the partial average concept in this library.
TypeOfArray get(size_t n_points) { return get_by_brute(n_points); }
```

### 🔮Example

```cpp
// This will create an MovingAverage of size 4 and int type
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
// Value: (4 + 4 + 8 + 8) / 4 = 6
intAverage.get();

// Value: (4 + 4) / 2 = 4
intAverage.get(2);
```

### ⏱Complexity

**Constant (O(1))**.