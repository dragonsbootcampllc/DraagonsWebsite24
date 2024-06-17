import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    texts: string[];
    typeSpeed?: number;
    deleteSpeed?: number;
    className?: string;
}

export default function TypingEffect({
    texts,
    typeSpeed = 100,
    deleteSpeed = 50,
    className = ''
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[currentTextIndex];
            if (isDeleting) {
                if (charIndex > 0) {
                    setDisplayedText(currentText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((currentTextIndex + 1) % texts.length);
                }
            } else {
                if (charIndex < currentText.length) {
                    setDisplayedText(currentText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }
        };

        const speed = isDeleting ? deleteSpeed : typeSpeed;
        const timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, currentTextIndex, texts, typeSpeed, deleteSpeed]);

    return (
        <span className={`${className} animate-typing-effect pr-1`}>
            <span>{displayedText}</span>
        </span>
    );
};
