const BaseCheckbox = ({ id, label, ...props }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        {...props}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  )
}

export default BaseCheckbox
