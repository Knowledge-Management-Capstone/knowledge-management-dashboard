import {
  HomeIcon,
  FolderIcon,
  ChatAlt2Icon,
  CogIcon,
  PlusIcon,
  UserIcon
} from '@heroicons/react/outline'

const routes = [
  { name: 'Beranda', path: '/', icon: HomeIcon, current: true },
  {
    name: 'Dokumentasi Penelitian',
    path: '/documentation',
    icon: FolderIcon,
    current: false
  },
  { name: 'Diskusi', path: '/discussion', icon: ChatAlt2Icon, current: false },
  {
    name: 'Pengaturan Repository',
    path: '/settings',
    icon: CogIcon,
    current: false
  },
  {
    name: 'Ajukan Repository',
    path: '/proposal',
    icon: PlusIcon,
    current: false
  },
  { name: 'Profil', path: '/profile', icon: UserIcon, current: false }
]

export default routes
