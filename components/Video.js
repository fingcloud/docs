export const Video = ({ src }) => (
  <video className=" flex w-full flex-wrap cursor-play rounded-lg border">
    <source src={src} type="video/gif" />
  </video>
)