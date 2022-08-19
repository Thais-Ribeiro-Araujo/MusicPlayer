import PropTypes from 'prop-types';
import React from 'react';
import AlbumCard from './AlbumCard';

class SearchResults extends React.Component {
  render() {
    const { albumsList, search } = this.props;
    if (albumsList.length === 0) {
      return (<p>Nenhum álbum foi encontrado</p>);
    }
    return (
      <div className="search-results">
        <span>
          Resultado de álbuns de:
          {' '}
          { search }
        </span>
        <div className="albumList">
          { albumsList.map((album) => (
            <AlbumCard key={ album.collectionId } album={ album } />
          ))}
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  albumsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
};
export default SearchResults;
