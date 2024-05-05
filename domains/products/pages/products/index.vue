<template>
  <div class="container mx-auto">
    <h1 class="text-5xl mb-5">Products</h1>
    <p class="mb-5">Product domain</p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="update"
    >
      Update share data
    </button>

    <Product />
    <User />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../../../../stores/index";

const store = useStore();

const update = async () => {
  store.updateSharedData("Update from product domain");
  await navigateTo("/users");
};
</script>
