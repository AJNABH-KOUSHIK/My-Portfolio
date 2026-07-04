import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
} from 'react-icons/fa'
import {
  SiC,
  SiSpringboot,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiHackerrank,
} from 'react-icons/si'

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'education', title: 'Education' },
  { id: 'projects', title: 'Projects' },
  { id: 'dsa', title: 'DSA' },
  { id: 'certificates', title: 'Certificates' },
  { id: 'experience', title: 'Experience' },  // ADD THIS LINE
]
export const personalInfo = {
  name: 'Ajnabh Koushik',
  roles: [
    'Creative Thinker',
    'Web Developer',
    'Frontend Developer',
    'Problem Solver',
    'Tech Enthusiast',
  ],
  email: 'ajnabhkoushikbaruah@gmail.com',
  location: 'Vishakapatnam, Andhra Pradesh, India',
  resumeLink: 'https://drive.google.com/file/d/1W9PtsbSRBnvvxro7uyYZTyrEDDpnK8st/view?usp=sharing',
  github: 'https://github.com/AJNABH-KOUSHIK',
  linkedin: 'https://www.linkedin.com/in/ajnabh-koushik-baruah-0ba92a336/',
  instagram: 'https://www.instagram.com/ajnabh_koushik/',
  leetcode: 'https://leetcode.com/u/ajnabhkoushik/',
}

export const aboutData = {
  description: `I am a passionate and dedicated Computer Science student with a strong interest in web development and problem-solving. I love building creative and responsive web applications using modern technologies. I am always eager to learn new things and take on challenging projects. My goal is to become a skilled full-stack developer and contribute to innovative tech solutions.`,
  highlights: [
    { label: 'Projects Completed', value: '5+' },
    { label: 'DSA Problems Solved', value: '100+' },
    { label: 'Technologies Known', value: '10+' },
    { label: 'Certificates Earned', value: '5+' },
  ],
}

// NEW TABBED SKILLS STRUCTURE
export const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: 'FaJava', color: '#007396' },
      { name: 'C', icon: 'SiC', color: '#A8B9CC' },
      { name: 'JavaScript', icon: 'FaJsSquare', color: '#F7DF1E' },
      { name: 'Python', icon: 'FaPython', color: '#3776AB' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'FaHtml5', color: '#E44D26' },
      { name: 'CSS3', icon: 'FaCss3Alt', color: '#1572B6' },
      { name: 'React.js', icon: 'FaReact', color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'Bootstrap', icon: 'SiBootstrap', color: '#7952B3' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'FaNodeJs', color: '#339933' },
      { name: 'Express.js', icon: 'SiExpress', color: '#000000' },
      { name: 'Spring Boot', icon: 'SiSpringboot', color: '#6DB33F' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Python', icon: 'FaPython', color: '#3776AB' },
      // Add more AI/ML skills here as you learn them (e.g., Pandas, TensorFlow)
    ],
  },
  {
    category: 'Tools & Cloud',
    skills: [
      { name: 'Git', icon: 'FaGitAlt', color: '#F05032' },
      { name: 'GitHub', icon: 'FaGithub', color: '#181717' },
    
      { name: 'Vercel', icon: 'SiVercel', color: '#000000' },
    ],
  },
]

export const educationData = [
  {
    title: 'B.Tech in Computer Science and Engineering',
    institution: 'National Institute of Technology, Patna',
    duration: '2024 - 2028',
    description: 'Pursuing B.Tech with focus on Computer Science and Engineering.',
    grade: '7.6/10',
  },
  {
    title: 'Higher Secondary School',
    institution: 'Sri Chaitanya , Vishakapatnam , Andhra Pradesh',
    duration: '2022 - 2024',
    description: 'Completed 12th with Science stream.',
    grade: '93.6%',
  },
  {
    title: 'Secondary School',
    institution: 'Pratibha Vidyalayam , Vishakapatnam , Andhra Pradesh',
    duration: '2021 - 2022',
    description: 'Completed matriculation.',
    grade: '94.4%',
  },
]

