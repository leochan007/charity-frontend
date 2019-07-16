<template>
  <div class="header">
      <div class="menuitem">
        <div class="logo"><img src="@/assets/img_bar_logo@1x.png" /></div>
        <MenuItem v-for="(item, key) in items" :key="key" :menuText="item.menuText" :url="item.url" />
      </div>
  </div>
</template>

<style lang="scss" src="./Header.scss" />
<script lang="javascript" src="./Header.js" />
