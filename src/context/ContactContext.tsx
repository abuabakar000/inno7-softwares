'use client';

import React, { createContext, useContext, useState } from 'react';

interface ContactContextType {
  isOpen: boolean;
  isMenuOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
  setIsMenuOpen: (open: boolean) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

import ContactModal from '@/components/ContactModal';

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openContact = () => setIsOpen(true);
  const closeContact = () => setIsOpen(false);

  return (
    <ContactContext.Provider value={{ 
      isOpen, 
      isMenuOpen, 
      openContact, 
      closeContact,
      setIsMenuOpen 
    }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContact} />
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
