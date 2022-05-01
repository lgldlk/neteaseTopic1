//采用750px宽度的视觉稿，设置页面rem ,参考https://blog.csdn.net/JSCTO/article/details/81259482
import store from "@/store";

const remSet = () => {
    let oneRem = document.documentElement.clientWidth / 7.5;
    store.commit("system/setOneRem", oneRem);
    document.documentElement.style.fontSize =
        document.documentElement.clientWidth / 7.5 + "px";
};

window.addEventListener("load", () => {
    setTimeout(remSet); //设置下一轮宏任务执行
});
window.addEventListener("resize", remSet);