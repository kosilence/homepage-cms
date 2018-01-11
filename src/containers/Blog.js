import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../actions";
import Wrapper from '../components/Wrapper';
import { Table, Button } from 'antd';
import { store } from '../store';
import './Blog.css';

const columns = [{
  title: 'Date',
  dataIndex: 'created',
  width: '150px',
}, {
  title: 'Title',
  dataIndex: 'title',
  width: '360px'
}, {
  title: 'Summary',
  dataIndex: 'summary',
  className: 'blog__summary'
}];

class BlogContainer extends Component {
  componentDidMount() {
    let blogId = store.getState().blog._id;
    if(!blogId) {
      store.dispatch(actions.getBlog());
    }
  }

  updateBlog = () => {
    store.dispatch(actions.updateBlog());
  }

  render() {
    return (
      <Wrapper {...this.props}>
        <div className="blog">
          <Button
            type="primary"
            className="blog__update"
            onClick={this.updateBlog}>Update</Button>
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

const Blog = connect(mapStateToProps)(BlogContainer);

export default Blog;