
import React from "react";

export default function BusinessCard(props){
    const {name, description, interest, social1,social2} = props;
    // const interest = ["Ionic", "open source", "App Dev"]
return(
    <div style={{display : "flex", flexDirection : "column",alignItems :"flex-start", backgroundColor : "white", color : "black", padding : "2rem", border : "3px solid black", borderRadius : "1rem", boxShadow : "5px 5px"}}>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>Interests</h3>
        {interest.map((item,index) => {
            return(
                <span key={index+item}>{item}</span>
            )

        })}
<div style={{display : "flex", flexDirection:"row", gap:"1rem",marginTop :"1rem" }}>
      <a href={social1}>
        <button style={{"backgroundColor":"blue", "color":"white"}}>Linkedin</button>
        </a>  
        <a href={social2}>
        <button style={{"backgroundColor":"blue", "color":"white"}}>Twitter</button>
        </a>  
</div>
    </div>
)
}