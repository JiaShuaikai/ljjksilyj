<script setup lang="ts">
useSeoMeta({
  title: 'Admin | 库洛米',
  ogTitle: 'Admin | 库洛米',
  description: '库洛米 is A Web Developer. Code for Fun.',
  ogDescription: '库洛米 is A Web Developer. Code for Fun.',
})
</script>

<template>
  <div>
    <NuxtLayout name="admin-home">
      <AdminHeader />
    </NuxtLayout>
    <RouterView />
  </div>
</template>
