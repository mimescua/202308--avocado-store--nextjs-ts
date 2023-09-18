import { SVGProps } from 'react';

const Icons = {
	droplet: () => (
		<>
			<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
		</>
	),
	['chevron-left']: () => (
		<>
			<polyline points="15 18 9 12 15 6"></polyline>
		</>
	),
	heart: () => (
		<>
			<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
		</>
	),
	home: () => (
		<>
			<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
			<polyline points="9 22 9 12 15 12 15 22"></polyline>
		</>
	),
	['message-circle']: () => (
		<>
			<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
		</>
	),
	minus: () => (
		<>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		</>
	),
	plus: () => (
		<>
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		</>
	),
	search: () => (
		<>
			<circle cx="11" cy="11" r="8"></circle>
			<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
		</>
	),
	['shopping-bag']: () => (
		<>
			<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
			<line x1="3" y1="6" x2="21" y2="6"></line>
			<path d="M16 10a4 4 0 0 1-8 0"></path>
		</>
	),
	['shopping-cart']: () => (
		<>
			<circle cx="9" cy="21" r="1"></circle>
			<circle cx="20" cy="21" r="1"></circle>
			<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
		</>
	),
	thermometer: () => (
		<>
			<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
		</>
	),
	user: () => (
		<>
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
			<circle cx="12" cy="7" r="4"></circle>
		</>
	),
} as const;

export type IconNames = keyof typeof Icons;

interface Props extends SVGProps<SVGSVGElement> {
	icon: IconNames;
	title?: string;
}

export const Feathericons: React.FC<Props> = ({ icon, title, ...props }) => (
	<>
		<svg
			width={props.width || '24'}
			height={props.height || '24'}
			viewBox={props.viewBox || '0 0 24 24'}
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			{Icons[icon]()}
		</svg>
		{title && <i>{title}</i>}
	</>
);
