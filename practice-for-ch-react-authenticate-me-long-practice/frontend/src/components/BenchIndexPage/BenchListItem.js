import { useDispatch, useSelector } from "react-redux"
import { fetchBench, getBench } from "../../store/benches"
import { useEffect } from "react"



const BenchListItem = (props) => {
    const dispatch = useDispatch()
    const bench = props.bench

    // useEffect(() => {
    //     dispatch(fetchBench(bench.id))
    // })
    return (
        <div>
            <h1>{bench.title}</h1>
            <h1>{bench.price}</h1>
        </div>
    )
}

export default BenchListItem