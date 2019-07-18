<template>
  <div class="InfoPanel" :style="{'margin-left': ml + 'px'}">
    <div class="title">{{ title }}</div>
    <div class="line">
      <div class="number">{{ number.toLocaleString() }}</div>
      <div class="unit">{{ unit }}</div>
    </div>
  </div>
</template>

<style lang="scss" src="./InfoPanel.scss" />
<script lang="javascript" src="./InfoPanel.js" />
