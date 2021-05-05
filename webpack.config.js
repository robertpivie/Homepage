const createExpoWebpackConfigAsync = require("@expo/webpack-config");
// import * from "@ex"

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // If you want to add a new alias to the config.
  config.resolve.alias["react-native"] = "react-native-web";
  config.resolve.alias["lottie-react-native"] = "react-native-web-lottie";

  // Or prevent minimizing the bundle when you build.
  if (config.mode === "production") {
    config.optimization.minimize = false;
  } else {
    config.devServer.compress = false;
  }

  // Finally return the new config for the CLI to use.
  return config;
};
