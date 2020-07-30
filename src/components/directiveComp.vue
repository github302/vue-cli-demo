<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            msg: 'directive-comp'
        }
    }
})
</script>
