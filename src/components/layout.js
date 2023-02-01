import * as React from 'react';

import Menu from './menu';

const Layout = ({ pageTitle, children, data }) => {
	return (
		<div>
			<main>
				<Menu global={data} />
				<h1>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
