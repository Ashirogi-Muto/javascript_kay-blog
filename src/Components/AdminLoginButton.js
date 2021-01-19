import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const AdminLoginButton = () => {
	const { loginWithRedirect } = useAuth0()

	return(
		<div className="admin-login">
			<button onClick={() => loginWithRedirect()}>Admin Log In</button>
		</div>
	)
};

export default AdminLoginButton