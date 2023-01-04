import React from 'react';

import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

import Hamburger from 'hamburger-react';
import { useI18next } from 'gatsby-plugin-react-i18next';

const MenuGlobal = ({ global }) => {
	const [ menuOpen, setMenuOpen ] = React.useState(false);
	const { languages, originalPath, language } = useI18next();

	const content = global.menu;

	const handleStateChange = (state) => {
		setMenuOpen(state.isOpen);
	};

	// This can be used to close the menu, e.g. when a user clicks a menu item
	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<div className="fullscreen">
			<div className={menuOpen ? 'white container-hamburger-menu' : ' container-hamburger-menu'}>
				<Hamburger
					toggled={menuOpen}
					toggle={setMenuOpen}
					direction="right"
					duration={0.9}
					color="#ff5722"
					className="hamburger-react"
				/>
			</div>
			<div className={menuOpen ? 'menu-open' : ' menu-close'}>
				<Menu right isOpen={menuOpen} onStateChange={(state) => handleStateChange(state)}>
					{content.links.map((item, i) => (
						<div className="d-table-cell" key={'link' + i}>
							<Link
								to={item.link}
								className="IBold black"
								onClick={() => {
									closeMenu();
								}}
							>
								{item.text}
							</Link>
							<br />
						</div>
					))}
				</Menu>
			</div>

			<div className="languages-container">
				<div className="options">
					{languages.map((lng, i) => (
						<Link
							to={originalPath}
							language={lng}
							className={lng === language ? 'selected' : ''}
							key={i}
							onClick={() => {
								if (typeof window !== 'undefined') {
									window.localStorage.setItem('gatsby-i18next-language', lng);
								}
							}}
						>
							<p className={' text-uppercase' + (lng === language ? 'selected' : ' ')  } >{lng}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
export default MenuGlobal;