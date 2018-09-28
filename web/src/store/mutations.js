const mutations={
	saveUserName(state,preload){
		sessionStorage.setItem('userName',preload)
		sessionStorage.setItem('isLogin',true)
		state.userName = preload
		state.isLogin = true
	},
	exitPage(state,preload){
		state.userName = ''
		state.isLogin = false
		sessionStorage.removeItem('userName')
		sessionStorage.removeItem('isLogin')
	}
}
export default mutations