A function call itself is called recursion, every recursive call of a function break down problem into smaller sub problem.

**Types of recursion**

1. Direction recursion
2. Indirect recursion

```cpp
1. direct recursion

int abc() {
	_____;
	abc();
}

2. indirect recursion

int abc() {
	----;
	----;
	xyz();
}

int xyz() {
	abc();
	----;
}
```

1. Linear recursion
2. Binary recursion
3. Multiple recursion

Recursion Tree

Main point in the recursion

1. Base case - when recursion is stop
2. Work (kaam) - task
3. Inner call - recursive call