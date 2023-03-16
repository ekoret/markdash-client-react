import { Check, X } from '@phosphor-icons/react';
import { IPromotionFooterProps } from '../../types';

const PromotionFooter = ({
	datePosted,
	startDate,
	endDate,
	scheduled,
	editing,
}: IPromotionFooterProps) => {
	const parseDateString = (date: string) => {
		return new Date(date).toLocaleDateString('en-CA', {
			timeZone: 'UTC',
		});
	};

	return (
		<div>
			<span className="text-xs text-gray-500 dark:text-gray-200 transition duration-500 ease-in-out">
				Date Posted: {new Date(datePosted).toLocaleString()}
			</span>
			<span className="text-xs text-gray-500 dark:text-gray-200 flex items-center transition duration-500 ease-in-out">
				Scheduled
				{scheduled ? (
					<Check className="mx-2 text-green-800 " weight="bold" size={18} />
				) : (
					<X
						className="mx-2 text-red-600 dark:text-red-600"
						size={18}
						weight="bold"
					/>
				)}
				<div className="ml-4 flex space-x-8">
					{startDate && (
						<p>
							<span className="font-bold">Start Date</span>:
							{editing ? (
								<input
									type="date"
									value="2023-03-15"
									className="rounded text-light-text"
								/>
							) : (
								parseDateString(startDate)
							)}
						</p>
					)}
					{endDate && (
						<p>
							<span className="font-bold">End Date</span>:
							{editing ? (
								<input
									type="date"
									value="2023-04-01"
									className="rounded text-light-text"
								/>
							) : (
								parseDateString(endDate)
							)}
						</p>
					)}
				</div>
			</span>
		</div>
	);
};

export default PromotionFooter;
