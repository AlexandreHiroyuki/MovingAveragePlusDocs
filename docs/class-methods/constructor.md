---
sidebar_position: 2
---

# 🛠Constructor

## 📝Syntax

```cpp
// Passing only size as an argument
MovingAveragePlus<class TypeOfArray> yourAverageName(size_t size);
// Or, also, passing a value to initialize the array
-Deprecated- MovingAveragePlus<class TypeOfArray> yourAverageName(size_t size, TypeOfArray initialize);
```

- **Template parameter**.
  **TypeOfArray** is the **type of the array elements**.

1. **Passing only size as an argument**.
   > The class will create an array with the **size** passed as an argument and, by **default**, all positions will initialize with 0.
2. **-Deprecated-** **Passing size and initializer value as argument**.

## 🔮Example

```cpp
// This will create an MovingAverage of size 10 and unsigned type
MovingAveragePlus<unsigned int> intAverage(10);
```

## ⏱Complexity

- If the option "1." is used, the complexity will be constant (O(1)).
- -Deprecated- Although, if using the option "2.", complexity will be linear (O(n)) in the array size passed as an argument.
