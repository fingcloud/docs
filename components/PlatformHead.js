

export const PlatformHead = ({ platform, title }) => (
  <div className="flex center ">
    <img src={`https://fing.ir/images/platforms/${platform}.svg`} className="w-16 h-16" />
    <div className="mt-5 mr-3 text-2xl">{title}</div>
  </div>
)

export const Platform = (props) => (
  <div className="flex flex-wrap" {...props} />
)