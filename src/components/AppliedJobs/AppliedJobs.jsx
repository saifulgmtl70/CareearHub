import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LoalStorage";
import './AppliedJob.css';
import ShowAppliedJob from "../ShowApliedJob/ShowAppliedJob";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);



    useEffect(() => {
        const storedJobId = getStoredJobApplication();
        if(jobs.length > 0){

            // const jobsApplied = jobs.filter(job => storedJobId.includes(job.id));
            // console.log(jobsApplied);

            const jobsApplied = [];
            for(const id of storedJobId){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job);
                }
            }

            setAppliedJobs(jobsApplied);
        }
    }, [jobs])


    return (
        <main>

            <section className="appliedJobsBg">
                <h2 className="text-center text-4xl text-slate-800 font-bold">Applied Jobs</h2>
            </section>
            
            <section className="mx-auto text-center bg-slate-50 py-32">
                <details className="dropdown ms-auto mb-12">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md w-52">
                        <li><a>All</a></li>
                        <li><a>Remote</a></li>
                        <li><a>On Site</a></li>
                    </ul>
                </details>
            
            {
                appliedJobs.map(job => <ShowAppliedJob key={job.id} job={job}></ShowAppliedJob>)
            }
            
            </section>
        </main>
    );
};

export default AppliedJobs;