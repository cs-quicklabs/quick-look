import { unstable_parseMultipartFormData, UploadHandler } from '@remix-run/node';
import { uploadStreamToSpaces } from '~/services/do.service.server';

type props ={
  data : any,
  filename?:any
}
export const digitalOceanUploadHandler: UploadHandler = async ({ data,filename }:props) => {
  const uploaded = await uploadStreamToSpaces(data,filename as string)
  return uploaded;
};


