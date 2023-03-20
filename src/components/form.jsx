import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './form.css'

const Form = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      navigate('/success')
    } else {
      setErrors(validationErrors)
    }
  }

  const validateForm = () => {
    const validationErrors = {}
    if (!name.trim()) {
      validationErrors.name = '*Name is required'
    }
    if (!email.trim()) {
      validationErrors.email = '*Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = '*Email is invalid'
    }
    if (!phone.trim()) {
      validationErrors.phone = '*Phone number is required'
    } else if (!/^\d{10}$/.test(phone)) {
      validationErrors.phone = '*Phone number is invalid'
    }
    if (!password.trim()) {
      validationErrors.password = '*Password is required'
    } else if (password.trim().length < 6) {
      validationErrors.password = '*Password must be at least 6 characters long'
    }
    return validationErrors
  }

  return (
    <div className='flex-row container'>
      <div className='head'>
        <h1>Form</h1>
      </div>
      <form className='form flex-row' onSubmit={handleSubmit}>
        <div className='flex-row lab'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className='error'>{errors.name}</div>}
        </div>
        <div className='flex-row lab'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className='error'>{errors.email}</div>}
        </div>
        <div className='flex-row lab'>
          <label htmlFor='phone'>Phone No.</label>
          <input
            type='tel'
            placeholder='Phone No'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <div className='error'>{errors.phone}</div>}
        </div>
        <div className='flex-row lab'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className='error'>{errors.password}</div>}
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
