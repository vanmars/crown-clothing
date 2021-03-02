import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection.component';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  return ( 
    <div className='collections-overview'>
      {collections.map(({id, ...otherCollectionProps}) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))
      }
    </div>
   );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})
 
export default connect(mapStateToProps)(CollectionsOverview);