import { useState } from 'react'
import { useField } from 'formik'
import ReactQuill from '~/components/ReactQuill'

const TextEditorInput = ({ label, ...props }) => {
  const [value, setValue] = useState('')
  const [field, meta] = useField(props)

  return (
    <div className="mt-3">
      <label
        htmlFor={props.id || props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <ReactQuill value={value} setValue={setValue} />
      </div>
    </div>
  )
}

export default TextEditorInput
