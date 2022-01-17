// Default react
import React from 'react';

// Stylesheet
import './collection-item.scss';

export default function CollectionItem(props) {
    return (
        <div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${props.imageUrl})`
				}}
			/>
			<div className="collection-footer">
				<span className="name">{props.name}</span>
				<span className="price">£{props.price}</span>
			</div>
		</div>
    );
}