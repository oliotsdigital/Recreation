'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BookingModalData {
  isOpen: boolean;
  type: 'trial' | 'class' | 'membership' | 'coach';
  title?: string;
  subtitle?: string;
  defaultProgram?: string;
  defaultCoach?: string;
  defaultPlan?: string;
}

interface ToastData {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

interface ModalContextType {
  modalData: BookingModalData;
  openBookingModal: (data?: Partial<BookingModalData>) => void;
  closeBookingModal: () => void;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalData, setModalData] = useState<BookingModalData>({
    isOpen: false,
    type: 'trial',
  });

  const [toasts, setToasts] = useState<ToastData[]>([]);

  const openBookingModal = (data?: Partial<BookingModalData>) => {
    setModalData({
      isOpen: true,
      type: data?.type || 'trial',
      title: data?.title || 'Book Your Session',
      subtitle: data?.subtitle || 'Take the first step toward recreating yourself at Recreation Calisthenics Club.',
      defaultProgram: data?.defaultProgram,
      defaultCoach: data?.defaultCoach,
      defaultPlan: data?.defaultPlan,
    });
  };

  const closeBookingModal = () => {
    setModalData((prev) => ({ ...prev, isOpen: false }));
  };

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  return (
    <ModalContext.Provider
      value={{
        modalData,
        openBookingModal,
        closeBookingModal,
        showToast,
      }}
    >
      {children}

      {/* Global Toasts */}
      <div className="toast-container" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-item">
            <span style={{ color: 'var(--accent-gold)', fontSize: '1.2rem' }}>✦</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-white)' }}>
              {toast.message}
            </span>
          </div>
        ))}
      </div>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
