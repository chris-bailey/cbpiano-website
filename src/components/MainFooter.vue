<template>
    <footer>
        <hr />
        <div id="footerLeft">
            <p>Copyright &copy; {{ currentYear }} Chris Bailey Productions</p>
        </div>
        <div id="footerRight">
            <router-link to="/privacy">Privacy Policy</router-link> &nbsp; | &nbsp;
            <router-link to="/sitemap">Sitemap</router-link>
        </div>
    </footer>
</template>
  
<script>
export default {
    name: 'MainFooter',
    data() {
        return {
            currentYear: new Date().getFullYear()
        };
    }
}
</script>

<style scoped lang="scss">
footer {
    text-align: center;
    font-size: 90%;
    font-family: sans-serif;
    margin-bottom: 10px;
    margin-top: 6px;

    hr {
        margin: 0;
    }
}

#footerLeft {
    float: left;
    margin: 0 0 0 99px;
}

#footerRight {
    float: right;
    margin: 12px 100px 0 0;
}
</style>
  