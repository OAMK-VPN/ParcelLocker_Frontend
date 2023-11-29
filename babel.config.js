module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {targets: {node: 'current'}}],
    
  ],
  "plugins": 
    [
      "react-css-modules",
      {
        "filetypes": {
          ".css": {
            "syntax": "postcss"
          }
        }
      }
    ]
};