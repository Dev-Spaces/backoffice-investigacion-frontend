import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt,faCheckSquare} from '@fortawesome/free-solid-svg-icons'
import Navbar3 from "../components/Navbar3";
import Footer from "../components/Footer";

const Usuario = ({ user }) => {

    /*
        mutation{
            activeUser(identificacion:224465)
        }
    /*/
    const ACTIVAR_USUARIO = gql`
        mutation activeUser($identificacion:Int){
            activeUser(identificacion:$identificacion)
        }
    `
    const ELIMINAR_USUARIO = gql`
        mutation deleteUser($ident:Int){
            deleteUser(ident:$ident)
        }
    `
    const [activar] = useMutation(ACTIVAR_USUARIO)
    const [eliminar] = useMutation(ELIMINAR_USUARIO)


    const activarUser = () => {
        activar({ variables: { identificacion: user.identificacion } })
    }

    const eliminarUser = () => {
        eliminar({ variables: { ident: user.identificacion } })
    }

    return (
        
            <tr>
                <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300">{user.nombre}</td>
                <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300">{user.identificacion}</td>
                <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300">{user.estado}</td>
                <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300">{user.email}</td>
                <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300">{user.perfil}</td>
                <td className="p-2 md:border bg-pink-50 md:border-grey-500 text-left block md:table-cell hover:bg-gray-300"><button className="btn btn-primary m-1" onClick={activarUser}>
                <FontAwesomeIcon icon={faCheckSquare}/>
                </button>
                <button className="btn btn-primary" onClick={eliminarUser}><FontAwesomeIcon icon={faTrashAlt}/></button></td>
            </tr>
    )
}

export default Usuario