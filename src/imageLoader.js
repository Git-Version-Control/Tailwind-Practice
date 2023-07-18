const images = importAllImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function importAllImages(context) {
  return context.keys().map((key) => context(key).default);
}

export default images;
