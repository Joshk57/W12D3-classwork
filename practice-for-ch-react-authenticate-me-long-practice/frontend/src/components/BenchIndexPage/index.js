import { useSelector, useDispatch } from "react-redux"
import { fetchBenches, getBenches } from "../../store/benches"
import { useEffect } from "react"
import BenchList from "./BenchList"
import BenchListItem from "./BenchListItem"

const BenchIndexPage = () => {
    const dispatch = useDispatch()
    const benches = useSelector(getBenches)

    useEffect(() => {
        dispatch(fetchBenches())
    }, [])

    return (

        <>
            <ul>
                {
                    // benches.map(bench => <BenchListItem/>)
                    <BenchList benches={benches} />
                }
            </ul>
        </>
    )
}

export default BenchIndexPage