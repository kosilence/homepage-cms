import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../actions";
import Wrapper from '../components/Wrapper';
import { Table, Button } from 'antd';
import './Blog.css';

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

  render() {
    return (
      <Wrapper {...this.props}>
        <div className="blog">
          <Button
            type="primary"
            className="update__btn"
            onClick={this.props.onUpdateBlog}>Update</Button>
          <span className="update__info">Last Update: {this.props.blog.updated_at}</span>
          <Table
            pagination={false}
            columns={columns}
            dataSource={this.props.blog.posts}
            rowClassName="blog__post"
            rowKey="_id"
          />
        </div>
      </Wrapper>
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