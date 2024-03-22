import { create } from "zustand";

interface IUser {
  id: string;
  username: string;
  email: string;
  avatar: string;
  diamond: number;
}

const initialState: IUser = {
  id: "",
  username: "",
  email: "",
  avatar: "",
  diamond: 0,
};

interface UserStore {
  user: IUser;
  setEmail: (email: string) => void;
  setUsername: (username: string) => void;
  updateUsernameAvatar: (username: string, avatar: string) => void;
  setAvatar: (avatar: string) => void;
  setDiamond: (diamond: number) => void;
  setDiamondMin: (diamond: number) => void | undefined;
}

const userStore = create<UserStore>((set) => ({
  user: initialState, // initial state
  setEmail: (
    email: string // action to update the state
  ) => set((state) => ({ user: { ...state.user, email } })),

  setUsername: (username: string) =>
    set((state) => ({ user: { ...state.user, username } })),
  updateUsernameAvatar: (username: string, avatar: string) =>
    set((state) => ({ user: { ...state.user, username, avatar } })),
  setAvatar: (avatar: string) =>
    set((state) => ({ user: { ...state.user, avatar } })),
  setDiamond: (diamond: number) =>

    set((state) => ({
      user: { ...state.user, diamond: state.user.diamond + diamond },
    })),

  setDiamondMin: (diamond: number) =>
    set((state) => ({
      user: { ...state.user, diamond: state.user.diamond - diamond },
    })),
}));

export default userStore;
