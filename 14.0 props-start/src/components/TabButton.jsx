import { func } from "prop-types"

export default function TabButton({ children }) { 

    // js
    // const btn = document.querySelector("button");
    // btn.addEventListener("click", () => {
    //     // lam viec
    // })
    
    function handleClick() {
        alert("Button duoc click!");
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
            {/* 2nd way */}
            {/* <button onClick={() => handleClick()}>{children}</button> */}
        </li>
    )
}


//Second way: 
// export default function TabButton({ batky }) {
//     return (
//         <li>
//             <button>{batky}</button>
//         </li>
//     )
// }