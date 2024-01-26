import React, {useState, useEffect} from 'react'

const MyComponent = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // part 1 run when reRender happens
    // useEffect(() => {
    //   document.title = `Count: ${count}`
    // });

    // // part 2 run when mount
    // useEffect(() => {
    // document.title = `Count: ${count}`
    // }, []);

    // part 3 run when render + mount
    useEffect(() => {
    document.title = `Count: ${count} ${color}`
    }, [count, color]);

    const handleaddCount = () => {
        setCount(c => c + 1);
    }
    
    const handlesubCount = () => {
        setCount(c => c - 1);
    }

    const handlechangeColor = () => {
      setColor(c => c === "green" ? "red":"blue");
    }

  return (
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={handleaddCount}>Add</button>
    <button onClick={handlesubCount}>Sub</button>
    <br />
    <br />
    <button onClick={handlechangeColor}>Change Color</button>
    </> 
  )
}

export default MyComponent