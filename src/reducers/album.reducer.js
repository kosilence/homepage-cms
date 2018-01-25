import { types } from "../actions";

const initialState = {
  images: []
};


function handleGetImages(state, action) {
  let images = action.payload.data.data;
  let newImages = [].concat(images);
  return { ...state, images: newImages }
}

function handleAddImages(state, action) {
  let images = action.payload.data.data;
  let newImages = images.concat(state.images);
  return { ...state, images: newImages };
}

function handleUpdateImage(state, action) {
  let imageData = action.payload.data.data;
  let images = state.images.map(image => {
    if(image._id === imageData._id) {
      return imageData;
    }
    return image;
  });
  return { ...state, images: images };
}

function handleDeleteImage(state, action) {
  let imageData = action.payload.data.data;
  let images = state.images.filter(image => {
    return image._id !== imageData._id;
  });
  return { ...state, images: images };
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.IMAGES_GET + '_SUCCESS':
      return handleGetImages(state, action);
    case types.IMAGES_ADD + '_SUCCESS':
      return handleAddImages(state, action);
    case types.IMAGE_UPDATE + '_SUCCESS':
      return handleUpdateImage(state, action);
    case types.IMAGE_DELETE + '_SUCCESS':
      return handleDeleteImage(state, action);
    default:
      return state;
  }
};