import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

export const Code = ({ children, className }) => {
  const language = className?.replace(/language-/, "") || "";
  return (
    <Highlight {...defaultProps} theme={theme} code={children.trim()} language={language} >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre dir="ltr" className={`${className} overflow-auto my-4 p-5 rounded-xl text-sm`} style={style} >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>

  );
}