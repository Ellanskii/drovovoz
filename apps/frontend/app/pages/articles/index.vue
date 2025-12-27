<script setup lang="ts">
import type { ApiPostPostDocument } from '@drovovoz/api-client'

const { find } = useStrapi()
const { data: posts } = await useAsyncData('posts', () =>
  find<ApiPostPostDocument>('posts', {
    fields: ['title', 'slug', 'documentId', 'publishedAt', 'excerpt'],
  }),
  {
    transform: ({data}) => data.map(post => ({
      title: post.title,
      slug: post.slug,
      documentId: post.documentId,
      date: post.publishedAt,
      description: post.excerpt,
    })),
  }
)
</script>

<template>
  <UPage>
    <UPageHero title="Blog">

    </UPageHero>

    <UPageBody>
      <UContainer>
        <UBlogPosts>
          <UBlogPost v-for="post in posts" :key="post.documentId" v-bind="post" :to="`/articles/${post.slug}`" />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<style scoped></style>
