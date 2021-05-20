import * as Yup from 'yup';

export const standardizedMessageSchema = Yup.object().shape({
  content: Yup.string().required(),
  parts: Yup.array().of(Yup.string()).required(),
  direct: Yup.boolean().required(),
  author_id: Yup.string().required(),
  created_at: Yup.number().required(),
  platform: Yup.string().required(),
  attachments: Yup.array()
    .of(
      Yup.object().shape({
        url: Yup.string(),
        name: Yup.string(),
        size: Yup.number(),
      }),
    )
    .required(),
});
