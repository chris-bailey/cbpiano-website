<template>
  <div id="mainContent">
    <p style="margin-left:12px;">Please enter your name, email address, and any comments, and I will get back to you as soon as I can.</p>
  </div>
  <br />
  <div id="formkeep-embed" data-formkeep-url="https://formkeep.com/p/d74a128f1a2491d0086ce981d8ba22ed?embedded=1"></div>
</template>

<script>
export default {
  name: 'ContactView',

  mounted() {
    // Load external scripts
    this.loadScript("https://pym.nprapps.org/pym.v1.min.js");
    this.loadScript("https://formkeep-production-herokuapp-com.global.ssl.fastly.net/formkeep-embed.js");

    // Add event listeners after the component is mounted
    this.$nextTick(() => {
      const formkeepEmbed = document.querySelector('#formkeep-embed');

      formkeepEmbed.addEventListener('formkeep-embed:submitting', () => {
        console.log('Submitting form...');
      });

      formkeepEmbed.addEventListener('formkeep-embed:submitted', () => {
        console.log('Submitted form...');
      });
    });
  },

  methods: {
    loadScript(src) {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
  }
}
</script>
