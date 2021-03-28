
type = UserIconImage {
	src: string;
}
export default function IconForUser (props: UserIconImage) => {
	const { src, alt } = props;
	return (
		<div>
			<img src={src} alt={alt} >
		</div>
	)
}
