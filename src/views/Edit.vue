<template>
  <div class="edit">
    <!-- 页面标题 -->
    <section class="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
      <div class="container-custom px-4">
        <h1 class="heading-1 mb-4 animate-fade-in">编辑简历</h1>
        <p class="text-xl max-w-3xl animate-slide-up animate-delay-100">
          在这里可以编辑和更新您的简历信息。
        </p>
      </div>
    </section>

    <!-- 登录表单 -->
    <section v-if="!isAuthenticated" class="section bg-white">
      <div class="container-custom">
        <div class="max-w-md mx-auto">
          <div class="card p-6 md:p-8">
            <h2 class="heading-2 text-gray-800 mb-6 text-center">请输入密码</h2>
            <form @submit.prevent="authenticate">
              <div class="mb-6">
                <label for="password" class="label">密码</label>
                <input 
                  type="password" 
                  id="password" 
                  v-model="password" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                  placeholder="请输入访问密码"
                >
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary w-full"
                :disabled="authenticating"
              >
                <span v-if="authenticating">验证中...</span>
                <span v-else>登录</span>
              </button>
              
              <div v-if="authError" class="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                密码错误，请重试。
              </div>
            </form>
            <div class="mt-4 text-center text-sm text-gray-500">
              <p>提示：默认密码为 123456</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 编辑表单 -->
    <section v-else class="section bg-white">
      <div class="container-custom">
        <div class="flex justify-between items-center mb-8">
          <h2 class="heading-2 text-gray-800">编辑简历信息</h2>
          <button @click="logout" class="btn btn-outline">
            退出编辑
          </button>
        </div>

        <!-- 编辑表单内容 -->
        <div class="space-y-12">
          <!-- 基本信息 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold text-primary-600 mb-6">基本信息</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="label">姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.basicInfo.name" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="title" class="label">职位</label>
                <input 
                  type="text" 
                  id="title" 
                  v-model="formData.basicInfo.title" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="email" class="label">邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.basicInfo.email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="phone" class="label">电话</label>
                <input 
                  type="text" 
                  id="phone" 
                  v-model="formData.basicInfo.phone" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="location" class="label">所在地</label>
                <input 
                  type="text" 
                  id="location" 
                  v-model="formData.basicInfo.location" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="avatar" class="label">头像URL</label>
                <input 
                  type="text" 
                  id="avatar" 
                  v-model="formData.basicInfo.avatar" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div class="md:col-span-2">
                <label for="bio" class="label">个人简介</label>
                <textarea 
                  id="bio" 
                  v-model="formData.basicInfo.bio" 
                  rows="4" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>
            </div>
            <div class="mt-6">
              <button @click="saveBasicInfo" class="btn btn-primary">保存基本信息</button>
            </div>
          </div>

          <!-- 教育经历 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold text-primary-600 mb-6">教育经历</h3>
            <div v-for="(edu, index) in formData.education" :key="edu.id" class="mb-8 pb-8 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
              <div class="flex justify-between items-start mb-4">
                <h4 class="text-lg font-semibold">教育经历 #{{ index + 1 }}</h4>
                <button @click="removeEducation(edu.id)" class="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label :for="`school-${index}`" class="label">学校</label>
                  <input 
                    type="text" 
                    :id="`school-${index}`" 
                    v-model="edu.school" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div>
                  <label :for="`degree-${index}`" class="label">学位</label>
                  <input 
                    type="text" 
                    :id="`degree-${index}`" 
                    v-model="edu.degree" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div>
                  <label :for="`edu-date-${index}`" class="label">日期</label>
                  <input 
                    type="text" 
                    :id="`edu-date-${index}`" 
                    v-model="edu.date" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div class="md:col-span-2">
                  <label :for="`edu-desc-${index}`" class="label">描述</label>
                  <textarea 
                    :id="`edu-desc-${index}`" 
                    v-model="edu.description" 
                    rows="3" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-4">
              <button @click="addEducation" class="btn btn-outline">添加教育经历</button>
              <button @click="saveEducation" class="btn btn-primary">保存教育经历</button>
            </div>
          </div>

          <!-- 工作经验 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold text-primary-600 mb-6">工作经验</h3>
            <div v-for="(exp, index) in formData.experience" :key="exp.id" class="mb-8 pb-8 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
              <div class="flex justify-between items-start mb-4">
                <h4 class="text-lg font-semibold">工作经验 #{{ index + 1 }}</h4>
                <button @click="removeExperience(exp.id)" class="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label :for="`company-${index}`" class="label">公司</label>
                  <input 
                    type="text" 
                    :id="`company-${index}`" 
                    v-model="exp.company" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div>
                  <label :for="`position-${index}`" class="label">职位</label>
                  <input 
                    type="text" 
                    :id="`position-${index}`" 
                    v-model="exp.position" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div>
                  <label :for="`exp-date-${index}`" class="label">日期</label>
                  <input 
                    type="text" 
                    :id="`exp-date-${index}`" 
                    v-model="exp.date" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div class="md:col-span-2">
                  <label :for="`exp-desc-${index}`" class="label">描述</label>
                  <textarea 
                    :id="`exp-desc-${index}`" 
                    v-model="exp.description" 
                    rows="3" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-4">
              <button @click="addExperience" class="btn btn-outline">添加工作经验</button>
              <button @click="saveExperience" class="btn btn-primary">保存工作经验</button>
            </div>
          </div>

          <!-- 项目经验 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold text-primary-600 mb-6">项目经验</h3>
            <div v-for="(project, index) in formData.projects" :key="project.id" class="mb-8 pb-8 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
              <div class="flex justify-between items-start mb-4">
                <h4 class="text-lg font-semibold">项目 #{{ index + 1 }}</h4>
                <button @click="removeProject(project.id)" class="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label :for="`project-title-${index}`" class="label">项目名称</label>
                  <input 
                    type="text" 
                    :id="`project-title-${index}`" 
                    v-model="project.title" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div>
                  <label :for="`project-date-${index}`" class="label">日期</label>
                  <input 
                    type="text" 
                    :id="`project-date-${index}`" 
                    v-model="project.date" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div>
                  <label :for="`project-image-${index}`" class="label">图片URL</label>
                  <input 
                    type="text" 
                    :id="`project-image-${index}`" 
                    v-model="project.image" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div>
                  <label :for="`project-tags-${index}`" class="label">标签（用逗号分隔）</label>
                  <input 
                    type="text" 
                    :id="`project-tags-${index}`" 
                    v-model="projectTagsString[index]" 
                    @input="updateProjectTags(index)"
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                </div>
                <div class="md:col-span-2">
                  <label :for="`project-desc-${index}`" class="label">描述</label>
                  <textarea 
                    :id="`project-desc-${index}`" 
                    v-model="project.description" 
                    rows="3" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-4">
              <button @click="addProject" class="btn btn-outline">添加项目</button>
              <button @click="saveProjects" class="btn btn-primary">保存项目</button>
            </div>
          </div>

          <!-- 联系信息 -->
          <div class="card p-6">
            <h3 class="text-xl font-bold text-primary-600 mb-6">联系信息</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="contact-email" class="label">邮箱</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  v-model="formData.contact.email" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="contact-phone" class="label">电话</label>
                <input 
                  type="text" 
                  id="contact-phone" 
                  v-model="formData.contact.phone" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="contact-wechat" class="label">微信</label>
                <input 
                  type="text" 
                  id="contact-wechat" 
                  v-model="formData.contact.wechat" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="contact-address" class="label">地址</label>
                <input 
                  type="text" 
                  id="contact-address" 
                  v-model="formData.contact.address" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="contact-github" class="label">GitHub</label>
                <input 
                  type="text" 
                  id="contact-github" 
                  v-model="formData.contact.socialMedia.github" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
              <div>
                <label for="contact-linkedin" class="label">LinkedIn</label>
                <input 
                  type="text" 
                  id="contact-linkedin" 
                  v-model="formData.contact.socialMedia.linkedin" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
              </div>
            </div>
            <div class="mt-6">
              <button @click="saveContact" class="btn btn-primary">保存联系信息</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useResumeStore } from '../store/resumeStore'
