import User from './components/User.vue';
import Users from './components/users/Users.vue';
import FunctionGroups from './components/users/FunctionGroups.vue';
import Admin from './components/users/Admin.vue';
import Index from './components/users/Index.vue';
import Home from './views/Home.vue';
import Login from './components/Login.vue';

import { store } from './store/store.js';



let checkSignedInFn = (next) => {

    let loggedInUser = store.state.loggedInUser.user;
    if(loggedInUser.length) {
        console.log('userIn');
        next();
    } else {
        console.log('userOut');
        next({ name: 'Login' })
    }


}

export const routes = [
    { 
        path:'/', 
        name: 'Home', 
        component: Home,
        children: [
            { 
                path:'/admin', 
                name: 'Admin', 
                component: Admin
             },
             { 
                path:'/user', 
                name: 'User', 
                component: User 
            },  
            { 
                path:'/users', 
                name: 'Users', 
                component: Users 
            },     
            { 
                path:'/fgroups', 
                name: 'FunctionGroups', 
                component: FunctionGroups,
                beforeEnter: (to, from, next) => {
                    checkSignedInFn(next);
                } 
            },                              
        ] 
    },
    { 
        path:'/login', 
        name: 'Login', 
        component: Login 
    },    




];

// 557 to 562