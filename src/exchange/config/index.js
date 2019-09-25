let config = {};
config.devTag = ["localhost", "192.168", "fill"];
config.devHttp = "http://trade.bstchain.com";
config.proHttp = window.location.origin;
config.isDev =
  config.devTag.findIndex(e => {
    return window.location.origin.indexOf(e) > -1;
  }) > -1;
config.http = config.isDev ? config.devHttp : config.proHttp;

export default config;
