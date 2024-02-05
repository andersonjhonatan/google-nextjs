import SearchHeaderComponent from '@/components/SearchHeader'

function SearchLayout({ children }: any) {
  return (
    <div>
      <SearchHeaderComponent />
      {children}
    </div>
  )
}

export default SearchLayout
