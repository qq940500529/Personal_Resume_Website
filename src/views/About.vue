<template>
  <div class="about">
    <!-- 页面标题 -->
    <section class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
      <div class="container-custom px-4">
        <h1 class="heading-1 mb-4 animate-fade-in">关于我</h1>
        <p class="text-xl max-w-3xl animate-slide-up animate-delay-100">
          了解我的背景、教育经历、专业技能和个人兴趣。
        </p>
      </div>
    </section>

    <!-- 个人简介 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row gap-12 items-center">
          <div class="lg:w-1/3 animate-fade-in">
            <div class="relative">
              <div class="w-64 h-64 sm:w-80 sm:h-80 rounded-lg overflow-hidden border-4 border-primary-100 shadow-xl mx-auto">
                <img :src="basicInfo.avatar" alt="个人照片" class="w-full h-full object-cover" />
              </div>
              <div class="absolute -bottom-4 -right-4 bg-primary-500 text-white rounded-full p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div class="mt-8 text-center">
              <h2 class="text-2xl font-bold text-gray-800">{{ basicInfo.name }}</h2>
              <p class="text-primary-600 font-medium">{{ basicInfo.title }}</p>
              <div class="flex justify-center mt-4 space-x-4">
                <a href="#" class="text-gray-500 hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-primary-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="lg:w-2/3 animate-slide-up animate-delay-200">
            <h2 class="heading-2 text-primary-600 mb-6">个人简介</h2>
            <div class="prose prose-lg max-w-none">
              <p class="mb-4">{{ basicInfo.bio }}</p>
              <p class="mb-4">
                作为一名车辆工程专业的毕业生，我对汽车行业充满热情，尤其对新能源汽车和智能驾驶技术有浓厚的兴趣。在学习期间，我不仅掌握了扎实的理论知识，还通过实习和项目实践积累了宝贵的实际经验。
              </p>
              <p class="mb-4">
                我擅长使用CATIA、MATLAB/Simulink等专业软件进行汽车设计和仿真分析，并且对汽车电子控制系统有一定的了解。我相信，随着汽车行业向电动化、智能化、网联化方向发展，我的专业知识和技能将能够为行业的创新和发展做出贡献。
              </p>
              <p>
                在未来的职业发展中，我希望能够参与到前沿的汽车技术研发工作中，不断学习和提升自己的专业能力，成为汽车工程领域的专业人才。
              </p>
            </div>
            <div class="mt-8 flex flex-wrap gap-4">
              <div class="flex items-center">
                <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">邮箱</p>
                  <p class="font-medium">{{ contact.email }}</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">电话</p>
                  <p class="font-medium">{{ contact.phone }}</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-500">地址</p>
                  <p class="font-medium">{{ contact.address }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 教育经历 -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">教育经历</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="relative">
            <!-- 时间轴 -->
            <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:translate-x-px"></div>
            
            <!-- 教育项目 -->
            <div v-for="(edu, index) in education" :key="edu.id" class="relative mb-12 last:mb-0">
              <div class="flex flex-col md:flex-row items-start animate-fade-in" :style="{ animationDelay: `${index * 200}ms` }">
                <!-- 时间点 -->
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white"></div>
                
                <!-- 左侧内容（在移动端是顶部内容） -->
                <div class="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <div class="md:hidden w-4 h-4 bg-primary-500 rounded-full border-4 border-white mb-4"></div>
                  <span class="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded text-sm font-medium mb-2">
                    {{ edu.date }}
                  </span>
                  <h3 class="text-xl font-bold text-gray-800">{{ edu.school }}</h3>
                </div>
                
                <!-- 右侧内容（在移动端是底部内容） -->
                <div class="md:w-1/2 md:pl-12">
                  <div class="card p-6">
                    <h4 class="text-lg font-semibold text-primary-600 mb-2">{{ edu.degree }}</h4>
                    <p class="text-gray-600">{{ edu.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 证书和奖项 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">证书和奖项</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(cert, index) in certificates" :key="cert.id" 
            class="card p-6 border-t-4 border-primary-500 hover:shadow-lg transition-shadow duration-300 animate-slide-up"
            :style="{ animationDelay: `${index * 100}ms` }">
            <div class="flex items-start">
              <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-800 mb-1">{{ cert.name }}</h3>
                <div class="flex items-center text-sm text-gray-500 mb-2">
                  <span>{{ cert.issuer }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ cert.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 兴趣爱好 -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">兴趣爱好</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">阅读</h3>
            <p class="text-gray-600">喜欢阅读汽车技术和科技创新相关书籍</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-100">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">旅行</h3>
            <p class="text-gray-600">喜欢探索不同城市的汽车文化和博物馆</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-200">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">数据分析</h3>
            <p class="text-gray-600">喜欢分析汽车性能数据和行业趋势</p>
          </div>
          <div class="card p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-slide-up animate-delay-300">
            <div class="bg-primary-100 text-primary-600 p-4 rounded-full mx-auto mb-4 w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2">观看赛车</h3>
            <p class="text-gray-600">热爱F1和其他汽车赛事</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 下载简历 -->
    <section class="section bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="heading-2 mb-6">下载我的简历</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          想了解更多关于我的专业背景和技能？下载我的完整简历PDF文件。
        </p>
        <ResumeDownload buttonText="下载简历" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useResumeStore } from '../store/resumeStore'
import ResumeDownload from '../components/ResumeDownload.vue'

const resumeStore = useResumeStore()

const basicInfo = computed(() => resumeStore.basicInfo)
const education = computed(() => resumeStore.education)
const certificates = computed(() => resumeStore.certificates)
const contact = computed(() => resumeStore.contact)
</script>
