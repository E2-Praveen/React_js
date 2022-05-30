import './App.css'
import Person from './Practise';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
      <div className='container'>
          <div className="App">
            <h1>React Learning</h1>
          </div>

          <Person />

          <form className='login'>
              <div className='title'>
                <h1>Login</h1>
              </div>
              <TextField
		  		    	  id="email"
		  		    	  label="Email *"
		  		    	  margin="normal"
		  		    	  variant="outlined"
		  		    	  type="text"
		  		    	  autoComplete="off"
                  textAlign="center"
		  		    />
              <TextField
		  		    		id="password"
		  		    		label="Password *"
		  		    		margin="normal"
		  		    		variant="outlined"
		  		    		type="password"
		  		    		autoComplete="off"
		  		    />
              
              <div className='forgot'>
                  <span>Forgot Password</span>
              </div>

              <div className='submit'>
                <Button type="submit" variant="contained" color="info">SUBMIT</Button>
              </div>
          </form>
      </div>
  );
}

export default App;
