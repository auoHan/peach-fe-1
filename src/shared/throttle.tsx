export const throttle = (fn: Function, time: number) => {
	let timer: number | undefined = undefined
	return (...args: any[]) => {
		if (timer) {
			return
		} else {
			fn(...args)
			// 不用window会报错，number类型无法接收
			timer = window.setTimeout(() => {
				timer = undefined
			}, time)
		}
	}
}
