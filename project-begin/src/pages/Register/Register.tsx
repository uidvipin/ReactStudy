import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const[error, setError] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();

        if(!email.trim() || !password.trim() || !name.trim()){

            setError("All Fields are required");
            console.log(error);
            return;

        }

        setError('');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

    };
  return (
    <div className='register log_in'>
        <div className='log_in_form'>
            <form onClick={handleSubmit} className="form_general">

                <div className='form_item'>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>

                <div className='form_item'>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className='form_item'>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                </div>

                <div className='form_item'>
                    <Button onClick={()=> navigate('/log-in')} className='outline' children={"Log In"} />
                    <Button typeBtn='submit' className='general' children={"Register Now"} />
                    
                </div>
            </form>
        </div>
        <div className='login_design'>
            REGISTER
        </div>


    </div>
  )
}

export default Register