// Simple data storage (using localStorage)
const app = {
    users: [],
    messages: [],

    init() {
        this.loadData();
        this.setupEventListeners();
    },

    loadData() {
        const stored = localStorage.getItem('niaraaaData');
        if (stored) {
            const data = JSON.parse(stored);
            this.users = data.users || [];
            this.messages = data.messages || [];
        }
    },

    saveData() {
        localStorage.setItem('niaraaaData', JSON.stringify({
            users: this.users,
            messages: this.messages
        }));
    },

    setupEventListeners() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        this.setupNoButtonBehavior();
    },

    setupNoButtonBehavior() {
        const noButton = document.querySelector('.btn-no');
        const buttonGroup = document.querySelector('.button-group');
        if (!noButton || !buttonGroup) {
            return;
        }

        buttonGroup.style.position = 'relative';

        noButton.addEventListener('mouseenter', () => {
            moveNoButton(noButton, buttonGroup);
        });

        noButton.addEventListener('mousedown', (event) => {
            event.preventDefault();
            moveNoButton(noButton, buttonGroup);
        });
    },

    handleLogin(e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Semua field harus diisi!');
            return;
        }

        // Validasi username dan password yang spesifik
        if (username !== 'monyonggg') {
            alert('Nama pacar Frans salah! 😢');
            return;
        }

        if (password !== '02072005') {
            alert('Password salah! 😢');
            return;
        }

        // Store current user
        sessionStorage.setItem('currentUser', username);

        // Navigate to message page
        showPage('messagePage');
    }
};

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page with animation
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Handle "Yes" button (Maauu)
function handleYes() {
    const currentUser = sessionStorage.getItem('currentUser');

    // Show confetti or celebration effect
    createConfetti();

    // Navigate to response page
    setTimeout(() => {
        showPage('responsePage');
    }, 500);
}

// Handle forgot password
function handleForgotPassword(event) {
    event.preventDefault();
    alert('coba tanya mas frans harus pake mas !!!');
}


function moveNoButton(button, group) {
    const groupRect = group.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const maxLeft = Math.max(0, groupRect.width - buttonRect.width);
    const maxTop = Math.max(0, groupRect.height - buttonRect.height);
    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    button.style.position = 'absolute';
    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
    button.style.zIndex = '2';

    noButtonHasMoved = true;
}

// Handle "No" button (Moal)
function handleNo() {
    if (noButtonHasMoved) {
        alert('Maaf ya, tombol ini sudah kabur. Tekan Maauu aja deh 💕');
        return;
    }

    const response = confirm('Yakin nggak mau? 😢');
    if (!response) {
        // User clicked OK in confirm, show sad message
        handleYes(); // Go to response page anyway
    }
    // If user clicked Cancel, stay on message page
}

// Send response
function sendResponse() {
    const responseText = document.getElementById('responseText').value.trim();
    const currentUser = sessionStorage.getItem('currentUser');

    if (!responseText) {
        alert('Ketik pesan dulu dong!');
        return;
    }

    // Save message
    const message = {
        user: currentUser,
        text: responseText,
        timestamp: new Date().toLocaleString('id-ID')
    };

    app.messages.push(message);
    app.saveData();

    // Show success message
    const successDetail = document.getElementById('successDetail');
    successDetail.innerHTML = `
        <strong>Dari: ${currentUser}</strong><br>
        Pesan: "${responseText}"<br>
        <small>Terima kasih sudah berbagi hati mu 💕</small>
    `;

    // Navigate to success page
    showPage('successPage');
}

// Go back to login
function backToLogin() {
    sessionStorage.removeItem('currentUser');
    document.getElementById('loginForm').reset();
    document.getElementById('responseText').value = '';
    showPage('loginPage');
}

// Confetti animation
function createConfetti() {
    const colors = ['#FF6B35', '#FF8C42', '#FFB6C1', '#90EE90', '#87CEEB'];

    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.borderRadius = '50%';

        document.body.appendChild(confetti);

        // Animate confetti falling
        let top = 0;
        let left = parseFloat(confetti.style.left);
        let velocity = Math.random() * 3 + 2;
        let horizontalVelocity = (Math.random() - 0.5) * 4;

        const animate = () => {
            top += velocity;
            left += horizontalVelocity;
            confetti.style.top = top + 'px';
            confetti.style.left = left + 'px';
            confetti.style.opacity = 1 - (top / window.innerHeight);

            if (top < window.innerHeight) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };

        animate();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press Enter to login
    if (e.key === 'Enter' && document.getElementById('loginPage').classList.contains('active')) {
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    }
});

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// Add some fun Easter eggs
console.log('%c🐱 Niaraaaa 💕', 'font-size: 20px; font-weight: bold; color: #FF6B35;');
console.log('%cAnda dapat mengakses data pesan di console dengan: app.messages', 'color: #D97D3A;');
