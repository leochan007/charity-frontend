<template>
  <a :href="url">
    <div class="MenuItem" @click="clickFunc(params)"><div :class="class_name">{{ menuText }}</div></div>
  </a>
</template>

<style lang="scss" src="./MenuItem.scss" />
<script lang="javascript" src="./MenuItem.js" />
