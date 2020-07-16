<template>
    <p v-if="methods">{{ JSON.stringify(this.methods) }}</p>
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
            methods: null
        }
    },
    async created() {
        const docs = require('../../../src/transformers/').all
        this.methods = docs[this.name]
    }
}
</script>
