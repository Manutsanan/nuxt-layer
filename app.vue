<template>
  <div>
    <ul class="flex gap-5 mb-10 bg-gray-800 text-white p-5">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users">Users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/products">Products</NuxtLink>
      </li>
    </ul>
    <NuxtPage></NuxtPage>
  </div>
</template>
