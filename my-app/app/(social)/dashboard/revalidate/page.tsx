export const revalidate=10;
//it will revalidate the page every 10sec
//if i wnat to revalidate only the fetch eevry then add the rvalidate at the fetch api call it will not appy to the entire page
export default async function Page(){
    const response=await fetch("https://www.hindustantimes.com/");
    if(!response.ok) throw new Error("fetching failed");
    const data=await response.text();
    console.log(response);
    return(
        <>
        <div>
            {data}
        </div>
        </>
    )
}