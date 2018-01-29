import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../actions";
import { Table, Button, Modal } from 'antd';
import './Blog.css';

const confirm = Modal.confirm;

const columns = [{
  title: 'Date',
  dataIndex: 'created',
  width: '130px',
}, {
  title: 'Title',
  dataIndex: 'title',
  width: '350px'
}, {
  title: 'Summary',
  dataIndex: 'summary',
  className: 'blog__summary'
}];

class BlogContainer extends Component {
  componentDidMount() {
    if(!this.props.blog._id) {
      this.props.onGetBlog();
    }
  }

  handleUpdateClick = () => {
    const that =  this;
    confirm({
      title: 'Do you want to update blog posts?',
      onOk() {
        that.props.onUpdateBlog();
      },
      onCancel() {},
    });
  }

  render() {
    const { blog } = this.props;

    return (
      <div className="blog">
        <Button
          type="primary"
          className="update__btn"
          onClick={this.handleUpdateClick}>Update</Button>
        <span className="update__info">Last updated at: {blog.updated_at}</span>
        <Table
          pagination={false}
          columns={columns}
          dataSource={blog.posts}
          rowClassName="blog__post"
          rowKey="_id"
        />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  blog: state.blog,
  global: state.global
});

const mapDispatchToProps = dispatch => {
  return {
    onGetBlog: () => {
      dispatch(actions.getBlog());
    },
    onUpdateBlog: () => {
      dispatch(actions.updateBlog());
    }
  };
};

const Blog = connect(mapStateToProps, mapDispatchToProps)(BlogContainer);

export default Blog;