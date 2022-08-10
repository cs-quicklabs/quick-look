import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    endpoint: 'https://sgp1.digitaloceanspaces.com',
    region: "us-east-1",
    credentials: {
      accessKeyId: 'DO00PPUTF829UBN7DRFH',
      secretAccessKey: 'csiCyuMA4hVBYWdb23ULWkDUJYxp5upucieFIlvn3s4',

    },
  });

export {s3Client};