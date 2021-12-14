import NextLink from 'next/link'

export const Paragraph = props =>
  <p className="my-4 font-normal leading-8 text-gray-700" {...props} />

export const Link = ({ href, ...props }) =>
  <NextLink href={href} passHref>
    <a className="relative font-medium text-blue-500 transition-all duration-100 hover:underline hover:text-blue-600" {...props} />
  </NextLink>