<template>
  <div class="browsers">
    <ul class="list">
      <span class="title"><b>Browsers</b> from Th@t0ne1rishPqtato</span>
      <li v-for="item in items">
        <a :href="''+item.url">
          <img :src="'https://img.shields.io/badge/-' + item.name + '-' + item.color +'.svg'" :class="'shadow'">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Th@t0ne1rishPqtato",
  metaInfo: {
    title: "Th@t0ne1rishPqtato"
  },
  data: function() {
    return {
      items: [
        {
          name: "Simple Calculator",
          color: "red",
          url: "#/simplecalculator"
        },
        {
          name: "Back",
          color: "blueviolet",
          url: "#/browsers"
        }
      ]
    };
  }
};
</script>
