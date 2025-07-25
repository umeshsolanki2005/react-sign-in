import Box from './box.jsx'
function BoxTab()
{   
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignitems:"center"
    }
    return(
    <div class="boxTab" style={styles}>
    <Box title="I Phone" ind={0}/>
    <Box title="Android Phone" ind={1}/>
    <Box title="Laptops" ind={2}/>
    </div>
    )
}
export default BoxTab;