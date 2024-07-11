let conf = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwriteBucketID: String(import.meta.env.VITE_BUCKET-ID),
  appwriteCollectioId: String(import.meta.env.VITE_COLLECTION_ID),
};
export default conf;


