// Default react
import React from 'react';

// Component
import CollectionItem from './collection-item';

// Stylesheet
import './collection-preview.scss';

export default function CollectionPreview({ title, items }) {
    return (
        <div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div id='collection-item'>
				{
					items.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))
				}
			</div>
		</div>
    );
}

/* 
<div className='collection-item'>
	{
		items.filter((item, index) => index < 4)
		.map(({ id, ...otherItemProps }) => (
			<CollectionItem key={id} {...otherItemProps} />
		))
	}
</div> 

.collection-preview {
	display: flex
	flex-direction: column;
	margin-bottom: 10px;
  	border: 1px solid orange;

	&:last-child {
    	margin-bottom: 0;
	}

	&.title {
		flex: 1 1 auto;
	}
}

.collection-item {
	display: flex;
}
*/