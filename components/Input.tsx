interface InputProps {
  type?: 'text' | 'number'
  text: string
  value: any
  readonly?: boolean 
  onChange?: (value: any) => void 
  className?: string
}

export default function Input({ text, value, type, readonly, onChange, className }: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-4">{text}</label>
      <input 
        type={type ?? 'text'} 
        value={value} 
        readOnly={readonly} 
        className={`
          border border-purple-500 rounded-lg
          focus: outline-none bg-gray-100 px-4 py-2
          ${readonly ? '' : 'focus:bg-white'}
        `}
        onChange={e => onChange?.(e.target.value)}
      />
    </div>
  )
}