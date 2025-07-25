function Msgbx({name,textcolor})
{
    let styles={color: textcolor}
return(
    <>
       <p style={styles}>hello {name}</p>    
    </>
)
}
export default Msgbx;