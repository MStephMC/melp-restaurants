import React, { Component } from 'react'
import restaurantPreviewView from './restaurantPreviewView'

function restaurantPreview(props){
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.rating}</td>
            <td>{props.name}</td>
            <td>{props.contact.site}</td>
            <td>{props.contact.email}</td>
            <td>{props.contact.phone}</td>
            <td>{props.address.street}</td>
            <td>{props.address.city}</td>
            <td>{props.address.state}</td>
        </tr>
    )  
}

export default restaurantPreview;