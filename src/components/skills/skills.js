import React from 'react';
import { Bar} from 'react-chartjs-2';


export default function Skills({ fighter }) {

    const data = {
        labels: ['', '', '', '', ''],
        datasets: [
            {

                data: [fighter.speed, fighter.strength, fighter.defense, fighter.cooldown, fighter.accuracy],
                backgroundColor: [
                    'rgba(33, 192, 215, .7)',
                    'rgba(205, 58, 129, .7)',
                    'rgba(116, 72, 194, .7)',
                    'rgba(156, 156, 156, .7)',
                    'rgba(217, 158, 43, .7)',

                ],
                borderColor: [
                    'rgba(33, 192, 215, 1)',
                    'rgba(205, 58, 129, 1)',
                    'rgba(116, 72, 194, 1)',
                    'rgba(156, 156, 156, 1)',
                    'rgba(217, 158, 43, 1)',

                ],
                borderWidth: 5,

            },
        ],
    };

    const options = {

        indexAxis: 'y',

        plugins: {
            legend: {
                display: false,
            },

        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 100
                    },
                    gridLines: {
                        drawTicks: false,
                        display: false
                    },

                }
            ]
        }
    }


    return (
        <>
            <div className="d-flex flex-column justify-content-start">
                <span className="title text-center">Skills</span>
                <Bar data={data} options={options} />
            </div>
        </>

    );

}




// r: {
//     angleLines: {
//         display: false
//     },
//     suggestedMin: 0,
//     suggestedMax: 100
// },
// ticks: { beginAtZero: false },




















// <div className='container '>
//     <div className='row'>
//         <div className='col-12 px-5'>
//             <div className='row'>
//                 <div className='col-12 text-center'>
//                     <span className='title'>Skills</span>
//                 </div>
//             </div>

//             <div className='row'>
//                 <div className='col-6 text-left'>
//                     <span className='description'>SPEED</span>
//                 </div>
//                 <div className='col-6 text-left'>
//                     <span className='description'>{fighter.speed}</span>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-6 text-left'>
//                     <span className='description'>STRENGTH</span>
//                 </div>
//                 <div className='col-6 text-left'>
//                     <span className='description'>{fighter.strength}</span>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-6 text-left'>
//                     <span className='description'>DEFENSE</span>
//                 </div>
//                 <div className='col-6 text-left'>
//                     <span className='description'>{fighter.defense}</span>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-6 text-left'>
//                     <span className='description'>COOLDOWN</span>
//                 </div>
//                 <div className='col-6 text-left'>
//                     <span className='description'>{fighter.cooldown}</span>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-6 text-left'>
//                     <span className='description'>ACCURACY</span>
//                 </div>
//                 <div className='col-6 text-left'>
//                     <span className='description'>{fighter.accuracy}</span>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>