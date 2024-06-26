<template>
  <div class="Footer">
    <div class="FooterTopBox">
      <div class="Footer-TopBox">
        <div class="Footer-left">
          <ul>
            <li v-for="(item,index) in navgationList" :key="item.id" @click="navgationPath(index)">{{ item.title }}</li>
          </ul>
        </div>
        <div class="Footer-right">
          <el-image :src="baseImgurl + '55.png'"></el-image>
        </div>
      </div>
      <div class="Footer-bottomBox">
        <div class="bottondetail">
          <span>地址：{{ Footerdetail.locatin }}</span
          ><span class="postalCodePC">邮编：{{ Footerdetail.postalCode }}</span>
        </div>
        <div class="bottondetail">
          <span>电话：{{ Footerdetail.Phone }}</span>
          <span class="postalCodeApp">邮编：{{ Footerdetail.postalCode }}</span>
        </div>
      </div>
    </div>
    <div class="FooterBottomBox">
      <div class="bottomContent">
        <span>{{ Footerdetail.Website }}</span>
        <span>{{ Footerdetail.company }}</span>
        <a href="https://beian.miit.gov.cn/">{{
          Footerdetail.Recordkeeping
        }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const ImageUrl =
  getCurrentInstance().appContext.config.globalProperties.$ImageUrl;
const baseImgurl = ref("");
onBeforeMount(() => {
  baseImgurl.value = ImageUrl;
});
// 路由列表
const navgationList = ref([
  {
    id:1,
    path: "/",
    title: "首页",
  },
  {
    id:2,
    path: "/courseServices",
    title: "课程服务",
  },
  {
    id:3,
    path: "/studentaChievements",
    title: "学员成果",
  },
  {
    id:4,
    path: "/aboutLnstructor",
    title: "师资团队",
  },
  {
    id:5,
    path: "/complaints",
    title: "投诉建议",
  },
  {
    id:6,
    path: "aboutUs",
    title: "关于我们",
  },
]);

const Footerdetail = ref({
  locatin: "中国（四川）自由贸易试验区成都高新区吉泰五路118号3栋27层3号",
  postalCode: "610000",
  Phone: 19255719983,
  company: "成都茶咖漫教育咨询有限公司",
  Website: "jiaozhidao.cc",
  Recordkeeping: "蜀ICP备2024064054号-1",
});

const navgationPath=(index)=>{
    let routerpath=navgationList.value[index].path
    router.push(routerpath); 
}
</script>

<style lang="less" scoped>
.Footer {
  .FooterTopBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #1eaadc;
    padding: 0px 130px;
    color: #ffffff;
    box-sizing: border-box;
    .Footer-TopBox {
      width: 100%;
      max-width: 1980px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 0px;
      border-bottom: 2px solid #ffffff;
      .Footer-left {
        ul {
          padding: 0px;
          list-style: none;
          display: flex;
          justify-content: space-around;
          align-items: center;
          li {
            padding-right: 40px;
            text-align: left;
            cursor: pointer;
          }
        }
      }
      .Footer-right {
        width: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .Footer-bottomBox {
      padding-top: 30px;
      width: 100%;
      max-width: 1980px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .bottondetail {
        margin-bottom: 30px;
        span {
          margin-right: 20px;
        }

        .postalCodePC {
          display: inline-block;
        }
        .postalCodeApp {
          display: none;
        }
      }
    }
  }
  .FooterBottomBox {
    height: 60px;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    .bottomContent {
      max-width: 1980px;
      color: #ffffff;
      font-size: 16px;
      span {
        margin-right: 10px;
      }
      a {
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .Footer {
    .FooterTopBox {
      padding: 0px 24px;
      .Footer-TopBox {
        max-width: 980px;
        padding: 1rem 0rem;
        .Footer-left {
          ul {
            flex-wrap: wrap;
            justify-content: space-around;
            li {
              padding-right: 0px;
              text-align: left;
              min-width: 5rem;
              font-size: 0.8rem;
            }
          }
        }
        .Footer-right {
        }
      }
      .Footer-bottomBox {
        font-size: 0.8rem;
        padding-top: 1rem;
        .bottondetail {
            margin-bottom: 0.8rem;
          span {
          }
          .postalCodePC {
            display: none;
          }
          .postalCodeApp {
            display: inline-block;
          }
        }
      }
    }
    .FooterBottomBox {
      .bottomContent {
        font-size: 0.7rem;
        span {
        }
        a {
        }
      }
    }
  }
}
</style>
