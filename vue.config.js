module.exports = {

    lintOnSave: false,

    devServer: {
        open: process.platform === "darwin",
        disableHostCheck: false,
        host: "0.0.0.0",
        port: 8899,
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null // string | Object
    },



};
