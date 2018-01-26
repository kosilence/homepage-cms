import { api } from '../helpers/api';

export const types = {
  LOADING_SHOW: "LOADING_SHOW",
  LOADING_HIDE: "LOADING_HIDE",
  ALERT_SHOW: "ALERT_SHOW",
  ALERT_HIDE: "ALERT_HIDE",
  BLOG_GET: "BLOG_GET",
  BLOG_UPDATE: "BLOG_UPDATE",
  IMAGES_GET: "IMAGES_GET",
  IMAGES_ADD: "IMAGES_ADD",
  IMAGE_DELETE: "IMAGE_DELETE",
  IMAGE_UPDATE: "IMAGE_UPDATE",
};

export const actions = {
  showLoading: () => {
    return {
      type: types.LOADING_SHOW
    }
  },
  hideLoading: () => {
    return {
      type: types.LOADING_HIDE
    }
  },
  showAlert: (alert) => {
    return {
      type: types.ALERT_SHOW,
      alert: alert
    }
  },
  hideAlert: () => {
    return {
      type: types.ALERT_HIDE
    }
  },
  getBlog: () => {
    return {
      type: types.BLOG_GET,
      loading: true,
      alert: {
        success: {
          display: true,
          msg: 'Get blog success.',
        },
        fail: {
          display: true,
          msg: 'Something was wrong with blog',
        }
      },
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
      loading: true,
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
      loading: true,
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
      loading: true,
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
      loading: true,
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
      loading: true,
      payload: {
        request:{
          method: 'delete',
          url: api.images + '/' + id
        }
      }
    }
  }
};
