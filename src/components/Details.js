import React, {useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Details = () => {

    const [loginData, setLoginData] = useState([]);
    console.log(loginData);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var todayDate = new Date().toISOString().slice(0,10);
        console.log(todayDate);

   const Birthday = () => {
       const getuser = localStorage.getItem("user_login");
       if(getuser && getuser.length) {
           const user = JSON.parse(getuser);
           //console.log(user);
           setLoginData(user);

           const userBirth = loginData.map((el,k) =>{
                return el.date === todayDate
           });

           if(userBirth) {
                setTimeout(() => {
                    console.log("ok")
                    handleShow();
                },3000)
           }
       }
   }

    useEffect(() => {
        Birthday();
    }, [])

  return (
    <>  
        {
                loginData.length === 0 ? "errror" :
                    <>
                        <h1>detials page</h1>
                    

                {
                    loginData[0].date === todayDate ? 
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{loginData[0].name} 😄</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish you many many happy returns of the day ! 🍰</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>:""
                }   
                     
                    </>
            }
    </>
  )
}

export default Details
