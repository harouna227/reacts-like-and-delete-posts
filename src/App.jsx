import React, { useState } from 'react';
import Compteur from './composants/compteur';
import Post from './composants/Post';
import Navbar from './composants/Navbar';


export default function App() {
    const [posts, setPosts] = useState([
            {
                id: 1,
                title: "Introduction à JavaScript",
                description: "Découvrez les bases de JavaScript et comment l'utiliser pour rendre vos pages web interactives.",
                liker: false
            },
            {
                id: 2,
                title: "Les bases de React",
                description: "Apprenez les fondamentaux de React, une bibliothèque JavaScript pour construire des interfaces utilisateur.",
                liker: false
            },
            {
                id: 3,
                title: "Node.js pour les débutants",
                description: "Explorez Node.js et comment l'utiliser pour construire des applications serveur en JavaScript.",
                liker: false
            },
            {
                id: 4,
                title: "CSS avancé",
                description: "Plongez dans les techniques avancées de CSS pour créer des designs modernes et réactifs.",
                liker: false
            },
            {
                id: 5,
                title: "API REST avec Express",
                description: "Construisez des API RESTful en utilisant Express, un framework Node.js populaire.",
                liker: false
            }
        ]
    );
    
    const liker = (data) => {
        // console.log(posts)
        const donneesCopiees = [...posts];
        const index = posts.indexOf(data);
        
        donneesCopiees[index] = {...posts[index], liker: !posts[index].liker };

        setPosts(donneesCopiees);
        console.log(donneesCopiees);
    };

    const supprimer = (idPost) => {
        const nouvelleDonnee = posts.filter(       (p) => p.id != idPost);
        setPosts(nouvelleDonnee);
    };

    const nombreLike = posts.filter(p => p.liker);

  return (
    <div className='app'>
        
        <Navbar nombreDeLike={ nombreLike.length } />

        {posts.map((p) => (
            <Post data={p} key={p.id} liker={liker} supression={supprimer} />
        ))}
    </div>
  )
}
