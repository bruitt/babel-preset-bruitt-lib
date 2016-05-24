var preset = {
  presets: [
    require("babel-preset-es2015"),
    require("babel-preset-stage-0"),
  ],
  plugins: [
    require("babel-plugin-transform-runtime")
  ]
}

module.exports = preset;
