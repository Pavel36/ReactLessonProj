import React from 'react';
import './post-add-form.css'

const PostAddForm = ()=> {
    return (
        <div>
            <form className="bottom-panel d-flex">
                <input 
                    type = "text"
                    placeholder = "What do you do now"
                    className = "form-control new-post-label"
                />
                <button
                    type="submit"
                    className = "btn btn-outline-secondary">
                    Add</button>
            </form>
        </div>
    )
}

export default PostAddForm; 