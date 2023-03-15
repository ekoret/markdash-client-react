export interface IPromotionFormProps {
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
	handleAdd: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	formData: IFormData;
	setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
}

export interface IHeaderProps {
	theme: string;
	handleThemeChange: () => void;
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
	showPromotionForm: boolean;
}

export interface INavbarProps {
	setShowPromotionForm: React.Dispatch<React.SetStateAction<boolean>>;
	showPromotionForm: boolean;
}

export interface IPromotionProps {
	id: number;
	title: string;
	description: string;
	datePosted: string;
	endDate: string;
	startDate: string;
	scheduled: boolean;
	handleSchedule: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: number
	) => void;
	handleDelete: (id: number) => void;
}

export interface IPromotion {
	id: number;
	title: string;
	description: string;
	date_posted: string;
	start_date: string;
	end_date: string;
	scheduled: boolean;
}

export interface IPromotionsProps {
	promotions: IPromotion[] | null;
	handleSchedule: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		id: number
	) => void;
	handleDelete: (id: number) => void;
}

export interface IFormData {
	title: string;
	description: string;
	start_date: string;
	end_date: string;
	user_id: number;
}