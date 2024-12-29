import axios from 'axios';
import React, { useState } from 'react';


const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        phoneno:'',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Registration Data:', formData);
        setSubmitted(true);
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log(response);
    };

return(
    <div>
    <h2>Register page</h2>
    <form onSubmit={handleSubmit}> 
    <div>
        <label for="" style={{
            marginTop: '4vh',
            marginBottom: '3vh',
            marginLeft: '4vh'
        }}>Name</label>
        <input 
        type="text" name='name' value={formData.name} style={{
            padding: '1vh',
            margin: '5px',
            border: '1px solid black',
            borderRadius: '6px',
            marginLeft:'4vh'
            }} 
            onChange={handleChange}>
                    
     </input>
        </div>

        <div>
        <label for="" style={{
            marginTop: '4vh',
            marginBottom: '3vh',
            marginLeft:'4vh'
        }}>Phone number</label>
        <input 
        type="text" name='phoneno' value={formData.phoneno} style={{
            padding: '1vh',
            margin: '5px',
            border: '1px solid black',
            borderRadius: '6px',
            marginLeft:'2vh'
            }} 
            onChange={handleChange}>
                    
     </input>
        </div>
         <div>
        <label for="" style={{
            marginTop: '4vh',
            marginBottom: '3vh',
            marginLeft: '4vh'
        }}>Email</label>
        <input 
        type="email" name='email' value={formData.email} style={{
            padding: '1vh',
            margin: '5px',
            border: '1px solid black',
            borderRadius: '6px',
            marginLeft:'5vh'
            }} 
            onChange={handleChange}>
                    
     </input>
        </div>
    <div>
    <label for="" style={{  
            marginTop: '4vh',
            marginBottom: '3vh',
            marginLeft: '4vh'

    }}>password</label>
        <input type="password" name='password' value={formData.password} style={{
            padding: '1vh',
            margin: '5px',
            border: '1px solid black',
            borderRadius: '6px',
            marginTop:'2vh',
            marginLeft:'2vh'
           
            }}  
            onChange={handleChange}>
                    
     </input>
    </div>
    <div>
        <button  type='submit' style={{
            backgroundColor:'rgb(130, 237, 130)',
            padding: '6px',
            margin: '4px',
            border: '1px solid aliceblue',
            borderRadius: '5px',
            width: '9vh',
            height:'6vh',
            marginLeft: '4vh',
            marginTop:'2vh'}}>Register</button>
    </div>

    </form>
    </div>
)
}   

export default Register;




