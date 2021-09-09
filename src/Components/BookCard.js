import React from 'react';
const BookCard = (props) =>{

    //display on web
    return(
        <div className="card-container" >
            <a href={props.previewLink} target="popup" rel="noreferrer" >
            <img src={props.image} alt=""/>
            <div className="container">
                <h2>เรื่อง: {props.title}</h2>
                <h6>ประเภท: {props.printType}</h6>
                <h6>ผู้เขียน: {props.authors}</h6>
                <p>ปี: {props.published === '0000' ? 'Not available' : props.published.substring(0,4)}</p>
            </div>
            </a>
        </div>
        
    )
}

export default BookCard;


       

        // <div classNameName="card" >
        //     <img src={props.image} alt=""/>
        //     <div classNameName="card-body">
        //         <h5 classNameName="card-title">{props.title}</h5>
        //         <h6 classNameName="card-subtitle">{props.author}</h6>
        //         <p classNameName="card-text">{props.published === '000' ? 'Not available' : props.published.substring(0,4)}</p>
        //         <a href={props.previewLink} classNameName="btn btn-primary" target="_blank" rel="noreferrer">View</a>
        //     </div>
        // </div>

        // <div classNameName="card-container" >
        //   <img classNameName="img-thumbnail" src={props.image} alt=""></img>
        //     <div classNameName="desc">
        //         <h2>{props.title}</h2>
        //         <h3>Author: {props.author}</h3>
        //         <p>Published Data: {props.published === '000' ? 'Not available' : props.published.substring(0,4)}</p>
        //          <a href={props.previewLink} classNameName="btn btn-primary" target="_blank" rel="noreferrer">View</a>
        //     </div>
        // </div>