import { PutObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import type { UploadHandler } from '@remix-run/node';
import { randomName } from './randomName.server';
import { s3Client } from '~/services/do.service.server';
import { Upload } from '@aws-sdk/lib-storage';

/* const { STORAGE_ACCESS_KEY, STORAGE_SECRET } = process.env;

if (!STORAGE_ACCESS_KEY) {
  throw new Error(`Storage access key must be set.`);
}

if (!STORAGE_SECRET) {
  throw new Error(`Storage secret must be set.`);
} */

// Initailize the S3 client

export async function uploadStreamToSpaces(
  stream: any,
  filename: string,
) {
  const urlKey = await randomName();
/*   return s3Client
    .send(
      new PutObjectCommand({
        Bucket: 'quicklook',
        Key: urlKey,
        Body: stream,
        ContentEncoding: encoding,
        ContentType: mimetype,
        ContentLength: 0, // need to figure out how to get this from the readable stream w/o reading entire stream
      }),
    )
    .then((data) => {
      return data.ETag;
    })
    .catch((err) => { console.log('COMES here')
      throw err.stack;
    }); */
    return new Upload({
      client: s3Client,
      leavePartsOnError: false,
      params: {
        Bucket: 'quicklook',
        Key: 'image',
        Body: stream,
      },
    }).done();
}

export const digitalOceanUploadHandler: UploadHandler = async ({
  data,
  filename,
}) => {
  const buffer= data.toString();
  const upload = await uploadStreamToSpaces(buffer, filename as string);

  if (upload.$metadata.httpStatusCode === 200) {
    return filename;
  }

  return '';

};

