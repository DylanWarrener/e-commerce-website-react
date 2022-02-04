import React from 'react';

// Redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-action';

// Components
import CustomButton from '../custom-button/custom-button';

// Stylesheet
import './collection-item.scss';

function CollectionItem({ item, addItem }) {
	const { name, price, imageUrl } = item;

    return (
        <div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>
			<CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">£{price}</span>
			</div>
		</div>
    );
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem)