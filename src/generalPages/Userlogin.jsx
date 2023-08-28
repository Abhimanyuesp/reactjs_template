
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GeneralNavbar from './generalNavbar';
import config from '../config'

import './generalCSS/login.css';
import './generalCSS/generalnavbar.css';

const LoadingPopup = () => {
	return (
		<div className="loading-popup-container">
			<div className="loading-popup">
				<p>Please wait</p>
				<h1>Loggin in . . .</h1>
			</div>
		</div>
	);
};

const UserLogin = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoading(true);
		console.log('Logged in with username:', username, 'and password:', password);
		setTimeout(() => {
			navigate(`${config.baseurl}${config.loginurl}/`);
		}, 3000);
	};

	return (
		<>
			<GeneralNavbar />
			
			<section className="login-section">
				<div className="login-container">
					<div className="login-form">
						<div className="login-logo">
							<img
								src="https://mrmint.io/images/coin_banner_big.png"
								alt="logo"
							/>
							<h4>We are The MrMint Team</h4>
						</div>
						<form>
							<p>Please login to your account</p>
							<div className="form-group">
								<input
									type="text"
									placeholder="Username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<button className="login-button" type="button" onClick={handleLogin}>
								Log in
							</button>
							<a href="#!" className="forgot-password-link">
								Forgot password?
							</a>
							<p className="create-account-text">
								Don't have an account?{' '}
								<button className="create-account-button" type="button">
									Create new
								</button>
							</p>
						</form>
					</div>
					<div className="login-info">
						<h4>WORLD'S 1st TOKEN BACKED BY CRYPTO MINING</h4>
						<p className="large">
							Mr. Mint is an asset-backed token that integrates aspects of:<br></br>
							<br></br>
							• Cutting-edge cryptocurrency mining technologies<br></br>
							• Multi-utility NFTs<br></br>
							• P2E gaming in the Metaverse<br></br>
							• Web 3.0<br></br>
							<br></br>
							Wondering how Mining can thrive with an entire ecosystem? The possibilities are limitless. By virtue of holding the MNT token, individuals can become part of the Global Mining Community. Mr. Mint's project solves the ongoing challenge of increasing costs and higher difficulty levels associated with cryptocurrency mining. Therefore, indirect benefits are extended to a community that solely holds the MNT token. Here's a sneak peek into our multiple revenue streams.


						</p>
					</div>
				</div>
			</section>
			{isLoading && <LoadingPopup />} 
			
		</>
	)
}

export default UserLogin;
