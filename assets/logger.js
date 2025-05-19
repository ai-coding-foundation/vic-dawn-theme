const root = typeof window !== 'undefined' ? window : global;
root.Logger = {
  info(message) {
    console.info(message);
  },
  error(error) {
    console.error(error);
  }
};
