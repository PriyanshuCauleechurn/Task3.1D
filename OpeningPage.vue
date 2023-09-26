<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const click = () => {
    router.push({
        path: 'SecondPage'
    })
}

</script>

<template>
    <div id="openingPage" v-on:click="click">
        <div class="sitename">
            <span class="a"><strong>F</strong></span>
            <span class="a"><strong>U</strong></span>
            <span class="a"><strong>R</strong></span>
            <span class="a"><strong>N</strong></span>
            <span class="a"><strong>I</strong></span>
            <span class="a"><strong>T</strong></span>
            <span class="a"><strong>U</strong></span>
            <span class="a"><strong>R</strong></span>
            <span class="a"><strong>E</strong></span>
            <span class="a"><strong>P</strong></span>
            <span class="a"><strong>R</strong></span>
            <span class="a"><strong>O</strong></span>
        </div>

        <div class="scroll">
            <h5>click</h5>
        </div>
        
    </div>

</template>

