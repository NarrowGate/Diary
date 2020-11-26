import User from './components/User.vue';
import Users from './components/users/Users.vue';
import FunctionGroups from './components/users/FunctionGroups.vue';
import Admin from './components/users/Admin.vue';
import Index from './components/users/Index.vue';

export const routes = [
    { path:'/', name: 'Home', component: Index },
    { path:'/user', name: 'User', component: User },
    { path:'/users', name: 'Users', component: Users },
    { path:'/fgroups', name: 'FunctionGroups', component: FunctionGroups },
    { path:'/admin', name: 'Admin', component: Admin }
];

// 557 to 562