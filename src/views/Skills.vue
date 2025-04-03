<template>
  <div class="skills">
    <!-- 页面标题 -->
    <section class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
      <div class="container-custom px-4">
        <h1 class="heading-1 mb-4 animate-fade-in">我的技能</h1>
        <p class="text-xl max-w-3xl animate-slide-up animate-delay-100">
          作为车辆工程专业毕业生，我掌握了多种专业技能和软件工具，能够胜任汽车行业的各种挑战。
        </p>
      </div>
    </section>

    <!-- 技能概述 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">技能概述</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            我的技能组合涵盖了车辆工程的多个方面，从专业技术知识到软件应用能力，使我能够全面参与汽车设计、开发和测试工作。
          </p>
        </div>

        <!-- 技能分类展示 -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="(skillGroup, groupIndex) in skills" :key="skillGroup.id" 
            class="animate-slide-up" 
            :style="{ animationDelay: `${groupIndex * 200}ms` }">
            <div class="card p-6 h-full">
              <div class="flex items-center mb-6">
                <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                  <svg v-if="skillGroup.category === '专业技能'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <svg v-else-if="skillGroup.category === '软件技能'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 class="heading-3 text-primary-600">{{ skillGroup.category }}</h3>
              </div>
              <div v-for="(skill, skillIndex) in skillGroup.items" :key="skillIndex" class="mb-6 last:mb-0">
                <div class="flex justify-between mb-1">
                  <span class="font-medium">{{ skill.name }}</span>
                  <span>{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div class="bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    :style="{ width: `${isVisible ? skill.level : 0}%` }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 专业技能详情 -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">专业技能详情</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <h3 class="text-xl font-bold text-primary-600 mb-4">汽车设计与分析</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>车身结构设计与优化</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>底盘系统设计与分析</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>有限元分析与结构优化</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>车辆动力学仿真与分析</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>空气动力学分析</span>
              </li>
            </ul>
          </div>
          <div class="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-100">
            <h3 class="text-xl font-bold text-primary-600 mb-4">新能源汽车技术</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>电池管理系统设计</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>电驱动系统分析</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>能量回收系统优化</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>热管理系统设计</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>充电系统集成</span>
              </li>
            </ul>
          </div>
          <div class="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-200">
            <h3 class="text-xl font-bold text-primary-600 mb-4">智能驾驶系统</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>ADAS系统理解与应用</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>传感器融合技术</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>计算机视觉应用</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>路径规划算法</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>车辆控制系统</span>
              </li>
            </ul>
          </div>
          <div class="card p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-300">
            <h3 class="text-xl font-bold text-primary-600 mb-4">汽车电子控制</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>ECU开发与测试</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>CAN总线通信</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>AUTOSAR架构应用</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>嵌入式系统开发</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>故障诊断系统</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 软件技能 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">软件技能</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
            我熟练掌握多种汽车工程领域常用的专业软件工具，能够高效完成设计、分析和仿真任务。
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span class="text-xl font-bold">CA</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">CATIA</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-primary-500 h-2.5 rounded-full" style="width: 90%"></div>
            </div>
            <p class="mt-2 text-sm text-gray-500">精通</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-100">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span class="text-xl font-bold">ML</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">MATLAB</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-primary-500 h-2.5 rounded-full" style="width: 85%"></div>
            </div>
            <p class="mt-2 text-sm text-gray-500">熟练</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-200">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span class="text-xl font-bold">AC</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">AutoCAD</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-primary-500 h-2.5 rounded-full" style="width: 80%"></div>
            </div>
            <p class="mt-2 text-sm text-gray-500">熟练</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-300">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span class="text-xl font-bold">AN</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">ANSYS</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-primary-500 h-2.5 rounded-full" style="width: 75%"></div>
            </div>
            <p class="mt-2 text-sm text-gray-500">良好</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-400">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <span class="text-xl font-bold">CS</span>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">CarSim</h3>
            <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div class="bg-primary-500 h-2.5 rounded-full" style="width: 70%"></div>
            </div>
            <p class="mt-2 text-sm text-gray-500">良好</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能提升计划 -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">技能提升计划</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card p-6 border-l-4 border-primary-500 hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <h3 class="text-xl font-bold text-primary-600 mb-4">短期目标（6个月内）</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>深入学习电池管理系统设计与优化</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>提升ANSYS有限元分析技能</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>学习汽车轻量化设计方法</span>
              </li>
            </ul>
          </div>
          <div class="card p-6 border-l-4 border-secondary-500 hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-100">
            <h3 class="text-xl font-bold text-secondary-600 mb-4">长期目标（1-2年）</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>掌握自动驾驶算法开发</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>深入研究车联网技术</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>获取汽车行业相关专业认证</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useResumeStore } from '../store/resumeStore'

const resumeStore = useResumeStore()
const skills = computed(() => resumeStore.skills)

// 控制技能条动画
const isVisible = ref(false)

onMounted(() => {
  // 延迟一点时间再显示技能条，以便有动画效果
  setTimeout(() => {
    isVisible.value = true
  }, 500)
})
</script>
