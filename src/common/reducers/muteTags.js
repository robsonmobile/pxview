import { MUTE_TAGS } from '../constants/actionTypes';

export default function muteTags(
  state = {
    items: [],
  },
  action = {},
) {
  switch (action.type) {
    case MUTE_TAGS.ADD: {
      let newItems;
      const items = state.items;
      const newItem = action.payload.item;
      if (items && items.length) {
        if (items.indexOf(newItem) === -1) {
          newItems = [newItem, ...items.slice(0, 200)];
        } else {
          newItems = [...items];
        }
      } else {
        newItems = [newItem];
      }
      return {
        ...state,
        items: newItems,
      };
    }
    case MUTE_TAGS.REMOVE:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload.item),
      };
    case MUTE_TAGS.CLEAR:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}
