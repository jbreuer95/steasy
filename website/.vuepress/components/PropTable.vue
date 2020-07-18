<template>
  <div>
    <table v-if="Object.keys(this.methods).length > 0" class="table">
      <tr>
        <td class="left">Class</td>
        <td class="middle">Properties</td>
      </tr>
      <tr v-for="(value, name) in methods">
        <td class="left">{{name}}</td>
        <td class="middle">
          <template v-for="(v, n) in value">
            <div class="flex">
              <p class="property">"{{n}}": {{v}}</p>
              <div class="right">
                <div class="text-color" v-if="n === 'color' && isColor(v)" :style="{ color: v }">Aa</div>    
                <div class="background-color" v-else-if="n === 'backgroundColor' && isColor(v)" :style="{ backgroundColor: v }"></div>
                <div class="text-color" v-else-if="n === 'borderColor' && isColor(v)" :style="{ color: v }">Aa</div>
                <div class="text-color" v-else-if="n === 'tintColor' && isColor(v)" :style="{ color: v }">Aa</div>
              </div>
            </div>
          </template>          
        </td>
      </tr>
    </table>
    <h2 v-else>TODO</h2>
  </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            methods: {}
        }
    },
    methods: {
      isColor(value) {
        let valid = /^#([a-f0-9]{6}|[a-f0-9]{3})\b$/.test(value)
        if (!valid) {
          valid = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(value)
        }
        if (!valid) {
          valid = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/.test(value)
        }
        return valid
      }
    },
    async created() {
        const docs = require('../../../src/transformers/').all
        this.methods = docs[this.name]
    }
}
</script>

<style scoped>
  .left {
    width: 32%;
  }
  .middle {
    width: 100%;
  }
  .border-color {
    border: 1px solid #2D3E50;
    height: 20px;
    margin: 0 auto;
    width: 50px;
  }
  .text-color {
    color: #2D3E50;
    font-weight: 600;
    text-align: right;
  }
  .background-color {
    height: 20px;
    width: 50px;
  }
  .right {
    border-left: 1px solid transparent;
    margin: auto 0;
    height: 100%;
    width: 20%;
  }
  .flex {
    display: flex;
  }
  .property {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  tr {
    background: #FFF;
  }
</style>