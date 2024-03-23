<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <span class="author" v-if="$frontmatter.author">作者：{{ $frontmatter.author }}</span>
    </template>
  </Layout>
</template>

<style scoped>
.author {
  margin-top: 30px;
}
</style>