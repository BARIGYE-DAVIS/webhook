// OIET Chatbot JavaScript
class OIETChatbot {
    constructor() {
        this.chatbotIcon = document.getElementById('OIET-chatbot-icon');
        this.chatbotWidget = document.getElementById('OIET-chatbot-widget');
        this.chatbotClose = document.getElementById('OIET-chatbot-close');
        this.chatbotForm = document.getElementById('OIET-chatbot-form');
        this.chatbotInput = document.getElementById('OIET-chatbot-input');
        this.chatbotMessages = document.getElementById('OIET-chatbot-messages');
        
        this.webhookUrl = 'https://n8n.srv843328.hstgr.cloud/webhook/fd6ee712-d9fb-40bb-8549-812e2bad5222'; // Replace with your actual webhook URL
        this.isFirstOpen = true;
        
        this.init();
    }
    
    init() {
        // Event listeners
        this.chatbotIcon.addEventListener('click', () => this.openChatbot());
        this.chatbotClose.addEventListener('click', () => this.closeChatbot());
        this.chatbotForm.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Close chatbot when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.chatbotWidget.contains(e.target) && !this.chatbotIcon.contains(e.target)) {
                this.closeChatbot();
            }
        });
    }
    
    openChatbot() {
        this.chatbotWidget.classList.remove('hidden');
        this.chatbotIcon.style.display = 'none';
        
        // Show welcome message on first open
        if (this.isFirstOpen) {
            this.showWelcomeMessage();
            this.isFirstOpen = false;
        }
        
        // Focus on input
        this.chatbotInput.focus();
    }
    
    closeChatbot() {
        this.chatbotWidget.classList.add('hidden');
        this.chatbotIcon.style.display = 'flex';
    }
    
    showWelcomeMessage() {
        const welcomeMessage = `
            <div class="message bot-message">
                <div class="message-content">
                    <div class="bot-intro">
                        <strong>👋 Hello! I'm OIET Assistant</strong>
                    </div>
                    <p>Welcome to OIET! I'm here to help you with:</p>
                    <ul>
                        <li>Information about our services</li>
                        <li>Technical support questions</li>
                        <li>Business consultation inquiries</li>
                        <li>General assistance</li>
                    </ul>
                    <p>How can I assist you today?</p>
                </div>
                <div class="message-time">${this.getCurrentTime()}</div>
            </div>
        `;
        
        this.chatbotMessages.innerHTML = welcomeMessage;
        this.scrollToBottom();
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const message = this.chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        this.addMessage(message, 'user');
        this.chatbotInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Send message to webhook
            const response = await this.sendToWebhook(message);
            
            // Remove typing indicator
            this.hideTypingIndicator();
            
            // Extract the actual message from the response
            const botMessage = this.extractBotMessage(response);
            
            // Add bot response
            this.addMessage(botMessage, 'bot');
            
        } catch (error) {
            console.error('Error communicating with webhook:', error);
            
            // Remove typing indicator
            this.hideTypingIndicator();
            
            // Add error message
            this.addMessage('Sorry, I\'m having trouble connecting right now. Please try again later or contact our support team.', 'bot');
        }
    }
    
    async sendToWebhook(message) {
        const response = await fetch(this.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                timestamp: new Date().toISOString(),
                sessionId: this.getSessionId()
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    }
    
    // New method to extract the bot message from various response formats
    extractBotMessage(response) {
        console.log('Webhook response:', response); // Debug log
        
        // Handle array response format: [{"output": "message"}]
        if (Array.isArray(response) && response.length > 0) {
            if (response[0].output) {
                return response[0].output;
            }
            if (response[0].message) {
                return response[0].message;
            }
        }
        
        // Handle object response format: {"output": "message"} or {"message": "message"}
        if (typeof response === 'object' && response !== null) {
            if (response.output) {
                return response.output;
            }
            if (response.message) {
                return response.message;
            }
        }
        
        // Handle string response
        if (typeof response === 'string') {
            return response;
        }
        
        // Fallback
        return 'Sorry, I encountered an error processing the response. Please try again.';
    }
    
    // Add typing effect to bot responses
    addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        if (sender === 'bot') {
            // For bot messages, add with typing effect
            messageDiv.innerHTML = `
                <div class="message-content"></div>
                <div class="message-time">${this.getCurrentTime()}</div>
            `;
            
            this.chatbotMessages.appendChild(messageDiv);
            this.scrollToBottom();
            
            // Type the message
            this.typeMessage(messageDiv.querySelector('.message-content'), message);
        } else {
            // For user messages, add immediately
            messageDiv.innerHTML = `
                <div class="message-content">${this.formatMessage(message)}</div>
                <div class="message-time">${this.getCurrentTime()}</div>
            `;
            
            this.chatbotMessages.appendChild(messageDiv);
            this.scrollToBottom();
        }
    }
    
    // Typing effect for bot messages
    typeMessage(element, message, speed = 30) {
        const formattedMessage = this.formatMessage(message);
        let i = 0;
        let isTag = false;
        let tagBuffer = '';
        
        const typeChar = () => {
            if (i < formattedMessage.length) {
                const char = formattedMessage.charAt(i);
                
                if (char === '<') {
                    isTag = true;
                    tagBuffer = '<';
                } else if (char === '>' && isTag) {
                    isTag = false;
                    tagBuffer += '>';
                    element.innerHTML += tagBuffer;
                    tagBuffer = '';
                } else if (isTag) {
                    tagBuffer += char;
                } else {
                    element.innerHTML += char;
                    this.scrollToBottom();
                }
                
                i++;
                setTimeout(typeChar, speed);
            }
        };
        
        typeChar();
    }
    
    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        this.chatbotMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    formatMessage(message) {
        // Basic formatting for links and line breaks
        return message
            .replace(/\n/g, '<br>')
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
    }
    
    getCurrentTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    getSessionId() {
        // Generate or retrieve session ID for tracking conversations
        let sessionId = sessionStorage.getItem('oiet-chatbot-session');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            sessionStorage.setItem('oiet-chatbot-session', sessionId);
        }
        return sessionId;
    }
    
    scrollToBottom() {
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    }
    
    // Public methods for external integration
    sendMessage(message) {
        this.chatbotInput.value = message;
        this.handleSubmit(new Event('submit'));
    }
    
    clearChat() {
        this.chatbotMessages.innerHTML = '';
        this.isFirstOpen = true;
    }
    
    setWebhookUrl(url) {
        this.webhookUrl = url;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the chatbot
    window.oietChatbot = new OIETChatbot();
    
    // Optional: Add some additional functionality
    
    // Handle contact form integration (optional)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message and suggest using chatbot for follow-up
            alert('Thank you for your message! Our team will get back to you soon. You can also use our chatbot for immediate assistance.');
            
            // Optionally open chatbot
            // window.oietChatbot.openChatbot();
        });
    }
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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
});

