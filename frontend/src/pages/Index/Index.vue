<template>
  <div class="main">
    <div class="index_bg">
      <div class="slogan">关爱社会福利事业，关爱社会弱势群体</div>
      <div class="search_bar">
        <SearchBarTab v-for="(item, key) in items" :key="key" :searchText="item.searchText" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Index.scss" />
<script lang="javascript" src="./Index.js" />
