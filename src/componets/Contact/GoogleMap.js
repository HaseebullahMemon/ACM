import {Map,GoogleApiWrapper } from 'google-maps-react'
import React from 'react'

const GoogleMap = (props) => {
  return (
    <div>
 <Map
        google={props.google}
       zooom={10}
       style={{width:'85%',height:"270px"}}
       initialCenter={
        {lat:24.9404101,
        lng:67.106047}}
       
       >

       </Map>

       {/* AIzaSyAk9RMVZDKwtJ9cv1tyU19JNVV8h6NVNKA */}

    </div>
  )
}

export default GoogleApiWrapper({
    apikey:"AIzaSyAk9RMVZDKwtJ9cv1tyU19JNVV8h6NVNKA",
})(GoogleMap)