<script setup lang="ts">
import { useUserStore } from '~/store/UserStore'

const { logout } = useUserStore()

const links = [[{
  label: '发布',
  icon: 'i-ri:edit-fill',
  to: '/violet/publish',
}, {
  label: '文章',
  icon: 'i-ri:article-fill',
  to: '/violet/articles',
}], [{
  label: '退出登录',
  icon: 'i-ri:logout-circle-line',
  to: '/',
  click: () => {
    logout()
  },
}]]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>
