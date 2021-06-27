import { Sidebar } from './Sidebar'
import { Content } from './Content'

export default function Layout({ children, meta }) {
  console.log(meta)
  return (
    <div className="min-h-screen relative flex max-w-6xl mx-auto">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  )
}



export const withLayout = (matter) => {
  const Layout = ({ children }) => <Layout>{children}</Layout>
  return Layout
}
