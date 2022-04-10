
import Modal from '@mui/material/Modal';

import Box from "@mui/material/Box";
import React from "react";
import close from './../icon/close.svg'
import Button from '@mui/material/ButtonBase';
import './modal.css';
import {closeBtn, contained, container, outlined} from "../theme";




const  ModalWrap = (props) => {
    const {onClose, open, children, title} = props

    console.log({props})
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
           <Box style={container}>
               <div className="container header" >
                   Create new customer
                   <Button onClick={onClose} style={closeBtn} >
                       <img src={close} alt="icon"/>
                   </Button>
               </div>
               <div  >
                   {children}
               </div>
               <div className="container footer" >
                   <Button onClick={onClose} style={outlined} >Cancel</Button>
                   <Button  style={contained}>Create</Button>
               </div>
           </Box>
        </Modal>
    );
}

export default ModalWrap;
