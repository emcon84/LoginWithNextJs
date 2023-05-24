import axios from 'axios'
import React, { useState } from 'react'

const dashboard = () => {

    const [user, setUser] = useState({
        emai: '',
        username: '',
    })

    const getProfile = async () => {
        const response = await axios.get('/api/profile');
        console.log(response)
        setUser(response.data);
    }

    return (
        <div>
            <h1>Dasboard</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>

            <button onClick={() => getProfile()}>
                get Profile
            </button>
        </div>
    )
}

export default dashboard
