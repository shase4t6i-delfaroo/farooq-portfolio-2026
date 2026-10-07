import React from 'react';
import { AlertTriangle, CheckCircle, X } from 'lucide-react';

interface ConfirmationDialogProps {
  isOpen: boolean;
  title: string;
  description: string;
  itemDetails?: {
    label: string;
    value: string;
  }[];
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  isOpen,
  title,
  description,
  itemDetails,
  confirmText = 'Proceed',
  cancelText = 'Cancel',
  isDestructive = false,
  isLoading = false,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden transform transition-all scale-100">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              isDestructive
                ? 'bg-red-50 text-red-600'
                : 'bg-blue-50 text-[#0D47A1]'
            }`}
          >
            {isDestructive ? (
              <AlertTriangle className="w-6 h-6" />
            ) : (
              <CheckCircle className="w-6 h-6" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600 mt-1">{description}</p>
          </div>
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item Details */}
        {itemDetails && itemDetails.length > 0 && (
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Operation Details
            </p>
            <div className="space-y-1.5 text-xs">
              {itemDetails.map((detail, idx) => (
                <div key={idx} className="flex justify-between items-center text-slate-700">
                  <span className="text-slate-500">{detail.label}:</span>
                  <span className="font-mono font-medium text-slate-900 truncate max-w-[240px]">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="p-6 pt-4 flex items-center justify-end gap-3 bg-white">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className={`px-5 py-2.5 text-sm font-semibold rounded-xl text-white shadow-sm transition-all flex items-center gap-2 ${
              isDestructive
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-[#0D47A1] hover:bg-[#082d68]'
            } disabled:opacity-50`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving to Drive...
              </>
            ) : (
              confirmText
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
