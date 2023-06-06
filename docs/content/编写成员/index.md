<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '../../assets/avatar/returnmars.jpg',
    name: 'Return Mars',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/ReturnMars' },
    ]
  },
]
</script>

# 本文档编写成员

<VPTeamMembers size="small" :members="members" />
