import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const {
      album: { collectionId, collectionName, artistName, artworkUrl100 } } = this.props;
    return (
      <div data-testid="album-card" className="album-card">
        <Link
          to={ `album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <img
            src={ artworkUrl100 }
            alt="Capa do álbum"
            className="album-artwork"
          />
          <p className="album-title">{ collectionName }</p>
        </Link>
        <p className="album-artist-name">{ artistName }</p>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    collectionId: PropTypes.number,
    artistName: PropTypes.string,
    collectionName: PropTypes.string,
    artworkUrl100: PropTypes.string,
  }).isRequired,
};

export default AlbumCard;
