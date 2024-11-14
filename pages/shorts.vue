<script lang="ts" setup>
import type { IArticle } from "~/server/types";
import { useArticleStore } from "~/store/ArticleStore";

const shorts: Ref<IArticle[]> = ref([]);

const options: Ref<string[]> = ref(["按日期排序", "按阅读量排序"]);

const isLoading = ref<boolean>(false);

const { category } = useArticleStore();

const selected = ref("按日期排序");

async function getArticles() {
  const data = await category("short");

  data.forEach((article) => {
    let include = false;
    shorts.value.forEach((existArticle) => {
      if (article._id === existArticle._id) include = true;
    });
    if (!include) shorts.value.push(article);
  });

  handleSortByChange(selected.value);
}

getArticles();

async function handleParamsChange(searchVal: string) {
  if (searchVal === "ALL") {
    getArticles();
    return;
  }
  if (searchVal !== "") {
    isLoading.value = true;
    const { data } = await useFetch<IArticle[]>("/api/search/orama", {
      method: "POST",
      body: {
        category: "short",
        keyword: searchVal,
      },
    });

    shorts.value = [];

    if (data.value) {
      data.value.forEach((article) => {
        shorts.value.push(article);
      });
    }

    isLoading.value = false;
  } else {
    getArticles();
  }
}

async function handleSortByChange(selectVal: string) {
  selected.value = selectVal;
  if (selectVal === options.value[0]) {
    shorts.value.sort((a, b) => {
      // @ts-expect-error no error
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  } else {
    shorts.value.sort((a, b) => {
      return b.views - a.views;
    });
  }
}

useSeoMeta({
  title: "Short | 库洛米",
  ogTitle: "Short | 库洛米",
  description: "库洛米 is A Web Developer. Code for Fun.",
  ogDescription: "库洛米 is A Web Developer. Code for Fun.",
});

const colorModel = useColorMode();

defineOgImage({
  component: "NuxtSeo",
  props: {
    title: "Short | 库洛米",
    description: "库洛米 is A Web Developer. Code for Fun.",
    theme: "#a78bfa",
    colorMode: () => (colorModel.preference === "dark" ? "dark" : "light"),
  },
});
</script>

<template>
  <div>
    <NuxtLayout name="common-view">
      <template #title> Short </template>
      <template #description>
        Short articles, usually some notes and code snippets.
      </template>
      <Search
        :is-loading="isLoading"
        category="short"
        @params-change="handleParamsChange"
        @sort-by-change="handleSortByChange"
      />
      <ShortCards :articles="shorts" />
    </NuxtLayout>
  </div>
</template>
