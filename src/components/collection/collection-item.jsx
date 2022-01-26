// Default react
import React from 'react';

// Components
import CustomButton from '../custom-button/custom-button';

// Stylesheet
import './collection-item.scss';

export default function CollectionItem({ name, price, imageUrl }) {
    return (
        <div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<CustomButton inverted>Add to cart</CustomButton>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">£{price}</span>
			</div>
		</div>
    );
}