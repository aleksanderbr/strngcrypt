import { GET_PROFILE, PROFILE_ERROR } from '../actions/constants';

const initialState = {
  profile: null,
  loading: true,
  error: {},
  presets: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
