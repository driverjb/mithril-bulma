import z from 'zod';

const controlNumber = z.number().min(0).max(6).optional();

/** Use to finely control element margin */
export const margin = z.object({
  margin: z
    .object({
      all: controlNumber,
      top: controlNumber,
      bottom: controlNumber,
      left: controlNumber,
      right: controlNumber,
      x: controlNumber,
      y: controlNumber
    })
    .optional()
});

/** Use to finely control element padding */
export const padding = z.object({
  padding: z
    .object({
      all: controlNumber,
      top: controlNumber,
      bottom: controlNumber,
      left: controlNumber,
      right: controlNumber,
      x: controlNumber,
      y: controlNumber
    })
    .optional()
});
