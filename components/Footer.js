import React from 'react'

function Footer() {
    return (
       <div className="bg-gray-300 pb-5 pt-7 grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32">
           <div className="space-y-4 text-sm text-gray-800">
               <h5 className="font-bold">ABOUT</h5>
               <p>How Airbnb works</p>
               <p>Let's go Brandon!</p>
               <p>Make America Great Again!</p>
               <p>Sponsor me</p>
               <p>Airbnb Plus</p>
               
           </div>
           <div className="space-y-4 text-sm text-gray-800">
           <h5 className="font-bold">My Portfolio</h5>
               <p>Planet Technologies</p>
               <p>This is not a real site!</p>
               <p>NextJS is awesome!</p>
               <p>Cutlerwater here</p>
               <p>Vercel</p>
           </div>
           <div className="space-y-4 text-sm text-gray-800">
           <h5 className="font-bold">Technologies</h5>
               <p>Javascript</p>
               <p>HTML and CSS</p>
               <p>Resource Centre</p>
               <p>TailwindCSS</p>
               <p>Redux</p>
           </div>
           <div className="space-y-4 text-sm text-gray-800">
           <h5 className="font-bold">COVID</h5>
               <p>Alpha</p>
               <p>Bravo</p>
               <p>Delta</p>
               <p>Omicron</p>
               <p>Done!</p>
           </div>
       </div> 
    );
}

export default Footer
