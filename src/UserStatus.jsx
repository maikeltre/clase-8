import { userState } from "react";

function UserStatus() {
    const [isLoggedIn, setIsloggedIn] = useState(true);
    const [userName] = useState("trejos");


    // if (isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome dear user
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             Login
    //         </div>
    //     );
    // }
//****************************************
   
//if ternario
    
    // return (
    //     isLoggedIn ?
    //         <div>
    //             Welcome{userName}
    //         </div>
    //         :
    //         <div>
    //             Login
    //         </div>
    // );
    return (isLoggedIn && (
        <div>
            Welcome{userName}
        </div>
    )) || (
            <div>
                Login
            </div>
        );
    
}

//************************************* */

//Variable

// let status;

// if (ifLoggedIn) {
//     status = <div>Welcome { userName }</div>
// } else {
//     status = <div>Login</div>
// }
// return status;

//************************************* */

//logic operator


export default UserStatus  