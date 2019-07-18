<template>
  <div class="main">
    <div class="index_bg">
      <div class="slogan">关爱社会福利事业，关爱社会弱势群体</div>
      <div class="search_panel">
        <div class="search_bar">
          <SearchBarTab
            v-for="(item, key) in searchtab_items"
            :key="key"
            :searchText="item.searchText"
          />
        </div>
        <div class="input_panel">
          <input
            class="search_input"
            placeholder="请输入手机号、交易Hash，即可查询捐款信息"
            type="input"
            name="search_text"
            id="search_text"
          />
          <input
            value="查询"
            class="search_button"
            type="button"
            name="search_btn"
            id="search_btn"
            @click="onSearch"
          />
        </div>
      </div>
    </div>
    <div class="second_panel">
      <div class="info_panel_row">
        <InfoPanel
          v-for="(item, key) in infopanel_items"
          :key="key"
          :title="item.title"
          :number="item.number"
          :unit="item.unit"
          :ml="item.ml"
        />
      </div>
      <div class="result_list">
        <div class="title">捐款公示</div>
        <div class="table">
          <div class="table-tr">
            <div class="table-th">金额(RMB)</div>
            <div class="table-th">捐款人</div>
            <div class="table-th">捐款来源</div>
            <div class="table-th">捐款时间</div>
          </div>
          <div class="table-tr" v-for="(item, key) in charity_info1" :key="key">
            <div class="table-td">{{ item.aom }}</div>
            <div class="table-td">{{ item.donor }}</div>
            <div class="table-td">{{ item.src }}</div>
            <div class="table-td">{{ item.datetime }}</div>
          </div>
        </div>
      </div>
      <div class="announcement_panel">
        <div class="title1">最新公告</div>
        <div class="announcelst">
          <AnnounceWidget
            v-for="(item, key) in annonce_items"
            :key="key"
            :img_src="item.img_src"
            :title="item.title"
            :content="item.content"
            :ml="item.ml"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./Index.scss" />
<script lang="javascript" src="./Index.js" />
