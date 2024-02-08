# Optimal Merge Pattern

In this problem we have n number of files to merge them into single file.

let's take small example

file a - n (records)
file b - m (records)

merging operation take O(n+m) to merge two files

if we have n-files to merge them into single file

`Task` - How to merge files which will take minimum number of move operations to merge files.

`One more example`
```
a - 10
b - 15
c - 20
```
if we merge a + b ==> res first than res + c
- a + b ==> 10 + 15 => 25 --> res
- res + c => 25 + 20 => 45
- total = 70

```
a - 10
b - 15
c - 20
```

if we merge b + c => res, first than res + c
let's see

- b + c => 15 + 20 => 35 res
- res + a => 35 + 10 => 45
- total = 80

`result` - first solution take minimum move operations, so first is the best solution forever
- `why` - because apply greedy or think greedly at every step.

`summary` - if we have n-file in sorted order than first we merge smaller record file than bigger - so time complexity become reduced.



## Algorithm

- Node represents a file with a given size also given - nodes are greater than 2 
- Add all the nodes in a priority queue (Min Heap).{pq.- poll = file size}
- Initialize count = 0 // variable to store file - computations.
- Repeat while (size of priority Queue is greater than 1) 
- int weight = pq.poll(); pq.pop;//pq denotes priority - queue, remove 1st smallest and pop(remove) it out
- weight+=pq.poll()  && pq.pop(); // add the second - element and then pop(remove) it out
- count +=weight;
- pq.add(weight) // add this combined cost to priority - queue;  
- count is the final answer


## Complexity

- `Time Complexity - O(n log n)`
- `Space Complexity - O(n)`

## Implementation 

```java
int minComputation(int size, int files[]) {
    // create a min heap
    PriorityQueue<Integer> pq = new PriorityQueue<>();

    for (int i = 0; i < size; i++) { 
        // add sizes to priorityQueue
        pq.add(files[i]);
    }

    // variable to count total computations
    int count = 0;
    while (pq.size() > 1) {

        // pop two smallest size element
        // from the min heap
        int temp = pq.poll() + pq.poll();

        // add the current computations
        // with the previous one's
        count += temp;

        // add new combined file size
        // to priority queue or min heap
        pq.add(temp);
    }

    return count;
}

```
