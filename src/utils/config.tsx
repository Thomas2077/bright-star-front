export const baseUrl = location.protocol + "//localhost";  //项目域名
// const environment = process.env.NODE_ENV === "production" ? "pro" : "dev"; //dev开发环境  pro 生产环境
const environment = "dev";
let exports = {};
// 开发环境
if (environment === "dev") {
  exports = {
    proxyBaseUrl: "/api",
    fyBaseUrl: "/apis" //防疫接口
  };
// 线上环境
} else if (environment === "pro") {
  exports = {
    // 项目使用到多个域名，可以进行多个入口配置
    proxyBaseUrl: location.protocol + "//localhost", // 应用1
    fyBaseUrl: location.protocol + "//localhost" //应用2
  };
}
export default exports;
