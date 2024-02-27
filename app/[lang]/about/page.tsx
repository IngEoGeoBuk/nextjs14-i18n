import { Locale } from '@/i18n.config'
import { getAboutDictionary } from '@/lib/dictionary'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { about } = await getAboutDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{about.title}</h1>
        <p className='text-gray-500'>{about.description}</p>
      </div>
    </section>
  )
}
