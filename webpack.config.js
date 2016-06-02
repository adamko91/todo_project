//export the configuration object
module.exports = {
    context: __dirname + '/app', //absolute path!
    entry: './index.js',
    output: {
      path: __dirname + '/app',
      filename: 'bundle.js'
    },
    
    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel', exclude: /node_modules/}, // babel loader is used for "js" files
        {test: /\.css$/, loader: 'style!css'}, // => "style" and "css" loader is used for ".css" files
        {test: /\.html$/, loader: 'html', exclude: /node_modules/},
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file'
        }
      ]
    }
       
}