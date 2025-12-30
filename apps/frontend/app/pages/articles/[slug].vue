<script setup lang="ts">
import type { ApiPostPostDocument } from '@drovovoz/api-client'

const route = useRoute()
const { find } = useStrapi()

const { data: post, pending, refresh, error } = await useAsyncData(
  `post-${route.params.slug}`, () => find<ApiPostPostDocument>('posts', {
    filters: {
      slug: {
        $eq: route.params.slug as string,
      },
    },
  }),
  {
    transform: ({ data }) => data[0] || null,
  }
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    message: 'Статья не найдена',
  })
}

useSeoMeta({
  title: post.value?.title,
  description: post.value?.excerpt,
  ogTitle: post.value?.title,
  ogDescription: post.value?.excerpt,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UPage>
    <article v-if="post">
      <UPageHero :title="post.title" :description="post.excerpt">
        <!-- <pre>{{ posts }}</pre> -->
      </UPageHero>

      <UPageBody as="article">
        <UContainer>
          <MDC :value="post.content" />
        </UContainer>
      </UPageBody>
    </article>
  </UPage>
</template>

<style scoped></style>
