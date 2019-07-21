<template>
  <header>
    <div class="header_left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header_center">
        <span class="iconfont search-icon">&#xe632;</span>输入城市/游玩/主题
    </div>
    <router-link :to="{name:'City'}">
      <div class="header_right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe60a;</span>
      </div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  // 接受父组件的传值,并验证
  props: {
    city: String
  },
  methods: {

  }
};
</script>

<!-- 
1rem = (HTML)50px 设计师的图片是正常图的 2 倍  86/(2*50)  (px*2/100) */
1、布局分块
2、尺寸大小、单位转换
3、设置大小、布局
-->
<style  scoped>
header {
  display: flex;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;
}

.header_left {
  width: 0.64rem;
  float: left;
  text-align: center;
}

.header_center {
  flex: 1;
  height: 0.62rem;
  line-height: 0.62rem;
  background: #fff;
  color: #ccc;
  border-radius: 0.1rem;
  padding-left: 0.2rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
}

.search-icon {
  margin-right: 0.1rem;
}

.header_right {
  width: 1.24rem;
  float: right;
  color: #fff;
  text-align: center;
}

.arrow-icon {
  font-size: 0.24rem;
}
</style>

