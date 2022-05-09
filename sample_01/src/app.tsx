import * as React from 'react';

// @Fika("React.Component")
export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}
