import useRequestData from "../hooks/useRequestData"
import { useProtectPage } from "../hooks/useProtectPage"

function FeedPage() {

  const token = localStorage.getItem('token')
  // console.log('olha o token:',token)
  useProtectPage()

  const config = {
    headers: {
      Authorization: token
    } 
  }
const [posts] = useRequestData([], '/posts',config)


  return (
    <main>
      <h1>Página de Feed</h1>
    </main>
  );
}

export default FeedPage;