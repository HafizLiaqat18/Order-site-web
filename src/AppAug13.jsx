// state and props - event handling

// useState is a hook

// state
import React, {useState} from 'react'

export default function AppAug13() {
    let [counter, setCounter] = useState(0);
    let [x, setX] = useState(90);

    const handleIncrement = () => {
        setCounter(counter + 1); // difference algo
    }

    const incrementX = () => {
        setX(x + 1);
    }

    return (
        <>
        <h2>x = {x}</h2>
        <h2>Counter = {counter}</h2>
        <button onClick={handleIncrement}>Increment Counter</button>
        <hr />
        <h2>x = {x}</h2>
        <button onClick={incrementX}>Increment X</button>
        </>
    )
}



// export default function AppAug13() {
//     let [counter, setCounter] = useState(0); // declare as state variable

//     const handleIncrement = () => {
//         setCounter(counter + 1); // state update (mem + screen)
//     }

//     return (
//         <>
//         <h2>Counter = {counter}</h2>
//         <button onClick={handleIncrement}>Increment</button>
//         </>
//     )
// }



// export default function AppAug13() {
//     let counter = 0; // declare as state variable

//     const handleIncrement = () => {
//         counter = counter + 1; // state update (mem + screen)
//     }

//     return (
//         <>
//         <h2>Counter = {counter}</h2>
//         <button onClick={handleIncrement}>Increment</button>
//         </>
//     )
// }



// export default function AppAug13() {
//     let counter = 0;

//     const handleIncrement = () => {
//         counter = counter + 1;
//         console.log(counter);
//     }

//     return (
//         <>
//         <h2>Counter = {counter}</h2>
//         <button onClick={handleIncrement}>Increment</button>
//         </>
//     )
// }



// export default function AppAug13() {

//     const myFunction = (name) => {
//         alert("Welcome " + name);
//     }

//     return (
//         <button onClick={() => myFunction("Ali")}>Click me</button>
//     )
// }


// export default function AppAug13() {

//     const myFunction = (name) => {
//         alert("Welcome " + name);
//     }

//     const f = () => {
//         myFunction("Ahmad")
//     }

//   return (
//     <button onClick={f}>Click me</button>
//   )
// }


// export default function AppAug13() {

//   return (
//     <button onClick={_ => alert("Button is clicked")}>Click me</button>
//   )
// }



// export default function AppAug13() {

//     const myFunction = () => {
//         console.log("Button is clicked");
//     }


//   return (
//     <button onClick={myFunction}>Click me</button>
//   )
// }
