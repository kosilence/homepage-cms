import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../actions";
import UploadImages from '../components/UploadImages';
import CardItem from '../components/CardItem';
import { Divider } from 'antd';
import './Album.css';

function Cards(images, onDeleteImage, onUpdateImage) {
  return images.map(card => {
    return (
      <CardItem
        key={card._id}
        card={card}
        onDeleteImage={onDeleteImage}
        onUpdateImage={onUpdateImage}
      />
    )
  });
}

class AlbumContainer extends Component {
  componentDidMount() {
    if(!this.props.album.images.length) {
      this.props.onGetImages();
    }
  }

  render() {
    return (
      <div className="album">
        <UploadImages onUpload={this.props.onUpload} />
        <Divider />
        <div className="album__cards">
          { Cards(this.props.album.images, this.props.onDeleteImage, this.props.onUpdateImage) }
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  album: state.album,
  global: state.global
});

const mapDispatchToProps = dispatch => {
  return {
    onGetImages: () => {
      dispatch(actions.getImages());
    },
    onUpload: (images) => {
      dispatch(actions.addImages(images));
    },
    onUpdateImage: (image) => {
      dispatch(actions.updateImage(image));
    },
    onDeleteImage: (id) => {
      dispatch(actions.deleteImage(id));
    }
  };
};

const Album = connect(mapStateToProps, mapDispatchToProps)(AlbumContainer);

export default Album;