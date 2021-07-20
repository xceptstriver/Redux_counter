export const incNumber = num => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};

export const decNumber = numb => {
  return {
    type: 'DECREMENT',
    payload: numb,
  };
};

export const multiplyNumber = numb => {
  return {
    type: 'MULTIPLY',
    payload: numb,
  };
};

export const divideNumber = number => {
  return {
    type: 'DIVIDE',
    payload: number,
  };
};
