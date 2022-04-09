import React from 'react';
import useFireBase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFireBase();
    return (
        <div>
            <h2>Please login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='your email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;