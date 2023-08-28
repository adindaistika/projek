import { useEffect } from "react"

export default function Kondisi () {
    const arraySaya = [1,2,3,4,5,6,7,8,9,10]
    useEffect(()=>{
       arraySaya.forEach((angka,index) => { 
        if (angka < 6) 
        console.log(angka,index + 1)
       })
    },[])

    return( 
        <div>

        </div>
    )
}

