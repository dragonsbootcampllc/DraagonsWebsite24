// import linkedIn from 'linkedin-jobs-api';
// import jsdom from 'jsdom';
//
// async function getJobs() {
//     /*
//      const queryOptions = {
//         keyword: text ,
//         location: text ,
//         dateSincePosted: [past month, past week, 24hr],
//         jobType: [full time, part time, contract, temporary, volunteer, internship],
//         remoteFilter: [on site, remote, hybrid],
//         salary: [40000, 60000, 80000, 100000, 120000],
//         experienceLevel: [internship, entry level, associate, senior, director, executive],
//         limit: ['1', '10', '100',... etc]
//         sorted by: [recent, relevant]
//     };
//     */
//
//     const queryOptions = {
//         keyword: 'software engineer',
//         location: 'Egypt',
//         dateSincePosted: 'past Week',
//         jobType: 'full time',
//         remoteFilter: 'hybrid',
//         salary: '40000',
//         experienceLevel: 'entry level',
//         limit: '10'
//     };
//     let data;
//
//
//     linkedIn.query(queryOptions).then(async response => {
//         data = await response
//         console.log(response);
//
//         const dom = new jsdom.JSDOM(response);
//
//         console.log(dom);
//         console.log("done");
//         // An array of Job objects
//     });
//
//     return data
// }
//
// export default getJobs
