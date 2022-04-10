


import React from "react";
import ModalWrap from "./modal";

import TextField from "@mui/material/TextField";
import './customers-modal.css'


function CustomerModal(props) {
    const {onClose, open, isEdit} = props

    return (
        <ModalWrap
            open={open}
            onClose={onClose}

        >
         <div className="wrap">
             <div className="box">
                 <label className="label">Customer name</label>
                 <TextField
                     hiddenLabel
                     id="filled-hidden-label-normal"
                     defaultValue="Normal"
                 />
             </div>
             <div className="box">
                 <label className="label">Customers EIN</label>
                 <TextField
                     hiddenLabel
                     label="Customers EIN"
                     id="filled-hidden-label-normal"
                     defaultValue="Normal"
                 />
             </div>
             <div className="box">
                 <label className="label">Notes</label>
                 <TextField
                     id="standard-multiline-static"
                     label="Notes visible only to you and your team"
                     multiline
                     rows={4}


                 />
             </div>
         </div>
        </ModalWrap>
    );
}

export default CustomerModal;
