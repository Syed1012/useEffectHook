# React + Vite

# useEffect() -- [Its like a side code you want to perform when something has happend like given below in box]

- DEF --> It is a react Hook that tells react do some code when picked one:
-       This component re renders
-       This state of value

- useEffect(function, [dependencies]) 

- That side code is written in the function and you can pass an array of dependencies like values or anything object or any.

1. useEffect(() => {})  --> This left code the function it Runs after every re-render
2. useEffect(() => {}, []) --> Runs only on mount
3. useEffect(() => {}, [value]) --> Runs on mount + when value changes

# Uses
1. Event listeners
2. DOM manipulation
3. Subscriptions (real-time updates)
4. Fetching Data from an API
5. Clean Up when a component unmounts

# Practical work

- see in the file ComPonent.jsx we have created a clicked time counter button

- now as everytime the page re render we want to change the page title so we used useEffect with its function to change the title as every time the count button is clicked and page will be re rendered.