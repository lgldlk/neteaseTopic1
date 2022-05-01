//采用750px宽度的视觉稿，设置页面rem ,参考https://blog.csdn.net/JSCTO/article/details/81259482
import store from "@/store";
import { windowLoaded } from "@/util";
const remSet = () => {
    let oneRem = document.documentElement.clientWidth / 7.5;
    store.commit("system/setOneRem", oneRem);
    document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 7.5 + "px";
};

windowLoaded().then(remSet); //阅读codesaandbox运行原理，得页面在codesandbox中运行是已经加载完load事件的固加个判断

window.addEventListener("resize", remSet);