export const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A personal portfolio website built with React.js showcasing my skills, projects, and achievements. Features include dark/light theme, animations, and responsive design.',
    tags: ['React.js', 'CSS', 'JavaScript', 'Vite'],
    image: '/projects/project1.png',
    github: 'https://github.com/AJNABH-KOUSHIK',
    live: '#',
    category: 'web',
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    description:
      'A fully responsive e-commerce website with product listing, cart functionality, and user authentication. Built using React.js and Node.js.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    image: '/projects/project2.png',
    github: 'https://github.com/AJNABH-KOUSHIK',
    live: '#',
    category: 'web',
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'A weather application that provides real-time weather information for any city. Built using React.js and OpenWeather API.',
    tags: ['React.js', 'API', 'CSS', 'JavaScript'],
    image: '/projects/project3.png',
    github: 'https://github.com/AJNABH-KOUSHIK',
    live: '#',
    category: 'web',
  },
]

export const dsaData = {
  platforms: [
    {
      name: 'LeetCode',
      icon: 'SiLeetcode',
      color: '#FFA116',
      link: 'https://leetcode.com/u/ajnabhkoushik/',
      problemsSolved: '100+',
      rating: 'N/A',
    },
    {
      name: 'GeeksforGeeks',
      icon: 'SiGeeksforgeeks',
      color: '#2F8D46',
      link: 'https://geeksforgeeks.org/',
      problemsSolved: '50+',
      rating: 'N/A',
    },
    {
      name: 'CodeChef',
      icon: 'SiCodechef',
      color: '#5B4638',
      link: 'https://codechef.com/',
      problemsSolved: '20+',
      rating: 'N/A',
    },
    {
      name: 'HackerRank',
      icon: 'SiHackerrank',
      color: '#00EA64',
      link: 'https://hackerrank.com/',
      problemsSolved: '30+',
      rating: 'N/A',
    },
  ],
  topics: [
    { name: 'Arrays', count: 60, color: '#FF6B6B' },
    { name: 'Strings', count: 20, color: '#4ECDC4' },
    { name: 'Linked List', count: 30, color: '#45B7D1' },
    { name: 'Bit Manipulation', count: 30, color: '#45B7D1' },
    { name: 'Trees', count: 5, color: '#96CEB4' },
    { name: 'Graphs', count: 5, color: '#FFEAA7' },
    { name: 'Dynamic Programming', count: 5, color: '#DDA0DD' },
    { name: 'Stack & Queue', count: 20, color: '#98D8C8' },
    { name: 'Sorting', count: 10, color: '#F7DC6F' },
    { name: 'Binary Search', count: 20, color: '#BB8FCE' },
    { name: 'Recursion', count: 10, color: '#F1948A' },
  ],
}

export const certificatesData = [
  {
    id: 1,
    title: 'Web Development Summer Internship',
    issuer: 'Future Intern',
    date: '2026',
    image: 'certificate1.png',      // 👈 Your certificate image
    link: 'https://drive.google.com/file/d/17Gg_ZvDrRUxr-jQh6Evi2KGognlKnpMK/view?usp=drive_link',       // 👈 Verification link (or '#' if none)
  },
  {
    id: 2,
    title: 'Java Intern',
    issuer: 'CodeAlpha',
    date: '2026',
    image: 'certificate2.png',
    link: 'https://drive.google.com/file/d/1u_tn7oVDCKGdWstx8TO_FHQ5M1ISfKQZ/view?usp=sharing',
  },
  {
    id: 3,
    title: 'AWS Badge Educate ML',
    issuer: 'AWS',
    date: '2025',
    image: 'certificate3.png',
    link: 'https://drive.google.com/file/d/19BoDjRCReHNrn4xDPOTVe977QpqJZJpc/view?usp=sharing',
  },
  // Add more certificates here...
]

export const socialLinks = [
  { name: 'GitHub', icon: 'FaGithub', url: 'https://github.com/AJNABH-KOUSHIK', color: '#333' },
  { name: 'Instagram', icon: 'FaInstagram', url: 'https://www.instagram.com/ajnabh_koushik/', color: '#E4405F' },
  { name: 'LinkedIn', icon: 'FaLinkedin', url: 'https://www.linkedin.com/in/ajnabh-koushik-baruah-0ba92a336/', color: '#0077B5' },
  { name: 'Discord', icon: 'FaDiscord', url: '#', color: '#5865F2' },
  { name: 'LeetCode', icon: 'SiLeetcode', url: 'https://leetcode.com/u/ajnabhkoushik/', color: '#FFA116' },
]