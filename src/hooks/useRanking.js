import { useState, useEffect } from "react";

export default function useRanking() {
    const [ranking, setRanking] = useState(() => {
        const saved = localStorage.getItem("ranking");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("ranking", JSON.stringify(ranking));
    }, [ranking]);

    // Lógica das estrelas baseada na imagem e solicitação
    function calculateStars({ timeSpent, hintsUsed, allFound }) {
        let stars = 0;
        if (allFound) stars += 1;          // Objetivo 1: Encontrar tudo
        if (hintsUsed === 0) stars += 1;   // Objetivo 2: Sem dicas
        if (timeSpent <= 90) stars += 1;   // Objetivo 3: Menos de 1:30
        return stars;
    }

    function updateRanking({ name, score, timeSpent, hintsUsed, allFound }) {
        const stars = calculateStars({ timeSpent, hintsUsed, allFound });
        const newEntry = {
            name,
            score,
            stars,
            timeSpent,
            date: new Date().toLocaleDateString()
        };

        const updated = [...ranking, newEntry]
            .sort((a, b) => b.score - a.score || a.timeSpent - b.timeSpent)
            .slice(0, 10); // Mantém o Top 10

        setRanking(updated);
    }

    return { ranking, updateRanking };
}