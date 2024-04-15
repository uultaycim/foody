import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  // url: import.meta.env.VITE_APPWRITE_URL,
  // projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  // databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  // storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  // userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  // postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  // savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    projectId: '65f159ae4f7e1f95687d',
    url: 'https://cloud.appwrite.io/v1',
    databaseId: '65f952cfc20a6d2aeb94',
    storageId: '65f952922cd4efcf9f64',
    userCollectionId: '65f953ac86e83ad6db92',
    postCollectionId: '65f9536319d4f72d4705',
    savesCollectionId: '65f953d7efc793c5d056'
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
