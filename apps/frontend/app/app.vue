<script setup lang="ts">
import type { ApiPostPostDocument } from '@drovovoz/api-client'

const { find } = useStrapi()
const { data: posts } = await find<ApiPostPostDocument>('posts')

const { locales, setLocale } = useI18n()

const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div>
    <h1>{{ $t('welcome') }}</h1>
    <h2>{{ $t('posts') }}</h2>
    <pre>{{ posts }}</pre>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <NuxtTime :datetime="post.publishedAt" :locale="$i18n.locale" />
      </li>
    </ul>
    
    <!-- Language switcher -->
    <div>
      <label>{{ $t('language') }}: {{ $i18n.locale }}</label>
      <ul>
        <li v-for="locale in locales" :key="locale.code">
          <NuxtLink :href="switchLocalePath(locale.code)">{{ locale.name }}{{ switchLocalePath(locale.code) }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
