export default function ChildPage({params}:any){
    return (
        <div>Child Component {params.Id} -  {params.FullName}</div>
    )
}