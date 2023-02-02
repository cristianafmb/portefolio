import React from 'react';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const MenuGlobal = ({ global }) => {
	const { languages, originalPath, language, changeLanguage } = useI18next();
	console.log(language);
	return (
		<div className="fullscreen">
			<div className="languages-container">
				<div className="options">
					{languages.map((lng, i) => (
						<Link
							to={originalPath}
							language={lng}
							className={lng === language ? 'selected rhdExtraBold' : 'rhdLight'}
							key={lng}
						>
							<p className={' text-uppercase  ' + (lng === language ? 'selected rhdExtraBold' : ' ')}>
								{lng}
							</p>
						</Link>
					))}
				</div>
				<div className="container-icons-social-hide-desktop">
					{global.icons.map((icon, index) => (
						<a href={icon.link} key={'icon' + index} target="_blank">
							{icon.section === 'brands' ? (
								<FontAwesomeIcon icon={Brands[icon.icon]} />
							) : (
								<FontAwesomeIcon icon={Icons[icon.icon]} />
							)}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
export default MenuGlobal;
