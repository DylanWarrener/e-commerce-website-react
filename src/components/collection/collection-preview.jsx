// Default react
import React from 'react';

// Component
import CollectionItem from './collection-item';

// Stylesheet
import './collection-preview.scss';

export default function CollectionPreview(props) {
    return (
        <div className="collection-preview">
			<h1 className="title">{props.title.toUpperCase()}</h1>
			<div className="preview">
				{
					props.items.filter((item, index) => index < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps} />
					))
				}
			</div>
		</div>
    );
}