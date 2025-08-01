import React, { useState } from 'react';
import Button from '../../../components/Button/Button';

const CommentForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', postComment: ''});
  const [comments, setComments] = useState<{ name: string; email: string; postComment: string }[]>([]);
  // const[errormsg, setErrormsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {//event handler function in typescript tells TypeScript that this function can receive events from either an input or textarea element.
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));//spread operator
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name.trim() && formData.email.trim()) {
      setComments(prev => [...prev, formData]);
      setFormData({ name: '', email: '', postComment:''}); // clear form
    }

    if(!formData.name.trim() || !formData.email.trim() || !formData.postComment.trim()){

      // setErrormsg("All fields are necessary");
      console.log("All fields are necessary");

      return;

    }

  };

  return (
    <div className="comment_form">
         
      <form onSubmit={handleSubmit} className="form_general">

        <div className='form_item'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className='form_item'>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='form_item'>
          <textarea 
            rows={4} 
            placeholder="Comment" 
            id=""
            name='postComment'
            value={formData.postComment}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='form_item'>

          <Button typeBtn='submit' className='general'>Submit</Button>
        </div>
        
      </form>

      <div className="mt-6">
        <h3>Comments:</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.postComment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentForm;
