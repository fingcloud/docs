
const variants = {
  success: { wrapper: 'border-green-500 bg-green-100 text-gray-900' },
  info: { wrapper: 'border-blue-500 bg-blue-100 text-gray-900' },
  warning: { wrapper: 'border-yellow-500 bg-yellow-100 text-gray-900' },
  danger: { wrapper: 'border-red-500 bg-red-100 text-gray-900' },
}

export const Notice = ({ variant, children, ...props }) => {
  const variantData = variant ? variants[variant] : variants['info']

  return (
    <div className={`${variantData.wrapper} flex items-center border-r-4 rounded mt-6 py-4 px-6`}>
      <p>{children}</p>
    </div>
  )
}