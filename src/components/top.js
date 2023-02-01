import * as React from 'react';

import '../styles/app.scss';

const Top = ({ data }) => {
	return (
		<div className="container-bg-top">
			<div className="container">
				<div className="box">
					<div className="title">
						<span className="block" />
						<h1 className=' dsMedium'>
							Cristiana Baiorte<span />
						</h1>
					</div>

					<div className="role">
						<div className="block" />
						<p>Developer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Top;
