<script setup lang="ts">
import type { ApiPostPostDocument } from '@drovovoz/api-client'

const { find } = useStrapi()
const { data: posts } = await useAsyncData('posts', () =>
  find<ApiPostPostDocument>('posts', {
    fields: ['title', 'slug', 'documentId', 'publishedAt', 'excerpt'],
    populate: {
      cover: {
        fields: ['url', 'width', 'height'],
      },
    } as any,
  })
)
</script>

<template>
  <UPage>
    <UPageHero title="Blog">
      <pre>{{ posts }}</pre>
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
          />
        </UBlogPosts>
      </UContainer>
    </UPageBody>
  </UPage>
</template>

<style scoped></style>
