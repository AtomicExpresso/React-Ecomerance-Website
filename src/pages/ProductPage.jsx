import {useParams} from "react-router-dom";

function ProductPage(){
  const { name, id } = useParams();
  const post = postthis(name, id);

  function postthis(name, id){
    return {
      title: `${name}`,
      para: `ewwewewe ${id}`
    }
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.para}</p>
    </div>
  )
}

export default ProductPage;