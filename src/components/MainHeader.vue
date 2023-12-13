<template>
    <header>
        <!-- Show banner image using CSS -->
    </header>

    <nav id="topMenu">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/album">Album</router-link></li>
            <li><router-link to="/listen">Listen</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>

    <hr />
</template>
  
<script>
export default {
    name: 'MainHeader',
}
</script>

<style scoped lang="scss">
.router-link-active {
  text-decoration: underline;
}

header {
    background: url("../assets/banner.jpg") no-repeat;
    display: block;
    margin: 0;
    padding: 0;
    width: 760px;
    height: 151px;
}

#topMenu {
    font-size: 120%;
    font-weight: bold;
    margin-top: 7px;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: inline;

        li {
            margin: 0;
            padding: 0;
            display: inline;
            text-align: center;
            list-style: none;

            a {
                color: #FFF;
                padding: 8px 52px;
                text-decoration: none;
                display: inline;

                &:hover {
                    color: #888;
                }
            }
        }
    }
}
</style>
  