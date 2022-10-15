import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  media: {
    bp1: '(min-width: 810px)',
    bp2: '(min-width: 920px)',
  },
  utils: {
    px: value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    br: value => ({
      borderRadius: value,
    }),
  },
});
