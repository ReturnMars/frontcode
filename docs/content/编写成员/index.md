<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import { withBase } from "vitepress"
const members = [
  {
    avatar: withBase('/avatar_img/returnmars.jpg'),
    name: 'Return Mars',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/ReturnMars' },
    ]
  },
]
</script>

# 本文档编写成员

<VPTeamMembers size="small" :members="members" >
   
   
</VPTeamMembers>
