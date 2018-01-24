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

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.IMAGES_GET + '_SUCCESS':
      return handleGetImages(state, action);
    case types.IMAGES_ADD + '_SUCCESS':
      return handleAddImages(state, action);
    default:
      return state;
  }
};