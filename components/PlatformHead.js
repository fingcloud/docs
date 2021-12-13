

export const PlatformHead = ({ platform, title, src }) => (
  <div className="flex center ">
    <img src={`${platform ? `https://fing.ir/images/platforms/${platform}.svg` : `${src}`}`} alt={title} className="w-16 h-16" />
    <div className="mt-5 mr-3 text-2xl">{title}</div>
  </div>
)

export const Platform = (props) => (
  <div className="flex flex-wrap" {...props} />
)
