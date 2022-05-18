interface Button {
  color?: string
  className?: string
  children: any
  onClick?: (event: any) => void 
}

export default function Button({ children, color, className, onClick }: Button) {
  const defaultColor = color ?? 'gray'

  return (
    <button onClick={onClick} className={`
      text-white px-4
      py-2 rounded-md
      ${className}
    `}>
      { children }
    </button>
  )
}