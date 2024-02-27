import { Locale } from '@/i18n.config'
import { getHomeDictionary } from '@/lib/dictionary'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { home } = await getHomeDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{home.title}</h1>
        <p className='text-gray-500'>{home.description}</p>
      </div>
    </section>
  )
}
