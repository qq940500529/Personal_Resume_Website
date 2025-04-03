<template>
  <div>
    <button @click="downloadPDF" class="btn btn-primary flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {{ buttonText }}
    </button>

    <!-- 用于生成PDF的隐藏内容 -->
    <div ref="pdfContent" class="hidden">
      <div class="pdf-container bg-white p-8" style="font-family: 'Noto Sans SC', sans-serif;">
        <!-- 头部信息 -->
        <div class="flex justify-between items-center mb-6 border-b pb-4">
          <div>
            <h1 class="text-3xl font-bold text-gray-800">{{ basicInfo.name }}</h1>
            <p class="text-xl text-primary-600">{{ basicInfo.title }}</p>
          </div>
          <div class="text-right">
            <p class="mb-1"><strong>邮箱:</strong> {{ contact.email }}</p>
            <p class="mb-1"><strong>电话:</strong> {{ contact.phone }}</p>
            <p><strong>地址:</strong> {{ contact.address }}</p>
          </div>
        </div>

        <!-- 个人简介 -->
        <div class="mb-6">
          <h2 class="text-xl font-bold text-primary-600 mb-2 border-b pb-1">个人简介</h2>
          <p class="text-gray-700">{{ basicInfo.bio }}</p>
        </div>

        <!-- 教育经历 -->
        <div class="mb-6">
          <h2 class="text-xl font-bold text-primary-600 mb-2 border-b pb-1">教育经历</h2>
          <div v-for="edu in education" :key="edu.id" class="mb-3">
            <div class="flex justify-between">
              <h3 class="font-bold">{{ edu.school }}</h3>
              <span>{{ edu.date }}</span>
            </div>
            <p class="font-medium">{{ edu.degree }}</p>
            <p class="text-gray-700">{{ edu.description }}</p>
          </div>
        </div>

        <!-- 工作经验 -->
        <div class="mb-6">
          <h2 class="text-xl font-bold text-primary-600 mb-2 border-b pb-1">工作经验</h2>
          <div v-for="exp in experience" :key="exp.id" class="mb-3">
            <div class="flex justify-between">
              <h3 class="font-bold">{{ exp.company }}</h3>
              <span>{{ exp.date }}</span>
            </div>
            <p class="font-medium">{{ exp.position }}</p>
            <p class="text-gray-700">{{ exp.description }}</p>
          </div>
        </div>

        <!-- 技能 -->
        <div class="mb-6">
          <h2 class="text-xl font-bold text-primary-600 mb-2 border-b pb-1">技能</h2>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="skillGroup in skills" :key="skillGroup.id">
              <h3 class="font-bold mb-2">{{ skillGroup.category }}</h3>
              <ul class="list-disc pl-5">
                <li v-for="(skill, index) in skillGroup.items" :key="index" class="mb-1">
                  {{ skill.name }} - {{ skill.level }}%
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 项目经验 -->
        <div class="mb-6">
          <h2 class="text-xl font-bold text-primary-600 mb-2 border-b pb-1">项目经验</h2>
          <div v-for="project in projects" :key="project.id" class="mb-4">
            <div class="flex justify-between">
              <h3 class="font-bold">{{ project.title }}</h3>
              <span>{{ project.date }}</span>
            </div>
            <p class="text-gray-700 mb-1">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" 
                class="text-xs bg-gray-200 px-2 py-1 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- 证书和奖项 -->
        <div class="mb-6">
          <h2 class="text-xl font-bold text-primary-600 mb-2 border-b pb-1">证书和奖项</h2>
          <div v-for="cert in certificates" :key="cert.id" class="mb-2">
            <div class="flex justify-between">
              <h3 class="font-bold">{{ cert.name }}</h3>
              <span>{{ cert.date }}</span>
            </div>
            <p class="text-gray-700">{{ cert.issuer }}</p>
          </div>
        </div>

        <!-- 页脚 -->
        <div class="text-center text-gray-500 text-sm mt-8">
          此简历由个人简历网站生成 - {{ new Date().toLocaleDateString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useResumeStore } from '../store/resumeStore'
import html2pdf from 'html2pdf.js'

const props = defineProps({
  buttonText: {
    type: String,
    default: '下载简历'
  }
})

const resumeStore = useResumeStore()
const pdfContent = ref(null)

const basicInfo = computed(() => resumeStore.basicInfo)
const education = computed(() => resumeStore.education)
const experience = computed(() => resumeStore.experience)
const skills = computed(() => resumeStore.skills)
const projects = computed(() => resumeStore.projects)
const certificates = computed(() => resumeStore.certificates)
const contact = computed(() => resumeStore.contact)

const downloadPDF = () => {
  const element = pdfContent.value
  const opt = {
    margin: [10, 10],
    filename: `${basicInfo.value.name}-简历.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }

  // 生成PDF
  html2pdf().set(opt).from(element).save()
}
</script>
