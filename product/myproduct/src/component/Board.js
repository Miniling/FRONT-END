import { Link } from 'react-router-dom';
import '../css/Board.css';

export default function Board() {
    var data = 0;
    const list = JSON.parse(localStorage.getItem('posts'));

    var listDesc = [];
    if (list) {
        data = 1;

        // 배열 역순 정렬
        listDesc = list.slice(0).reverse().map(data => data);
    }

    return (
        <>
            <div>
                {data === 0 ?
                    <a>게시글이 없습니다!</a> :
                    <div>
                        {listDesc.map((post) => (
                            <Link className='post-link'
                                to={`/post/${post.id}`}
                                state={{
                                    data: post,
                                }}>
                                <li className="post-card">
                                    <a className="card-title">{post.title}</a>
                                    <a className="card-content">{post.content}</a>
                                    <div className="card-info">
                                        <a className='info-re'>
                                            {post.reply}
                                        </a>

                                        <a className='info-date'>
                                            {post.date}
                                        </a>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </div>}
            </div>
        </>
    )
}