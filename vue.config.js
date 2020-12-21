// const path = require("path");
module.exports = {
  // chainWebpack: (config) => {
  //     config.resolve.alias.set("@element", path.resolve(__dirname, "src/component/element"));
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/component/element',
      },
    },
  },
};
