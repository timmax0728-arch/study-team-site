document.getElementById('reg-link2').addEventListener('click', function(e) {
    e.preventDefault();
    
    if (document.querySelector('.modal-overlay')) {
        return;
    }
    
    const modalHTML = `
        <div class="modal-overlay">
            <div class="form-container">
                <span class="modal-close" style="position: absolute; top: 10px; right: 15px; font-size: 40px; cursor: pointer; color: #666;">&times;</span>
                <h2>Sign up</h2>
                <form id="register-form">
                    <label>Full Name</label>
                    <input type="text" id="fullname" name="fullname" placeholder="Name..." />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                    
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>

                    <label>Repeat Password</label>
                    <input type="password" id="repeat-password" name="repeat-password" required>
                    
                    <div class="checkbox-container">
                        <input type="checkbox" id="agree" name="agree">
                        <label for="agree" style="font-weight: normal; margin-bottom: 0;">I agree to the <a href="#">Terms of User</a> </label>
                    </div>
                    
                    <button type="submit" class="button">Sign Up</button>
                    
                    <div class="sign-in">
                        Do you already have an account? <a class="sign-in-link" style="cursor: pointer;">Sign In</a>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
            .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            transition: opacity 0.3s ease;
        }

        .modal-overlay.show {
        opacity: 1;
        }

        .form-container {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 500px;
            width: 100%;
            box-shadow: 0 0 75px #f79401;
            position: relative;
            margin: 20px;
            transform: scale(0.7);
            transition: transform 0.3s ease;
        }
        
        h2 {
            text-align: center;
            margin-bottom: 20px;
            font-weight: bold;
            font-size: 30px;
        }
        
        form {
            display: flex;
            flex-direction: column;
        }
        
        label {
            margin-bottom: 5px;
            font-weight: bold;
            font-size: 20px;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="password"] {
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
            box-sizing: border-box;
            font-size: 20px;
        }
        
        .checkbox-container {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 20px;
        }
        
        input[type="checkbox"] {
            margin-right: 10px;
        }
        
        .button {
            padding: 12px;
            background: linear-gradient(to right, #FFCA86, #755c48);
            border: none;
            border-radius: 4px;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s;
            font-size: 20px;
            width: 100%;
            text-align: center;
            display: block;
            margin-left: 15px;
        }
        
        .button:hover {
            background: linear-gradient(to right, orange, brown);
            transform: scale(1.02);
        }
        
        .sign-in {
            margin-top: 15px;
            text-align: center;
            font-size: 17px;
        }
        
        .sign-in a {
            color: blue;
            text-decoration: none;
        }
        
        .sign-in a:hover {
            color: #f79401;
        }
        
        .modal-close:hover {
            color: #000 !important;
        }

        .modal-overlay.show .form-container {
        transform: scale(1);
        }
    `;
    
    document.head.appendChild(style);
    
    const container = document.createElement('div');
    container.innerHTML = modalHTML;
    const modal = container.firstElementChild;
    
    document.body.appendChild(modal);

    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    function closeModal() {
        if (document.body.contains(modal)) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    }
    
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    
    const escHandler = function(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
    
    const form = modal.querySelector('#register-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = form.querySelector('#fullname').value;
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;
        const repeatPassword = form.querySelector('#repeat-password').value;
        const agree = form.querySelector('#agree').checked;
        
            if (!fullname || !email || !password || !repeatPassword) {
        alert('Пожалуйста, заполните все поля');
        return;
    }
    
    if (password !== repeatPassword) {
        alert('Пароли не совпадают');
        return;
    }
    
    if (password.length < 6) {
        alert('Пароль должен быть не менее 6 символов');
        return;
    }
    
    if (!agree) {
        alert('Вы должны согласиться с условиями');
        return;
    }
    
    console.log('Register attempt:', { fullname, email, password, agree });
        
    closeModal();
        
    });
    
    modal.querySelector('.sign-in-link').addEventListener('click', function() {
        closeModal();
        console.log('Switch to sign in form');
        setTimeout(() => {
        document.getElementById('reg-link1').click();
    }, 100);
    });
    
    modal.querySelector('.form-container').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});