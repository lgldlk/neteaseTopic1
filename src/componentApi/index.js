import { useRouter } from "vue-router";
import { throttle } from "@/util";
import { ref } from "vue";
// hook常用方法
export default function() {
    const router = useRouter();

    /**
     * @description: navTo跳转页面
     * @param {String } name 路由name
     * @param {Object} data  要传递的参数
     * @param {Boolean} useQuery 为true跳转使用query作为参数，false则使用params
     */
    const routerChange = (name, data, useQuery = true) => {
        throttle(() => {
            if (useQuery) {
                router.push({
                    name,
                    query: data,
                });
            } else {
                router.push({
                    name,
                    params: data,
                });
            }
        }, 300);
    };
    const isLoading = ref(false), //是否在刷新数据
        loaded = ref(false); //是否加载完毕
    return {
        routerChange,
        isLoading,
        loaded,
    };
}