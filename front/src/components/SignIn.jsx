import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            const user = await Auth.signIn(username, password);
            console.log(user);
        } catch (error) {
            console.log('error signing in', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}

export default SignIn;
