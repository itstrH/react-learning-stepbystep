export default function TabButton({ children, isSelected, ...props}) { 

    // using js 
    // const btn = document.querySelector("button");
    // btn.addEventListener("click", () => {
    //     // lam viec
    // })
    
    // function handleClick() {
    //     alert("Button was clicked!");
    // }

    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
            {/* 2nd way */}
            {/* <button onClick={() => handleClick()}>{children}</button> */}
        </li>
    )
}


// Second way : 
// export default function TabButton({ batky, onSelect }) {
//     return (
//         <li>
//             <button onClick={onSelect}>{batky}</button>
//         </li>
//     )
// } 