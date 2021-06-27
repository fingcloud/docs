
const variants = {
  success: { wrapper: 'bg-green-50', icon: '✅' },
  info: { wrapper: 'bg-indigo-50', icon: 'ℹ️' },
  warning: { wrapper: 'bg-yellow-50', icon: '💡' },
  danger: { wrapper: 'bg-red-50', icon: '🚨' },
}

export const Notice = ({ variant, children, ...props }) => {
  const variantData = variant ? variants[variant] : variants['info']

  return (
    <div className={`${variantData.wrapper} text-gray-800 flex items-center rounded-lg mt-6 py-2`}>
      <div className="px-3 select-none text-xl">{variantData.icon}</div>
      <div className="pl-4">
        <p>{children}</p>
      </div>
    </div>
  )
}