<!-- @format -->

<template>
  <div>
    home
    <el-button v-debounce="testClick">button</el-button>
    <el-input v-integer v-model="val"></el-input>
    <icon-svg name="iconshanchu" class="icon"></icon-svg>
    {{ changeName }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data() {
    return {
      val: '',
      testClick: {
        time: 500,
        callback: () => {
          this.tt();
        }
      }
    };
  },
  computed: {
    ...mapState(['name']),
    ...mapGetters(['changeName'])
  },
  mounted() {
    this.$api['common/who']()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    tt() {
      console.log(11);
    }
  }
};
</script>