import { useAuthStore } from '../store/authStore'

const resumeStore = useResumeStore()
const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.isAuthenticated)
const password = ref('')
const authenticating = ref(false)
const authError = ref(false)

// 表单数据
const formData = ref({
  basicInfo: {},
  education: [],
  experience: [],
  skills: [],
  projects: [],
  certificates: [],
  contact: {
    socialMedia: {}
  }
})

// 项目标签字符串
const projectTagsString = ref([])

// 初始化表单数据
onMounted(() => {
  initFormData()
})

// 初始化表单数据
const initFormData = () => {
  formData.value.basicInfo = { ...resumeStore.basicInfo }
  formData.value.education = JSON.parse(JSON.stringify(resumeStore.education))
  formData.value.experience = JSON.parse(JSON.stringify(resumeStore.experience))
  formData.value.skills = JSON.parse(JSON.stringify(resumeStore.skills))
  formData.value.projects = JSON.parse(JSON.stringify(resumeStore.projects))
  formData.value.certificates = JSON.parse(JSON.stringify(resumeStore.certificates))
  formData.value.contact = JSON.parse(JSON.stringify(resumeStore.contact))
  
  // 初始化项目标签字符串
  projectTagsString.value = formData.value.projects.map(project => project.tags.join(', '))
}

// 验证密码
const authenticate = () => {
  authenticating.value = true
  authError.value = false
  
  setTimeout(() => {
    const result = authStore.authenticate(password.value)
    authenticating.value = false
    
    if (!result) {
      authError.value = true
    } else {
      // 初始化表单数据
      initFormData()
    }
  }, 500)
}

