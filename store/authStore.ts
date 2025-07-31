import { create } from 'zustand';

import { UserDetailsType } from '@/utils/types/db/UserType';

interface AuthStoreState {
  currentAuthData: UserDetailsType | null;
  setAuthData: (data: UserDetailsType) => void;
  clearAuthData: () => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  currentAuthData: null,
  setAuthData: (data) => set({ currentAuthData: data }),
  clearAuthData: () => set({ currentAuthData: null }),
}));
