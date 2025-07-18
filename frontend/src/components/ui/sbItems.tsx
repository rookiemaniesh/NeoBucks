
const SbItems = ({text,icon,onClick}:{text:String,icon:React.ReactElement,onClick:()=>void}) => {
  return (
    <div 
    onClick={onClick}
    className="flex items-center justify-start gap-1.5 mx-2 mb-0.5 pl-2 pr-14 py-1.5 rounded-md cursor-pointer hover:bg-esidebar-400">
      <div className="">{icon}</div>
      <div className="text-sm text-zinc-700">{text}</div>

    </div>
  )
}

export default SbItems
