import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import User from '@/components/User';
import Recommend from '@/components/Recommend';
import Tag from '@/components/Tag';
import Group from '@/components/group';
import Topic from '@/components/Topic';
import Comments from '@/components/Comments';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    }
  ]
})
