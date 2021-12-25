export enum Category {
	PERSONAL = 'Personal',
	CAREER = 'Career',
	SHOPPING = 'Shopping',
	FINANCE = 'Finance',
	HOME = 'Home',
	HEALTH = 'Health',
	OTHER = 'Other',
}

export interface ToDo {
	id: string;
	title: string;
	content: string;
	isDone: boolean;
	category: Category;
}
