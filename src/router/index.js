import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/sys/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/sys/Icon.vue'], resolve),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/sys/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/sys/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/sys/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/sys/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/sys/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/sys/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/sys/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/sys/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: resolve => require(['../components/page/sys/DragDialog.vue'], resolve),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: resolve => require(['../components/page/sys/I18n.vue'], resolve),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/sys/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                },
                {
                    path: '/test',
                    component: resolve => require(['../components/page/ParentComponent.vue'], resolve),
                    meta: { title: 'test' }
                },


                //题库管理的路由
                /*{
                    path: '/Dashboard2',
                    component: resolve => require(['../components/page/hmbb/Dashboard.vue'], resolve),
                    meta: { title: '首页' }
                },
                {
                    path: '/Teacher',
                    component: resolve => require(['../components/page/hmbb/Teacher.vue'], resolve),
                    meta: { title: '教师管理' }
                },
                {
                    path: '/Course',
                    component: resolve => require(['../components/page/hmbb/Course.vue'], resolve),
                    meta: { title: '课程管理' }
                },
                {
                    path: '/TeacherAdd',
                    component: resolve => require(['../components/page/hmbb/TeacherAdd.vue'], resolve),
                    meta: { title: '教师添加' }
                },

                {
                    path: '/CourseAdd',
                    component: resolve => require(['../components/page/hmbb/CourseAdd.vue'], resolve),
                    meta: { title: '课程添加' }
                },
                {
                    path: '/SingleQuestion',
                    component: resolve => require(['../components/page/hmbb/SingleQuestion.vue'], resolve),
                    meta: { title: '选择题管理' }
                },

                {
                    path: '/SingleAdd',
                    component: resolve => require(['../components/page/hmbb/SingleAdd.vue'], resolve),
                    meta: { title: '选择题管理' }
                },

                {
                    path: '/Empty',
                    component: resolve => require(['../components/page/hmbb/Empty.vue'], resolve),
                    meta: { title: '填空题' }
                },
                {
                    path: '/EmptyAdd',
                    component: resolve => require(['../components/page/hmbb/EmptyAdd.vue'], resolve),
                    meta: { title: '填空题' }
                },

                {
                    path: '/Exam',
                    component: resolve => require(['../components/page/hmbb/Exam.vue'], resolve),
                    meta: { title: '试卷管理' }
                },

                {
                    path: '/ExamAdd',
                    component: resolve => require(['../components/page/hmbb/ExamAdd.vue'], resolve),
                    meta: { title: '添加试卷' }
                },
                {
                    path: '/Judge',
                    component: resolve => require(['../components/page/hmbb/Judge.vue'], resolve),
                    meta: { title: '判断题管理' }
                },
                {
                    path: '/JudgeAdd',
                    component: resolve => require(['../components/page/hmbb/JudgeAdd.vue'], resolve),
                    meta: { title: '判断题' }
                },

                {
                    path: '/Answers',
                    component: resolve => require(['../components/page/hmbb/Answers.vue'], resolve),
                    meta: { title: '判断题管理' }
                },
                {
                    path: '/AnswersAdd',
                    component: resolve => require(['../components/page/hmbb/AnswersAdd.vue'], resolve),
                    meta: { title: '判断题' }
                },*/


            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
