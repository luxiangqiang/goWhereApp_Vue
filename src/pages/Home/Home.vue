<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :list="swiperList"></HomeSwiper>
        <HomeIcons :list="iconList"></HomeIcons>
        <HomeRecommend :list="recommedList"></HomeRecommend>
        <HomeWeeked :list="weekedList"></HomeWeeked>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeeked from './components/weeked'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeeked
    },
    data () {
        return {
            iconList:  [{
                id: '0001',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                des: '景点门票'
            },{
                id: '0002',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                des: '长岛'
            },{
                id: '0003',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                des: '蓬莱阁'
            },{
                id: '0004',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                des: '一日游'
            },{
                id: '0005',
                imgURL: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                des: '烟台必游'
            },{
                id: '0006',
                imgURL: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
                des: '威海野生动物园'
            },{
                id: '0007',
                imgURL: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/14d4b8a11f6b5f42db1b832fde4278e4.png',
                des: '蓬莱极地'
            },{
                id: '0008',
                imgURL: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
                des: '龙口南山'
            },{
                id: '0009',
                imgURL: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
                des: '威海野生动物园大减价'
            },],
            swiperList: [{
                id: '0001',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
            },{
                id: '0002',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/b421363bbbb9184deacb4247eeea7485.jpg_750x200_12b42643.jpg'
            },{
                id: '0003',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
            }],
            recommedList: [{
                id: '0001',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1604/40/409ad6cc05e7d84d90.img.jpg_200x200_4fac5044.jpg',
                title:'大连圣亚海洋世界',
                desc: '浪漫大连首站,浪漫的海洋主题乐园'
            },{
                id: '0002',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1604/40/409ad6cc05e7d84d90.img.jpg_200x200_4fac5044.jpg',
                title:'大连圣亚海洋世界',
                desc: '浪漫大连首站,浪漫的海洋主题乐园'
            },{
                id: '0003',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1604/40/409ad6cc05e7d84d90.img.jpg_200x200_4fac5044.jpg',
                title:'大连圣亚海洋世界',
                desc: '浪漫大连首站,浪漫的海洋主题乐园'
            },{
                id: '0004',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1604/40/409ad6cc05e7d84d90.img.jpg_200x200_4fac5044.jpg',
                title:'大连圣亚海洋世界',
                desc: '浪漫大连首站,浪漫的海洋主题乐园'
            },{
                id: '0005',
                imgUrl: 'https://imgs.qunarzz.com/sight/p0/1604/40/409ad6cc05e7d84d90.img.jpg_200x200_4fac5044.jpg',
                title:'大连圣亚海洋世界',
                desc: '浪漫大连首站,浪漫的海洋主题乐园'
            }],
            weekedList: [{
                id: '0001',
                imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/a2/30280c415152a1.jpg_r_640x214_ce337d5d.jpg',
                title: '烟台打卡',
                desc: '来烟台玩，你的行程里必少不了这几个地'
            },{
                id: '0002',
                imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/66/b34be5051e3376.jpg_r_640x214_dc4857d8.jpg',
                title: '海滨日光浴',
                desc: '浪柔沙细，轻波亲吻着海岸'
            },{
                id: '0003',
                imgUrl: 'https://imgs.qunarzz.com/sight/source/1512/42/2650adfc626066.jpg_r_640x214_4053783f.jpg',
                title: '仙境蓬莱周末游',
                desc: '蓬莱，道教传说中著名的神仙住所和人间仙境，我国四大名楼之一，八仙过海的神话故事源于这里 '
            },{
                id: '0004',
                imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/c6/8ae64cddfb6a43.jpg_r_640x214_9f3e5d2b.jpg',
                title: '户外森呼吸',
                desc: '空气差？那就去山东各大森林公园玩耍吧！这里是春夏秋冬旅游度假的绝佳之选'
            }]
        }
    },
    methods: {
        // getCity
        getCity () {
            res.data.city = '北京'
        },

        // HomeIcons
        getIcons () {
            this.data.iconList = []
        },

        // HomeSwiper   
        getSwiperList () {
            this.data.swiperList = []
        }

        // HomeWeeked

    }
}
</script>
