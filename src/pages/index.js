import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Fade from 'react-reveal/Fade';

import Layout from '../components/layout';
import Top from '../components/top';
import AboutSection from '../components/home/about';

import videoSrcURL2 from '../../static/artifact.gif';

const IndexPage = ({ data }) => {
	const { t } = useTranslation();

	return (
		<Layout data={t('global', { returnObjects: true })}>
			<div className="bg-fullscreen-video">
				<img id="myVideo" src={videoSrcURL2} alt="teste-bg" />
			</div>
			<Top />
			<section className="bg2">
				<div class="main-container">
					<div class="heading">
						<h1 class="heading__title">Gradient Banner Cards</h1>
						<p class="heading__credits">
							<a class="heading__link" target="_blank" href="https://dribbble.com/sl">
								Design by Simon Lurwer on Dribbble
							</a>
						</p>
					</div>
					<div class="cards">
						<div class="card card-1">
							<div class="card__icon">
								<i class="fas fa-bolt" />
							</div>
							<p class="card__exit">
								<i class="fas fa-times" />
							</p>
							<h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
							<p class="card__apply">
								<a class="card__link" href="#">
									Apply Now <i class="fas fa-arrow-right" />
								</a>
							</p>
						</div>
						<div class="card card-2">
							<div class="card__icon">
								<i class="fas fa-bolt" />
							</div>
							<p class="card__exit">
								<i class="fas fa-times" />
							</p>
							<h2 class="card__title">
								Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</h2>
							<p class="card__apply">
								<a class="card__link" href="#">
									Apply Now <i class="fas fa-arrow-right" />
								</a>
							</p>
						</div>
						<div class="card card-3">
							<div class="card__icon">
								<i class="fas fa-bolt" />
							</div>
							<p class="card__exit">
								<i class="fas fa-times" />
							</p>
							<h2 class="card__title">Ut enim ad minim veniam.</h2>
							<p class="card__apply">
								<a class="card__link" href="#">
									Apply Now <i class="fas fa-arrow-right" />
								</a>
							</p>
						</div>
						<div class="card card-4">
							<div class="card__icon">
								<i class="fas fa-bolt" />
							</div>
							<p class="card__exit">
								<i class="fas fa-times" />
							</p>
							<h2 class="card__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
							<p class="card__apply">
								<a class="card__link" href="#">
									Apply Now <i class="fas fa-arrow-right" />
								</a>
							</p>
						</div>
						<div class="card card-5">
							<div class="card__icon">
								<i class="fas fa-bolt" />
							</div>
							<p class="card__exit">
								<i class="fas fa-times" />
							</p>
							<h2 class="card__title">Ut aliquip ex ea commodo consequat. Duis aute irure dolor.</h2>
							<p class="card__apply">
								<a class="card__link" href="#">
									Apply Now <i class="fas fa-arrow-right" />
								</a>
							</p>
						</div>
						<div class="card card-1">
							<div class="card__icon">
								<i class="fas fa-bolt" />
							</div>
							<p class="card__exit">
								<i class="fas fa-times" />
							</p>
							<h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
							<p class="card__apply">
								<a class="card__link" href="#">
									Apply Now <i class="fas fa-arrow-right" />
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<Fade top>
				<AboutSection />
			</Fade>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <title>Portefolio</title>;

export const indexJson = graphql`
	query($language: String!) {
		locales: allLocale(filter: { ns: { in: ["global"] }, language: { eq: $language } }) {
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
