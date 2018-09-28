//数据的深层次处理，类似组件的computed，是对state的数据处理
let getters={
	userName(state){
		if(!state.isLogin){
			let isLogin = sessionStorage.getItem('isLogin')
			if(typeof isLogin == 'string'){
				isLogin = Boolean(isLogin)
			}
			state.isLogin = isLogin
			state.userName = sessionStorage.getItem('userName')
		}
		return state.userName
	}
}
export default getters