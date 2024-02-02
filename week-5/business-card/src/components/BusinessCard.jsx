
import React from "react";

export default function BusinessCard(props){
    // const {heading} = props;
    const interest = ["Ionic", "open source", "App Dev"]
return(
    <div style={{display : "flex", flexDirection : "column",alignItems :"flex-start", backgroundColor : "white", color : "black", padding : "2rem", border : "3px solid black", borderRadius : "1rem", boxShadow : "5px 5px"}}>
        <h3>Lokeshwar</h3>
        <p>A TA in the 100x devs cohort 2.0</p>
        <h3>Interests</h3>
        {interest.map((item,index) => {
            return(
                <span key={index+item}>{item}</span>
            )

        })}
<div style={{display : "flex", flexDirection:"row", gap:"1rem",marginTop :"1rem" }}>
        <button style={{"backgroundColor":"blue", "color":"white"}}>Linkedin</button>
        <button>Twitter</button>
</div>
    </div>
)
}