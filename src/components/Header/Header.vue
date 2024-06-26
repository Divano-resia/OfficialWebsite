<template>
  <div class="Header" :class="{'showHeaderBox':navShow}">
    <div class="HeaderBox">
      <div class="Logo">
        <el-image
          class="logoImg"
          :src="baseImgurl + 'header_logo.png'"
          fit="fill"
        />
      </div>
      <nav class="navgation">
        <div
          class="navgationList"
          :class="item.path == Navcheckpath ? 'navgationchecked' : ''"
          v-for="(item, index) in navgationList"
          :key="item.id"
          @click="navgationpath(index)"
        >
          {{ item.title }}
        </div>
      </nav>
      <nav class="navgationApp">
        <el-image class="logoImg" :src="baseImgurl + '56.png'" fit="fill" @click="Appnavgation" />
      </nav>
    </div>

  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  getCurrentInstance,
  defineComponent,
  onUnmounted,
} from "vue";
import { ElConfigProvider } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter(); //路由
const ImageUrl =
  getCurrentInstance().appContext.config.globalProperties.$ImageUrl;
const baseImgurl = ref("");
onBeforeMount(() => {
  baseImgurl.value = ImageUrl;
});
// 路由列表
const navgationList = ref([
  {
    id: 1,
    path: "/",
    title: "首页",
  },
  {
    id: 2,
    path: "/courseServices",
    title: "课程服务",
  },
  {
    id: 3,
    path: "/studentaChievements",
    title: "学员成果",
  },
  {
    id: 4,
    path: "/aboutLnstructor",
    title: "师资团队",
  },
  {
    id: 5,
    path: "/complaints",
    title: "投诉建议",
  },
  {
    id: 6,
    path: "/aboutUs",
    title: "关于我们",
  },
]);

const Navcheckpath = ref("/");
const navgationstatus=ref(false)
const navgationpath = (index) => {
  Navcheckpath.value = navgationList.value[index].path;
  router.push(Navcheckpath.value);

};

const Appnavgation=()=>{
  navgationstatus.value=true
}

const scrollY = ref(0);
const navShow=ref(false)
const getscroll=()=>{
  scrollY.value = window.scrollY;
  if(scrollY.value>=50){
      navShow.value=true
      console.log(navShow.value);
  }else{
     navShow.value=false
  }
}

onMounted(() => {
  window.addEventListener('scroll',getscroll);
  // 初始化滚动位置
});

// 在组件卸载时移除滚动事件监听器
onUnmounted(() => {
  window.removeEventListener('scroll',getscroll);
});
</script>

<style lang="less" scoped>
.Header {
  position: fixed;
  top: 0;
  left: 0;
  height: 90px;
  width: 100%;
  background-color: #9f9d9c;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  color: #ffffff;
  transition: opacity 1s,  background-color 1s; /* 添加过渡效果 */
  .HeaderBox {
    width: 100%;
    max-width: 1980px;
    padding: 0px 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Logo {
      width: 123px;
    }
    .navgation {
      display: flex;
      .navgationList {
        margin-left: 90px;
      }

      .navgationchecked {
        color: #1eaadc;
      }
    }

    .navgationApp {
      display: none;
    }
  }
  .HeaderApp-box {
    display: none;
  }
}

.showHeaderBox{
    opacity: 1;
    background-color: #FFFFFF;
    color: #000000;
    transition: opacity 1s,  background-color 1s; /* 添加过渡效果 */
  }

@media screen and (max-width: 980px) {
  .Header {
    .HeaderBox {
      padding: 0rem 1rem;
      .Logo {
      }
      .navgation {
        display: none;
      }
      .navgationApp {
        display: block;
        width: 2.6rem;
        height: 1.6rem;
        .logoImg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
