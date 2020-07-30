
// import Vue from 'vue';

// function registerDiyComponent() {
//     const diyScript = 'http://localhost:3000/static/js/goods-detail__v2.495932d1.js';
//     const cacheComponents = {};
//     // 加载异步脚本
//     const scriptPromise = loadScript(diyScript).then(() => {
//         console.log(window.mallCloud);
//         return Promise.resolve();
//     });
//     const names = [
//         "global-demo-text",
//         "shuai",
//         "xiao",
//     ];
//     // 注册组件
//     (names || []).forEach(name => {
//       Vue.component(name, resolve => {
//         scriptPromise
//           .then(() => {
//             const com = window.mallCloud.srcDemoText;
//             if (com) {
//               com.disableStore = true;
//               resolve(com);
//             } else {
//               resolve({ template: '<div />' });
//             }
//           })
//           .catch(() => {
//             resolve({ template: '<div />' });
//           }).then(() => {
//             console.log(Vue.component)
//           })
//       });
//     });
// }

// // registerDiyComponent();

export default function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.onload = script.onreadystatechange = function() {
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                resolve();
            }
        };

        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', src);
        document.body.appendChild(script);
    })
}

