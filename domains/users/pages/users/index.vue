<template>
  <div class="container mx-auto">
    <h1 class="text-5xl mb-5">Users</h1>
    <p class="mb-5">Users domain with {{ data }}</p>

    <User />
    <Product />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../../../stores/index";

const store = useStore();

const data = store.getData;
</script>
