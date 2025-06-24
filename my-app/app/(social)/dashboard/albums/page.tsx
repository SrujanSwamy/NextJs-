import React from 'react'
//sever side fetching improves seo
//you need to reload everytime as hmr displays the cache data so when reload happens again new data from the server is been fetched

const Album = async () => {
    const response=await fetch ("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) throw new Error("failed to fecth the albums");
    const albums=await response.json();

  return (
    <div>
        {albums.map((album:{id:number,title:string})=>(
            <div key={album.id}>
                <h3>{album.title}</h3>
                <p>{album.id}</p>
            </div>
        ))}
    </div>
  )
}

export default Album;