module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ['react-native-reanimated/plugin'],
    ["tailwindcss-react-native/babel"],
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env",
    }],
  ]
};
