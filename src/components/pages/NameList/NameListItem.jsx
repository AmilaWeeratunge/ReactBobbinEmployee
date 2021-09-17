
import React from 'react';
import dateFormat from 'dateformat'
import './NameListItem.css'

function NameListItem (props){
    return(
        <React.Fragment>
            <li className ="list-group-item p-3 mb-2 bg-light text-dark shadow-sm" >
                <div className="row align-items-center">
                    <div className ="col-1">
                    <img src = {props.avatar} alt= {props.name} className="border dark rounded-circle shadow-sm"/> 
                    </div>

                    <div className ="col-6">
                    <h3>{props.name}</h3>
                    <p>{props.location} {props.email}</p>
                    <p>{dateFormat(props.birthday,"dd-mm-yyyy")}</p>
                    </div>
                </div>
                <p className='redText'>
                    
                </p>
                
            </li>
        </React.Fragment>
        
    )
}

export default NameListItem