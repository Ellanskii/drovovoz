<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
import type { ApiPostPostDocument } from '@drovovoz/api-client'

const page = useRouteQuery('page', 1)
const p = ref(Number(page.value)) // for UPagination v-model

const { find } = useStrapi()
const { data: posts } = await useAsyncData('articles', () =>
  find<ApiPostPostDocument>('posts', {
    fields: ['title', 'slug', 'documentId', 'publishedAt', 'excerpt'],
    populate: {
      cover: {
        fields: ['url', 'width', 'height'],
      },
    } as any,
    pagination: {
      page: page.value,
      pageSize: 2,
    },
  }),
  {
    watch: [ page ],
  }
)
</script>

<template>
  <UPage>
    <UPageHero title="Blog">

    </UPageHero>

    <UPageBody>
      <UContainer>
        <UBlogPosts v-if="posts">
          <UBlogPost
            v-for="post in posts.data"
            :key="post.documentId"
            :title="post.title"
            :date="post.publishedAt"
            :description="post.excerpt"
            :image="post.cover && `http://localhost:1337${post.cover.url}`"
            :to="`/articles/${post.slug}`"
            variant="subtle"
          />
        </UBlogPosts>
      </UContainer>

      <div v-if="posts && posts.meta.pagination.pageCount > 1" class="flex justify-center">
        <UPagination
          v-model:page="p"
          :to="(page: number) => ({ query: { page }})"
          :items-per-page="posts.meta.pagination.pageSize"
          :total="posts.meta.pagination.total"
        />
      </div>
    </UPageBody>
  </UPage>
</template>

<style scoped></style>
