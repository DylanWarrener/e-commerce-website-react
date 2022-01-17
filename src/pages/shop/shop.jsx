// Default react
import React from 'react';

// Components
import SHOP_DATA from '../../data/shop';
import CollectionPreview from '../../components/collection/collection-preview';

// Stylesheet
import './shop.scss';

export default function ShopPage() {
    return (
        <div className="shop-page">
			{SHOP_DATA.map(({ id, ...otherCollections }) => (
				<CollectionPreview key={id} {...otherCollections} />
			))}
		</div>
    );
}