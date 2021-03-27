import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script key={1} async defer data-domain="covid19.factly.in" src="https://plausible.io/js/plausible.js"></script>
  ]);
};
