```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Now the useEffect is triggered only once after the component mounts.
    // The count variable is not in the dependency array.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Increment every 1 second
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```