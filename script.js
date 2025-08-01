// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Love button functionality
    const loveButton = document.getElementById('loveButton');
    const loveCount = document.getElementById('loveCount');
    let count = 0;

    loveButton.addEventListener('click', function() {
        // Increment counter
        count++;
        loveCount.textContent = count;
        
        // Add click animation
        loveButton.classList.add('clicked');
        setTimeout(() => {
            loveButton.classList.remove('clicked');
        }, 500);

        // Create floating heart effect
        createFloatingHeart();
        
        // Play love sound effect (if available)
        playLoveSound();
        
        // Show love message
        showLoveMessage();
    });

    // Create floating heart animation
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.transition = 'all 3s ease-out';
        
        document.body.appendChild(heart);
        
        // Animate heart floating up
        setTimeout(() => {
            heart.style.top = '-50px';
            heart.style.opacity = '0';
        }, 100);
        
        // Remove heart after animation
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 3000);
    }

    // Play love sound (optional)
    function playLoveSound() {
        // Create a melodic love sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Love melody: C, E, G, C (major chord progression)
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C4, E4, G4, C5
        const timing = [0, 0.1, 0.2, 0.3];
        
        notes.forEach((note, index) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            }, timing[index] * 1000);
        });
    }

    // Show random love messages
    function showLoveMessage() {
        const messages = [
            "I love you! 💕",
            "You're amazing! ✨",
            "My heart beats for you! 💓",
            "You're my everything! 🌟",
            "Forever yours! 💖",
            "You make me happy! 😊",
            "My beautiful love! 💝",
            "You're perfect! 💎"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Create temporary message
        const messageDiv = document.createElement('div');
        messageDiv.textContent = randomMessage;
        messageDiv.style.position = 'fixed';
        messageDiv.style.left = '50%';
        messageDiv.style.top = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.backgroundColor = 'rgba(255, 105, 180, 0.9)';
        messageDiv.style.color = 'white';
        messageDiv.style.padding = '15px 25px';
        messageDiv.style.borderRadius = '25px';
        messageDiv.style.fontSize = '1.2rem';
        messageDiv.style.fontWeight = 'bold';
        messageDiv.style.zIndex = '1001';
        messageDiv.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        messageDiv.style.animation = 'fadeInOut 2s ease-in-out';
        
        document.body.appendChild(messageDiv);
        
        // Remove message after animation
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 2000);
    }

    // Surprise box functionality
    const surpriseBox = document.getElementById('surpriseBox');
    let surpriseRevealed = false;

    surpriseBox.addEventListener('click', function() {
        if (!surpriseRevealed) {
            revealSurprise();
        }
    });

    function revealSurprise() {
        surpriseRevealed = true;
        surpriseBox.classList.add('surprise-revealed');
        
        const surpriseContent = surpriseBox.querySelector('.surprise-content');
        surpriseContent.innerHTML = `
            <i class="fas fa-heart" style="color: white; font-size: 4rem; margin-bottom: 20px;"></i>
            <h3 style="color: white; font-size: 2rem; margin-bottom: 15px;">Surprise! 🎉</h3>
            <p style="color: white; font-size: 1.3rem; line-height: 1.6;">
                You're the most special person in my life!<br>
                I promise to love you more each day.<br>
                Thank you for being you! 💕
            </p>
            <div style="margin-top: 20px;">
                <span style="font-size: 2rem;">💖</span>
                <span style="font-size: 2rem;">💕</span>
                <span style="font-size: 2rem;">💝</span>
            </div>
        `;
        
        // Create confetti effect
        createConfetti();
        
        // Play celebration sound
        playCelebrationSound();
    }

    // Create confetti effect
    function createConfetti() {
        const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb', '#ff69b4'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '1000';
                confetti.style.animation = 'confettiFall 3s linear forwards';
                
                document.body.appendChild(confetti);
                
                // Remove confetti after animation
                setTimeout(() => {
                    if (document.body.contains(confetti)) {
                        document.body.removeChild(confetti);
                    }
                }, 3000);
            }, i * 50);
        }
    }

    // Play celebration sound
function playCelebrationSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create a more elaborate celebration melody
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C4, E4, G4, C5, E5, G5
    const timing = [0, 0.15, 0.3, 0.45, 0.6, 0.75];
    const durations = [0.4, 0.35, 0.4, 0.35, 0.4, 0.5];
    
    notes.forEach((note, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Add vibrato effect for more musical sound
            oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(note * 1.01, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(note * 0.99, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + durations[index]);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + durations[index]);
        }, timing[index] * 1000);
    });
}

    // Add CSS for new animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
        
        @keyframes confettiFall {
            0% {
                transform: translateY(-10px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add hover effects to reason cards
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to title
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach((word, index) => {
        word.style.opacity = '0';
        word.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            word.style.transition = 'all 1s ease';
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 500);
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.message-card, .reasons-section, .surprise-section, .quote-section');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        observer.observe(el);
    });

    // Add keyboard shortcuts (desktop only)
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            loveButton.click();
        }
        
        if (e.code === 'KeyS') {
            e.preventDefault();
            if (!surpriseRevealed) {
                revealSurprise();
            }
        }
    });

    // Add touch feedback for mobile
    const touchElements = document.querySelectorAll('.fun-card, .game-card, .reason-card, .love-button, .surprise-box, .memory-card, .promise-card, .wish-card, .gallery-item');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });

    // Initialize countdown timer
    initializeCountdown();
    
    // Add proposal interactions
    addProposalInteractions();
    
    // Add fun games interactions
    addFunGamesInteractions();

    // Add fun card interactions
    const funCards = document.querySelectorAll('.fun-card');
    funCards.forEach(card => {
        card.addEventListener('click', function() {
            const cardType = this.id;
            handleFunCardClick(cardType);
        });
    });

    // Add game card interactions
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const gameType = this.id;
            handleGameCardClick(gameType);
        });
    });

    // Add welcome message
    setTimeout(() => {
        showWelcomeMessage();
    }, 1000);

    // Play welcome sound when page loads
    setTimeout(() => {
        playWelcomeSound();
    }, 500);
});

