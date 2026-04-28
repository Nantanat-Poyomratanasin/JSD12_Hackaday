export default function Flashcard({
    card,           // ข้อมูลการ์ดใบปัจจุบัน (id, question, answer)
    currentIndex,   // เลขลำดับข้อปัจจุบัน (เริ่มที่ 0)
    totalCards,     // จำนวนการ์ดทั้งหมดใน Deck
    showAnswer,     // ตัวบอกว่าตอนนี้ "โชว์คำตอบ" หรือยัง (True/False)
    onReveal,       // ฟังก์ชันที่จะเรียกเมื่อกดปุ่ม "Reveal Answer"
    onNext,         // ฟังก์ชันที่จะเรียกเมื่อกดปุ่ม "Yes/No"
    score           // คะแนนปัจจุบัน
}) {
    return (
        <div>
            <h1>
                Question {currentIndex+1} of {totalCards}
            </h1>
            <div>
                {card.question}
            </div>
            <div>
                {showAnswer ?
                    <div>
                        {card.answer}
                        <div>
                            <button onClick={() => (onNext(true))}>
                                Yes
                            </button>
                            <button onClick={() => (onNext(false))}>
                                No
                            </button>
                        </div>
                    </div>
                    :
                    <button onClick={onReveal} className="border border-slate-200 shadow-md">
                        Reveal Answer
                    </button>
                }
            </div>
            <div>
                Current Score: {score}
            </div>
        </div>
    );
}