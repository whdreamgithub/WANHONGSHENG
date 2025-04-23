// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = 'var(--white)';
        header.style.boxShadow = 'none';
    }
});

// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // 这里可以添加表单验证
            if (!validateForm(formData)) {
                return;
            }

            // 模拟表单提交
            submitForm(formData);
        });
    }
});

// 表单验证
function validateForm(formData) {
    // 简单的验证示例
    if (!formData.name.trim()) {
        alert('Please enter your name');
        return false;
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
        alert('Please enter a valid email address');
        return false;
    }
    if (!formData.subject.trim()) {
        alert('Please enter a subject');
        return false;
    }
    if (!formData.message.trim()) {
        alert('Please enter your message');
        return false;
    }
    return true;
}

// 邮箱验证
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 模拟表单提交
function submitForm(formData) {
    // 这里可以添加实际的表单提交逻辑
    console.log('Form submitted:', formData);
    
    // 显示成功消息
    alert('Thank you for your message! We will get back to you soon.');
    
    // 重置表单
    document.getElementById('contactForm').reset();
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 响应式导航菜单
const createMobileMenu = () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // 创建移动菜单按钮
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    nav.appendChild(mobileMenuBtn);
    
    // 添加点击事件
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
};

// 在页面加载时初始化移动菜单
window.addEventListener('load', createMobileMenu);

// 添加响应式样式
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--white);
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .nav-links.active {
            display: flex;
            flex-direction: column;
        }
        
        .nav-links li {
            margin: 1rem 0;
        }
        
        .mobile-menu-btn {
            display: block;
            font-size: 1.5rem;
            cursor: pointer;
        }
    }
    
    @media (min-width: 769px) {
        .mobile-menu-btn {
            display: none;
        }
    }
`;
document.head.appendChild(style); 