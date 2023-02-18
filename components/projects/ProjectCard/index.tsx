import Image from 'next/image';
import Props from './ProjectCard.props';

const ProjectCard: React.FC<Props> = ({ label, subtitle, description, icon, ...props }) => {
	return (
		<button
			className='bg-white rounded-[20px]'
			style={{
				boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.03)',
			}}
			{...props}
		>
			<div className='p-[20px] w-[474px]'>
				<div className='flex mb-4 justify-between'>
					<div>
						<p className='text-BoldBodyText_18 text-black text-left'>
							{label}
						</p>
						<p className='text-BodyText_14 text-[12px] text-primary text-left'>
							{subtitle}
						</p>
					</div>
					<div>
						<Image
							width={80}
							height={80}
							className='rounded-[100px] object-cover'
							alt=''
							src={icon} />
					</div>
				</div>
				<p className='text-BodyText_14 text-[12px] text-darkGrey text-left'>
					{description}
				</p>
			</div>
		</button>
	);
};

export default ProjectCard;
