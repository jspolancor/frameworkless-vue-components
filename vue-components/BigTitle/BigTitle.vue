<style src="./BigTitle.scss" module lang="scss">
</style>
<script src="./BigTitle.js">
</script>

<template>
  <header :class="$style.component">
      <h1 v-html="title" :class="$style.title"></h1>
      <h2 v-html="text" :class="$style.text"></h2>
    <span :class="$style.line"></span>
  </header>
</template>