<template>
  <div class="not-found">
    <section class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
      <div class="container-custom px-4">
        <h1 class="heading-1 mb-4 animate-fade-in">404 - 页面未找到</h1>
        <p class="text-xl max-w-3xl animate-slide-up animate-delay-100">
          您访问的页面不存在或已被移除。
        </p>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container-custom text-center">
        <div class="max-w-2xl mx-auto">
          <div class="mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">页面未找到</h2>
          <p class="text-gray-600 mb-8">
            抱歉，您访问的页面不存在或已被移除。请检查URL是否正确，或返回首页继续浏览。
          </p>
          <div class="flex justify-center">
            <router-link to="/" class="btn btn-primary">
              返回首页
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 404页面不需要特殊逻辑
</script>
