# Graph Traversal

## DFS

- Pick one vertex.
- than call adjacent of the vertex.
- then again call dfs of that adj. vertex.d

**Solution**

```java
ArrayList<Integer> dfs(int v, ArrayList<ArrayList<Integer>> adj) {
    boolean vis[] = new int[v];
    ArrayList<Integer> ans = new ArrayList<>();
    for(int i=0;i<v; i++) {
        if(!vis[i] ) {
            vis[i] = true;
            dfsUtil(i, ans, adj, vis);
        }
    }
}

void dfsUtil(int curr, ArrayList<Integer> ans, ArrayList<ArrayList<Integer>> adj,boolean vis[]) {
    vis[curr] = true;

    ans.add(curr);

    for(int dest: adj.get(curr)) {
        if(!vis[dest]){
            vis[dest] = true;
            dfsUtil(dest, ans, adj, vis);
        }
    }
}
```

## BFS
