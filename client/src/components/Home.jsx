import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <h1 className="homePage">Welcome to my exercise database app!</h1>
      <h2>Click below to go to the exercise page!</h2>
      <section className="welcome-signin">
        <button onClick={() => navigate('/exercise')}>Click Here!</button>
      </section>
    </div>
  )
}

export default Home
