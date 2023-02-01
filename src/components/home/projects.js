import * as React from 'react';

import '../../styles/app.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';

const ProjectsComponent = ({ data }) => {
	return (
		<section className="bg2">
			<div className="main-container">
				<div className="heading">
					<h1 className="dsMedium heading__title">{data.title}</h1>
				</div>

				<div className="cards">
					{data.list.map((project, i) => (
						<a href={project.link} target="_blank">
							<div className={'card card-' + (i + 1)} key={'card-' + i}>
								<h2 className="heading__subtitle">{project.title}</h2>
								<p className="heading__description">{project.description}</p>
								<div className="card__icon">
									{project.espcs.map((icon, j) => (
										<div key={'icon' + j}>
											<FontAwesomeIcon icon={Brands[icon.icon]} />
										</div>
									))}
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsComponent;