// 退出登录
const logout = () => {
  authStore.logout()
}

// 保存基本信息
const saveBasicInfo = () => {
  resumeStore.updateBasicInfo(formData.value.basicInfo)
  showSaveSuccess()
}

// 添加教育经历
const addEducation = () => {
  const newEducation = {
    school: '',
    degree: '',
    date: '',
    description: ''
  }
  resumeStore.addEducation(newEducation)
  initFormData() // 重新加载数据以获取新ID
}

// 删除教育经历
const removeEducation = (id) => {
  resumeStore.removeEducation(id)
  formData.value.education = formData.value.education.filter(edu => edu.id !== id)
}

// 保存教育经历
const saveEducation = () => {
  resumeStore.updateEducation(formData.value.education)
  showSaveSuccess()
}

// 添加工作经验
const addExperience = () => {
  const newExperience = {
    company: '',
    position: '',
    date: '',
    description: ''
  }
  resumeStore.addExperience(newExperience)
  initFormData() // 重新加载数据以获取新ID
}

// 删除工作经验
const removeExperience = (id) => {
  resumeStore.removeExperience(id)
  formData.value.experience = formData.value.experience.filter(exp => exp.id !== id)
}

// 保存工作经验
const saveExperience = () => {
  resumeStore.updateExperience(formData.value.experience)
  showSaveSuccess()
}

// 添加项目
const addProject = () => {
  const newProject = {
    title: '',
    date: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80',
    tags: []
  }
  resumeStore.addProject(newProject)
  initFormData() // 重新加载数据以获取新ID
  projectTagsString.value.push('')
}

// 删除项目
const removeProject = (id) => {
  resumeStore.removeProject(id)
  const index = formData.value.projects.findIndex(p => p.id === id)
  if (index !== -1) {
    formData.value.projects.splice(index, 1)
    projectTagsString.value.splice(index, 1)
  }
}

// 更新项目标签
const updateProjectTags = (index) => {
  const tagsString = projectTagsString.value[index]
  formData.value.projects[index].tags = tagsString
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag !== '')
}

// 保存项目
const saveProjects = () => {
  resumeStore.updateProjects(formData.value.projects)
  showSaveSuccess()
}

// 保存联系信息
const saveContact = () => {
  resumeStore.updateContact(formData.value.contact)
  showSaveSuccess()
}

// 显示保存成功提示
const showSaveSuccess = () => {
  alert('保存成功！')
}
</script>
