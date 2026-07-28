import { useParams } from "react-router-dom";

export default function ServiceType(){

    const { serviceSlug, categorySlug, typeSlug } = useParams();

    return(

        <div style={{padding:"120px 40px"}}>

            <h1>{serviceSlug}</h1>

            <h2>{categorySlug}</h2>

            <h3>{typeSlug}</h3>

        </div>

    );

}