// Assets
import bag from '../../../static/bag.svg';
import cart from '../../../static/cart.svg';
import heart from '../../../static/heart.svg';
import home from '../../../static/home.svg';
import medKit from '../../../static/med-kit.svg';
import chart from '../../../static/chart.svg';

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
