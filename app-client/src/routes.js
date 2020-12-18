import Profile from '@/components/profile/Profile.vue';
import Users from '@/components/users/Users.vue';
import FunctionGroups from '@/components/functionGroups/FunctionGroups.vue';
import Admin from '@/components/users/Admin.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

import { store } from '@/store/store.js';



let checkSignedInFn = (next) => {
    let loggedInUser = store.state.user.user;
    if(loggedInUser > 0) {
        next();
    } else {
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
                component: Admin,
                beforeEnter: (to, from, next) => {
                    checkSignedInFn(next);
                }                
             },
             { 
                path:'/profile', 
                name: 'Profile', 
                component: Profile,
                beforeEnter: (to, from, next) => {
                    checkSignedInFn(next);
                }                
            },  
            { 
                path:'/users', 
                name: 'Users', 
                component: Users,
                beforeEnter: (to, from, next) => {
                    checkSignedInFn(next);
                }
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
    }
];

// 557 to 562