

function App(){
  return(
    <>
    <h1>The Main Page</h1>
    <form action="submit">
      <label htmlFor="Name">Name : </label> 
      <input id="Name" type="text"/>
      <br/>
      <label htmlFor="Email">Email ID : </label>v
      <input id="Email" type="email" />
      <br/>
      <button>Submit</button>
    </form>
    
    </>
  )
}
export default App;