// DOM Elements
const textInput = document.getElementById('textInput');
const generateBtn = document.getElementById('generateBtn');
const emailInput = document.getElementById('emailInput');
const signupBtn = document.getElementById('signupBtn');

// Generate Audio Button
generateBtn.addEventListener('click', async () => {
    const text = textInput.value.trim();
    
    if (!text) {
        showNotification('Please enter some text first!', 'error');
        textInput.focus();
        return;
    }
    
    // Show loading state
    generateBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="0.75"/>
        </svg>
        Generating...
    `;
    generateBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        generateBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            Generate Audio
        `;
        generateBtn.disabled = false;
        showNotification('Audio generated successfully! (Demo)', 'success');
        
        // Auto-play simulation
        playAudioDemo();
    }, 2000);
});

// Sign Up Button
signupBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showNotification('Please enter a valid email address!', 'error');
        emailInput.focus();
        return;
    }
    
    showNotification('Thanks for signing up! Check your email.', 'success');
    emailInput.value = '';
});

// Email validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#EF4444' : type === 'success' ? '#10B981' : '#6366F1'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Play audio demo simulation
function playAudioDemo() {
    const waveforms = document.querySelectorAll('.waveform');
    waveforms.forEach(waveform => {
        const waves = waveform.querySelectorAll('.wave');
        waves.forEach(wave => {
            wave.style.animation = 'none';
            setTimeout(() => {
                wave.style.animation = '';
            }, 10);
        });
    });
}

// Emotion buttons
const emotionBtns = document.querySelectorAll('.emotion-btn');
emotionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        emotionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Create bar chart
function createBarChart() {
    const barChart = document.getElementById('barChart');
    if (!barChart) return;
    
    const data = [40, 65, 50, 80, 55, 70, 60, 75, 50];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    
    barChart.innerHTML = '';
    data.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value}%`;
        bar.title = `${months[index]}: ${value}`;
        barChart.appendChild(bar);
    });
}

// Create line chart
function createLineChart() {
    const lineChart = document.getElementById('lineChart');
    if (!lineChart) return;
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 400 150');
    
    const pathData = 'M 0,120 Q 50,100 100,80 T 200,60 T 300,90 T 400,70';
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', 'url(#gradient)');
    path.setAttribute('stroke-width', '3');
    path.setAttribute('stroke-linecap', 'round');
    
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '100%');
    gradient.setAttribute('y2', '0%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('style', 'stop-color:#6366F1');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('style', 'stop-color:#8B5CF6');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);
    svg.appendChild(path);
    
    lineChart.appendChild(svg);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(style);

// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', () => {
    createBarChart();
    createLineChart();
    
    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe stat items
    document.querySelectorAll('.stat-item, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Text input character counter
textInput.addEventListener('input', () => {
    const length = textInput.value.length;
    if (length > 500) {
        textInput.style.borderColor = '#EF4444';
    } else {
        textInput.style.borderColor = '';
    }
});

// Add keyboard shortcut for generate (Ctrl/Cmd + Enter)
textInput.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        generateBtn.click();
    }
});

// Billing Toggle Functionality
const billingToggle = document.getElementById('billingToggle');
const monthlyLabel = document.querySelector('.monthly-label');
const yearlyLabel = document.querySelector('.yearly-label');
const pricingCards = document.querySelectorAll('.pricing-card');

billingToggle.addEventListener('change', function() {
    const isYearly = this.checked;
    
    // Update labels
    if (isYearly) {
        monthlyLabel.classList.remove('active');
        yearlyLabel.classList.add('active');
    } else {
        yearlyLabel.classList.remove('active');
        monthlyLabel.classList.add('active');
    }
    
    // Update prices with animation
    pricingCards.forEach((card, index) => {
        const priceElement = card.querySelector('.price');
        const billingPeriod = card.querySelector('.billing-period');
        const monthlyPrice = card.dataset.monthly;
        const yearlyPrice = card.dataset.yearly;
        
        // Add animation class
        priceElement.classList.add('price-updating');
        
        setTimeout(() => {
            if (isYearly) {
                // Show yearly price (per month)
                priceElement.innerHTML = `$${yearlyPrice}<span class="billing-period">/month</span>`;
                priceElement.dataset.currentPrice = yearlyPrice;
                
                // Add yearly note
                const yearlyNote = document.createElement('div');
                yearlyNote.className = 'yearly-note';
                yearlyNote.textContent = `Billed $${yearlyPrice * 12}/year`;
                yearlyNote.style.cssText = `
                    font-size: 0.875rem;
                    color: var(--text-light);
                    margin-top: 8px;
                    font-weight: 500;
                `;
                
                // Remove existing note if any
                const existingNote = card.querySelector('.yearly-note');
                if (existingNote) existingNote.remove();
                
                priceElement.parentNode.insertBefore(yearlyNote, priceElement.nextSibling);
            } else {
                // Show monthly price
                priceElement.innerHTML = `$${monthlyPrice}<span class="billing-period">/month</span>`;
                priceElement.dataset.currentPrice = monthlyPrice;
                
                // Remove yearly note
                const existingNote = card.querySelector('.yearly-note');
                if (existingNote) existingNote.remove();
            }
            
            // Remove animation class
            setTimeout(() => {
                priceElement.classList.remove('price-updating');
            }, 300);
        }, index * 100); // Stagger animation for each card
    });
});

// Initialize data attributes if not already set
document.addEventListener('DOMContentLoaded', () => {
    pricingCards.forEach(card => {
        const priceText = card.querySelector('.price').textContent;
        const monthlyPrice = card.dataset.monthly || priceText.replace(/\D/g, '');
        
        if (!card.dataset.monthly) {
            card.dataset.monthly = monthlyPrice;
            
            // Calculate yearly price (20% discount)
            const yearlyPrice = Math.round(monthlyPrice * 0.8);
            card.dataset.yearly = yearlyPrice;
        }
    });
});

console.log(' NeuralVoice AI loaded successfully!');