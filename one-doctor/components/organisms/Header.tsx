import styles from '../../styles/Home.module.css'

export default function Header () {
	return (
		<header className="flex w-full h-1/5 border-2 justify-between" >
			<img src="/onedoctor.png" alt="One Doctor Logo" className="h-12" />
			<div className="flex h-12 w-50 justify-start items-center" >
				<p>MY PAGE</p>
				<img src="/noImage.png" alt="User Image" className="h-12 rounded-full ml-3" />
			</div>
		</header>
			)
}
