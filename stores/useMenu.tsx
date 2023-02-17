import create from 'zustand';

interface IUseMenu {
	isMenuOpened: boolean;
	setIsMenuOpened: (newValue: boolean) => void;
}

const useMenu = create<IUseMenu>((set) => ({ 
	isMenuOpened: false,
	setIsMenuOpened: (newModal) => set({
		isMenuOpened: newModal,
	}),
}));

export default useMenu;
