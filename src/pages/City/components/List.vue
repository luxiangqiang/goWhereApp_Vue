<template>  
   <div class="list">
       <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="btn-list">
              <div class="btn-wrap">
                <div class="btn">北京</div>
              </div>
          </div>
       </div>
  
       <div class="area">
            <div class="title">热门城市</div>
            <div class="btn-list">
              <div class="btn-wrap">
                <div class="btn">北京</div>
              </div>
              <div class="btn-wrap">
                <div class="btn">北京</div>
              </div>
              <div class="btn-wrap">
                <div class="btn">北京</div>
              </div>
              <div class="btn-wrap">
                <div class="btn">北京</div>
              </div>
              <div class="btn-wrap">
                <div class="btn">北京</div>
              </div>
              <div class="btn-wrap">
                <div class="btn">北京</div>
              </div>
              <div class="btn-wrap">
                <div class="btn">北京</div>
              </div>
          </div>
         
       </div>
       <div class="area">
           <div class="title">A</div>
           <ul class="item-list">
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
           </ul>
       </div>

        <div class="area">
           <div class="title">A</div>
           <ul class="item-list">
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
           </ul>
       </div>

        <div class="area">
           <div class="title">A</div>
           <ul class="item-list">
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
           </ul>
       </div>

        <div class="area">
           <div class="title">A</div>
           <ul class="item-list">
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
               <li>阿拉尔</li>
           </ul>
       </div>
   </div>
</template>


<script>
export default {
    name: 'CityList'
}
</script>


<style>

    .list{
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 1.68rem;
        right: 0;
        bottom: 0;
    }

    .title{
        height: .4rem;
        line-height: .4rem;
        color: #212121;
        padding: .1rem .3rem;
        font-size: .24rem;
        background: #eee;
    }

    .btn-list{
        overflow: hidden;
        padding: .1rem .6rem .1rem .1rem;
    }

    .btn-wrap{
        float: left;
        width: 33.33%;
    }

    .btn{
        padding: .2rem;
        margin: .1rem;
        text-align: center;
        border: .02rem #ccc solid;
    }

    .item-list{
        overflow: hidden;
    }

    .item-list li{
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;
        border-bottom: 1px #ccc solid;
    }

</style>
