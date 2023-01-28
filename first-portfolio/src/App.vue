<template>

  <header>
    <div class="header-box">
      <div class="home"><a href="#">My</a></div>
      <div class="header-wrap">
        <div v-for="(div, i) in menu" :key="i" @click="modal = true; enter = i">{{ div }}</div>
      </div>
    </div>
  </header>
    <!-- header submenu 모달창 -->
    <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <h4>{{ info[enter].title }}</h4>
      <img :src="info[enter].image" style="width:200px" alt="티스토리로고">
      <p>{{ info[enter].content }}</p>
      <h5>{{ info[enter].important }}</h5>
      <button @click="modal = false">닫기</button>
    </div>
  </div>
  <div class="wrap">
      <div class="profile">
        <img src="./assets/avata.png" alt="남색의 비니를 쓴 반팔티를 입은 사람">
      </div>
      <main class="container">
      <p>Hello 👋 I'm</p>
      <section class="animation">
        <div class="first"><div>ae.uj</div></div>
        <div class="second"><div>Web Developer</div></div>
        <div class="third"><div>Front-end Developers</div></div>
      </section>
    </main>
  </div>
</template>

<script>
import data from './assets/info.js';
data;

export default {
  name: 'App',
  data(){
    return{
      info : data,
      menu : ['blog', 'git', 'contact me'],
      modal: false,
      enter: 0,
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
@font-face {
    font-family: 'KyoboHandwriting2021sjy';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KyoboHandwriting2021sjy.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
body {
  font-family:'Roboto';
  background-color: #181D31;  
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
header{
  display: flex;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  background-color: #678983;
  font-family: 'KyoboHandwriting2021sjy';
}
.header-box{
  display: flex;
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding: 30px;
  font-size: 30px;
}
header a{
  color: #E6DDC4;
}
.header-wrap{
  display: flex;
  position: absolute;
  right: 0;
}
.header-wrap > div{
  margin-left: 40px;
  cursor: pointer;
  color: #F0E9D2;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  margin: 0 auto;
  width: 70%; background: white;
  border-radius: 20px;
  padding: 30px;
  margin-top: 40px;
} 
button{
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  background-color: #181D31;
  color: #F0E9D2;
}
button:hover{
  background-color: #678983;
  color: #fff;
  transition: .3s;
}
.home{
  color: #E6DDC4;
  cursor: pointer;
}
.wrap{
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 50px;
  margin-top: 40px;
}
.profile img{
  border-radius: 20px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.profile img:hover{
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px;
  transition: 1s;
}
p {
  text-shadow: 0 0 7px rgba(255,255,255,.3), 0 0 3px rgba(255,255,255,.3);
}
.container {
  color: #e5e5e5;
  font-size: 2.26rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

.animation {
  height:50px;
  overflow:hidden;
  margin-left: 1rem;
}

.animation > div > div {
  padding: 0.25rem 0.75rem;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

.first div {
  background-color:#678983;
}
.second div {
  background-color:#CD921E;
}
.third div {
  background-color:#181D31;
}

@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5.62rem;}
  30% {margin-top: -5.62rem;}
  40% {margin-top: -11.24rem;}
  60% {margin-top: -11.24rem;}
  70% {margin-top: -5.62rem;}
  80% {margin-top: -5.62rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}
</style>
