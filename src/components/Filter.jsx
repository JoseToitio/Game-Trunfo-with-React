import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { filterName, handleChangeFilter, filterRare } = this.props;
    return (
      <div>
        <input
          type="text"
          name="filterName"
          value={ filterName }
          data-testid="name-filter"
          onChange={ handleChangeFilter }
        />
        <select
          value={ filterRare }
          name="filterRare"
          data-testid="rare-filter"
          onChange={ handleChangeFilter }
        >
          <option value="all">all</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </div>);
  }
}
Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  filterRare: PropTypes.string.isRequired,
};

export default Filter;
