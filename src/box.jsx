import "./box.css"
import Price from "./price"
function Box({title,price,ind})
{
    let description=["premium","Affordable","Compact"];
    let oldprice=["12,9999","29,999","10,999"];
    let newprice=["10,0999","20,999","8,999"];
    return(
        <div className="box">
           <h4><b>{title}</b></h4>
           <p>{description[ind]}</p>
           <Price oldprice={oldprice[ind]} newprice={newprice[ind]}/>
        </div>
    )
}
export default Box;