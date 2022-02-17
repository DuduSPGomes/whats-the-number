module.exports = {
  roots: ["src/__tests__"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file",
  },
};
