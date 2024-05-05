<template>
  <div class="h-screen flex flex-col items-center justify-center -mt-24">
    <div>
      <h1 class="text-2xl text-center p-5">
        Index page from NuxtJS application with
        <span class="text-rose-500">{{ users }}</span>
      </h1>
      <User />
    </div>
    <div>
      <h1 class="text-2xl text-center p-5">
        Index page from NuxtJS application with
        <span class="text-rose-500">{{ producrs }}</span>
      </h1>
      <Product />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStoreProducts } from "~/domains/products/stores/index";
import { useStoreUsers } from "~/domains/users/stores/index";

const storeUsers = useStoreUsers();
const storeProducts = useStoreProducts();

const users = storeUsers.getData;
const producrs = storeProducts.getData;
</script>
