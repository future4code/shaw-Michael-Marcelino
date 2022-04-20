
import React from "react";

export function Card (props){
    return(
        <div className="photo-and-actions">
            <div className="photo">
                <div className="photo-text">
                    <div className="photo-name-and-age">
                    <h2> {props.nome}</h2>
                    <button onClick ={props.handleChangeScreen}> click </button>
                    </div>
                    <div className="photo-bio">
                    WAGRRRRWWGAHHHHWWWRRGG
                    AWWWWWWRR, RWGWGWARAHHHHWWRGG
                    WRWRW,GGGWARRRHHWWWW </div>
                </div>
            </div>
       
    </div>

    )
}