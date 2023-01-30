// import React, { useEffect, useState } from "react";

// const Learn = () => {
//   const [color, setColor] = useState("#000000");
//   const [value, setValue] = useState("0");
//   useEffect(() => {
//     console.log("Hello World");
//     // run the func everytime teh component gets re rendered. ---> if not then for example only when the counter changes then only run useEffect--> to change the value and color of the counter--> how to make this happen--> useEffect youncan pass seconfd argument--> dependency array here*[value]* --> now it'll run only if value changes not even when color changes. NOTE: useEffect always runs atleast runs once at the beginning even if nothing is passed. Run useEffect only at the start not again---> empty dependency array but if dependency array is absent then it'll run on all re rendering.

//     // when to use??? To fetch API, to create some sort subscribers or listender to an extreenal service.

//     // cleanup Func: of useEfect--> runs when the component is getting destroyed--> before every re render the current render gets destroyed and when regenerated this is called--> no dependency array -- called evrytime is re rendered--> empty dependency array-- only once. when an event listener is added--> need to unsubscribe as well --> that unsruscribed code is written here
//     return () => {
//       console.log("Bye world");
//     };
//   }, []);
//   //   gets executed sequentially
//   useEffect(() => {
//     console.log("Hello world 2");
//   }, []);
//   return <div></div>;
// };

// export default Learn;
