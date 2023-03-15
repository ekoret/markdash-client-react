import { IPromotionFormProps } from '../types';

const PromotionForm = ({
	setShowPromotionForm,
	handleAdd,
	formData,
	setFormData,
}: IPromotionFormProps) => {
	const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setShowPromotionForm(false);
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div className="mb-10">
			<h2 className="text-xl font-bold mb-4">Add a New Promotion</h2>
			<form className="flex flex-col">
				<label className="font-bold text-lg">Title</label>
				<input
					name="title"
					required
					max={30}
					className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
					value={formData.title}
					onChange={handleInputChange}
				/>
				<label className="font-bold text-lg">Description</label>
				<textarea
					name="description"
					required
					maxLength={120}
					className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
					value={formData.description}
					onChange={handleInputChange}
				/>
				<label className="font-bold text-lg">Start</label>
				<input
					name="start_date"
					type="date"
					required
					className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
					value={formData.start_date}
					onChange={handleInputChange}
				/>
				<label className="font-bold text-lg">End</label>
				<input
					name="end_date"
					type="date"
					required
					className="border border-black/20 dark:text-light-text py-2 px-1 rounded mb-4"
					value={formData.end_date}
					onChange={handleInputChange}
				/>
				<div className="flex">
					<button
						type="submit"
						className="bg-green-700 w-28 rounded py-2 text-white mr-auto"
						onClick={(e) => handleAdd(e)}
					>
						Add
					</button>
					<button
						type="submit"
						className="bg-gray-500 w-28 rounded py-2 text-white mr-2"
					>
						Clear Fields
					</button>
					<button
						type="submit"
						className="bg-red-500 w-28 rounded py-2 text-white"
						onClick={(e) => handleCancel(e)}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default PromotionForm;
