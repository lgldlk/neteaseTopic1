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
    let mainConSwiper = null; //swiper实例
    const nowSelectIndex = ref(0),
        mainConOnSwiper = (swiper) => {
            mainConSwiper = swiper;
            console.log(
                "🥖 ~ file: pageTopBar.js ~ line 30 ~ pageSwiper ~ mainConSwiper",
                mainConSwiper
            );
        },
        mainConOnSlideChange = (swiper) => {
            nowSelectIndex.value = swiper.activeIndex;
        };

    //监听子组件更改显示的页面
    watch(
        [nowSelectIndex],
        ([newSelectIndex]) => {
            mainConSwiper && mainConSwiper.slideTo(newSelectIndex);
        }, { immediate: true }
    );

    //实际使用中不用考虑手机分辨率更改的情况，但是演示时还是加上
    window.addEventListener("resize", () => {
        mainConSwiper.scrollbar.updateSize();
    });

    return {
        nowSelectIndex,

        mainConOnSwiper,
        mainConOnSlideChange,
    };
};