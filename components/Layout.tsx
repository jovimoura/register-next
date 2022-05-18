import Title from './Title'

interface LayoutProps {
  /* ? torna props opcional */
  title?: string,
  children: any
}

export default function Layout({title, children}: LayoutProps) {
  return (
    <div className='flex flex-col w-2/3 bg-white text-gray-800 rounded-md'>
      <Title  label={title} />
      <div className='p-6'>
        {children}
      </div>
    </div>
  )
}