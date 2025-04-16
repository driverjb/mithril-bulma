import z from 'zod';

export const MbFlex = z
  .object({
    inline: z
      .boolean()
      .default(false)
      .transform((a) => (a ? 'is-flex' : 'is-inline-flex')),
    direction: z
      .enum(['row', 'column', 'row-reverse', 'column-reverse'])
      .default('row')
      .transform((a) => `is-flex-direction-${a}`),
    wrap: z
      .enum(['wrap', 'nowrap', 'wrap-reverse'])
      .transform((a) => `is-flex-wrap-${a}`)
      .optional(),
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
      .transform((a) => `is-justify-content-${a}`)
      .optional(),
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
      .transform((a) => `is-align-content-${a}`)
      .optional(),
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
      .transform((a) => `is-align-items-${a}`)
      .optional(),
    alignSelf: z
      .enum(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
      .transform((a) => `is-align-self-${a}`)
      .optional(),
    grow: z
      .number()
      .min(0)
      .max(5)
      .transform((a) => `is-flex-grow-${a}`)
      .optional(),
    shrink: z
      .number()
      .min(0)
      .max(5)
      .transform((a) => `is-flex-shrink-${a}`)
      .optional()
  })
  .optional();
