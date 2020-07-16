<template>
  <div>
    <table v-if="Object.keys(this.methods).length > 0">
      <tr v-for="(value, name) in methods">
        <td>{{name}}</td>
        <td>
          <p style="padding: 0;margin:0" v-for="(v, n) in value">"{{n}}": {{v}}</p>
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
    async created() {
        const docs = require('../../../src/transformers/').all
        this.methods = docs[this.name]
    }
}
</script>
