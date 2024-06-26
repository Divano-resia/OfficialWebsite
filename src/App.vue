
<template>
    <div class="box">
        <Header></Header>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>



<style>
body{
  margin: 0px;
  padding: 0px;
  background-color: #FFFFFF;
}
</style>
