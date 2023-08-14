---
sidebar_position: 1
---

# 📊 The Partials Concept

The **Partials** are a **more efficient** way of calculating the average of one data array partial sizes by avoiding the recalculation of the entire array every time.

When you create a **Partial**, the structure will create a **reactive variable** behind the scenes. The name reactive represents how the variables will automatically update their
values without more instructions.

Reactive variables update reactively to push calls. Then, after creation, you **only need to care** about getting the **Partial result**.
