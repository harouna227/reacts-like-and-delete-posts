import React, { useState } from 'react'


export default function Compteur(props) {
    const [compteur, setCompteur] = useState(0);

    const incrementer = () => {
        setCompteur( compteur + 1 );
    };

    const decrementer = () => {
        setCompteur( compteur - 1 );
    };


  return (
    <div className='compteur'>
        <button onClick={incrementer}>+</button>
        <p className={ compteur < 0 ? "erreur" : undefined }>{ compteur }</p>
        <button onClick={decrementer}>-</button>
    </div>
  )
}
