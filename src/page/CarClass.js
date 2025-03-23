import { useParams } from "react-router-dom"
import SignUpSection from "../section/SignUpSection"
export default function CarClass() {
    const { name } = useParams();

    return <>
        <SignUpSection className={ name }/>
    </>
}