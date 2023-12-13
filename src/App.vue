<template>
  <MainHeader />
  <router-view />
  <MainFooter />
</template>


<script>
// Import components that will be reused on every page
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
};
</script>


<style lang="scss">
body {
  background-color: #000000;
  font-size: small;
  font-family: Helvetica, Arial, sans-serif;
  color: #AAA;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  width: 760px;
  overflow-y: scroll;
}

#app {
  #mainContent {
    background: none repeat scroll 0 0 #FFF;
    padding: 1px 26px 2px 26px;
    text-align: justify;
    background-color: #000;
    margin-top: 11px;
    margin-left: auto;
    margin-right: auto;
    font-size: 110%;
    line-height: 1.4;
  }

  h1,
  h2,
  h3 {
    color: #FFF
  }

  h1 {
    font-size: 160%;
  }

  h2 {
    font-size: 140%;
  }

  h3 {
    font-size: 115%;
  }

  .center {
    text-align: center;
  }

  img {
    border: 0;
  }

  img.margins {
    margin: 3px 15px 0 0;
  }

  a:link {
    font-weight: bold;
    text-decoration: none;
    color: #5583a1;
  }

  a:visited {
    font-weight: bold;
    text-decoration: none;
    color: #5583a1;
  }

  a:hover,
  a:active {
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
