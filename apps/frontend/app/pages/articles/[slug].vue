<script setup lang="ts">
import type { ApiPostPostDocument } from '@drovovoz/api-client'

const route = useRoute()
const { find } = useStrapi()

const { data, pending, refresh, error } = await useAsyncData(
  `post-${route.params.id}`,
  async () => {
    try {
      return await find<ApiPostPostDocument>('posts', {
        filters: {
          slug: {
            $eq: route.params.slug as string,
          },
        },
      })
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: 'Статья не найдена',
      })
    }
  }
)
</script>

<template>
  <MDC :value="data.data[0].content" />
</template>

<style scoped></style>
