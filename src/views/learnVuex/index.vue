<template>
  <div id="test">
    <h2>回顾学习Vuex</h2>
    <div>方式1: 直接访问 state : count- {{ $store.state.count }}</div>
    <div>方式2: 通过计算属性访问 state : count- {{ count }}</div>
    <div>方式3: 通过映射方式访问 state : count- {{ count }} age- {{ age }}</div>
    <!-- commit 调用 store中 mutations 中的方法 -->
    <button @click="$store.commit('add')">点击后加一</button>
    <button @click="$store.commit('addN', 3)">点击后加3</button>

    <!-- 通过映射的方式来调用mutations方法 -->
    <button @click="addN(4)">点击后加4</button>
    <button @click="add">点击后加1</button>

    <!-- dispatch 调用 store中 actions 中的方法 -->
    <button @click="$store.dispatch('addSync')">点击后加1</button>

    <!-- 通过映射的方式来调用actions方法 -->
    <button @click="addNSync(4)">点击后加4</button>
    <button @click="addSync">点击后加1</button>

    <div>
      <!-- 直接使用 -->
      {{ $store.getters.showCount }}
      <!-- 映射的方式使用 -->
      {{ showCount }}

    </div>
    <!-- 取模块当中state -->
    <div>token={{$store.state.test.token}}</div>
    <!-- 调用模块当中的方法 -->
    <!-- 默认调用名称为setToken的方法 -->
    <!-- <button @click="$store.commit('setToken',1234)">setToken</button> -->
    <!-- 方式一、直接调用 -->
    <button @click="$store.commit('test/setToken',1234)">setToken</button>
    <!-- 方式二、映射调用 -->
    <button @click="setToken(1234)">setToken</button>

    <!-- 调用actions -->
    <!-- 方式一、直接调用 -->
    <button @click="$store.dispatch('test/login')">login</button>
    <!-- 方式二、映射调用 -->
    <button @click="login">login</button>

    <!-- 图标使用 -->
    <div>
      <svg-icon icon-class="eye" class-name="color-red"></svg-icon>
    </div>
    
  </div>
</template>

<script>
// 方式3: 通过映射方式访问 state
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import SvgIcon from '@/components/SvgIcon/index.vue'
export default {
    name: "",
    data() {
        return {};
    },
    computed: {
        // 3.1: 通过映射方式访问 state
        ...mapState(["count", "age"]),
        // 方式2: 通过计算属性访问 state
        // count() {
        //   return this.$store.state.count
        // }
        // 映射getters 计算属性
        ...mapGetters(["showCount"])
    },
    methods: {
        // 映射Mutations中的方法
        ...mapMutations(["addN", "add"]),
        // 映射mapActions中的方法
        ...mapActions(["addNSync", "addSync"]),
        // 映射test中的token
        ...mapMutations("test", ["setToken"]),
        // 映射action
        ...mapActions("test", ["login"])
    },
    components: { SvgIcon }
}
</script>

<style lang="scss" scoped>

.color-red{
  color: red;
}
</style>
