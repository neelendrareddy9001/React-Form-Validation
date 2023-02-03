import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {NavLink} from 'react-router-dom'
import Sign_img from './Sign_img'


const Home = () => {
    
    const [inpval, setInputVal] = useState({
        name : "",
        email : "",
        date : "",
        password : ""
    })
    const [data, setData] = useState([]);
    //console.log(inpval);

    const getData = (e) => {
        //console.log(e.target.value);

        const {value,name} = e.target;
          //console.log(value, name);

        setInputVal(() => {
            return{
                ...inpval,
                [name] : value
            }
        })
    }

    const addData =(e) => {
        e.preventDefault();

        //console.log(inpval);

        const {name, email, date, password} = inpval;

        if(name === "") {
            alert("name field is required")
        } else if (email === ""){
            alert("email field is reauired")
        } else if (!email.includes("@")) {
            alert("plz enter valid email address")
        } else if(date === "") {
            alert ("date field is required")
        } else if (password === "") {
            alert ("password field is required")
        } else if (password.length < 5) {
            alert("password length greated five")
        } else {
            console.log("data added successfully");

            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
        }
    }


    return (
        <>
           <div className='container mt-3'>
            <section className='d-flex justify-content-between'>
                <div className='left_data mt-3 p-3' style={{width :'100%'}}>
                    <h3 className='text-center col-lg-4'>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="text" name='name' onChange={getData} placeholder="Enter your name"/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control type="date" name='date' onChange={getData}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' onChange={getData} placeholder="Password"/>
                        </Form.Group>
                        <Button variant="primary" onClick={addData} className='col-lg-6' style={{background:"rgb(67,185, 127)"}} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                </div>
                <Sign_img/>
                
            </section>
           </div>
        </>
    )
}



export default Home