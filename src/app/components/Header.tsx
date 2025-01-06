import React from "react";

interface HeaderInterfaceI {
	name: string;
}

const Header = ({ name }: HeaderInterfaceI) => {
	return (
		<>
			<div>
				<h1> Welcome!</h1>
				<p>
					Acces and manage your account details efficiently
					<span className="font-bold"> {name}</span>.
				</p>
			</div>
		</>
	);
};

export default Header;
