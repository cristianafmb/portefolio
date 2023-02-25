import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Fade from 'react-reveal/Fade';

import Layout from '../components/layout';
import Top from '../components/top';
import Projects from '../components/home/projects';
import AboutSection from '../components/home/about';

import videoSrcURL2 from '../images/artifact.gif';

const IndexPage = ({ data }) => {
	const { t } = useTranslation();

	return (
		<Layout data={t('global', { returnObjects: true })}>
			<div className="bg-fullscreen-video">
				<img id="myVideo" src={videoSrcURL2} alt="teste-bg" />
			</div>

			
			<Top />

			<Projects data={t('projects', { returnObjects: true })}/>
			
			<Fade top>
				<AboutSection data={t('form', { returnObjects: true })}/>
			</Fade>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Portefolio</title>;

export const indexJson = graphql`
	query($language: String!) {
		locales: allLocale(filter: { ns: { in: ["global", "projects", "form"] }, language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
