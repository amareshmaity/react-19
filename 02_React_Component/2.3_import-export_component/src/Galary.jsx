// Book Component
function Book () {
    return (
        // <img src=".\assets\books\handsonml.jpg" alt="" />
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQHX0uVwFFGG-w/profile-displayphoto-scale_200_200/B4DZubdVt4LoAY-/0/1767839720804?e=1770249600&v=beta&t=Hax2r2q8796x2EHQzyiH8zELCMJIrtM_MihQEZ1JL_E" alt="" />
    )
}

// React component
export default function Galary () {
    return (
        <>
            <h1>Science Books Gallery</h1>
            <Book/>
        </>
    )
}