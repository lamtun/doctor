import React, { useState } from 'react';
import './SignUpForm.scss';

function SignUpForm(props) {
    const [formData, setFormData] = useState(()=>{
        return {}
    })
    const handleSubmitFormSignUp = (event) => {

    }
    const onChangeData = (id, e) => {
        const newData = {...formData}
        switch (id) {
            case 'name':
                newData.name = e.target.value
                break;
            case 'email':
                newData.email = e.target.value
                break;
            case 'password':
                newData.password = e.target.value
                break;
            default:
                break;
        }
        setFormData(newData)
    }
  return (
    <>
      <div className='container'>
        <div className='window'>
          <div className='overlay'></div>
          <div className='content'>
            <div className='welcome'>Hello There!</div>
            <div className='subtitle'>
              We're almost done. Before using our services you need to create an
              account.
            </div>
            <div className='input-fields'>
              <input
                type='text'
                placeholder='Username'
                className='input-line full-width'
                onChange={(e)=> onChangeData('name',e)}
              ></input>
              <input
                type='email'
                placeholder='Email'
                className='input-line full-width'
                onChange={(e)=> onChangeData('email',e)}
              ></input>
              <input
                type='password'
                placeholder='Password'
                className='input-line full-width'
                onChange={(e)=> onChangeData('password',e)}
              ></input>
            </div>
            <div className='spacing'>
              or continue with <span className='highlight'>Facebook</span>
            </div>
            <div>
              <button className='ghost-round full-width' onSubmit={handleSubmitFormSignUp}>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
