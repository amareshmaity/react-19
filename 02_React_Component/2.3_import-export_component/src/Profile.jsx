// Child Component
export function Profile () {

  // Profile details
  let person = {
    'name': 'Amaresh Maity',
    'age': 27,
    'occupation': 'Data Scientist',
    'image': ""
  }
  return (
 
    <div>
      <img src={person['image']} alt="" />
      <h1>{person['name']}</h1>
      <h3>Age: {person.age}</h3>
      <h3>Occupation: {person.occupation}</h3>
    </div>
 
  )
}