import 'server-only'
import type { Locale } from '@/i18n.config'

const aboutDictionaries = {
  en: () =>
    import('@/dictionaries/en/about.json').then(module => module.default),
  de: () =>
    import('@/dictionaries/de/about.json').then(module => module.default)
}
const getAboutDictionary = async (locale: Locale) => aboutDictionaries[locale]()

const homeDictionaries = {
  en: () =>
    import('@/dictionaries/en/home.json').then(module => module.default),
  de: () => import('@/dictionaries/de/home.json').then(module => module.default)
}
const getHomeDictionary = async (locale: Locale) => homeDictionaries[locale]()

const navigationDictionaries = {
  en: () =>
    import('@/dictionaries/en/navigation.json').then(module => module.default),
  de: () =>
    import('@/dictionaries/de/navigation.json').then(module => module.default)
}
const getNavigationDictionary = async (locale: Locale) =>
  navigationDictionaries[locale]()

export { getAboutDictionary, getHomeDictionary, getNavigationDictionary }
