import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { listAppDriveFiles, DriveFileItem } from '../lib/drive';
import {
  HardDrive,
  X,
  ExternalLink,
  FileSpreadsheet,
  CheckCircle,
  RefreshCw,
  LogOut,
  AlertCircle
} from 'lucide-react';

interface GoogleDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onGoogleSignIn: () => void;
  onLogout: () => void;
  isLoggingIn: boolean;
}

export const GoogleDriveModal: React.FC<GoogleDriveModalProps> = ({
  isOpen,
  onClose,
  user,
  onGoogleSignIn,
  onLogout,
  isLoggingIn,
}) => {
  const [files, setFiles] = useState<DriveFileItem[]>([]);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFiles = async () => {
    if (!user) return;
    setIsLoadingFiles(true);
    setError(null);
    try {
      const driveFiles = await listAppDriveFiles();
      setFiles(driveFiles);
    } catch (err: any) {
      console.error('Error fetching drive files:', err);
      setError(err?.message || 'Could not fetch files from Google Drive.');
    } finally {
      setIsLoadingFiles(false);
    }
  };

  useEffect(() => {
    if (isOpen && user) {
      fetchFiles();
    }
  }, [isOpen, user]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-[#0D47A1] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <HardDrive className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-bold text-base">Google Drive Integration</h3>
              <p className="text-xs text-blue-200">
                Farooq Data Solution Secure Cloud Sync
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {user ? (
            <div className="space-y-5">
              
              {/* User profile row */}
              <div className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'Google User'}
                      className="w-10 h-10 rounded-full border border-slate-200"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#0D47A1] text-white font-bold flex items-center justify-center text-sm">
                      {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{user.displayName || 'Google Account'}</h4>
                    <p className="text-xs text-slate-500">{user.email}</p>
                  </div>
                </div>

                <button
                  onClick={onLogout}
                  className="flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
                  title="Disconnect"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </div>

              {/* Status and permissions info */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-emerald-900">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Google Drive Connected</p>
                  <p className="text-emerald-800 mt-0.5">
                    You can save cleaned spreadsheets directly to your Google Drive from the Live Cleaner demo.
                  </p>
                </div>
              </div>

              {/* Files saved by the app */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#0D47A1]" />
                    Cleaned Files in Your Google Drive
                  </h4>
                  <button
                    onClick={fetchFiles}
                    disabled={isLoadingFiles}
                    className="text-xs text-[#0D47A1] hover:underline flex items-center gap-1 font-semibold disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3 h-3 ${isLoadingFiles ? 'animate-spin' : ''}`} />
                    Refresh
                  </button>
                </div>

                {isLoadingFiles ? (
                  <div className="py-8 text-center text-xs text-slate-500 flex flex-col items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 animate-spin text-[#0D47A1]" />
                    <span>Loading your Google Drive files...</span>
                  </div>
                ) : error ? (
                  <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{error}</span>
                  </div>
                ) : files.length === 0 ? (
                  <div className="py-8 text-center border-2 border-dashed border-slate-200 rounded-xl p-4 bg-slate-50">
                    <FileSpreadsheet className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="text-xs font-bold text-slate-700">No Cleaned Datasets Uploaded Yet</p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Run the Live Cleaner below and click <strong>"Save to Google Drive"</strong> to test creating a file in your Drive!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {files.map((file) => (
                      <div
                        key={file.id}
                        className="bg-white border border-slate-200 p-3 rounded-xl hover:border-[#0D47A1] flex items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <FileSpreadsheet className="w-4 h-4 text-[#0D47A1] shrink-0" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-900 truncate">
                              {file.name}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              {file.createdTime ? new Date(file.createdTime).toLocaleDateString() : 'Recent'}
                            </p>
                          </div>
                        </div>

                        {file.webViewLink && (
                          <a
                            href={file.webViewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-[#0D47A1] hover:text-[#082d68] hover:underline flex items-center gap-1 shrink-0"
                          >
                            Open
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ) : (
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 bg-blue-50 text-[#0D47A1] rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                <HardDrive className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900">
                  Connect Your Google Drive
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Allow Farooq Data Solution to save cleaned spreadsheets and deliver lead files directly into your personal Google Drive with your permission.
                </p>
              </div>

              {/* Official Google Sign In button structure per workspace skill */}
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={onGoogleSignIn}
                  disabled={isLoggingIn}
                  className="gsi-material-button shadow-sm"
                >
                  <div className="gsi-material-button-icon">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: 'block' }}>
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                      <path fill="none" d="M0 0h48v48H0z"></path>
                    </svg>
                  </div>
                  <span className="gsi-material-button-contents font-medium text-slate-700">
                    {isLoggingIn ? 'Connecting...' : 'Sign in with Google'}
                  </span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 max-w-xs mx-auto">
                Permissions used: Read & write only files created by this app (<code>drive.file</code> scope). We never read your private drive files.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
