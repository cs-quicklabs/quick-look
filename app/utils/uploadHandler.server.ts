import { unstable_parseMultipartFormData, UploadHandler } from '@remix-run/node';
import { uploadStreamToSpaces } from '~/services/do.service.server';


export const digitalOceanUploadHandler: UploadHandler = async ({ data, filename }) => {
  const uploaded = await uploadStreamToSpaces(data, filename as string)
  return uploaded;
};


