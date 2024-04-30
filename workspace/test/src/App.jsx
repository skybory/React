 
function App() {

	const handleLogin  = async () => {
		await fetch("http://seoulart.site/api/event/1");
	}
	return <button onClick={handleLogin}></button>

}
export default App;