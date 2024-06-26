<template>
  <div class="Home">
    <div class="Home-swiper">
      <el-carousel height="500px" motion-blur>
        <el-carousel-item v-for="item in swiperHeaderImg" :key="item.id">
          <el-image class="logoImg" :src="item.imgurl" fit="fill" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="paintingSwiper">
      <div class="swiper-box">
        <div class="container-box">
          <div
            class="container-card"
            v-for="item in Carouselurl"
            :key="item.id"
          >
            <el-image v-show="item.id==1" class="logoImg" :src="item.imageurl" fit="fill" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
const ImageUrl =
  getCurrentInstance().appContext.config.globalProperties.$ImageUrl;
const swiperHeaderImg = ref([
  {
    id: 1,
    imgurl: ImageUrl + "36.png",
  },
  {
    id: 2,
    imgurl: ImageUrl + "35.png",
  },
  {
    id: 3,
    imgurl: ImageUrl + "34.png",
  },
]);

// 万花筒
const Carouselurl = ref([
  {
    id: 1,
    imageurl: ImageUrl + "73.png",
  },
  {
    id: 2,
    imageurl: ImageUrl + "74.png",
  },
  {
    id: 3,
    imageurl: ImageUrl + "75.png",
  },
  {
    id: 4,
    imageurl: ImageUrl + "76.png",
  },
  {
    id: 5,
    imageurl: ImageUrl + "77.png",
  },
]);

const cardRefs = ref([]);
</script>

<style lang="less" scoped>
.Home {
  height: 1000px;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 100%;

  .Home-swiper {
    width: 100%;
    max-width: 1980px;

    .logoImg {
      width: 100%;
      height: 100%;
    }
  }

  .paintingSwiper {
    width: 100%;
    max-width: 1980px;
    display: flex;
    justify-content: center;
    margin-top: 100px;

    .swiper-box {
      .container-box {
        width: 100px;
        position: relative;
        .container-card {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
}
</style>
