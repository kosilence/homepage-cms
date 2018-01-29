import React, { Component } from 'react';
import { Card, Icon, Input, Modal } from 'antd';
import './CardItem.css';

const confirm = Modal.confirm;
const { Meta } = Card;

export default class CardItem extends Component {
  state = {
    isEditing: false,
    desc: this.props.card.desc
  }

  handleDeleteImage(id) {
    const that =  this;
    confirm({
      title: 'Do you want to delete this image?',
      onOk() {
        that.props.onDeleteImage(id);
      },
      onCancel() {},
    });
  }

  handleUpdateImage = () => {
    this.setState({
      isEditing: false
    });
    if(this.props.card.desc !== this.state.desc) {
      this.props.onUpdateImage({ ...this.props.card, desc: this.state.desc });
    }
  }

  handleEditImage = () => {
    this.setState({
      isEditing: true
    });
  }

  handleInputChange = (e) => {
    this.setState({
      desc: e.target.value
    })
  }

  render() {
    return (
      <div className="cardItem">
        <Card
          key={this.props.card._id}
          cover={<img alt={this.props.card.desc} src={this.props.card.url} />}
          actions={[
            <Icon type="delete" onClick={(e) => this.handleDeleteImage(this.props.card._id, e)} />,
            <Icon type="edit" onClick={this.handleEditImage} />,
            <Icon type="check" onClick={this.handleUpdateImage} />
          ]}
        >
          { this.state.isEditing ? <Input className="cardItem__input" value={this.state.desc} onChange={this.handleInputChange} /> : <Meta description={this.state.desc} /> }
        </Card>
      </div>
    )
  }
};