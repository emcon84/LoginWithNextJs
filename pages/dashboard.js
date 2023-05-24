import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const dashboard = () => {

    const [user, setUser] = useState({
        emai: '',
        username: '',
    })

    const router = useRouter();

    const getProfile = async () => {
        const response = await axios.get('/api/profile');
        console.log(response)
        setUser(response.data);
    }

    const logout = async () => {
        const response = await axios.get('/api/auth/logout');
        console.log(response)
        setUser(response.data);
        router.push('/login');
    }

    return (
        <div>
            <h1>Dasboard</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>

            <button onClick={() => getProfile()}>
                get Profile
            </button>

            <button onClick={() => logout()}>
                logout
            </button>
        </div>
    )
}

export default dashboard
