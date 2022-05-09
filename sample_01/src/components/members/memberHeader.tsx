import * as React from 'react';

// @Fika("React.Component")
export const MemberHeader: React.StatelessComponent<{}> = () => {
  return (
    <tr>
      <th>Avatar</th>
      <th>Id</th>
      <th>Name</th>
    </tr>
  );
};
