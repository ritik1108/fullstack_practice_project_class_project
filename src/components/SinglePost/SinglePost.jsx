import React from 'react';
import './singlePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_960_720.jpg" alt="" />
        <h1 className='singlePostTitle'>Dummy Title
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author:<b>Digvijay</b></span>
          <span className="singlePostDate">1 hour ago...</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio architecto laboriosam numquam sint placeat error illo commodi soluta iure perspiciatis sed consectetur maiores pariatur corporis earum consequatur impedit veritatis, suscipit repudiandae sit laborum. Nihil inventore accusantium earum eaque adipisci voluptatem vero nam, molestias, ratione, quasi maxime quidem id cumque iusto nesciunt illum. Nobis, cumque alias nostrum aut sint laborum totam, porro doloribus accusantium veritatis dolorem possimus harum, aliquid rem. Pariatur eius iure cum exercitationem architecto animi, alias provident ipsa laboriosam cupiditate excepturi temporibus, doloribus illo distinctio corporis id expedita tempora saepe qui. Facilis architecto, assumenda iure illo ipsum vel quae eum mollitia, ipsa deleniti rerum labore obcaecati! Ullam provident laboriosam autem laudantium debitis, eos quia at adipisci molestias assumenda ab. Voluptatem sequi tenetur impedit sit tempora maxime sint saepe, doloribus aperiam, quae suscipit. Hic, quas perspiciatis. Eius enim unde earum quod ea porro, nam molestias cum, exercitationem ex itaque quaerat eveniet labore libero, ducimus ad dicta obcaecati odit beatae nesciunt? Beatae voluptatibus adipisci, itaque veritatis eligendi, obcaecati neque, inventore est quam nobis pariatur hic corporis. Iusto tenetur provident quo fuga quam fugiat earum accusantium, debitis, libero quis quaerat sapiente cumque ipsam, minus temporibus quia explicabo adipisci sint enim culpa. Hic consequatur sit deleniti dolor in dicta dignissimos unde reiciendis temporibus veniam maxime at tempore incidunt quidem modi, voluptas aperiam nostrum molestiae eos iusto earum molestias quo cupiditate. Eaque, officia iusto obcaecati ea enim iste error excepturi tenetur quaerat placeat porro autem minima id magnam perspiciatis illum harum magni. Recusandae, praesentium!
        </p>
      </div>
    </div>
  )
}

export default SinglePost