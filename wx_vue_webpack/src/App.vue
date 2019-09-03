<template>
    <div id="app">
        <div id="nav">
            <router-link to="/home">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <!-- 页面缓存 -->
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<style lang="scss">
</style>
