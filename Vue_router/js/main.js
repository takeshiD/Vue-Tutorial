const User = { template: `
    <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
    </div>
    `
}

const UserProfile = { template: `
    <div class="profile">
        <div>Profile!</div>
    </div>
`}

const UserPosts = { template: `
    <div class="post">
        <div>Posts!</div>
    </div>
`}

const UserHome = { template: `
    <div class="home">
        <div>Posts!</div>
    </div>
`}

const router = new VueRouter({
    routes: [
        {path: '/user/:id', 
         component: User,
         children: [
             { path: '', component: UserHome},
             { path: 'profile', component: UserProfile },
             { path: 'posts', component: UserPosts }
         ]
        }
    ]
})

const app = new Vue({
    el: '#app',
    data: {
        toBottom: '#bottom',
        toTop: '#top'
    },
    router: router
})