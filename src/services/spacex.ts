import { type Doc,type APISpaceX } from "../types/api";

export const getLatestLaunches = async () =>{
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: {},
    options: {
      sort: {
        date_unix: "ASC",
      },
      limit: 12,
    },
  }),
});
const {docs : launches} = (await res.json()) as APISpaceX
console.log(launches)
return launches
}

export const getLaunchesById = async ({id}:{id:string}) =>{
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
const launch = (await res.json()) as Doc
console.log(launch)
return launch
}

