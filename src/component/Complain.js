import React from 'react';
import "./Complain.css";

function Complain({ user, username, name, address, city, pincode, crime, mobno }) {
    console.log({ name });
    return (
        <div>
        {user && (user.displayName == username) && (
        <div id="viewComplain" className="complain">
            
                <div>
                    <h4 className="complain__name">Name : {name}</h4>
                    <h4 className="complain__address">Address : {address}</h4>
                    <h4 className="complain__city">City : {city}</h4>
                    <h4 className="complain__pincode">Pincode : {pincode}</h4>
                    <h4 className="complain__crime">Crime : {crime}</h4>
                    <h4 className=" complain__mobno">Mobile No. : {mobno}</h4>
                </div>
            
        </div>
        )}
        </div>
    )
}

export default Complain;