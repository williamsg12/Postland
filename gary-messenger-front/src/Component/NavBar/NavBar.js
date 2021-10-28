import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
			<div className='side-nav'>
				<nav className='navigation'>
					<ul className='links'>
						<li>
							<Link
								to='/Home'
								className='navlink'
								style={{ textDecoration: 'none' }}>
								Home
							</Link>
						</li>
						<li>
							<Link
								to='/Profile'
								className='navlink'
								style={{ textDecoration: 'none' }}>
								Profile
							</Link>
						</li>
						<li>
							<Link
								to='/Settings'
								className='navlink'
								style={{ textDecoration: 'none' }}>
								Settings
							</Link>
						</li>
						<li>
							<Link
								to='/Favorites'
								className='navlink'
								style={{ textDecoration: 'none' }}>
								Favorites
							</Link>
						</li>
						<li>
							<Link
								to='/Rules'
								className='navlink'
								style={{ textDecoration: 'none' }}>
								Rules
							</Link>
						</li>
						<li>
							<Link
								to='/Messages'
								className='navlink'
								style={{ textDecoration: 'none' }}>
								Messages
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		);
};

export default NavBar;