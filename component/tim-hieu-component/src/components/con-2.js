
import React, {useState} from "react"

function Con_2(props) {
    let [myName, setName] = useState(
        {
            id: 123456
        }
    );

    const onClick = () => {
        props.onChange(myName);
    }

    return(
        <div>
            <button onClick={onClick}>click</button>
        </div>
    );
}

export default Con_2;



