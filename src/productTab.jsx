import Product from "./product.jsx";
function ProductTab()
{
    let array=[<li>"fast"</li>,<li>"durable"</li>,<li>'affordable'</li>];
    let array2=["hi","hellow"]
    let object1={a:"slow",b:"heavy"}
    return(
        <>
        <Product title="phone" price="10000" feature1={array2}></Product>
        <Product title="laptop" price="50000" list={object1.a}></Product>
        <Product title="earbuds"></Product>
        </>
    )
}
export default ProductTab;