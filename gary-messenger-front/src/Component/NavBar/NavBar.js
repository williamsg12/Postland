import React from 'react';
import { Nav } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
			<>
				<Nav
					className='col-md-12 d-none d-md-block bg-light sidebar'
					activeKey='/home'
					onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
					<div className='sidebar-sticky'></div>
					
						<Nav.Link href='/home'>Active</Nav.Link>
				
					
						<Nav.Link eventKey='link-1'>Link</Nav.Link>
				
					
						<Nav.Link eventKey='link-2'>Link</Nav.Link>
				
					
						<Nav.Link eventKey='' >
					
						</Nav.Link>
				
				</Nav>
			</>
		);
};

export default NavBar;