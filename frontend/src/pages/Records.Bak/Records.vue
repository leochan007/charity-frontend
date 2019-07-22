<template>
  <div class="Records">
    <div class="result_list">
      <div class="title">
        <div class="trip_logo">
          <img src="@/assets/icon_travel_record@1x.png" />
        </div>
        <div class="trip_title">出行记录</div>
      </div>
      <div class="table">
        <div class="table-tr">
          <div class="table-th w0">开始时间</div>
          <div class="table-th w0">结束时间</div>
          <div class="table-th w1">出发地</div>
          <div class="table-th w1">目的地</div>
          <div class="table-th w2">总费用</div>
          <div class="table-th w2">捐款金额</div>
          <div class="table-th w3">交易Hash</div>
        </div>
        <div class="table-tr" v-for="(item, key) in trip_records" :key="key">
          <div class="table-td w0">{{ item.starttime }}</div>
          <div class="table-td w0">{{ item.endtime }}</div>
          <div class="table-td w1">{{ item.source }}</div>
          <div class="table-td w1">{{ item.target }}</div>
          <div class="table-td w2">{{ item.fee }}</div>
          <div class="table-td w2">{{ item.donation }}</div>
          <div class="table-td w3">
            <a :href="'https://etherscan.io/tx/' + item.hash" target="_blank">{{ item.hash }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./Records.scss" />
<script lang="javascript" src="./Records.js" />
