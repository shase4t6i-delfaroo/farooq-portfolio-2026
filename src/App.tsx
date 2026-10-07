import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout } from './lib/auth';
import { uploadToGoogleDrive, DriveFileItem } from './lib/drive';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { LiveCleanerDemo } from './components/LiveCleanerDemo';
import { WhyChooseMeSection } from './components/WhyChooseMeSection';
import { PricingPackages } from './components/PricingPackages';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { Footer } from './components/Footer';
import { GoogleDriveModal } from './components/GoogleDriveModal';
import { ConfirmationDialog } from './components/ConfirmationDialog';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { CheckCircle2, ExternalLink, AlertCircle, X } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [driveModalOpen, setDriveModalOpen] = useState(false);

  // Confirmation dialog state for Google Drive operations (Mandatory per workspace skill)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [pendingUpload, setPendingUpload] = useState<{
    fileName: string;
    content: string;
  } | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Success alert state
  const [uploadedFile, setUploadedFile] = useState<DriveFileItem | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize Auth state listener
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser) => {
        setUser(currentUser);
      },
      () => {
        setUser(null);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    setIsLoggingIn(true);
    setErrorMessage(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
      }
    } catch (err: any) {
      console.error('Sign in failed:', err);
      setErrorMessage(err?.message || 'Google sign-in could not be completed.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  // Step 1: User requested save to Google Drive -> Open explicit Confirmation Dialog
  const handleSaveToDriveRequest = (fileName: string, content: string) => {
    setPendingUpload({ fileName, content });
    setConfirmDialogOpen(true);
  };

  // Step 2: User explicitly confirms operation in Dialog -> Execute API call
  const handleConfirmUpload = async () => {
    if (!pendingUpload) return;
    setIsUploading(true);
    setErrorMessage(null);
    try {
      const result = await uploadToGoogleDrive(
        pendingUpload.fileName,
        pendingUpload.content,
        'text/csv'
      );
      setConfirmDialogOpen(false);
      setPendingUpload(null);
      setUploadedFile(result);
    } catch (err: any) {
      console.error('Failed to upload file to Google Drive:', err);
      setErrorMessage(
        err?.message || 'Failed to save spreadsheet to Google Drive. Please try again.'
      );
      setConfirmDialogOpen(false);
    } finally {
      setIsUploading(false);
    }
  };

  // Smooth scroll to demo
  const handleScrollToDemo = () => {
    const demoElement = document.getElementById('live-demo');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased selection:bg-[#0D47A1] selection:text-white">
      
      {/* Toast notification for successful Google Drive upload */}
      {uploadedFile && (
        <div className="fixed top-20 right-6 z-50 max-w-md bg-white border-2 border-emerald-500 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-top-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900">Saved to Google Drive!</h4>
            <p className="text-xs text-slate-600 mt-0.5 truncate max-w-[260px]">
              {uploadedFile.name}
            </p>
            {uploadedFile.webViewLink && (
              <a
                href={uploadedFile.webViewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0D47A1] hover:underline mt-1.5"
              >
                Open file in Google Drive
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <button
            onClick={() => setUploadedFile(null)}
            className="text-slate-400 hover:text-slate-600 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Error alert toast */}
      {errorMessage && (
        <div className="fixed top-20 right-6 z-50 max-w-md bg-white border-2 border-red-500 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-top-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900">Notice</h4>
            <p className="text-xs text-slate-600 mt-0.5">{errorMessage}</p>
          </div>
          <button
            onClick={() => setErrorMessage(null)}
            className="text-slate-400 hover:text-slate-600 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Header
        user={user}
        onOpenDriveModal={() => setDriveModalOpen(true)}
        onGoogleSignIn={handleGoogleSignIn}
        onLogout={handleLogout}
        isLoggingIn={isLoggingIn}
      />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onScrollToDemo={handleScrollToDemo} />

        {/* Section 2: Services */}
        <ServicesSection />

        {/* Section 3: Before/After Comparison */}
        <BeforeAfterSection />

        {/* Interactive Live Cleaner Demo & Google Drive Export */}
        <LiveCleanerDemo
          user={user}
          onSaveToDriveRequest={handleSaveToDriveRequest}
          onGoogleSignIn={handleGoogleSignIn}
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMeSection />

        {/* Agency Packages & Pricing */}
        <PricingPackages />

        {/* Verified Client Reviews & FAQ */}
        <TestimonialsAndFaq />
      </main>

      {/* Section 5: Footer */}
      <Footer />

      {/* Persistent floating WhatsApp button */}
      <FloatingWhatsAppButton />

      {/* Google Drive Files Modal */}
      <GoogleDriveModal
        isOpen={driveModalOpen}
        onClose={() => setDriveModalOpen(false)}
        user={user}
        onGoogleSignIn={handleGoogleSignIn}
        onLogout={handleLogout}
        isLoggingIn={isLoggingIn}
      />

      {/* Mandatory User Confirmation Dialog before executing Workspace mutations */}
      <ConfirmationDialog
        isOpen={confirmDialogOpen}
        title="Confirm Google Drive Export"
        description="Are you sure you want to save this cleaned dataset to your Google Drive account?"
        itemDetails={[
          {
            label: 'File Name',
            value: pendingUpload?.fileName || 'Cleaned_Leads.csv',
          },
          {
            label: 'Format',
            value: 'CSV Spreadsheet (text/csv)',
          },
          {
            label: 'Destination',
            value: 'User Google Drive',
          },
          {
            label: 'Account',
            value: user?.email || 'Authenticated User',
          },
        ]}
        confirmText="Save to Drive"
        cancelText="Cancel"
        isLoading={isUploading}
        onConfirm={handleConfirmUpload}
        onCancel={() => {
          setConfirmDialogOpen(false);
          setPendingUpload(null);
        }}
      />

    </div>
  );
}
