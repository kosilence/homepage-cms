import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './UploadImages.css';

const { TextArea } = Input;

export default class UploadImages extends Component {
  state = {
    inputs: ''
  }

  handleUpload = () => {
    let formatImages = this.formatInputs(this.state.inputs);
    if(formatImages) {
      this.props.onUpload(formatImages);
    }
  }

  handleClear = () => {
    this.setState({
      inputs: ''
    })
  }

  handleTextChange = (e) => {
    this.setState({
      inputs: e.target.value
    })
  }

  formatInputs = (inputs) => {
    if(!inputs) {
      return false;
    }
    let images = inputs.split('\n').map(input => {
      let image = {
        url: '',
        desc: '',
        type: 'album'
      };
      image.url = input.split(',')[0] ? input.split(',')[0].trim() : '';
      image.desc = input.split(',')[1] ? input.split(',')[1].trim() : '';
      return image;
    });
    return images;
  }

  render() {
    return (
      <div className="uploadImages">
        <TextArea
          className="uploadImages__input"
          placeholder="Input your new images like: LINK, DESC"
          autosize
          value={this.state.inputs}
          onChange={this.handleTextChange}
        />
        <Button className="uploadImages__btn" icon="reload" size="large" onClick={this.handleClear}>Clear Inputs</Button>
        <Button className="uploadImages__btn" icon="upload" size="large" onClick={this.handleUpload}>Upload Images</Button>
      </div>
    );
  }
};