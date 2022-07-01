import {Map,GoogleApiWrapper } from 'google-maps-react'
import React from 'react'

const GoogleMap = (props) => {
  return (
    <div>
 <Map
        google={props.google}
       zooom={10}
       style={{width:'85%',height:"270px",position:'relative'}}
       initialCenter={
        {lat:24.9404101,
        lng:67.106047}}
       >
       </Map>
    </div>
  )
}

export default GoogleApiWrapper({
    apikey:process.env.REACT_APP_GOOGLE_API_KEY,
})(GoogleMap)