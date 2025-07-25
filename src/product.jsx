import "./product.css"
function Product({title,price=2000,feature1=[]})  //for price the by default value is 2000
{   
    const list=feature1.map((element) => <li>{element}</li>);
    let isdiscount=price>30000? <p>Discount of 5%</p>:null;
    let styles={backgroundColor:price>30000 ? "blue":""}
    return(
    <div className="product" style={styles}>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{list}</p> 
      <p>{isdiscount}</p> 
    </div>
    )
}
export default Product;