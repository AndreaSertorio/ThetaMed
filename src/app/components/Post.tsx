// components/Post.tsx


import React, { FC } from 'react';
import dynamic from 'next/dynamic';


const Post: FC = () => {
    return (
        <div className="post flex-1 mr-4 p-4 bg-white rounded shadow border border-silver-chalice">
            <div className="font-bold mb-2 text-peacock-blue">Nome Utente</div>
            <div className="mb-4 text-ash-grey">Azione</div>
            <div className="text-hippie-green">Punteggio: 10</div>
        </div>
    );
};

export default Post;
