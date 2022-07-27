import { useLocation, Link } from 'react-router-dom';
import Footer from '../component/Footer';
import '../css/PostPage.css';

export default function PostPage() {
    function updateList(list) {
        const updated = [];

        for (let i = 0; i < list.length; i++) {
            if (list[i] != null) {
                updated.push(list[i])
            }
        }

        return updated;
    }

    const location = useLocation();
    console.log(location)
    const post = location.state.data;

    const delPost = () => {
        const saved_array = JSON.parse(localStorage.getItem('posts'));
        delete saved_array[post.id];
        const updated = updateList(saved_array)
        localStorage.setItem('posts', JSON.stringify(updated));  // 로컬에 저장
        alert("삭제되었습니다.")

        goHome()
    }

    const goHome = () => {
        window.location.href = "/";
    }

    return (
        <>
            <section id="head">
                <div className="head-writing">
                    <a>{post.title}</a>
                    <span className='button'>
                        <button
                            className="delete-button"
                            onClick={delPost}
                            type="button"
                        >
                            삭제
                        </button>

                        <Link className="update-button"
                            to={`/post/${post.id}/update`}
                            state={{
                                data: post,
                            }}>
                            수정
                        </Link>
                    </span>
                </div>
            </section>

            <section id="body">
                <div className="form">
                    <div className="content-box">
                        {post.content}
                    </div>

                    <button
                        type="button"
                        className="back"
                        onClick={goHome} >
                        뒤로가기
                    </button>
                </div>
            </section>

            <section id="foot">
                <Footer />
            </section>
        </>
    )
}