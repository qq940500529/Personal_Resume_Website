<template>
  <div class="contact">
    <!-- 页面标题 -->
    <section class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
      <div class="container-custom px-4">
        <h1 class="heading-1 mb-4 animate-fade-in">联系我</h1>
        <p class="text-xl max-w-3xl animate-slide-up animate-delay-100">
          如果您对我的简历感兴趣，或者有任何问题，欢迎随时联系我。
        </p>
      </div>
    </section>

    <!-- 联系信息和表单 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- 联系信息 -->
          <div class="animate-slide-up">
            <h2 class="heading-2 text-gray-800 mb-6">联系信息</h2>
            <p class="text-gray-600 mb-8">
              您可以通过以下方式联系我，我会尽快回复您的消息。无论是工作机会、项目合作还是技术交流，我都非常期待与您沟通。
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">邮箱</h3>
                  <p class="text-gray-600">{{ contact.email }}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">电话</h3>
                  <p class="text-gray-600">{{ contact.phone }}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">地址</h3>
                  <p class="text-gray-600">{{ contact.address }}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">微信</h3>
                  <p class="text-gray-600">{{ contact.wechat }}</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">社交媒体</h3>
              <div class="flex space-x-4">
                <a href="#" class="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- 联系表单 -->
          <div class="animate-slide-up animate-delay-200">
            <div class="card p-6 md:p-8">
              <h2 class="heading-2 text-gray-800 mb-6">发送消息</h2>
              <form @submit.prevent="submitForm">
                <div class="mb-4">
                  <label for="name" class="label">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="formData.name" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                </div>
                
                <div class="mb-4">
                  <label for="email" class="label">邮箱</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="formData.email" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                </div>
                
                <div class="mb-4">
                  <label for="subject" class="label">主题</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="formData.subject" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  >
                </div>
                
                <div class="mb-6">
                  <label for="message" class="label">消息</label>
                  <textarea 
                    id="message" 
                    v-model="formData.message" 
                    rows="5" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  class="btn btn-primary w-full"
                  :disabled="formSubmitting"
                >
                  <span v-if="formSubmitting">发送中...</span>
                  <span v-else>发送消息</span>
                </button>
                
                <div v-if="formSuccess" class="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                  消息已发送成功！我会尽快回复您。
                </div>
                
                <div v-if="formError" class="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                  发送失败，请稍后再试。
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 地图 -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">位置</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="card overflow-hidden h-96">
          <!-- 这里可以嵌入实际的地图，这里用一个占位符代替 -->
          <div class="w-full h-full bg-gray-200 flex items-center justify-center">
            <div class="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-gray-600">{{ contact.address }}</p>
              <p class="text-gray-500 text-sm mt-2">上海市，中国</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题 -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="heading-2 text-gray-800 mb-4">常见问题</h2>
          <div class="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6 last:mb-0">
            <div 
              @click="toggleFaq(index)" 
              class="flex justify-between items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300"
            >
              <h3 class="text-lg font-semibold text-gray-800">{{ faq.question }}</h3>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 text-gray-500 transition-transform duration-300" 
                :class="{ 'transform rotate-180': faq.open }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div 
              v-show="faq.open" 
              class="p-4 bg-white border border-gray-100 rounded-b-lg mt-1 text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 行动号召 -->
    <section class="section bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div class="container-custom text-center">
        <h2 class="heading-2 mb-6">准备好开始合作了吗？</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          如果您对我的简历感兴趣，或者有任何问题，请随时联系我。我期待与您的合作！
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <ResumeDownload buttonText="下载简历" class="bg-white text-primary-600 hover:bg-gray-100" />
          <a href="mailto:example@email.com" class="btn btn-outline border-white text-white hover:bg-white/10">
            发送邮件
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useResumeStore } from '../store/resumeStore'
import ResumeDownload from '../components/ResumeDownload.vue'

const resumeStore = useResumeStore()
const contact = computed(() => resumeStore.contact)

// 表单数据
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formSubmitting = ref(false)
const formSuccess = ref(false)
const formError = ref(false)

// 提交表单
const submitForm = () => {
  formSubmitting.value = true
  formSuccess.value = false
  formError.value = false
  
  // 模拟表单提交
  setTimeout(() => {
    formSubmitting.value = false
    formSuccess.value = true
    
    // 重置表单
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }, 1500)
}

// FAQ数据
const faqs = ref([
  {
    question: '您目前的求职状态是什么？',
    answer: '我目前正在积极寻找车辆工程相关的全职工作机会，特别是在新能源汽车和智能驾驶领域。',
    open: true
  },
  {
    question: '您是否愿意考虑异地工作？',
    answer: '是的，我对全国范围内的工作机会持开放态度，特别是北京、上海、广州、深圳等汽车产业发达的城市。',
    open: false
  },
  {
    question: '您能否提供更多项目案例或作品集？',
    answer: '当然可以。除了简历网站上展示的项目外，我还有一些其他的项目案例和技术报告。如果您有兴趣，请通过邮件联系我，我很乐意提供更详细的作品集。',
    open: false
  },
  {
    question: '您期望的工作方向是什么？',
    answer: '我希望能够从事新能源汽车电池管理系统、智能驾驶辅助系统或汽车电子控制系统相关的研发工作，这些领域与我的专业背景和兴趣最为匹配。',
    open: false
  }
])

// 切换FAQ开关状态
const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>
