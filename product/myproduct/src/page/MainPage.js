import Board from "../component/Board";
import Footer from "../component/Footer";
import Header from "../component/Header";
import '../css/MainPage.css';

function MainPage() {

    const goWriting = () => {
        window.location.href = "/writing"
    }

    return (
        <>
            <section id="head">
                <Header />
            </section>

            <section id="body">
                <div className="board-list">
                    <Board />
                </div>

                <span>
                    <button
                        type="button"
                        onClick={goWriting}
                        className="writing-button"
                    >
                        글쓰기
                    </button>
                </span>
            </section>

            <section id="foot">
                <Footer />
            </section>
        </>
    )
}

export default MainPage;