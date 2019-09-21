<template>
  <div class="browsers">
    <ul class="list">
      <span class="title">Browsers</span>
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
  name: "Browsers",
  metaInfo: {
    title: "Browsers"
  },
  data: function() {
    return {
      items: [
        {
          name: "Th%40t0ne1rishPqtato",
          color: "blueviolet",
          url: "#/that0ne1rishpqtato"
        },
        {
          name: "salad242",
          color: "blueviolet",
          url: "//salad242.that0ne1rishpqtato.gq/#/browsers"
        }
      ]
    };
  }
};
</script>
