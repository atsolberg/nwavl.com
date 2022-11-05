const base_config = {
  plugins: ["macros", "add-react-displayname"],
};

module.exports = (api) => {
  if (api.env("test")) {
    // Change preset-env for node instead of browser
    return {
      ...base_config,
      presets: [
        ["@babel/preset-env", { targets: { node: "16" } }],
        ["@babel/preset-react"],
      ],
    };
  }
  return base_config;
};
