import s from '@/components/Welcome/welcome.module.scss'
import cloud from '@/assets/icons/welcome/cloud.svg'
export const Forth = () => {
	return (
		<div class={s.card}>
			<img class={s.icon} src={cloud} />,
			<h2>
				云备份
				<br />
				再也不怕数据丢失
			</h2>
		</div>
	)
}
Forth.displayName = 'Forth'