// Utility functions for webhook response handling
const WebhookResponseHandler = {
    // Handle different types of responses from webhook
    handleResponse(response) {
        if (response.type === 'text') {
            return response.message;
        } else if (response.type === 'quick_replies') {
            return this.formatQuickReplies(response);
        } else if (response.type === 'card') {
            return this.formatCard(response);
        } else if (response.type === 'list') {
            return this.formatList(response);
        }
        
        return response.message || 'I received your message but couldn\'t process it properly.';
    },
    
    formatQuickReplies(response) {
        let html = `<p>${response.message}</p>`;
        if (response.quick_replies && response.quick_replies.length > 0) {
            html += '<div class="quick-replies">';
            response.quick_replies.forEach(reply => {
                html += `<button class="quick-reply-btn" onclick="window.oietChatbot.sendMessage('${reply.payload}')">${reply.title}</button>`;
            });
            html += '</div>';
        }
        return html;
    },
    
    formatCard(response) {
        return `
            <div class="response-card">
                <h4>${response.title}</h4>
                <p>${response.subtitle}</p>
                ${response.image ? `<img src="${response.image}" alt="${response.title}" style="max-width: 100%; border-radius: 8px;">` : ''}
                ${response.url ? `<a href="${response.url}" target="_blank" class="card-link">Learn More</a>` : ''}
            </div>
        `;
    },
    
    formatList(response) {
        let html = `<p>${response.message}</p><ul>`;
        response.items.forEach(item => {
            html += `<li><strong>${item.title}</strong><br>${item.description}</li>`;
        });
        html += '</ul>';
        return html;
    }
};

// Export for module systems (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { OIETChatbot, WebhookResponseHandler };
}