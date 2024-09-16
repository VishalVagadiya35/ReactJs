import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebase';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userId = localStorage.getItem('userId');
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');

    if (loggedIn && userId) {
      setUserDetails({ id: userId, email: userEmail, userName: userName });
    }
  }, []);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const q = query(collection(db, "biteuser"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        const user = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (user.length > 0 && user[0].password === password) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userId', user[0].id);
          localStorage.setItem('userEmail', user[0].email);
          localStorage.setItem('userName', user[0].userName); // Store user name
          setUserDetails({ id: user[0].id, email: user[0].email, userName: user[0].userName });
          alert('Login successful');
        } else {
          setError('Invalid email or password');
        }
      } else {
        if (password !== confirmPassword) {
          setError("Passwords do not match!");
          return;
        }
        const docRef = await addDoc(collection(db, "biteuser"), {
          email: email,
          password: password,
          userName: userName // Store user name
        });
        localStorage.setItem('userId', docRef.id);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', userName); // Store user name
        alert('Signup successful');
      }
    } catch (error) {
      console.error("Error: ", error);
      setError('Signup/Login failed. Please try again.');
    } finally {
      setLoading(false);
    }

    if (!isLogin) {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUserName(''); // Clear user name field
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName'); // Remove user name
    setUserDetails(null);
  };

  return (
    <div className="account-container">
      {userDetails ? (
        <div>
          <h2>Welcome, <br/><br/> {userDetails.userName}!<br/> <span style={{fontSize:"20px", paddingLeft:"5px"}}> {userDetails.email}</span></h2><br/>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="userName">User Name:</label>
              <input 
                type="text" // Change to "text"
                id="userName" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input 
                  type="password" 
                  id="confirm-password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  required 
                />
              </div>
            )}
            <button type="submit" disabled={loading}>
              {loading ? (isLogin ? 'Logging In...' : 'Signing Up...') : (isLogin ? 'Login' : 'Sign Up')}
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <p onClick={handleToggle} className="toggle-link">
            {isLogin ? 'Don’t have an account? Sign Up' : 'Already have an account? Login'}
          </p>
        </>
      )}
    </div>
  );
}

export default Account;
