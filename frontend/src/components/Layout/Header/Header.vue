<template>
  <div class="header">
    <div class="menuitem">
      <router-link to="/">
        <div class="logo">
          <img src="@/assets/img_bar_logo@1x.png" />
        </div>
      </router-link>
      <MenuItem v-for="(item, key) in items" :key="key" :menuText="item.menuText" :url="item.url" />
    </div>
  </div>
</template>

<style scoped lang="scss" src="./Header.scss" />
<script lang="javascript" src="./Header.js" />
