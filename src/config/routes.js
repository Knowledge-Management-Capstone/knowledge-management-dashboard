import {
  HomeIcon,
  FolderIcon,
  ChatAlt2Icon,
  CogIcon,
  PlusIcon,
  UserIcon
} from '@heroicons/react/outline'

const routes = [
  { name: 'Beranda', href: '/', icon: HomeIcon, current: true },
  {
    name: 'Dokumentasi Penelitian',
    href: '/documentation',
    icon: FolderIcon,
    current: false
  },
  { name: 'Diskusi', href: '/discussion', icon: ChatAlt2Icon, current: false },
  {
    name: 'Pengaturan Repository',
    href: '/settings',
    icon: CogIcon,
    current: false
  },
  {
    name: 'Ajukan Repository',
    href: '/proposal',
    icon: PlusIcon,
    current: false
  },
  { name: 'Profil', href: '/profile', icon: UserIcon, current: false }
]

export default routes
