import z from 'zod';

export const Flex = z.object({
  flex: z
    .object({
      /** .transform((a) => (a ? 'is-flex' : 'is-inline-flex')) */
      inline: z.boolean().default(false),
      /** .transform((a) => `is-flex-direction-${a}`) */
      direction: z.enum(['row', 'column', 'row-reverse', 'column-reverse']).optional(),
      /** .transform((a) => `is-flex-wrap-${a}`) */
      wrap: z.enum(['wrap', 'nowrap', 'wrap-reverse']).optional(),
      /** .transform((a) => `is-justify-content-${a}`) */
      justify: z
        .enum([
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
          'start',
          'end',
          'left',
          'right'
        ])
        .optional(),
      /** .transform((a) => `is-align-content-${a}`) */
      alignContent: z
        .enum([
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around',
          'space-evenly',
          'stretch',
          'start',
          'end',
          'baseline'
        ])
        .optional(),
      /** .transform((a) => `is-align-items-${a}`) */
      alignItems: z
        .enum([
          'stretch',
          'flex-start',
          'flex-end',
          'center',
          'baseline',
          'start',
          'end',
          'self-start',
          'self-end'
        ])
        .optional(),
      /** .transform((a) => `is-align-self-${a}`) */
      alignSelf: z
        .enum(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
        .optional(),
      /** .transform((a) => `is-flex-grow-${a}`) */
      grow: z.number().min(0).max(5).optional(),
      /** .transform((a) => `is-flex-shrink-${a}`) */
      shrink: z.number().min(0).max(5).optional()
    })
    .optional()
});
