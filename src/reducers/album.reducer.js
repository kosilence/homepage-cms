import { types } from "../actions";

const initialState = {
  images: []
};


function handleGetImages(state, action) {
  let newImages = [].concat(action.images);
  return { ...state, images: newImages }
}

function handleAddImages(state, action) {
  let newImages = action.images.concat(state.images);
  return { ...state, images: newImages };
}

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case types.GET_ALBUM_SUCCESS:
      return handleGetImages(state, action);
    case types.ADD_IMAGES_SUCCESS:
      return handleAddImages(state, action);
    default:
      return state;
  }
};