<template>
  <div class="AnnounceWidget" :style="{'margin-left': ml + 'px'}">
    <img class="announce_img" :src="img_src" />
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<style scoped lang="scss" src="./AnnounceWidget.scss" />
<script lang="javascript" src="./AnnounceWidget.js" />