// Handle fun card clicks
function handleFunCardClick(cardType) {
    const messages = {
        'kiss': {
            text: "💋 Mwah! A sweet kiss for you! 💋",
            emoji: "💋",
            sound: [523.25, 659.25, 783.99] // C, E, G - sweet kiss melody
        },
        'hug': {
            text: "🤗 Sending you the biggest virtual hug! 🤗",
            emoji: "🤗",
            sound: [392.00, 523.25, 659.25] // G, C, E - warm hug melody
        },
        'dance': {
            text: "💃 Let's dance together! 💃",
            emoji: "💃",
            sound: [523.25, 659.25, 783.99, 1046.50, 1318.51] // C, E, G, C, E - dance rhythm
        },
        'magic': {
            text: "✨ Abracadabra! You're magical! ✨",
            emoji: "✨",
            sound: [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98] // C, E, G, C, E, G - magical arpeggio
        },
        'tickle': {
            text: "😂 Tickle tickle! You're so cute when you laugh! 😂",
            emoji: "😂",
            sound: [440.00, 554.37, 659.25, 783.99] // A, C#, E, G - playful tickle melody
        },
        'compliment': {
            text: getRandomCompliment(),
            emoji: "🌟",
            sound: [523.25, 659.25, 783.99, 1046.50] // C, E, G, C - compliment chord
        },
        'flirty': {
            text: getRandomFlirtyMessage(),
            emoji: "😘",
            sound: [659.25, 783.99, 1046.50, 1318.51] // E, G, C, E - flirty melody
        },
        'romantic': {
            text: getRandomRomanticMessage(),
            emoji: "🌹",
            sound: [523.25, 659.25, 783.99, 1046.50, 1318.51] // C, E, G, C, E - romantic arpeggio
        }
    };

    const card = messages[cardType];
    showFunMessage(card.text, card.emoji);
    playFunSound(card.sound);
    createSpecialEffect(cardType);
}

// Get random compliment
function getRandomCompliment() {
    const compliments = [
        "🌟 You're absolutely stunning! 🌟",
        "🌟 Your smile lights up my world! 🌟",
        "🌟 You're the most beautiful person I know! 🌟",
        "🌟 You make every day special! 🌟",
        "🌟 You're perfect just the way you are! 🌟",
        "🌟 You're my favorite person in the world! 🌟",
        "🌟 You're incredibly amazing! 🌟",
        "🌟 You're the love of my life! 🌟"
    ];
    return compliments[Math.floor(Math.random() * compliments.length)];
}

// Get random flirty message
function getRandomFlirtyMessage() {
    const flirtyMessages = [
        "😘 Hey beautiful, you're looking extra gorgeous today! 😘",
        "😘 I can't stop thinking about your beautiful eyes! 😘",
        "😘 You're so cute when you blush! 😘",
        "😘 I'm totally smitten with you! 😘",
        "😘 You're the most attractive person I've ever met! 😘",
        "😘 I'm completely under your spell! 😘",
        "😘 You're absolutely irresistible! 😘",
        "😘 I'm head over heels for you! 😘"
    ];
    return flirtyMessages[Math.floor(Math.random() * flirtyMessages.length)];
}

// Get random romantic message
function getRandomRomanticMessage() {
    const romanticMessages = [
        "🌹 Every moment with you feels like a dream come true! 🌹",
        "🌹 You're my everything, my heart beats only for you! 🌹",
        "🌹 I want to spend forever loving you! 🌹",
        "🌹 You're the missing piece to my puzzle! 🌹",
        "🌹 My love for you grows stronger every day! 🌹",
        "🌹 You're the most precious gift in my life! 🌹",
        "🌹 I'm so lucky to have you in my life! 🌹",
        "🌹 You make my world complete! 🌹"
    ];
    return romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
}

// Handle game card clicks
function handleGameCardClick(gameType) {
    const games = {
        'memoryGame': {
            title: "Memory Game",
            description: "Test how well you remember our special moments!",
            action: () => startMemoryGame()
        },
        'loveQuiz': {
            title: "Love Quiz",
            description: "How well do you know each other?",
            action: () => startLoveQuiz()
        },
        'loveStory': {
            title: "Our Story",
            description: "Create your own love story together!",
            action: () => startLoveStory()
        },
        'loveRoulette': {
            title: "Love Roulette",
            description: "Spin for a romantic surprise!",
            action: () => startLoveRoulette()
        },
        'loveFortune': {
            title: "Love Fortune",
            description: "Get your love prediction for today!",
            action: () => startLoveFortune()
        },
        'loveJokes': {
            title: "Love Jokes",
            description: "Share some romantic laughs together!",
            action: () => startLoveJokes()
        }
    };

    const game = games[gameType];
    showGameModal(game.title, game.description, game.action);
}

