<template>
    <div id="mainContentSitemap">
        <h1>Sitemap</h1>
        <ul>
            <li><router-link to="/">Home</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/album">Album</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/listen">Listen</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/about">About</router-link></li>
        </ul>
        <ul>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>
</template>

    
<script>
export default {
    name: 'SitemapView',
}
</script>

<style scoped lang="scss">
#mainContentSitemap {
    margin-top: 11px;
    padding: 1px 26px 24px 82px;
}
</style>