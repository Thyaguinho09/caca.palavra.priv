export default function TutorialOverlay({ onClose }) {
    return (
        <div className="tutorial-overlay">
            <div className="tutorial-modal">
                <div className="tutorial-modal-title">🕹 COMO JOGAR</div>
                <div className="tutorial-modal-body">
                    <p>Encontre palavras escondidas na grade arrastando o mouse sobre as letras.</p>
                    <div className="tut-directions">
                        <div className="tut-dir-item">
                            <span className="tut-dir-arrow">→</span>
                            <span>Horizontal</span>
                        </div>
                        <div className="tut-dir-item">
                            <span className="tut-dir-arrow">↓</span>
                            <span>Vertical</span>
                        </div>
                        <div className="tut-dir-item tut-dir-highlight">
                            <span className="tut-dir-arrow">↘</span>
                            <span>Diagonal <em>(novidade!)</em></span>
                        </div>
                        <div className="tut-dir-item tut-dir-highlight">
                            <span className="tut-dir-arrow">↙</span>
                            <span>Diagonal inversa</span>
                        </div>
                        <div className="tut-dir-item">
                            <span className="tut-dir-arrow">←</span>
                            <span>De trás pra frente</span>
                        </div>
                    </div>
                    <p style={{ marginTop: ".8rem", fontSize: ".7rem", color: "#5a8aaa" }}>
                        💡 Dica: tente arrastar de canto a canto para pegar diagonais!
                    </p>
                </div>
                <button className="tutorial-modal-btn" onClick={onClose}>ENTENDI — VAMOS LÁ!</button>
            </div>
        </div>
    );
}
