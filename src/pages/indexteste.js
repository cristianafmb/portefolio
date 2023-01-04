import * as React from 'react';
import { graphql } from 'gatsby';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import FloatingIcons, { IFloatingIconsProps } from 'react-floating-icons';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Animation from '../components/animation';
import Top from '../components/top';

import { GetPublicUrlImage } from '../utils';

import Bg from '../../static/bg.webp';

const IndexTestPage = ({ data }) => {
	const { t } = useTranslation();

	var items = [];
	if (typeof window !== undefined)
		items = [
			{
				id: '<unique_id_1>',
				src: GetPublicUrlImage('circle.svg'),
				altText: 'image 1',
				position: { x: '3%', y: '4vh' },
				animationDuration: '6s',
				size: { width: '10vh', height: '10vh' },
				opacity: 0.4
			},
			{
				id: '<unique_id_2>',
				src: GetPublicUrlImage('plus.svg'),
				altText: 'image 2',
				position: { x: '15%', y: '50vh' },
				animationDuration: '9s',
				size: { width: '5vh', height: '5vh' }
			},
			{
				id: '<unique_id_3>',
				src: GetPublicUrlImage('triangle.svg'),
				altText: 'image 3',
				position: { x: '28%', y: '5vh' },
				animationDuration: '3s',
				size: { width: '10vh', height: '10vh' }
			},
			{
				id: '<unique_id_4>',
				src: GetPublicUrlImage('mono-cut-stencil.svg'),
				altText: 'image 4',
				position: { x: '80%', y: '73vh' },
				animationDuration: '10s',
				size: { width: '15vh', height: '15vh' }
			},
			{
				id: '<unique_id_5>',
				src: GetPublicUrlImage('rectangle.svg'),
				altText: 'image 5',
				position: { x: '24%', y: '80vh' },
				animationDuration: '4s',
				size: { width: '8vh', height: '8vh' }
			},
			{
				id: '<unique_id_6>',
				src: GetPublicUrlImage('rectangle.svg'),
				altText: 'image 6',
				position: { x: '80%', y: '10vh' },
				animationDuration: '5s',
				size: { width: '20vh', height: '20vh' }
			},
			{
				id: '<unique_id_7>',
				src: GetPublicUrlImage('rectangle.svg'),
				altText: 'image 7',
				position: { x: '10%', y: '20vh' },
				animationDuration: '14s',
				size: { width: '5vh', height: '5vh' }
			},
			{
				id: '<unique_id_8>',
				src: GetPublicUrlImage('plus.svg'),
				altText: 'image 8',
				position: { x: '35%', y: '25vh' },
				animationDuration: '3s',
				size: { width: '5vh', height: '5vh' }
			},
			{
				id: '<unique_id_9>',
				src: GetPublicUrlImage('triangle.svg'),
				altText: 'image 9',
				position: { x: '10%', y: '55vh' },
				animationDuration: '9s',
				size: { width: '33vh', height: '33vh' }
			},
			{
				id: '<unique_id_10>',
				src: GetPublicUrlImage('circle.svg'),
				altText: 'image 10',
				position: { x: '60%', y: '35vh' },
				animationDuration: '6s',
				size: { width: '30vh', height: '30vh' }
			},
			{
				id: '<unique_id_11>',
				src: GetPublicUrlImage('circle.svg'),
				altText: 'image 11',
				position: { x: '88%', y: '26vh' },
				animationDuration: '6s',
				size: { width: '11vh', height: '11vh' }
			},
			{
				id: '<unique_id_12>',
				src: GetPublicUrlImage('mono-cut-stencil.svg'),
				altText: 'image 12',
				position: { x: '16%', y: '28vh' },
				animationDuration: '10s',
				size: { width: '8vh', height: '8vh' }
			},
			{
				id: '<unique_id_13>',
				src: GetPublicUrlImage('rectangle.svg'),
				altText: 'image 13',
				position: { x: '35%', y: '45vh' },
				animationDuration: '10s',
				size: { width: '15vh', height: '15vh' }
			},
			{
				id: '<unique_id_16>',
				src: GetPublicUrlImage('plus.svg'),
				altText: 'image 16',
				position: { x: '40%', y: '70vh' },
				animationDuration: '7s',
				size: { width: '10vh', height: '10vh' }
			},
			{
				id: '<unique_id_17>',
				src: GetPublicUrlImage('plus.svg'),
				altText: 'image 17',
				position: { x: '58%', y: '10vh' },
				animationDuration: '7s',
				size: { width: '15vh', height: '15vh' }
			},
			{
				id: '<unique_id_18>',
				src: GetPublicUrlImage('triangle.svg'),
				altText: 'image 18',
				position: { x: '70%', y: '20vh' },
				animationDuration: '3s',
				size: { width: '10vh', height: '10vh' }
			},
			{
				id: '<unique_id_19>',
				src: GetPublicUrlImage('triangle.svg'),
				altText: 'image 19',
				position: { x: '50%', y: '28vh' },
				animationDuration: '9s',
				size: { width: '5vh', height: '5vh' }
			},
			{
				id: '<unique_id_20>',
				src: GetPublicUrlImage('rectangle.svg'),
				altText: 'image 20',
				position: { x: '53%', y: '75vh' },
				animationDuration: '6s',
				size: { width: '15vh', height: '15vh' }
			}
		];
	return (
		<ParallaxProvider>
			<ParallaxBanner
				layers={[
					{
						translateY: [ 0, 0, 'easeOutCubic' ],
						opacity: [ 0.1, -0.1 ],
						scale: [ 1, 1.5, 'easeOutCubic' ],
						shouldAlwaysCompleteAnimation: true,
						image: Bg,
						speed: -15
					},
					{
						children: (
							<Layout data={t('global', { returnObjects: true })}>
								{/**<Animation />*/}
								<div className="container-bg-1">
									<FloatingIcons items={items} />
								</div>

								<Top data={t('global', { returnObjects: true })} />
							</Layout>
						)
					}
				]}
				className="aspect-[2/1] parallaxBanner"
			/>
			<ParallaxBanner
				layers={[
					{
						translateY: [ 0, 0, 'easeOutCubic' ],
						opacity: [ 0, 0.0 ],
						scale: [ 1, 1.5, 'easeOutCubic' ],
						shouldAlwaysCompleteAnimation: true,
						image: Bg,
						speed: -15
					},
					{
						children: (
							<Layout data={t('global', { returnObjects: true })}>
								{/**<Animation />*/}
								<div className="container-bg-1">
									<FloatingIcons items={items} />
								</div>

								<Top data={t('global', { returnObjects: true })} />
							</Layout>
						)
					}
				]}
				className="aspect-[2/1] parallaxBanner"
			/>

			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
			<Animation />

			<Top data={t('global', { returnObjects: true })} />
		</ParallaxProvider>
	);
};

export default IndexTestPage;

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
