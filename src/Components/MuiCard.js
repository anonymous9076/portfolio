import React from "react";
import './MuiCard.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

function MuiCard(props) {
  return (
          <MDBCard className="my_card">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image"
            >
              <MDBCardImage
                src={props.img}
                fluid
                className="w-100 proj-img"
              />       
            </MDBRipple>
            <MDBCardBody>
                <h4 className="card-title mb-3">{props.name}</h4>
                <marquee><h5 className="card-title mb-3">{
                  props.tech.map((i,p)=>{
                     if((p+1)===(props.tech.length)){
                       return i 
                     }
                     else{
                       return i+" , "
                     }
                  })
                }</h5></marquee>
            </MDBCardBody>
          </MDBCard>
  );
}

export default MuiCard;