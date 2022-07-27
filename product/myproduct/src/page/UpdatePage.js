import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../component/Footer';
import '../css/WritingPage.css';

export default function UpdatePage() {
    const location = useLocation();
    const post = location.state.data;

    const onTitleChange = (event) => {
        setPost({
            ...posts,
            title: event.currentTarget.value
        });
    };

    const onContentChange = (event) => {
        setPost({
            ...posts,
            content: event.currentTarget.value
        });
    };

    const [posts, setPost] = useState({
        title: post.title,
        content: post.content,
        date: post.date,
    })

    const updatePost = () => {
        const saved_array = JSON.parse(localStorage.getItem('posts'));
        saved_array[post.id].title = posts.title;
        saved_array[post.id].content = posts.content;
        localStorage.setItem('posts', JSON.stringify(saved_array));  // 로컬에 저장
        alert("수정되었습니다!")

        goHome()
    }

    const goHome = () => {
        window.location.href = "/"
    }

    return (
        <>
            <section id="head">
                <div className="head-writing">
                    <a>글 수정하기</a>
                    <span>
                        <button
                            className="posting-button"
                            onClick={updatePost}
                            type="button"
                        >
                            완료
                        </button>
                    </span>
                </div>
            </section>

            <section id="body">
                <div className="form">
                    <input
                        className="title"
                        onChange={onTitleChange}
                        value={posts.title}
                        type="text"
                    />

                    <textarea
                        className="content"
                        onChange={onContentChange}
                        value={posts.content}
                        type="text"
                    />

                    <button
                        className="back"
                        onClick={goHome}
                        type="button"
                    >
                        홈으로
                    </button>
                </div>
            </section>

            <section id="foot">
                <Footer />
            </section>
        </>
    )
}