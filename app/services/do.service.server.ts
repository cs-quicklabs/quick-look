import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { randomName } from "~/utils/randomName.server";
require('dotenv').config();

const { DO_ACCESS_KEY_ID, DO_SECRET, DO_ENDPOINT, DEFAULT_DO_REGION } = process.env;

if (!DO_ACCESS_KEY_ID) {
  throw new Error(`Digital Ocean access key id must be set.`);
}
if (!DO_SECRET) {
  throw new Error(`Digital Ocean secret must be set.`);
} 
if (!DO_ENDPOINT) {
  throw new Error(`Digital Ocean endpoint must be set.`);
}
if (!DEFAULT_DO_REGION) {
  throw new Error(`Digital Ocean region must be set.`);
}

const s3Client = new S3Client({
    endpoint: DO_ENDPOINT,
    region: 'us-east-1',
    credentials: {
      accessKeyId: DO_ACCESS_KEY_ID,
      secretAccessKey: DO_SECRET,
    },
});

export async function uploadBlob(
  data: any
){
  const chunks = []
  for await (const chunk of data) {
    chunks.push(chunk)
  }
  const randKey = await randomName();

  const buffer = Buffer.concat(chunks)
  const blob1 = new Blob(chunks, { type: 'image/png' });
  const file = new File([blob1], randKey as string, { type: 'image/png' });

  if (file.size < 1 || file.size === 0) {
    return ;
  }

  const uploadedResponse = await new Upload({
      client: s3Client,
      leavePartsOnError: true,
      params: {
        Bucket: 'quicklook', 
        Key: `${randKey}`,   
        Body: buffer,
        ACL: 'public-read',
        ContentType: 'image/png',
      },
  })
    .done()
    const response: any = Object.assign({}, uploadedResponse)
    return response['Location']
}

export async function uploadStreamToSpaces(
  data: any,
  filename: string,
) {
  const chunks = []
  for await (const chunk of data) {
    chunks.push(chunk)
  }

  const buffer = Buffer.concat(chunks)
  const blob1 = new Blob(chunks, { type: 'image/png' });
  const file = new File([blob1], filename as string, { type: 'image/png' });

  if (file.size < 1 || file.size === 0) {
    return ;
  }

  const randKey = await randomName();

  const uploadedResponse = await new Upload({
      client: s3Client,
      leavePartsOnError: true,
      params: {
        Bucket: 'quicklook', 
        Key: `${randKey}`,   
        Body: buffer,
        ACL: 'public-read',
        ContentType: 'image/png',
      },
  })
    .done()
    const response: any = Object.assign({}, uploadedResponse)
    return response['Location']
}

export async function removeFileFromSpace(key: string){
  const bucketParams = { Bucket: "quicklook", Key: key };
  try {
    const data = await s3Client.send(new DeleteObjectCommand(bucketParams));
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

export {s3Client};
