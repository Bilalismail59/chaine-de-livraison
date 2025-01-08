const path = require('path');

module.exports = {
  entry: './src/index.js',  // Le chemin vers votre fichier d'entrée
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  // Vous pouvez choisir 'development' ou 'production'
};
