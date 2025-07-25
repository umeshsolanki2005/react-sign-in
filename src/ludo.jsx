import { useState } from "react";

function Ludogame(){
    
    let [moves, setMoves]=useState({blue:0, yellow: 0, red:0,green:0});
    let[arr,SetArr]=useState(["no moves"]);
    //for objects
    let updateBlue=()=>{
        moves.blue +=1;
        //console.log(` blue moves= ${moves.blue}`)
        // setMoves({...moves});//because the change made in orginial object is not reflected in js ,therfore we nee  to create a copy of object
                             //using spread operator(...)
        
    //for arrays
    SetArr((prevArr) => {
        return [...prevArr, "blue moves"];
    });
    
    console.log(arr);
    }
    



    return(
        <div className="board">
            <p>Game Begins!</p>
            <p>{arr}</p>
            <p>Blue={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow={moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
            <p>Red={moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
            <p>Green={moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
        </div>
    )

}
export default Ludogame;