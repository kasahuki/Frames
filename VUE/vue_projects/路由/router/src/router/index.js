import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/views/LayOut.vue' 
import ArticleDetails from '@/views/ArticleDetails.vue'
import ArticleItems from '@/views/ArticleItems.vue'
import NotFound from '@/views/NotFound.vue'
import PersonCenter from '@/views/PersonCenter.vue'
import UserLike from '@/views/UserLike.vue'

// 导入路由组件
Vue.use(VueRouter)
//VueRouter 插件初始化

//安装路由

//创建了一个路由对象
const router =new VueRouter({
    //配置路由规则
    routes:[
        {path:'/',redirect:'/LayOut'},
       {path:'/LayOut',
        component:LayOut,
        children:[
            {path:'/PersonCenter',component:PersonCenter},
            {path:'/UserLike',component:UserLike}
        ],
        //二级路由

       },
       {path:'/ArticleDetails',component:ArticleDetails},
       {path:'/ArticleItems',component:ArticleItems},
       {path:'*',component:NotFound}
       
    ]
})
export default router
//有导入就要有导出
