// Types
import { Category } from '../../types/todo';
import type { ToDo } from '../../types/todo';

const baseClassName = 'category-icon fas fa';

export const getIconForCategory = (category: ToDo['category']) => {
	switch (category) {
		case Category.HOME:
			return `${baseClassName}-home`;
		case Category.CAREER:
			return `${baseClassName}-briefcase`;
		case Category.HEALTH:
			return `${baseClassName}-heartbeat`;
		case Category.PERSONAL:
			return `${baseClassName}-heart`;
		case Category.FINANCE:
			return `${baseClassName}-dollar-sign`;
		default:
			return `${baseClassName}-shopping-cart`;
	}
};
