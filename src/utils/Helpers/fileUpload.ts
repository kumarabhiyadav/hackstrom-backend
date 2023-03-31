import cloudinary from "cloudinary";
import tmp from "tmp";

export async function uploadFile(file: any) {
  try {
    const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      folder: process.env.folder_name,
    });
    return result.secure_url;
  } catch (error) {}
  return null;
}
