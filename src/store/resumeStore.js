import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResumeStore = defineStore('resume', () => {
  // 基本信息
  const basicInfo = ref({
    name: '张三',
    title: '车辆工程专业毕业生',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    email: 'example@email.com',
    phone: '138****1234',
    location: '上海市',
    bio: '我是一名车辆工程专业的毕业生，对汽车设计、新能源汽车技术和智能驾驶系统有浓厚的兴趣。我具备扎实的理论基础和实践经验，希望能够在汽车行业中找到一份富有挑战性的工作。'
  })

  // 教育经历
  const education = ref([
    {
      id: 1,
      school: '上海交通大学',
      degree: '车辆工程 学士学位',
      date: '2019 - 2023',
      description: '主修课程：汽车构造、汽车设计、车辆动力学、新能源汽车技术、智能驾驶系统等。GPA: 3.8/4.0'
    }
  ])

  // 工作经历
  const experience = ref([
    {
      id: 1,
      company: '上海汽车集团股份有限公司',
      position: '实习生 - 车辆工程部',
      date: '2022.06 - 2022.09',
      description: '参与新能源汽车底盘系统的设计与测试工作，协助团队完成多项测试任务，编写技术报告。'
    },
    {
      id: 2,
      company: '博世汽车部件（上海）有限公司',
      position: '实习生 - 研发部',
      date: '2021.07 - 2021.09',
      description: '参与汽车电子控制系统的研发工作，学习并应用AUTOSAR架构，协助进行软件测试与验证。'
    }
  ])

  // 技能
  const skills = ref([
    {
      id: 1,
      category: '专业技能',
      items: [
        { name: '汽车设计', level: 85 },
        { name: '车辆动力学分析', level: 80 },
        { name: '新能源汽车技术', level: 75 },
        { name: '智能驾驶系统', level: 70 },
        { name: '汽车电子控制', level: 75 }
      ]
    },
    {
      id: 2,
      category: '软件技能',
      items: [
        { name: 'CATIA', level: 90 },
        { name: 'MATLAB/Simulink', level: 85 },
        { name: 'AutoCAD', level: 80 },
        { name: 'ANSYS', level: 75 },
        { name: 'CarSim', level: 70 }
      ]
    },
    {
      id: 3,
      category: '语言能力',
      items: [
        { name: '中文', level: 100 },
        { name: '英语', level: 85 },
        { name: '日语', level: 60 }
      ]
    }
  ])

  // 项目经验
  const projects = ref([
    {
      id: 1,
      title: '电动汽车电池管理系统设计',
      date: '2022.09 - 2022.12',
      description: '设计并实现了一套电动汽车电池管理系统，包括电池状态监测、温度控制和能量管理等功能。使用MATLAB/Simulink进行系统建模和仿真，验证了系统的可行性和性能。',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba13522e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      tags: ['电池管理系统', 'MATLAB', 'Simulink', '新能源汽车']
    },
    {
      id: 2,
      title: '智能驾驶辅助系统开发',
      date: '2022.03 - 2022.06',
      description: '参与开发了一套基于计算机视觉的智能驾驶辅助系统，实现了车道偏离警告、前方碰撞预警等功能。使用OpenCV进行图像处理，使用深度学习算法进行目标检测。',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      tags: ['智能驾驶', '计算机视觉', 'OpenCV', '深度学习']
    },
    {
      id: 3,
      title: '汽车底盘结构优化设计',
      date: '2021.10 - 2022.01',
      description: '使用CATIA和ANSYS对汽车底盘结构进行建模和有限元分析，通过拓扑优化方法减轻了底盘重量，同时保证了结构强度和刚度要求。',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80',
      tags: ['底盘设计', 'CATIA', 'ANSYS', '有限元分析', '结构优化']
    }
  ])

  // 证书和奖项
  const certificates = ref([
    {
      id: 1,
      name: '全国大学生机械创新设计大赛 二等奖',
      issuer: '中国机械工程学会',
      date: '2022'
    },
    {
      id: 2,
      name: '上海交通大学优秀学生奖学金',
      issuer: '上海交通大学',
      date: '2021'
    },
    {
      id: 3,
      name: '英语六级证书 (CET-6)',
      issuer: '教育部考试中心',
      date: '2020'
    }
  ])

  // 联系信息
  const contact = ref({
    email: 'example@email.com',
    phone: '138****1234',
    wechat: 'wxid_example',
    address: '上海市闵行区东川路800号',
    socialMedia: {
      github: 'https://github.com/example',
      linkedin: 'https://linkedin.com/in/example'
    }
  })

  // 更新基本信息
  const updateBasicInfo = (info) => {
    basicInfo.value = { ...basicInfo.value, ...info }
  }

  // 更新教育经历
  const updateEducation = (newEducation) => {
    education.value = newEducation
  }

  // 添加教育经历
  const addEducation = (edu) => {
    const newId = education.value.length > 0 
      ? Math.max(...education.value.map(e => e.id)) + 1 
      : 1
    education.value.push({ ...edu, id: newId })
  }

  // 删除教育经历
  const removeEducation = (id) => {
    education.value = education.value.filter(edu => edu.id !== id)
  }

  // 更新工作经历
  const updateExperience = (newExperience) => {
    experience.value = newExperience
  }

  // 添加工作经历
  const addExperience = (exp) => {
    const newId = experience.value.length > 0 
      ? Math.max(...experience.value.map(e => e.id)) + 1 
      : 1
    experience.value.push({ ...exp, id: newId })
  }

  // 删除工作经历
  const removeExperience = (id) => {
    experience.value = experience.value.filter(exp => exp.id !== id)
  }

  // 更新技能
  const updateSkills = (newSkills) => {
    skills.value = newSkills
  }

  // 更新项目经验
  const updateProjects = (newProjects) => {
    projects.value = newProjects
  }

  // 添加项目经验
  const addProject = (project) => {
    const newId = projects.value.length > 0 
      ? Math.max(...projects.value.map(p => p.id)) + 1 
      : 1
    projects.value.push({ ...project, id: newId })
  }

  // 删除项目经验
  const removeProject = (id) => {
    projects.value = projects.value.filter(project => project.id !== id)
  }

  // 更新证书和奖项
  const updateCertificates = (newCertificates) => {
    certificates.value = newCertificates
  }

  // 添加证书和奖项
  const addCertificate = (certificate) => {
    const newId = certificates.value.length > 0 
      ? Math.max(...certificates.value.map(c => c.id)) + 1 
      : 1
    certificates.value.push({ ...certificate, id: newId })
  }

  // 删除证书和奖项
  const removeCertificate = (id) => {
    certificates.value = certificates.value.filter(cert => cert.id !== id)
  }

  // 更新联系信息
  const updateContact = (info) => {
    contact.value = { ...contact.value, ...info }
  }

  return {
    basicInfo,
    education,
    experience,
    skills,
    projects,
    certificates,
    contact,
    updateBasicInfo,
    updateEducation,
    addEducation,
    removeEducation,
    updateExperience,
    addExperience,
    removeExperience,
    updateSkills,
    updateProjects,
    addProject,
    removeProject,
    updateCertificates,
    addCertificate,
    removeCertificate,
    updateContact
  }
})
