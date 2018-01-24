import { api } from '../helpers/api';

export const types = {
  LOADING_SHOW: "LOADING_SHOW",
  LOADING_HIDE: "LOADING_HIDE",
  BLOG_GET: "BLOG_GET",
  BLOG_UPDATE: "BLOG_UPDATE",
  IMAGES_GET: "IMAGES_GET",
  IMAGES_ADD: "IMAGES_ADD",
  IMAGE_DELETE: "IMAGE_DELETE",
  IMAGE_UPDATE: "IMAGE_UPDATE",
};

export const actions = {
  getBlog: () => {
    return {
      type: types.BLOG_GET,
      payload: {
        request:{
          url: api.blog
        }
      }
    }
  },
  updateBlog: () => {
    return {
      type: types.BLOG_UPDATE,
      payload: {
        request:{
          method: 'post',
          url: api.blog
        }
      }
    }
  },
  getImages: () => {
    return {
      type: types.IMAGES_GET,
      payload: {
        request:{
          url: api.images
        }
      }
    }
  },
  addImages: (images) => {
    return {
      type: types.IMAGES_ADD,
      payload: {
        request:{
          method: 'post',
          url: api.images,
          data: images
        }
      }
    }
  },
  updateImage: (card) => {
    return {
      type: types.IMAGE_UPDATE,
      payload: {
        request:{
          method: 'put',
          url: api.images + '/' + card._id,
          data: card
        }
      }
    }
  },
  deleteImage: (id) => {
    return {
      type: types.IMAGE_DELETE,
      payload: {
        request:{
          method: 'delete',
          url: api.images + '/' + id
        }
      }
    }
  }
};
