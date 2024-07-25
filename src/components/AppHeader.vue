<script>

export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>
   <header>
    <nav class="sidebar">
        <a class="navbar-brand" href="#">
            <img src="/public/img/logo.png" alt="Logo" class="logo-img">
        </a>
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'home' }">
                    <i class="fas fa-home icon"></i>
                    <span class="text">Home</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'project' }">
                    <i class="fas fa-project-diagram icon"></i>
                    <span class="text">Project</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'About_me' }">
                    <i class="fas fa-user icon"></i>
                    <span class="text">About me</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Contacts' }">
                    <i class="fas fa-envelope icon"></i>
                    <span class="text">Contacts</span>
                </router-link>
            </li>
        </ul>
    </nav>
</header>

</template>

<style lang="scss" scoped>

header {
    .sidebar {
        box-shadow: 5px 4px 8px rgba(220, 222, 224, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 80px;
        background-color: #DCDEE0;
        transition: width 0.3s ease;
        overflow: hidden;

        &:hover {
            width: 150px;
        }

        .navbar-brand {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            background-color: black;
            .logo-img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                transition: transform 0.5s ease;
                &:hover {
                    transform: rotate(360deg);
                }
            }
        }
        .nav {
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            .nav-item {
                .nav-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 60px;
                    padding: 0;
                    text-align: center;
                    font-size: 18px;
                    color: black;
                    transition: background-color 0.3s ease;

                    .icon {
                        margin-right: 0;
                        font-size: 24px;
                        transition: opacity 0.3s ease;
                    }
                    .text {
                        display: none;
                        margin-left: 15px;
                    }

                    &:hover {
                        background-color: black;
                        color: #DCDEE0;

                        .icon {
                            margin-right: 15px;
                        }

                        .text {
                            display: inline;
                        }
                    }
                }
            }
        }
    }
}


</style>
