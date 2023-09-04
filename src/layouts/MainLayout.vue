<template>
  <div class="layout">
    <div v-if="leftDrawerOpen" class="drawer">
      <AppMenu @toggle="toggleLeftDrawer" />
    </div>

    <div class="page-container">
      <header class="header">
        <div class="toolbar">
          <button class="toolbar-btn" @click="goHome">🏠</button>

          <div class="space"></div>

          <div class="search-width-container relative-position">SearchBar</div>

          <div class="space"></div>

          <button class="toolbar-btn" @click="logout">🔌</button>
        </div>
      </header>

      <div class="main">
        <router-view class="router-view" :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import AppMenu from "src/components/Menu/AppMenu.vue";
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "MainLayout",

    components: {
      AppMenu,
    },
    setup() {
      const leftDrawerOpen = ref(false);

      return {
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value;
        },
        goHome() {
          // TODO: navigate to home
        },
        logout() {
          // TODO: implement logout
        },
      };
    },
  });
</script>

<style lang="scss" scoped></style>
