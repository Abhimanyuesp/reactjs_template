import { Link } from 'react-router-dom';
import React from 'react'
import config from '../config'

const GeneralNavbar = () => {
	return (<>
		<nav className="navbar">
		<div className="logo">
				<img src="https://mrmint.io/assets/images/logo.png" width="200px" alt="Logo" />
			</div>
			<div className="links">
				<Link to={`${config.baseurl}`}>Home</Link>
				<Link to={`${config.baseurl}about`}>About</Link>
				<Link to={`${config.baseurl}login`} >Login</Link>
			</div>
			
		</nav>
	</>
	)
}

export default GeneralNavbar