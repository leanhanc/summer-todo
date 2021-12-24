export enum Category {
	PERSONAL = 'Personal',
	CAREER = 'Career',
	SHOPPING = 'Shopping',
	FINANCIAL = 'Financial',
	HOME = 'Home',
	OTHER = 'Other',
}

export interface ToDo {
	id: string;
	title: string;
	content: string;
	isDone: boolean;
	category: Category;
}
