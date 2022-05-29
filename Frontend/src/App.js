import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import SearchBox from './Components/Searchbox';
import axios from 'axios';

function App() {
  const [jobListings, setJobListing] = useState([]);

  const getJobListings = async () => {
    axios
      .get('http://localhost:8080/jobs')
      .then((data) => {
        setJobListing(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getJobListings();
  }, []);

  console.log('Job state', jobListings);

  return (
    <div className='app'>
      <SearchBox />
      <div className='card__container'>
        {jobListings.map((job) => {
          return <Card key={job._id} job={job} />;
        })}
      </div>
    </div>
  );
}

export default App;
