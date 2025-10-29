export function SignupModal() {
  return `    
<div id="signup-modal" class="modal-content">
        <button class="close-btn" data-action="close-modal">&times;</button>
        <h2>Đăng ký</h2>
        <p>
          <div class="Login-container" id="Login-container">
            <form class="RegisterFrom" action="" method="POST">
              <div class="Register">
                <div class="Register-user">
                  <input type="text" id="register-username" required>
                  <label for="Register-username">Username</label>
                </div>
                <div class="email">
                  <input type="email" id="register-email" required>
                  <label for="Register-email">Email</label>
                </div>
                <div class="pass">
                  <input type="password" id="register-password" required>
                  <label for="Register-password">Password</label>
                </div>
                <div class="Confirm-password">
                  <input type="password" id="confirm-password" required>
                  <label for="confirm-password">Confirm Password</label>
                </div>
              </div>
              <div class="Register-button">
                <button type="submit" id="btn">Login</button>
              </div>
            </form>
            <div class="signup">
              Don't have an Account? <a href="#" id="toggle-link-signup" data-action="open-modal" data-target="login-modal">Sign up</a>
            </div>
          </div>
        </p>
      </div>

    `;
}
