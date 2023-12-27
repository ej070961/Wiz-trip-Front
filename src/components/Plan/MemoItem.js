import React from 'react'
import * as M from '../../styles/memo-item.style'
import DeleteIcon from '../../assets/delete-icon';
import { useDispatch } from 'react-redux';
import { deleteMemo } from '../../services/memo';

function MemoItem({category, item}) {
    console.log(category);
    console.log(item);

    const dispatch = useDispatch();

    const handleDelete = () => {
      console.log(item.memoId);
      dispatch(deleteMemo(item.memoId));
    }
    return (
      <M.ItemLayout $category={category}>
          <M.ContentContainer>
              <span className='title-text'>{item.title}</span>
              <span className='content-text'>{item.content}</span>
              <a href={item.url} className='url-text'>{item.url}</a>
          </M.ContentContainer>
          <button style={{background: 'transparent', border: 0, marginRight: '25px'}} onClick={handleDelete}>
            <DeleteIcon/>
          </button>
      </M.ItemLayout>
    )
}

export default MemoItem