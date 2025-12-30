<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
import type { ApiPostPostDocument } from '@drovovoz/api-client'
import { ca } from '@nuxt/ui/runtime/locale/index.js'

const page = useRouteQuery('page', 1)
const p = ref(Number(page.value)) // for UPagination v-model

const { find } = useStrapi()
const { data: posts } = await useAsyncData('articles', () =>
  find<ApiPostPostDocument>('posts', {
    fields: ['title', 'slug', 'documentId', 'publishedAt', 'excerpt', 'views'],
    populate: {
      cover: {
        fields: ['url', 'width', 'height'],
      },
      category: {
        fields: ['name', 'slug'],
      },
      author: {
        fields: ['username', 'id', 'email'],
      },
    } as any,
    pagination: {
      page: page.value,
      pageSize: 4,
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
            :badge="post.category?.name"
            :authors="[{ name: post.author.username, avatar: {text: 'OB'} }]"
            :image="post.cover && `http://localhost:1337${post.cover.url}`"
            :to="`/articles/${post.slug}`"
            variant="subtle"
          >
            <template #badge>
              <UButton
                :label="post.category?.name"
                :to="`/articles/category/${post.category?.slug}`"
                size="xs"
                variant="outline"
                class="relative"
                tabindex="-1"
              />
            </template>
          </UBlogPost>
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