// Show fun message
function showFunMessage(text, emoji) {
    const isMobile = window.innerWidth <= 768;
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #c2185b, #f8bbd9);
            color: white;
            padding: ${isMobile ? '20px' : '30px'};
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
            z-index: 1003;
            animation: funMessage 2s ease-in-out forwards;
            font-size: ${isMobile ? '1.1rem' : '1.3rem'};
            font-weight: bold;
            max-width: 90vw;
        ">
            <div style="font-size: ${isMobile ? '2.5rem' : '3rem'}; margin-bottom: 15px;">${emoji}</div>
            <p>${text}</p>
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    // Add CSS for fun message animation
    const funStyle = document.createElement('style');
    funStyle.textContent = `
        @keyframes funMessage {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(funStyle);
    
    setTimeout(() => {
        if (document.body.contains(messageDiv)) {
            document.body.removeChild(messageDiv);
        }
    }, 2000);
}

// Play fun sound
function playFunSound(frequencies) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create a more musical progression
    const durations = [0.2, 0.15, 0.25, 0.2, 0.3];
    
    frequencies.forEach((freq, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Add slight frequency modulation for more musical sound
            oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(freq * 1.02, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + durations[index] || 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + (durations[index] || 0.2));
        }, index * 120);
    });
}

// Create special effects
function createSpecialEffect(cardType) {
    const effects = {
        'kiss': () => createKissEffect(),
        'hug': () => createHugEffect(),
        'dance': () => createDanceEffect(),
        'magic': () => createMagicEffect(),
        'tickle': () => createTickleEffect(),
        'compliment': () => createComplimentEffect(),
        'flirty': () => createFlirtEffect(),
        'romantic': () => createRomanceEffect()
    };
    
    if (effects[cardType]) {
        effects[cardType]();
    }
}

// Create kiss effect
function createKissEffect() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.innerHTML = '💋';
            kiss.style.position = 'fixed';
            kiss.style.left = Math.random() * window.innerWidth + 'px';
            kiss.style.top = Math.random() * window.innerHeight + 'px';
            kiss.style.fontSize = '2rem';
            kiss.style.pointerEvents = 'none';
            kiss.style.zIndex = '1000';
            kiss.style.animation = 'kissFloat 3s ease-out forwards';
            
            document.body.appendChild(kiss);
            
            setTimeout(() => {
                if (document.body.contains(kiss)) {
                    document.body.removeChild(kiss);
                }
            }, 3000);
        }, i * 200);
    }
}

// Create hug effect
function createHugEffect() {
    const hug = document.createElement('div');
    hug.innerHTML = '🤗';
    hug.style.position = 'fixed';
    hug.style.left = '50%';
    hug.style.top = '50%';
    hug.style.transform = 'translate(-50%, -50%)';
    hug.style.fontSize = '5rem';
    hug.style.pointerEvents = 'none';
    hug.style.zIndex = '1000';
    hug.style.animation = 'hugPulse 2s ease-in-out';
    
    document.body.appendChild(hug);
    
    setTimeout(() => {
        if (document.body.contains(hug)) {
            document.body.removeChild(hug);
        }
    }, 2000);
}

// Create dance effect
function createDanceEffect() {
    const dancers = ['💃', '🕺', '💃', '🕺'];
    dancers.forEach((dancer, index) => {
        setTimeout(() => {
            const dance = document.createElement('div');
            dance.innerHTML = dancer;
            dance.style.position = 'fixed';
            dance.style.left = (20 + index * 20) + '%';
            dance.style.top = '50%';
            dance.style.transform = 'translateY(-50%)';
            dance.style.fontSize = '3rem';
            dance.style.pointerEvents = 'none';
            dance.style.zIndex = '1000';
            dance.style.animation = 'danceMove 2s ease-in-out';
            
            document.body.appendChild(dance);
            
            setTimeout(() => {
                if (document.body.contains(dance)) {
                    document.body.removeChild(dance);
                }
            }, 2000);
        }, index * 300);
    });
}

// Create magic effect
function createMagicEffect() {
    const magicElements = ['✨', '🌟', '💫', '⭐'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const magic = document.createElement('div');
            magic.innerHTML = magicElements[Math.floor(Math.random() * magicElements.length)];
            magic.style.position = 'fixed';
            magic.style.left = Math.random() * window.innerWidth + 'px';
            magic.style.top = Math.random() * window.innerHeight + 'px';
            magic.style.fontSize = '1.5rem';
            magic.style.pointerEvents = 'none';
            magic.style.zIndex = '1000';
            magic.style.animation = 'magicSparkle 2s ease-out forwards';
            
            document.body.appendChild(magic);
            
            setTimeout(() => {
                if (document.body.contains(magic)) {
                    document.body.removeChild(magic);
                }
            }, 2000);
        }, i * 100);
    }
}

// Create tickle effect
function createTickleEffect() {
    const tickleEmojis = ['😂', '😆', '🤣', '😄'];
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const tickle = document.createElement('div');
            tickle.innerHTML = tickleEmojis[Math.floor(Math.random() * tickleEmojis.length)];
            tickle.style.position = 'fixed';
            tickle.style.left = Math.random() * window.innerWidth + 'px';
            tickle.style.top = Math.random() * window.innerHeight + 'px';
            tickle.style.fontSize = '2rem';
            tickle.style.pointerEvents = 'none';
            tickle.style.zIndex = '1000';
            tickle.style.animation = 'tickleBounce 2s ease-out forwards';
            
            document.body.appendChild(tickle);
            
            setTimeout(() => {
                if (document.body.contains(tickle)) {
                    document.body.removeChild(tickle);
                }
            }, 2000);
        }, i * 150);
    }
}

// Create compliment effect
function createComplimentEffect() {
    const stars = ['⭐', '🌟', '💫', '✨'];
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.innerHTML = stars[Math.floor(Math.random() * stars.length)];
            star.style.position = 'fixed';
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = Math.random() * window.innerHeight + 'px';
            star.style.fontSize = '1.8rem';
            star.style.pointerEvents = 'none';
            star.style.zIndex = '1000';
            star.style.animation = 'starTwinkle 3s ease-out forwards';
            
            document.body.appendChild(star);
            
            setTimeout(() => {
                if (document.body.contains(star)) {
                    document.body.removeChild(star);
                }
            }, 3000);
        }, i * 200);
    }
}

// Show game modal
function showGameModal(title, description, action) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1004;
            display: flex;
            align-items: center;
            justify-content: center;
        ">
            <div style="
                background: white;
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                max-width: 500px;
                margin: 20px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            ">
                <h3 style="color: #e91e63; font-size: 2rem; margin-bottom: 20px;">${title}</h3>
                <p style="font-size: 1.2rem; margin-bottom: 30px; color: #333;">${description}</p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button id="playGame" style="
                        background: linear-gradient(45deg, #e91e63, #f8b4d9);
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 25px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">Play Now!</button>
                    <button id="closeModal" style="
                        background: #f0f0f0;
                        color: #333;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 25px;
                        font-size: 1.1rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    ">Close</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('playGame').addEventListener('click', () => {
        document.body.removeChild(modal);
        action();
    });
    
    document.getElementById('closeModal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}

// Game functions
function startMemoryGame() {
    const memoryCards = [
        { emoji: '💕', text: 'First Date' },
        { emoji: '💕', text: 'First Kiss' },
        { emoji: '💕', text: 'First Hug' },
        { emoji: '💕', text: 'First I Love You' },
        { emoji: '💕', text: 'First Trip' },
        { emoji: '💕', text: 'First Dance' }
    ];
    
    showMemoryGame(memoryCards);
}

function startLoveQuiz() {
    const questions = [
        {
            question: "What's your favorite thing about me?",
            options: ["My smile", "My personality", "My laugh", "Everything!"]
        },
        {
            question: "What's our favorite activity together?",
            options: ["Cuddling", "Going out", "Cooking", "All of the above!"]
        },
        {
            question: "What makes me special to you?",
            options: ["My love", "My care", "My support", "All of me!"]
        }
    ];
    
    showLoveQuiz(questions);
}

function startLoveStory() {
    const storyParts = [
        "Once upon a time, there were two people who fell in love...",
        "They met and instantly felt a connection...",
        "Every day they grew closer and closer...",
        "They shared laughter, tears, and everything in between...",
        "And they lived happily ever after, loving each other more each day! 💕"
    ];
    
    showLoveStory(storyParts);
}

function startLoveRoulette() {
    const rouletteItems = [
        "💋 A sweet kiss!",
        "🤗 A warm hug!",
        "💕 Say 'I love you' 3 times!",
        "🌟 Give a compliment!",
        "🎵 Sing a love song!",
        "💝 Plan a surprise!",
        "🌹 Give a virtual flower!",
        "💖 Share a memory!"
    ];
    
    showLoveRoulette(rouletteItems);
}

function startLoveFortune() {
    const fortunes = [
        "Your love will grow stronger every day! 💕",
        "You'll have many romantic adventures together! 🌟",
        "Your bond will become unbreakable! 💖",
        "You'll create beautiful memories together! ✨",
        "Your love story will inspire others! 💝",
        "You'll find new ways to love each other! 💕",
        "Your relationship will bring you both joy! 🌸",
        "You'll overcome any challenge together! 💪"
    ];
    
    showLoveFortune(fortunes);
}

function startLoveJokes() {
    const jokes = [
        "Why did the love letter go to the doctor? Because it had a heart condition! 💕",
        "What do you call two people who are perfect for each other? Soul mates! 💖",
        "Why did the couple go to the gym? To work on their relationship! 💪",
        "What's a love bug's favorite music? Heart and soul! 🎵",
        "Why did the heart go to school? To get an education in love! 📚"
    ];
    
    showLoveJokes(jokes);
}

// Game implementation functions
function showMemoryGame(cards) {
    const modal = createGameModal("Memory Game", "Click on the cards to find matching pairs!");
    const gameContainer = modal.querySelector('.game-container');
    
    // Play memory game intro sound
    playMemoryGameSound();
    
    // Create memory game grid
    const gameGrid = document.createElement('div');
    gameGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-top: 20px;
    `;
    
    // Duplicate cards for matching
    const allCards = [...cards, ...cards];
    allCards.sort(() => Math.random() - 0.5);
    
    allCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.style.cssText = `
            background: linear-gradient(45deg, #c2185b, #f8bbd9);
            color: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            min-height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `;
        cardElement.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 5px;">${card.emoji}</div>
            <div style="font-size: 0.9rem;">${card.text}</div>
        `;
        
        cardElement.addEventListener('click', () => {
            cardElement.style.transform = 'scale(0.95)';
            setTimeout(() => cardElement.style.transform = 'scale(1)', 150);
            showFunMessage(`💕 ${card.text} - What a beautiful memory! 💕`, '💕');
            playMemoryCardSound();
        });
        
        gameGrid.appendChild(cardElement);
    });
    
    gameContainer.appendChild(gameGrid);
}

function showLoveQuiz(questions) {
    const modal = createGameModal("Love Quiz", "Answer these romantic questions!");
    const gameContainer = modal.querySelector('.game-container');
    
    let currentQuestion = 0;
    
    function showQuestion() {
        if (currentQuestion >= questions.length) {
            gameContainer.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h3 style="color: #c2185b;">🎉 Quiz Complete! 🎉</h3>
                    <p>You know each other perfectly! 💕</p>
                </div>
            `;
            return;
        }
        
        const question = questions[currentQuestion];
        gameContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="color: #c2185b; margin-bottom: 20px; font-size: 1.2rem;">${question.question}</h3>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" data-index="${index}" style="
                            background: linear-gradient(45deg, #c2185b, #f8bbd9);
                            color: white;
                            border: none;
                            padding: 15px;
                            border-radius: 10px;
                            cursor: pointer;
                            font-size: 1rem;
                            transition: all 0.3s ease;
                            min-height: 44px;
                        ">${option}</button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Add event listeners
        document.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                showFunMessage("💕 Perfect answer! 💕", "💕");
                playQuizCorrectSound();
                setTimeout(() => {
                    currentQuestion++;
                    showQuestion();
                }, 1500);
            });
        });
    }
    
    showQuestion();
}

