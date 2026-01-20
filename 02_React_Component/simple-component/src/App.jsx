import './App.css';

// Component
function Profile () {

  // Profile details
  let person = {
    'name': 'Amaresh Maity',
    'age': 27,
    'occupation': 'Data Scientist',
    'image': "https://media.licdn.com/dms/image/v2/D4D03AQHX0uVwFFGG-w/profile-displayphoto-scale_200_200/B4DZubdVt4LoAY-/0/1767839720804?e=1770249600&v=beta&t=Hax2r2q8796x2EHQzyiH8zELCMJIrtM_MihQEZ1JL_E"
  }
  return (
    <>
      <div>
        <img src={person['image']} alt="" />
        <h1>{person['name']}</h1>
        <h3>Age: {person.age}</h3>
        <h3>Occupation: {person.occupation}</h3>
      </div>
    </>
  )
}

export default Profile;