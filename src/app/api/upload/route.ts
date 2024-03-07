import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { google } from "googleapis";

const KEYFILEPATH = path.join(__dirname, "../../../data/drivecred.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES
})

export async function POST(
    req: NextRequest,
    res: NextResponse
) {
    const requestMethod = req.method;
    if (requestMethod === "POST") {
        const data = await req.formData();
        console.log(data);

        console.log("Received POST request");
        // You can access the received JSON data using `data.value`
        if (!data) {
            return new Response("No Data Provided", { status: 400 });
        } else {
            const file: File | null = data.get("file") as unknown as File;
            if (!file) {
                return new Response("File Not Found in Request Body", {
                    status: 400,
                });
            }
            await uploadFile(file);
        }
    }
}

const uploadFile = async (fileObject: File) => {
    const byte = await fileObject.arrayBuffer();
    const buffer = Buffer.from(byte);
    const fileMetadata = {
        name: "screenshot.png",
        parent: ["1Z7Of7TMOXYNQFYf3K-07f8cVo4YFQM-X"],
    };
    const media = {
        mimeType: "image/png",
        body: buffer,
    };
    const { data } = await google
        .drive({
            version: "v3",
            auth: auth,
        })
        .files.create({
            requestBody: fileMetadata,
            media: media,
            fields: "id",
        });

    console.log(`uploaded file ${data.id} ${data.name}`);

}