function showLoveStory(storyParts) {
    const modal = createGameModal("Our Love Story", "Let's create our story together!");
    const gameContainer = modal.querySelector('.game-container');
    
    let currentPart = 0;
    
    function showStoryPart() {
        if (currentPart >= storyParts.length) {
            gameContainer.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h3 style="color: #c2185b;">💕 The End 💕</h3>
                    <p>Our love story is just beginning! 💖</p>
                </div>
            `;
            return;
        }
        
        gameContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <p style="font-size: 1.3rem; line-height: 1.8; color: #333; margin-bottom: 20px;">
                    ${storyParts[currentPart]}
                </p>
                <button id="nextPart" style="
                    background: linear-gradient(45deg, #c2185b, #f8bbd9);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-size: 1.1rem;
                ">Continue Story</button>
            </div>
        `;
        
        document.getElementById('nextPart').addEventListener('click', () => {
            currentPart++;
            playStoryProgressSound();
            showStoryPart();
        });
    }
    
    showStoryPart();
}

function showLoveRoulette(items) {
    const modal = createGameModal("Love Roulette", "Spin for a romantic surprise!");
    const gameContainer = modal.querySelector('.game-container');
    
    gameContainer.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div id="rouletteWheel" style="
                width: 150px;
                height: 150px;
                border-radius: 50%;
                background: conic-gradient(from 0deg, #c2185b, #f8bbd9, #c2185b, #f8bbd9);
                margin: 0 auto 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                color: white;
                cursor: pointer;
                transition: transform 3s ease-out;
            ">🎰</div>
            <button id="spinButton" style="
                background: linear-gradient(45deg, #c2185b, #f8bbd9);
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                min-height: 44px;
            ">Spin the Wheel!</button>
        </div>
    `;
    
    document.getElementById('spinButton').addEventListener('click', () => {
        const wheel = document.getElementById('rouletteWheel');
        const randomItem = items[Math.floor(Math.random() * items.length)];
        const spins = 5 + Math.random() * 5;
        
        playRouletteSpinSound();
        wheel.style.transform = `rotate(${spins * 360}deg)`;
        
        setTimeout(() => {
            showFunMessage(randomItem, "🎰");
            playRouletteResultSound();
        }, 3000);
    });
}

function showLoveFortune(fortunes) {
    const modal = createGameModal("Love Fortune", "Get your love prediction for today!");
    const gameContainer = modal.querySelector('.game-container');
    
    gameContainer.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">🔮</div>
            <button id="getFortune" style="
                background: linear-gradient(45deg, #c2185b, #f8bbd9);
                color: white;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1.1rem;
            ">Get My Fortune</button>
        </div>
    `;
    
    document.getElementById('getFortune').addEventListener('click', () => {
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        playFortuneSound();
        gameContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 4rem; margin-bottom: 20px;">🔮</div>
                <p style="font-size: 1.3rem; line-height: 1.8; color: #333;">
                    ${randomFortune}
                </p>
            </div>
        `;
    });
}

function showLoveJokes(jokes) {
    const modal = createGameModal("Love Jokes", "Share some romantic laughs!");
    const gameContainer = modal.querySelector('.game-container');
    
    let currentJoke = 0;
    
    function showJoke() {
        if (currentJoke >= jokes.length) {
            currentJoke = 0;
        }
        
        gameContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 4rem; margin-bottom: 20px;">😄</div>
                <p style="font-size: 1.3rem; line-height: 1.8; color: #333; margin-bottom: 20px;">
                    ${jokes[currentJoke]}
                </p>
                <button id="nextJoke" style="
                    background: linear-gradient(45deg, #c2185b, #f8bbd9);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-size: 1.1rem;
                ">Next Joke</button>
            </div>
        `;
        
        document.getElementById('nextJoke').addEventListener('click', () => {
            currentJoke++;
            playJokeSound();
            showJoke();
        });
    }
    
    showJoke();
}

// Helper function to create game modal
function createGameModal(title, description) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1004;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        ">
            <div style="
                background: white;
                padding: 30px 20px;
                border-radius: 20px;
                text-align: center;
                width: 100%;
                max-width: 500px;
                max-height: 90vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            ">
                <h3 style="color: #c2185b; font-size: 1.8rem; margin-bottom: 10px;">${title}</h3>
                <p style="font-size: 1rem; margin-bottom: 20px; color: #666;">${description}</p>
                <div class="game-container"></div>
                <button id="closeGameModal" style="
                    background: #f0f0f0;
                    color: #333;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 15px;
                    cursor: pointer;
                    margin-top: 20px;
                    font-size: 1rem;
                    min-height: 44px;
                ">Close</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('closeGameModal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    return modal;
}

// Add proposal interactions
function addProposalInteractions() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    
    // Yes button - celebration!
    yesButton.addEventListener('click', function() {
        showFunMessage("🎉 YES! I'm so happy! I love you! 💕", "💕");
        createCelebrationEffect();
        playCelebrationSound();
    });
    
    // No button - runs away!
    noButton.addEventListener('mouseenter', function() {
        moveNoButton();
    });
    
    noButton.addEventListener('click', function() {
        moveNoButton();
        showFunMessage("😅 Nice try! But you can't say no! 💕", "😅");
    });
}

// Move the no button to a random position
function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    noButton.style.zIndex = '1000';
    noButton.style.transition = 'all 0.3s ease';
}

// Create celebration effect
function createCelebrationEffect() {
    // Create confetti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = ['🎉', '💕', '💖', '💝', '✨', '🌟'][Math.floor(Math.random() * 6)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.fontSize = '2rem';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (document.body.contains(confetti)) {
                    document.body.removeChild(confetti);
                }
            }, 3000);
        }, i * 100);
    }
}

