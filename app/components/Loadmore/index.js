import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

export function Loadmore({ nextToken, event, isLoading }) {
  if (nextToken && !isLoading) {
    const params = { nextToken: nextToken };
    return (
      <Button type="primary" click={() => event(params)}>
        Load More
      </Button>
    );
  }
  return null;
}

Loadmore.propTypes = {
  nextToken: PropTypes.string,
  event: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Loadmore;
