import {useState} from "react";

let isMount = true

export const Sum =() => {
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(2)
    return (
        <>{count1}{count2}</>
    )
}