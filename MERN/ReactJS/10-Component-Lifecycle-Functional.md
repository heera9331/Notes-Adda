# React Component Lifecycle - Function

## 1. Mounting

## 2. Updating

## 3. Unmounting

## 4. Error Handling

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // api calling
    // componentDidUpdate and componentDidUpdate combined

    // cleanup task
    // componentWillUnmount
    () => {
      console.log("component will unmount");
    };

    // componentShouldUpdate
  }, [count]);

  // render() => jsx
  return (
    <div>
      <p>Value {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
```
