// Default react
import React from 'react';

// Components
import CustomButton from '../custom-button/custom-button';

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
			<CustomButton inverted>Add to cart</CustomButton>
		</div>
    );
}