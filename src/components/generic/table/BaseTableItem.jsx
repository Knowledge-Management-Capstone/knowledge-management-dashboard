const BaseTableItem = ({ children, className }) => {
  return (
    <td
      className={`${className} whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6`}
    >
      {children}
    </td>
  )
}

export default BaseTableItem
