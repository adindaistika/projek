import { useEffect } from "react"

export default function Boolean() {
    const x = 10;
    useEffect(()=> {
        console.log(x < 20)
        
    },[])

    return(
        <div>

        </div>
    )
}
