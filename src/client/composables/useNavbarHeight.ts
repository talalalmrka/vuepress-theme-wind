import { computed } from 'vue'

export const useNavbarHeight = () => {
  return computed(() => {
    if (typeof window === 'undefined') {
      console.log('window undefined cannot set navbar height')
      return 0
    }
    const el = document.querySelector<HTMLElement>('[vp-navbar]')
    if (!el) {
      console.warn('Navbar element not found with selector[vp-navbar]')
      return 0
    }
    return el.offsetHeight
  })
}
