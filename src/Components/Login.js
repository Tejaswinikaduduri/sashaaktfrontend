import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to perform login
    // For demonstration, navigate to the home page
    navigate('/home');
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f2f2f2'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ flexShrink: 0, marginRight: '20px' }}>
          <img src="https://res.cloudinary.com/dkhfzpkw2/image/upload/v1706840212/6dcd94c7c4bf4800648ef7cbe0113c33_nldoau.gif" alt="Login Image" style={{ width: '150px', borderRadius: '50%' }} />
        </div>
        <div>
          <h2 style={{ marginTop: 0, textAlign:'center', color: '#333333', fontWeight: 'bold', marginBottom: '30px' }}>SASHAKTH</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#666666', fontSize: '14px', fontWeight: 'bold' }}>Username</label>
              <input type="text" id="username" name="username" required style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #cccccc', fontSize: '16px' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#666666', fontSize: '14px', fontWeight: 'bold' }}>Password</label>
              <input type="password" id="password" name="password" required style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #cccccc', fontSize: '16px' }} />
            </div>
            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease', fontSize: '16px', fontWeight: 'bold' }}>Login</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Don't have an account? <a href="#" style={{ color: '#4caf50', textDecoration: 'none', fontWeight: 'bold' }}>Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
