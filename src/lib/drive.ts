import { getAccessToken } from './auth';

export interface DriveFileItem {
  id: string;
  name: string;
  mimeType: string;
  webViewLink?: string;
  createdTime?: string;
  size?: string;
}

/**
 * Uploads a cleaned CSV or text data file to the user's Google Drive.
 * Scope: https://www.googleapis.com/auth/drive.file
 */
export async function uploadToGoogleDrive(
  fileName: string,
  content: string,
  mimeType: string = 'text/csv'
): Promise<DriveFileItem> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Not authenticated with Google Drive. Please sign in first.');
  }

  const metadata = {
    name: fileName,
    mimeType: mimeType,
    description: 'Cleaned and formatted dataset exported from Farooq Data Solution agency portal.',
  };

  const boundary = '-------314159265358979323846';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const multipartRequestBody =
    delimiter +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadata) +
    delimiter +
    `Content-Type: ${mimeType}\r\n\r\n` +
    content +
    closeDelimiter;

  const response = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,mimeType,webViewLink,createdTime,size',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body: multipartRequestBody,
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Drive upload failed: ${response.status} - ${errorText}`);
  }

  return await response.json();
}

/**
 * Lists files created/managed by this app in Google Drive.
 */
export async function listAppDriveFiles(): Promise<DriveFileItem[]> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Not authenticated with Google Drive.');
  }

  const query = encodeURIComponent("trashed = false");
  const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,mimeType,webViewLink,createdTime,size)&orderBy=createdTime%20desc&pageSize=15`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to list Google Drive files: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.files || [];
}
