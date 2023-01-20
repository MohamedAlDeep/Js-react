import numbers from "../assets/numbers.json";
import "../css/button.css"; 

export default function button(){
    return(
        <div className="container">
        
        <input type="button" value="TEXT" />
        {
            numbers.map((value)=>{
                <input type="button" value={value} />
            })
        }
        </div>
    )
}