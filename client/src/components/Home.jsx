import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">
      <h1 className="homePage">Click below to go to the exercise</h1>
      <section className="welcome-signin">
        <button onClick={() => navigate('/exercise')}>
          Click Here To Get Started
        </button>
      </section>
    </div>
  )
}

export default Home
