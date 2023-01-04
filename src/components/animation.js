import * as React from 'react';
import Snowfall from 'react-snowfall';

import '../styles/app.scss';

const Animation = () => {
	return (
		<div className="bg-pink">
			<div className="container-bg" >
				<Snowfall  color="#ff5722" snowflakeCount={120} speed={[0,1]} radius={[0.5,1]} wind={[0,1]}/>
            </div>
		</div>
	);
};

export default Animation;

