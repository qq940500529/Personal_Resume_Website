<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20 md:py-32">
      <div class="container-custom px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
            <h1 class="heading-1 mb-6">
              <span class="block">你好，我是</span>
              <span class="block text-5xl sm:text-6xl font-bold mt-2">{{ basicInfo.name }}</span>
            </h1>
            <h2 class="text-2xl sm:text-3xl mb-6 text-primary-100">{{ basicInfo.title }}</h2>
            <p class="text-lg mb-8 max-w-lg">{{ basicInfo.bio }}</p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/contact" class="btn btn-primary bg-white text-primary-600 hover:bg-gray-100">
                联系我
              </router-link>
              <router-link to="/projects" class="btn btn-outline border-white text-white hover:bg-white/10">
                查看项目
              </router-link>
            </div>
          </div>
          <div class="md:w-1/2 flex justify-center animate-fade-in">
            <div class="relative">
              <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img :src="basicInfo.avatar" alt="个人照片" class="w-full h-full object-cover" />
              </div>
              <div class="absolute -bottom-4 -right-4 bg-white text-primary-600 rounded-full p-4 shadow-lg animate-bounce-slow">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我简介 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">关于我</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-1/2">
            <div class="card p-6 h-full">
              <h3 class="heading-3 text-primary-600 mb-4">教育背景</h3>
              <div v-for="(edu, index) in education" :key="edu.id" 
                class="mb-6 last:mb-0 animate-slide-up" 
                :style="{ animationDelay: `${index * 100}ms` }">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-xl font-bold">{{ edu.school }}</h4>
                  <span class="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded">{{ edu.date }}</span>
                </div>
                <p class="text-lg text-gray-700 mb-1">{{ edu.degree }}</p>
                <p class="text-gray-600">{{ edu.description }}</p>
              </div>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="card p-6 h-full">
              <h3 class="heading-3 text-primary-600 mb-4">工作经验</h3>
              <div v-for="(exp, index) in experience" :key="exp.id" 
                class="mb-6 last:mb-0 animate-slide-up" 
                :style="{ animationDelay: `${index * 100}ms` }">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="text-xl font-bold">{{ exp.company }}</h4>
                  <span class="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded">{{ exp.date }}</span>
                </div>
                <p class="text-lg text-gray-700 mb-1">{{ exp.position }}</p>
                <p class="text-gray-600">{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能展示 -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">我的技能</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(skillGroup, groupIndex) in skills" :key="skillGroup.id" 
            class="card p-6 animate-slide-up" 
            :style="{ animationDelay: `${groupIndex * 200}ms` }">
            <h3 class="heading-3 text-primary-600 mb-6">{{ skillGroup.category }}</h3>
            <div v-for="(skill, skillIndex) in skillGroup.items" :key="skillIndex" class="mb-4 last:mb-0">
              <div class="flex justify-between mb-1">
                <span class="font-medium">{{ skill.name }}</span>
                <span>{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full" :style="{ width: `${skill.level}%` }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目展示 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">项目经验</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            以下是我参与的一些项目，展示了我在车辆工程领域的专业技能和经验。
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in featuredProjects" :key="project.id" 
            class="card overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg animate-slide-up" 
            :style="{ animationDelay: `${index * 200}ms` }">
            <div class="h-48 overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-gray-800">{{ project.title }}</h3>
              <p class="text-sm text-gray-500 mb-3">{{ project.date }}</p>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" 
                  class="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                  {{ tag }}
                </span>
              </div>
              <router-link :to="`/projects#project-${project.id}`" class="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                查看详情
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        <div class="text-center mt-10">
          <router-link to="/projects" class="btn btn-primary">
            查看所有项目
          </router-link>
        </div>
      </div>
    </section>

    <!-- 联系我 -->
    <section class="section bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 mb-4">联系我</h2>
          <div class="w-20 h-1 bg-white mx-auto"></div>
          <p class="mt-4 max-w-2xl mx-auto">
            如果您对我的简历感兴趣，或者有任何问题，欢迎随时联系我。
          </p>
        </div>
        <div class="flex flex-col md:flex-row justify-center items-center gap-8">
          <div class="flex items-center">
            <div class="bg-white/20 p-4 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-white/80">邮箱</p>
              <p class="font-medium">{{ contact.email }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="bg-white/20 p-4 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-white/80">电话</p>
              <p class="font-medium">{{ contact.phone }}</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="bg-white/20 p-4 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-white/80">地址</p>
              <p class="font-medium">{{ contact.address }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-10">
          <router-link to="/contact" class="btn btn-primary bg-white text-primary-600 hover:bg-gray-100">
            发送消息
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useResumeStore } from '../store/resumeStore'

const resumeStore = useResumeStore()

const basicInfo = computed(() => resumeStore.basicInfo)
const education = computed(() => resumeStore.education)
const experience = computed(() => resumeStore.experience)
const skills = computed(() => resumeStore.skills)
const projects = computed(() => resumeStore.projects)
const contact = computed(() => resumeStore.contact)

// 只显示前3个项目
const featuredProjects = computed(() => {
  return projects.value.slice(0, 3)
})
</script>
