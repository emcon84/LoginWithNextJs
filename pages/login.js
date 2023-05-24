import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const login = () => {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const router = useRouter();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials)
        const response = await axios.post('/api/auth/login', credentials)
        console.log(response);
        if (response.status === 200) {
            router.push('/dashboard');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='email' onChange={handleChange} name='email' />
                <input type="password" placeholder='password' onChange={handleChange} name='password' />
                <button>
                    login
                </button>
            </form>
        </div>
    )
}

export default login
