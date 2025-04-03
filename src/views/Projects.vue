<template>
  <div class="projects">
    <!-- 页面标题 -->
    <section class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
      <div class="container-custom px-4">
        <h1 class="heading-1 mb-4 animate-fade-in">项目经验</h1>
        <p class="text-xl max-w-3xl animate-slide-up animate-delay-100">
          以下是我在车辆工程领域参与的一些项目，展示了我的专业技能和实践经验。
        </p>
      </div>
    </section>

    <!-- 项目列表 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">我的项目</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            这些项目涵盖了新能源汽车技术、智能驾驶系统和汽车结构优化等多个方面。
          </p>
        </div>

        <!-- 项目过滤器 -->
        <div class="mb-10">
          <div class="flex flex-wrap justify-center gap-2 mb-6">
            <button 
              @click="activeFilter = 'all'" 
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              :class="activeFilter === 'all' ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
              全部项目
            </button>
            <button 
              v-for="(tag, index) in uniqueTags" 
              :key="index"
              @click="activeFilter = tag" 
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              :class="activeFilter === tag ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'">
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- 项目卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id" 
            :id="`project-${project.id}`"
            class="card overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg animate-slide-up">
            <div class="h-56 overflow-hidden">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-gray-800">{{ project.title }}</h3>
              <p class="text-sm text-gray-500 mb-3">{{ project.date }}</p>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="(tag, tagIndex) in project.tags" 
                  :key="tagIndex" 
                  class="text-xs px-2 py-1 rounded"
                  :class="tag === activeFilter ? 'bg-primary-500 text-white' : 'bg-primary-100 text-primary-800'">
                  {{ tag }}
                </span>
              </div>
              <button 
                @click="openProjectDetails(project)" 
                class="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                查看详情
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目详情模态框 -->
    <div v-if="selectedProject" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- 背景遮罩 -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="closeProjectDetails"></div>

        <!-- 模态框内容 -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div class="absolute top-0 right-0 pt-4 pr-4">
            <button 
              @click="closeProjectDetails" 
              class="bg-white rounded-full p-2 hover:bg-gray-100 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 class="text-2xl font-bold text-gray-900 mb-4" id="modal-title">
                  {{ selectedProject.title }}
                </h3>
                <div class="mb-6">
                  <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-64 object-cover rounded-lg" />
                </div>
                <div class="mb-4">
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">项目概述</h4>
                  <p class="text-gray-600">{{ selectedProject.description }}</p>
                </div>
                <div class="mb-4">
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">项目时间</h4>
                  <p class="text-gray-600">{{ selectedProject.date }}</p>
                </div>
                <div class="mb-4">
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">使用技术</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="(tag, tagIndex) in selectedProject.tags" 
                      :key="tagIndex" 
                      class="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded">
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <div class="mb-4">
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">项目详情</h4>
                  <div class="prose prose-sm max-w-none text-gray-600">
                    <p>在这个项目中，我负责了以下工作：</p>
                    <ul class="list-disc pl-5 space-y-2 mt-2">
                      <li>需求分析与系统设计</li>
                      <li>核心功能实现与测试</li>
                      <li>性能优化与问题解决</li>
                      <li>项目文档编写</li>
                    </ul>
                    <p class="mt-4">通过这个项目，我深入理解了相关技术原理，并提升了实践能力。项目成功解决了实际问题，获得了良好的反馈。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              @click="closeProjectDetails" 
              class="btn btn-primary w-full sm:w-auto">
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 项目统计 -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">项目统计</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <div class="text-4xl font-bold text-primary-600 mb-2">{{ projects.length }}</div>
            <p class="text-gray-600">完成项目</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-100">
            <div class="text-4xl font-bold text-primary-600 mb-2">{{ uniqueTags.length }}</div>
            <p class="text-gray-600">技术领域</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-200">
            <div class="text-4xl font-bold text-primary-600 mb-2">2</div>
            <p class="text-gray-600">获奖项目</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-300">
            <div class="text-4xl font-bold text-primary-600 mb-2">18</div>
            <p class="text-gray-600">月项目经验</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目流程 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">我的项目流程</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            我遵循系统化的项目流程，确保每个项目都能高质量完成。
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span class="text-2xl font-bold">1</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">需求分析</h3>
            <p class="text-gray-600">深入理解项目需求，明确目标和范围，制定详细的项目计划。</p>
          </div>
          <div class="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-100">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span class="text-2xl font-bold">2</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">设计方案</h3>
            <p class="text-gray-600">基于需求进行系统设计，包括结构设计、功能设计和接口设计等。</p>
          </div>
          <div class="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-200">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span class="text-2xl font-bold">3</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">实施开发</h3>
            <p class="text-gray-600">按照设计方案进行开发实施，包括建模、仿真、编程和测试等工作。</p>
          </div>
          <div class="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-300">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span class="text-2xl font-bold">4</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">验证优化</h3>
            <p class="text-gray-600">对项目进行全面测试和验证，分析结果并进行优化，确保达到预期目标。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">合作伙伴</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            在项目过程中，我有幸与以下机构和企业合作。
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300">
            <div class="text-center">
              <div class="font-bold text-xl text-gray-700">上汽集团</div>
              <div class="text-sm text-gray-500">实习合作</div>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300">
            <div class="text-center">
              <div class="font-bold text-xl text-gray-700">博世汽车</div>
              <div class="text-sm text-gray-500">实习合作</div>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300">
            <div class="text-center">
              <div class="font-bold text-xl text-gray-700">上海交大</div>
              <div class="text-sm text-gray-500">学术合作</div>
            </div>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300">
            <div class="text-center">
              <div class="font-bold text-xl text-gray-700">新能源研究所</div>
              <div class="text-sm text-gray-500">技术合作</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useResumeStore } from '../store/resumeStore'
import { onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const resumeStore = useResumeStore()
const route = useRoute()
const projects = computed(() => resumeStore.projects)
const activeFilter = ref('all')
const selectedProject = ref(null)

// 获取所有唯一的标签
const uniqueTags = computed(() => {
  const tags = new Set()
  projects.value.forEach(project => {
    project.tags.forEach(tag => {
      tags.add(tag)
    })
  })
  return Array.from(tags)
})

// 根据筛选条件过滤项目
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  } else {
    return projects.value.filter(project => 
      project.tags.includes(activeFilter.value)
    )
  }
})

// 打开项目详情
const openProjectDetails = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden' // 防止背景滚动
}

// 关闭项目详情
const closeProjectDetails = () => {
  selectedProject.value = null
  document.body.style.overflow = '' // 恢复滚动
}

// 处理 ESC 键关闭模态框
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && selectedProject.value) {
    closeProjectDetails()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  
  // 检查URL中是否有项目锚点
  if (route.hash) {
    const projectId = parseInt(route.hash.replace('#project-', ''))
    if (!isNaN(projectId)) {
      const project = projects.value.find(p => p.id === projectId)
      if (project) {
        setTimeout(() => {
          openProjectDetails(project)
        }, 500)
      }
    }
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>
