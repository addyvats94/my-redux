import initialState from './initialState';

const counterReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        }
      case 'INCREASE':
        return {
          count: state.count + 5 
        };
      case 'DECREASE':
        return {
          count: state.count - 5
        };
      default:
        return state
      break;
    }
  }
    
export default counterReducer;
