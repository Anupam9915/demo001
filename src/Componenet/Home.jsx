import { useState } from 'react';
import '../style/home.css'
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    fetch("http://localhost:5001/user")
      .then((res) => res.json())
      .then((resp) => {
        let user = resp.find((v) => v.username === username);
        if (!user) {
          alert("Invalid username");
        } else if (user.password !== password) {
          alert("Invalid password");
        } else {
          alert("Login successful");
          navigate('/addprofile'); 
        }
      });
  };
    return (
        <div id="box">
            <form onSubmit={Login} >
                <label className='label' htmlFor="">Username</label><br /><br />
                <input type="text" placeholder="Type your Username" value={username} onChange={e => setUsername(e.target.value)} /><br /><br />
                <label className='label' htmlFor="">Password</label><br /><br />
                <input type="text" placeholder=" Type your Password" value={password} onChange={e => setPassword(e.target.value)} />
                <br /><a id='a' href="">Forgot Password?</a><br /><br />
                <button type="submit">LOGIN</button><br /><br /><br />
                <Link id='a1' to="/adduser" >Singn Up</Link>

                <div id="box1">
                    <img height="32px" src="http://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg" alt="" />
                    <img height="30px" src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png" alt="" />
                    <img height="30px" src="https://tse3.mm.bing.net/th?id=OIP.j86uHI_0yAPmFNS6qpvSrwHaFw&pid=Api&P=0&h=180" alt="" />

                </div>

            </form>
        </div>
    );
}

export default Home;