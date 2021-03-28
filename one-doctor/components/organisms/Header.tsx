import styles from '../../styles/Home.module.css'

export default function Header () {
	return (
		<header className="flex w-full h-1/5 border-2 items-baseline justify-between" >
			<img src="/onedoctor.png" alt="One Doctor Logo" className="h-12" />
			<div>
				<img src="/noImage.png" alt="User Image" className="h-12 mx-auto rounded-full" />
			</div>
		</header>
			)
}
