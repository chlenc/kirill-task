import styled from "@emotion/styled";
import React from "react";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  color?: string;
  fontSize?: string;
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const Root = styled.div<{ rgb: string; fontSize?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .loader {
    margin: 100px auto;
    font-size: 7px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: load5 1.1s infinite ease;
    animation: load5 1.1s infinite ease;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  @-webkit-keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em rgb(${({ rgb }) => rgb}),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.7),
        1.8em -1.8em 0 0em rgb(${({ rgb }) => rgb}),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.5),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        2.5em 0em 0 0em rgb(${({ rgb }) => rgb}),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        1.75em 1.75em 0 0em rgb(${({ rgb }) => rgb}),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        0em 2.5em 0 0em rgb(${({ rgb }) => rgb}),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        -1.8em 1.8em 0 0em rgb(${({ rgb }) => rgb}),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        -2.6em 0em 0 0em rgb(${({ rgb }) => rgb}),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        -1.8em -1.8em 0 0em rgb(${({ rgb }) => rgb});
    }
  }
  @keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em rgb(${({ rgb }) => rgb}),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.7),
        1.8em -1.8em 0 0em rgb(${({ rgb }) => rgb}),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.5),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        2.5em 0em 0 0em rgb(${({ rgb }) => rgb}),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        1.75em 1.75em 0 0em rgb(${({ rgb }) => rgb}),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        0em 2.5em 0 0em rgb(${({ rgb }) => rgb}),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        -1.8em 1.8em 0 0em rgb(${({ rgb }) => rgb}),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        -2.6em 0em 0 0em rgb(${({ rgb }) => rgb}),
        -1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.8em -1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        2.5em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        1.75em 1.75em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        0em 2.5em 0 0em rgba(${({ rgb }) => rgb}, 0.2),
        -1.8em 1.8em 0 0em rgba(${({ rgb }) => rgb}, 0.5),
        -2.6em 0em 0 0em rgba(${({ rgb }) => rgb}, 0.7),
        -1.8em -1.8em 0 0em rgb(${({ rgb }) => rgb});
    }
  }
`;

const Loading: React.FC<IProps> = ({
  color = "#2934D0",
  fontSize,
  ...rest
}) => {
  const rgb = hexToRgb(color);
  return (
    <Root rgb={`${rgb?.r}, ${rgb?.g}, ${rgb?.b}`} {...rest}>
      <div className="loader" style={{ fontSize: fontSize }}>
        Loading...
      </div>
      {/*<Title>Loading...</Title>*/}
    </Root>
  );
};
export default Loading;
