export default function Title({ label }) {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='px-5 py-2 text-2xl'>{label}</h1>
      <hr className='border-2 border-purple-900'/>
    </div>
  )
}