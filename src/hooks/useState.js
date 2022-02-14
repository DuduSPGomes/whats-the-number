function useState(initialState) {
  let state = initialState;

  function getState() {
    return state;
  }

  function setState(newState) {
    if (typeof newState === "function") {
      state = newState(state);
    } else {
      state = newState;
    }
  }

  return [getState, setState];
}

export default useState;
