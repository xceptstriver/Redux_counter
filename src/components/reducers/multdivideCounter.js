const initialState = 50;

const multdivideCounter = (state = initialState, action) => {
  switch (action.type) {
    case 'MULTIPLY':
      return state * action.payload;
    case 'DIVIDE':
      return state / action.payload;
    default:
      return state;
  }
};

export default multdivideCounter;
