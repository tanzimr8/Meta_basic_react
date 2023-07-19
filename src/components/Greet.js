import { useState } from "react"
const Greet = ()=>{
    const [greeting, setGreeting] = useState({greet: "Hello", person:"World"});
    const updateGreet = ()=>{
        // setGreeting(
        //     {
        //         ...greeting,
        //         greet: "Hi",
        //         person:"Tanzim"
        //     }
        // );
        setGreeting(prevState => {
            return {
                ...prevState,
                person: "Maya"
            }
        });

    }
    return(
        <div className="box">
            <h2>{greeting.greet} {greeting.person}</h2>
            <button onClick = {updateGreet}>Greet</button>
        </div>
    );
}
export default Greet;