import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const GetPublicUrlImage = (src) => {
	const query = useStaticQuery(graphql`
		query MyQuery {
			allFile {
				edges {
					node {
						absolutePath
						relativePath
						publicURL
					}
				}
			}
		}
	`);

	return query.allFile.edges.find((element) => {
       
		if (element.node.relativePath == src) {
			return element;
		}
	}).node.publicURL;
};
