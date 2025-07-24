import React, { useState } from 'react'
import Button from '../../components/Button/Button'

const Register = () => {

    const[error, setError] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();

        if(!email.trim() || !password.trim()){

            setError("Both Fields are required");
            console.log('Both Fields are required');
            return;

        }

        setError('');
        console.log('Email:', email);
        console.log('Password:', password);

    };
  return (
    <div className='log_in'>
        <div className='log_in_form'>
            <form onClick={handleSubmit} className="form_general">

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
                    <Button className='outline' children={"Register"} />
                    <Button typeBtn='submit' className='general' children={"Register"} />
                    
                </div>
            </form>
        </div>
        <div className='login_design'>
            LOG IN
        </div>


    </div>
  )
}

export default Register