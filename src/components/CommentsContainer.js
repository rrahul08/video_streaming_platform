import React from 'react';

const commentsData = [
    {
        name:"Rahul",
        text:"Lorem epsum naoof text good",
        replies:[],
    },
    {
        name:"Rahul",
        text:"Lorem epsum naoof text good",
        replies:[
            {
                name:"Rahul",
                text:"Lorem epsum naoof text good",
                replies:[
                    {
                        name:"Rahul",
                        text:"Lorem epsum naoof text good",
                        replies:[
                            {
                                name:"Rahul",
                                text:"Lorem epsum naoof text good",
                                replies:[
                                    {
                                        name:"Rahul",
                                        text:"Lorem epsum naoof text good",
                                        replies:[],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name:"Rahul",
        text:"Lorem epsum naoof text good",
        replies:[],
    },
    {
        name:"Rahul",
        text:"Lorem epsum naoof text good",
        replies:[],
    },
    {
        name:"Rahul",
        text:"Lorem epsum naoof text good",
        replies:[],
    },

]

const Comment = ({data}) => {
    const{name,text,replies} = data;
    return (
     <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg '>
        <img className='w-8 h-8 m-2'
         alt="user" 
         src='data:image/png;base64,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'/>
        <div>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
        
     </div>
    )
};

const CommentsList = ({comments}) => {
    return comments.map((comment,index)=>(
        <div key={index}>
        <Comment  data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies}/>
        </div>
        </div>
    ));
}

const CommentsContainer = () => {
  return (
    <div className='m-2 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;