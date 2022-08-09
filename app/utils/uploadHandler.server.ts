import { UploadHandler } from "@remix-run/node"
import aws from 'aws-sdk'
import { randomName } from "./randomName.server"
import dotenv from 'dotenv'

dotenv.config()

aws.config.update({
    region: process.env.REGION,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    s3ForcePathStyle: true,
})

const s3 = new aws.S3()

export const uploadHandler: UploadHandler = async ({name, data, filename}) => {
    const urlKey = await randomName();

    const chunks = []
    for await (const chunk of data) {
        chunks.push(chunk)
    }

    const buffer = Buffer.concat(chunks)
    const {Location} = await s3.upload({
        Bucket: process.env.BUCKETNAME || '',
        Key: urlKey,
        Body: buffer,
    }).promise()

return Location
}
