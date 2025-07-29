const convertorK = (input) => {
  if (input >= 1000) {
    return (input / 1000).toFixed(1) + "k";
  }

  return input;
};

export default convertorK;
