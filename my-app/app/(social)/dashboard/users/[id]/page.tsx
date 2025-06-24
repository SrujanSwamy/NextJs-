

const userId = ({params}:{params:{id: string}}) => {
    const id=params.id;

  return (
    <div>userId {id}</div>
  )
}

export default userId