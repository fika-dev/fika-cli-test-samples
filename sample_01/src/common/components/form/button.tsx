import * as React from 'react';

interface Props {
  label: string;
  className: string;
  onClick: () => void;
}

// @Fika("React.Component")
export const Button: React.StatelessComponent<Props> = (props) => {

  return (
    <button type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
