import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"


export const useProtectPage =() =>{
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    // console.log('olha o token:',token)
    useEffect(()=>{
      if(!token){
            goToLogin(navigate)
      }
    },[navigate])
}