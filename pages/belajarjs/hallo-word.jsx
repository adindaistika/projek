import Script from "next/script";

export default function Halloword (props) {
    const javaScript=() =>{
        return ('HELLO');
    }
    
    
    return(
        <div>
            {javaScript()}
        </div>
    )
}