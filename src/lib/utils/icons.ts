// Assets
import bag from '/bag.svg';
import cart from '/cart.svg';
import heart from '/heart.svg';
import home from '/home.svg';
import medKit from '/med-kit.svg';
import chart from '/chart.svg';

// Types
import { Category } from '../../types/todo';
import type { ToDo } from '../../types/todo';

export const getIconForCategory = (category: ToDo['category']) => {
	switch (category) {
		case Category.HOME:
			return home;
		case Category.CAREER:
			return bag;
		case Category.HEALTH:
			return medKit;
		case Category.PERSONAL:
			return heart;
		case Category.FINANCE:
			return chart;
		default:
			return cart;
	}
};