// Add fun games interactions
function addFunGamesInteractions() {
    const catchMeGame = document.getElementById('catchMeGame');
    const popBalloonsGame = document.getElementById('popBalloonsGame');
    const findHeartGame = document.getElementById('findHeartGame');
    
    // Catch me game
    catchMeGame.addEventListener('click', function() {
        startCatchMeGame();
    });
    
    // Pop balloons game
    popBalloonsGame.addEventListener('click', function() {
        startPopBalloonsGame();
    });
    
    // Find heart game
    findHeartGame.addEventListener('click', function() {
        startFindHeartGame();
    });
}

// Start catch me game
function startCatchMeGame() {
    const modal = createGameModal("Catch Me If You Can!", "Try to catch the moving heart!");
    const gameContainer = modal.querySelector('.game-container');
    
    gameContainer.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div id="movingHeart" style="
                position: relative;
                font-size: 3rem;
                cursor: pointer;
                user-select: none;
                transition: all 0.3s ease;
            ">💕</div>
            <p style="margin-top: 20px; color: #666;">Click the heart to catch it!</p>
        </div>
    `;
    
    const movingHeart = document.getElementById('movingHeart');
    let score = 0;
    
    function moveHeart() {
        const maxX = gameContainer.offsetWidth - 50;
        const maxY = gameContainer.offsetHeight - 50;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        
        movingHeart.style.left = randomX + 'px';
        movingHeart.style.top = randomY + 'px';
    }
    
    movingHeart.addEventListener('click', function() {
        score++;
        showFunMessage(`🎯 Caught it! Score: ${score}`, "🎯");
        moveHeart();
    });
    
    // Move heart every 2 seconds
    setInterval(moveHeart, 2000);
    moveHeart();
}

// Start pop balloons game
function startPopBalloonsGame() {
    const modal = createGameModal("Pop the Love Balloons!", "Click to pop all the balloons!");
    const gameContainer = modal.querySelector('.game-container');
    
    gameContainer.innerHTML = `
        <div style="
            position: relative;
            height: 300px;
            overflow: hidden;
            border: 2px solid #c2185b;
            border-radius: 15px;
            background: linear-gradient(135deg, #fce4ec, #f8bbd9);
        ">
            <div id="balloonsContainer"></div>
        </div>
    `;
    
    const balloonsContainer = document.getElementById('balloonsContainer');
    const balloons = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];
    let poppedCount = 0;
    
    balloons.forEach((balloon, index) => {
        setTimeout(() => {
            const balloonElement = document.createElement('div');
            balloonElement.innerHTML = balloon;
            balloonElement.style.cssText = `
                position: absolute;
                font-size: 2rem;
                cursor: pointer;
                left: ${Math.random() * 80}%;
                top: ${Math.random() * 80}%;
                transition: all 0.3s ease;
            `;
            
            balloonElement.addEventListener('click', function() {
                this.style.transform = 'scale(0)';
                this.style.opacity = '0';
                poppedCount++;
                
                if (poppedCount === balloons.length) {
                    showFunMessage("🎉 All balloons popped! You're amazing! 💕", "🎉");
                } else {
                    showFunMessage(`💥 Pop! ${poppedCount}/${balloons.length}`, "💥");
                }
            });
            
            balloonsContainer.appendChild(balloonElement);
        }, index * 200);
    });
}

// Start find heart game
function startFindHeartGame() {
    const modal = createGameModal("Find the Hidden Hearts!", "Click all the hearts to win!");
    const gameContainer = modal.querySelector('.game-container');
    
    gameContainer.innerHTML = `
        <div style="
            position: relative;
            height: 300px;
            overflow: hidden;
            border: 2px solid #c2185b;
            border-radius: 15px;
            background: linear-gradient(135deg, #fce4ec, #f8bbd9);
        ">
            <div id="heartsContainer"></div>
        </div>
    `;
    
    const heartsContainer = document.getElementById('heartsContainer');
    const hearts = ['💕', '💖', '💝', '💕', '💖'];
    let foundCount = 0;
    
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            const heartElement = document.createElement('div');
            heartElement.innerHTML = heart;
            heartElement.style.cssText = `
                position: absolute;
                font-size: 1.5rem;
                cursor: pointer;
                left: ${Math.random() * 80}%;
                top: ${Math.random() * 80}%;
                transition: all 0.3s ease;
                opacity: 0.7;
            `;
            
            heartElement.addEventListener('click', function() {
                this.style.transform = 'scale(1.5)';
                this.style.opacity = '1';
                this.style.color = '#c2185b';
                foundCount++;
                
                if (foundCount === hearts.length) {
                    showFunMessage("💕 All hearts found! You have a heart of gold! 💕", "💕");
                } else {
                    showFunMessage(`💖 Found! ${foundCount}/${hearts.length}`, "💖");
                }
            });
            
            heartsContainer.appendChild(heartElement);
        }, index * 300);
    });
}

// Initialize countdown timer
function initializeCountdown() {
    // Set your love start date (you can change this to your actual date)
    const loveStartDate = new Date('2024-01-01T00:00:00'); // Change this to your actual date
    
    function updateCountdown() {
        const now = new Date();
        const timeDifference = now - loveStartDate;
        
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        document.getElementById('daysCount').textContent = days;
        document.getElementById('hoursCount').textContent = hours;
        document.getElementById('minutesCount').textContent = minutes;
        document.getElementById('secondsCount').textContent = seconds;
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Add interactive elements for new sections
function addNewSectionInteractions() {
    // Memory cards interactions
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            const description = this.querySelector('p').textContent;
            showMemoryModal(title, description);
        });
    });

    // Promise cards interactions
    const promiseCards = document.querySelectorAll('.promise-card');
    promiseCards.forEach(card => {
        card.addEventListener('click', function() {
            const promise = this.querySelector('p').textContent;
            showFunMessage(promise, "🤝");
        });
    });

    // Wish cards interactions
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('click', function() {
            const wish = this.querySelector('p').textContent;
            showFunMessage(wish, "✨");
        });
    });

    // Gallery items interactions
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('p').textContent;
            showGalleryModal(title);
        });
    });
}

// Show memory modal
function showMemoryModal(title, description) {
    const modal = createGameModal("Beautiful Memory", "Let's relive this special moment!");
    const gameContainer = modal.querySelector('.game-container');
    
    gameContainer.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">💕</div>
            <h3 style="color: #c2185b; margin-bottom: 15px; font-size: 1.3rem;">${title}</h3>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #333; margin-bottom: 20px;">
                ${description}
            </p>
            <p style="font-size: 1rem; color: #666; font-style: italic;">
                This memory will forever be etched in my heart! 💕
            </p>
        </div>
    `;
}

// Show gallery modal
function showGalleryModal(title) {
    const modal = createGameModal("Love Gallery", "Our beautiful moments together!");
    const gameContainer = modal.querySelector('.game-container');
    
    gameContainer.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 4rem; margin-bottom: 20px;">📸</div>
            <h3 style="color: #c2185b; margin-bottom: 15px; font-size: 1.3rem;">${title}</h3>
            <p style="font-size: 1.1rem; line-height: 1.6; color: #333; margin-bottom: 20px;">
                Every photo with you is a treasure! 📸💕
            </p>
            <p style="font-size: 1rem; color: #666; font-style: italic;">
                You make every moment picture perfect! ✨
            </p>
        </div>
    `;
}

// Special sound functions for games
function playMemoryGameSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
    const timing = [0, 0.2, 0.4, 0.6];
    
    notes.forEach((note, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.4);
        }, timing[index] * 1000);
    });
}

function playMemoryCardSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime); // E4
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.1); // G4
    
    gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function playQuizCorrectSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99]; // C, E, G - success chord
    const timing = [0, 0.1, 0.2];
    
    notes.forEach((note, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }, timing[index] * 1000);
    });
}

function playStoryProgressSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C4
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15); // E4
    
    gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
}

function playRouletteSpinSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create spinning sound effect
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            const freq = 400 + (i * 50);
            oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.04, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        }, i * 100);
    }
}

function playRouletteResultSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
    const timing = [0, 0.15, 0.3, 0.45];
    
    notes.forEach((note, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }, timing[index] * 1000);
    });
}

function playFortuneSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [392.00, 523.25, 659.25, 783.99]; // G, C, E, G - mystical sound
    const timing = [0, 0.2, 0.4, 0.6];
    
    notes.forEach((note, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        }, timing[index] * 1000);
    });
}

function playJokeSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Laughing sound effect
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(554.37, audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
}

// Play welcome sound
function playWelcomeSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Beautiful welcome melody: C, E, G, C, E, G, C
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
    const timing = [0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8];
    const durations = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.6];
    
    notes.forEach((note, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(note, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + durations[index]);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + durations[index]);
        }, timing[index] * 1000);
    });
}

// Create flirt effect
function createFlirtEffect() {
    const flirtEmojis = ['😘', '😍', '🥰', '😊', '💋', '💕'];
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const flirt = document.createElement('div');
            flirt.innerHTML = flirtEmojis[Math.floor(Math.random() * flirtEmojis.length)];
            flirt.style.position = 'fixed';
            flirt.style.left = Math.random() * window.innerWidth + 'px';
            flirt.style.top = Math.random() * window.innerHeight + 'px';
            flirt.style.fontSize = '1.8rem';
            flirt.style.pointerEvents = 'none';
            flirt.style.zIndex = '1000';
            flirt.style.animation = 'flirtFloat 3s ease-out forwards';
            
            document.body.appendChild(flirt);
            
            setTimeout(() => {
                if (document.body.contains(flirt)) {
                    document.body.removeChild(flirt);
                }
            }, 3000);
        }, i * 200);
    }
}

// Create romance effect
function createRomanceEffect() {
    const romanceElements = ['🌹', '💕', '💖', '💝', '💕', '🌹'];
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const romance = document.createElement('div');
            romance.innerHTML = romanceElements[Math.floor(Math.random() * romanceElements.length)];
            romance.style.position = 'fixed';
            romance.style.left = Math.random() * window.innerWidth + 'px';
            romance.style.top = Math.random() * window.innerHeight + 'px';
            romance.style.fontSize = '2rem';
            romance.style.pointerEvents = 'none';
            romance.style.zIndex = '1000';
            romance.style.animation = 'romanceFloat 4s ease-out forwards';
            
            document.body.appendChild(romance);
            
            setTimeout(() => {
                if (document.body.contains(romance)) {
                    document.body.removeChild(romance);
                }
            }, 4000);
        }, i * 150);
    }
}

// Welcome message function
function showWelcomeMessage() {
    const isMobile = window.innerWidth <= 768;
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #c2185b, #f8bbd9);
            color: white;
            padding: ${isMobile ? '20px' : '30px'};
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 1002;
            animation: welcomeFade 3s ease-in-out forwards;
            max-width: 90vw;
        ">
            <h2 style="font-size: ${isMobile ? '1.5rem' : '2rem'}; margin-bottom: 15px;">Welcome! 💕</h2>
            <p style="font-size: ${isMobile ? '1rem' : '1.2rem'}; margin-bottom: 10px;">Click the love button to send hearts!</p>
            <p style="font-size: ${isMobile ? '0.9rem' : '1rem'}; opacity: 0.8;">
                ${isMobile ? 'Tap and explore all the fun features! 💖' : 'Press SPACE for quick love 💖'}
            </p>
        </div>
    `;
    
    document.body.appendChild(welcomeDiv);
    
    // Add CSS for welcome animation
    const welcomeStyle = document.createElement('style');
    welcomeStyle.textContent = `
        @keyframes welcomeFade {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            20% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
            80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(welcomeStyle);
    
    // Remove welcome message after animation
    setTimeout(() => {
        if (document.body.contains(welcomeDiv)) {
            document.body.removeChild(welcomeDiv);
        }
    }, 3000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Play welcome sound
    playWelcomeSound();
    
    // Show welcome message
    setTimeout(showWelcomeMessage, 500);
    
    // Add fun card interactions
    addFunCardInteractions();
    
    // Add game card interactions
    addGameCardInteractions();
    
    // Add proposal interactions
    addProposalInteractions();
    
    // Add fun games interactions
    addFunGamesInteractions();
    
    // Add keyboard shortcuts (desktop only)
    if (!isMobile()) {
        document.addEventListener('keydown', function(e) {
            if (e.code === 'Space') {
                e.preventDefault();
                const loveButton = document.getElementById('loveButton');
                if (loveButton) {
                    loveButton.click();
                }
            }
        });
    }
    
    // Add touch feedback for mobile
    if (isMobile()) {
        const touchElements = document.querySelectorAll('.fun-card, .game-card, .reason-card, button');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
});

// Check if device is mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Add fun card interactions
function addFunCardInteractions() {
    const funCards = document.querySelectorAll('.fun-card');
    funCards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.id;
            let cardType = '';
            
            // Map IDs to card types
            switch(cardId) {
                case 'kissCard': cardType = 'kiss'; break;
                case 'hugCard': cardType = 'hug'; break;
                case 'danceCard': cardType = 'dance'; break;
                case 'magicCard': cardType = 'magic'; break;
                case 'tickleCard': cardType = 'tickle'; break;
                case 'complimentCard': cardType = 'compliment'; break;
                case 'flirtCard': cardType = 'flirty'; break;
                case 'romanceCard': cardType = 'romantic'; break;
                default: cardType = 'kiss';
            }
            
            handleFunCardClick(cardType);
        });
    });
}

// Add game card interactions
function addGameCardInteractions() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const gameId = this.id;
            let gameType = '';
            
            // Map IDs to game types
            switch(gameId) {
                case 'memoryGame': gameType = 'memory'; break;
                case 'loveQuiz': gameType = 'quiz'; break;
                case 'loveStory': gameType = 'story'; break;
                case 'loveRoulette': gameType = 'roulette'; break;
                case 'loveFortune': gameType = 'fortune'; break;
                case 'loveJokes': gameType = 'jokes'; break;
                default: gameType = 'memory';
            }
            
            handleGameCardClick(gameType);
        });
    });
} 