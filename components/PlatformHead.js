

export const PlatformHead = ({ title, icon, src }) => (
  <div className="flex center ">
    <img src={`${icon ? `https://raw.githubusercontent.com/fingcloud/devicon/master/icons/${icon}` : `${src}`}`} alt={title} className="w-16 h-16" />
    <div className="mt-5 mr-3 text-2xl">{title}</div>
  </div>
)

export const Platform = (props) => (
  <div className="flex flex-wrap" {...props} />
)
