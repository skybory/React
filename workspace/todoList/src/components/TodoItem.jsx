import { TodoDispatcherContext } from '../App';
import './TodoItem.css'
import { memo, useContext } from 'react';

const TodoItem = ({id, isDone, content, date}) =>{
    const {onUpdate, onDelete} = useContext(TodoDispatcherContext);

    const onChangeCheckbox = () =>{
        onUpdate(id);
    }

    const onClickDeleteButton = () =>{
        onDelete(id);
    }

    return(
        <div className="TodoItem">
            <input type="checkbox" 
                checked={isDone} 
                onChange={onChangeCheckbox}
                readOnly/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

export default memo(TodoItem);

// 두번째 인자로 callback 함수를 주면 부모가 리렌더링 될때마다
// 이 컴포넌의 props를 스스로 판단하는게 아니라
// prevProps : 과거의 props
// nextProps : 현재의 props
// 반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
// T -> props 바뀌지 않음   : 리렌더링 X
// F -> props 바뀜          : 리렌더링 O
// 현재 id, isDone, content, date, onUpdate, onDelete 대상의 props 중에서
// id, isDone, content, date 변경이 되었을때만 리렌더링을 해주자.
// export default memo(TodoItem, (prevProps, nextProps) =>{
//     if( prevProps.id != nextProps.id )  return false;
//     if( prevProps.isDone != nextProps.isDone ) return false;
//     if( prevProps.content != nextProps.content ) return false;
//     if( prevProps.date != nextProps.date ) return false;

//     return true;
// });