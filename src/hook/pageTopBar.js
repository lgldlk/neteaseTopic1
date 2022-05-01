import { toRefs, ref, watch } from "vue";

/**
 * @description: 提取头部标题栏组件用于swiper切换和监听的逻辑
 */

/**
 * @description: 标题栏的hook
 */

export const topBarSwiper = (props, context) => {
    const { selectIndex: nowSelectIndex } = toRefs(props);
    const changeSwiperIndex = (index) => {
        context.emit("update:selectIndex", index);
    };

    return {
        nowSelectIndex,
        changeSwiperIndex,
    };
};
/**
 * @description: 页面的hook
 */
export const pageSwiper = () => {
    let mainConSwiper = null;
    const nowSelectIndex = ref(0),
        mainConOnSwiper = (swiper) => {
            mainConSwiper = swiper;
        },
        mainConOnSlideChange = (swiper) => {
            nowSelectIndex.value = swiper.activeIndex;
        };
    watch(
        [nowSelectIndex],
        ([nowSelectIndex]) => {
            mainConSwiper && mainConSwiper.slideTo(nowSelectIndex);
        }, { immediate: true }
    );
    return {
        nowSelectIndex,

        mainConOnSwiper,
        mainConOnSlideChange,
    };
};