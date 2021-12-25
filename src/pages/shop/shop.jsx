import React from 'react';

import './shop.scss';

import SHOP_DATA from '../../data/shop';
import CollectionPreview from '../../components/collection/collection-preview';

export default function ShopPage() {
    return (
        <div className="shop-page">
			{SHOP_DATA.map(({ id, ...otherCollections }) => (
				<CollectionPreview key={id} {...otherCollections} />
			))}
		</div>
    );
}