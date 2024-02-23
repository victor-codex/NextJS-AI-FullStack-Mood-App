export default function Spinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="w-[24px] h-[24px] rounded-full animate-spin border-[3px] border-solid border-blue-500 border-t-transparent"></div>
    </div>
  )
}
