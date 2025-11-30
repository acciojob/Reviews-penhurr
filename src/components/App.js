
import React, { useState } from 'react'

const App = () => {
    let [rev, setRev] = useState(0)
    let revArray = [
        {
            id: 1,
            name: 'susan smith',
            job: 'web developer',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
            id: 2,
            name: 'anna johnson',
            job: 'web designer',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
            text:
                'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
            id: 3,
            name: 'peter jones',
            job: 'intern',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            text:
                'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
            id: 4,
            name: 'bill anderson',
            job: 'the boss',
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            text:
                'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        }
    ]

    let curr = 'author-'+revArray[rev].id
    console.log(curr);
    



    return (
        <div>
            <h1 id='review-heading'>Our Reviews</h1>
            <div className='review'>
                <img className='person-img' src={revArray[rev].image} alt='image of the author' height={100}></img>
                <p className='author' id={{curr}}>{revArray[rev].name}</p>
                <p className='job'>{revArray[rev].job}</p>
                <p className='info'>{revArray[rev].text}</p>



            </div>

            <button className='prev-btn' onClick={() => { (rev == 0) ? setRev(revArray.length - 1) : setRev(rev - 1) }}>Previous</button>
            <button className='next-btn' onClick={() => { (rev == revArray.length - 1) ? setRev(0) : setRev(rev + 1) }}>Next</button>
            <button className='random-btn' onClick={() => { setRev(Math.floor(Math.random() * 4)) }}>surprise me</button>

        </div>
    )
}

export default App


