import VueRouter from 'vue-router'
//components
import WebUpload from '../pages/WebUpload'
import WebListen from '../pages/WebListen'
import WebEx from '../pages/WebEx'


const router = new VueRouter({
    routes:[
        {
            path:'/upload',
            component:WebUpload,
            meta:{title:'形聲 上傳聲音'}
        },
        {
            path:'/listen',
            component:WebListen,
            meta:{title:'形聲 聆聽聲音'}
        },
        {
            path:'/exhibition',
            component:WebEx,
            meta:{title:'形聲 展場資訊'}
        }
    ]
})
router.afterEach((to, from)=>{
    document.title = to.meta.title || '形聲'
})

export default router