<template>
  <router-link :to="url">
    <div class="MenuItem"><div :class="class_name">{{ menuText }}</div></div>
  </router-link>
</template>

<style scoped lang="scss" src="./MenuItem.scss" />
<script lang="javascript" src="./MenuItem.js" />
