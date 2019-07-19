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
        <v-data-table
          hide-actions
          :headers="fields"
          :items="trip_records"
          :loading="loading"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <tr class="text-xs-left" @click="viewDetail(props.item.hash)">
              <td>{{ props.item.starttime }}</td>
              <td>{{ props.item.starttime }}</td>
              <td>{{ props.item.endtime }}</td>
              <td>{{ props.item.source }}</td>
              <td>{{ props.item.target }}</td>
              <td>{{ props.item.fee }}</td>
              <td>{{ props.item.donation }}</td>
              <td>
                <a
                  :href="'https://etherscan.io/tx/' + props.item.hash"
                  target="_blank"
                >{{ props.item.hash }}</a>
              </td>
            </tr>
          </template>
        </v-data-table>

        <v-layout row wrap class="mt-2">
          <v-spacer></v-spacer>
          <v-flex class="text-lg-right">
            <b-select
              style="width:70px"
              @change="handleSizeChange"
              v-model="pageSize"
              :options="pageSizes"
            />
          </v-flex>
          <v-flex class="text-lg-left">
            <b-pagination
              @change="handleCurrentChange"
              size="md"
              :total-rows="totalCount"
              v-model="page"
              :per-page="pageSize"
            ></b-pagination>
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./Records.scss" />
<script lang="javascript" src="./Records.js" />
